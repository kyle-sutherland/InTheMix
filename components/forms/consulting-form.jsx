"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { OutlineButton } from "../button";

const PROJECT_TYPES = [
  "New Bar / Restaurant Opening",
  "Beverage Program Development or Rebuild",
  "Culinary Program Development or Rebuild",
  "Operations & Service Infrastructure",
  "Full Concept Development",
];

export default function ConsultingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
    try {
      const recaptchaToken = executeRecaptcha ? await executeRecaptcha("consulting_form") : undefined;
      await axios.post("/api/contact", { ...data, formType: "consulting", recaptchaToken });
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
          Thanks for reaching out! We&apos;ll be in touch to discuss how we can help.
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
        <label className="form-label">Business / Project Name *</label>
        <input className="form-input" placeholder="Required Field" {...register("businessName", { required: true })} />
        {errors.businessName && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

      <div style={inputStyle}>
        <label className="form-label">Project Type</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.4rem" }}>
          {PROJECT_TYPES.map((type) => (
            <label key={type} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", cursor: "pointer" }}>
              <input type="checkbox" value={type} {...register("projectTypes")} />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div style={inputStyle}>
        <label className="form-label">Location *</label>
        <input className="form-input" placeholder="Required Field" {...register("location", { required: true })} />
        {errors.location && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

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
        <label className="form-label">Phone *</label>
        <input className="form-input" type="tel" placeholder="Required Field" {...register("phone", { required: true })} />
        {errors.phone && <span style={{ color: "red", fontSize: "0.8rem" }}>Required</span>}
      </div>

      <div style={inputStyle}>
        <label className="form-label">Message</label>
        <textarea className="form-input" rows={5} {...register("message")} />
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
