"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { OutlineButton } from "../button";

const PACKAGES = ["Classic Bar", "Signature Cocktail Bar", "Full Event Bar", "Custom Bar"];
const CUSTOM_OPTIONS = ["Glassware", "Mix & Garnish", "Liquor Package"];

export default function EventForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
    try {
      await axios.post("/api/contact", { ...data, formType: "event" });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <p style={{ fontSize: "1.1rem", color: "var(--color-text)" }}>
          Thanks! We&apos;ll follow up with availability and next steps shortly.
        </p>
      </div>
    );
  }

  const inputStyle = { marginBottom: "1.25rem" };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} {...register("_gotcha")} />

      <div style={inputStyle}>
        <label className="form-label">Name *</label>
        <input className="form-input" placeholder="Required Field" {...register("name", { required: true })} />
        {errors.name && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

      <div style={inputStyle}>
        <label className="form-label">e-mail *</label>
        <input className="form-input" type="email" placeholder="Required Field" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

      <div style={inputStyle}>
        <label className="form-label">Phone</label>
        <input className="form-input" type="tel" {...register("phone")} />
      </div>

      <div style={inputStyle}>
        <label className="form-label">Number of Guests *</label>
        <input className="form-input" type="number" placeholder="Required Field" {...register("guests", { required: true })} />
        {errors.guests && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

      <div style={inputStyle}>
        <label className="form-label">Date of Event *</label>
        <input className="form-input" type="date" placeholder="Required Field" {...register("date", { required: true })} />
        {errors.date && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
        <div style={{ flex: 1 }}>
          <label className="form-label">Start Time *</label>
          <input className="form-input" type="time" placeholder="Required Field" {...register("startTime", { required: true })} />
        </div>
        <div style={{ flex: 1 }}>
          <label className="form-label">End Time *</label>
          <input className="form-input" type="time" placeholder="Required Field" {...register("endTime", { required: true })} />
        </div>
      </div>

      <div style={inputStyle}>
        <label className="form-label">Select Your Package</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", marginTop: "0.4rem" }}>
          {PACKAGES.map((pkg) => (
            <label key={pkg} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", cursor: "pointer" }}>
              <input type="checkbox" value={pkg} {...register("packages")} />
              {pkg}
            </label>
          ))}
        </div>
      </div>

      <div style={inputStyle}>
        <label className="form-label">Custom Bar Selections</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", marginTop: "0.4rem" }}>
          {CUSTOM_OPTIONS.map((opt) => (
            <label key={opt} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", cursor: "pointer" }}>
              <input type="checkbox" value={opt} {...register("customBarSelections")} />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div style={inputStyle}>
        <label className="form-label">Message</label>
        <textarea className="form-input" placeholder="Type something..." rows={5} {...register("message")} />
      </div>

      {error && <p style={{ color: "red", fontSize: "0.85rem", marginBottom: "1rem" }}>{error}</p>}

      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <OutlineButton type="submit" style={{ opacity: submitting ? 0.7 : 1 }}>
          {submitting ? "Sending..." : "Request a Quote"}
        </OutlineButton>
      </div>
    </form>
  );
}
