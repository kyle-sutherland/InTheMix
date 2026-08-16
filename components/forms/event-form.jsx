"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { OutlineButton } from "../button";

const PACKAGES = ["Classic Bar", "Signature Cocktail Bar", "Full Event Bar", "Custom Bar"];
const CUSTOM_OPTIONS = ["Glassware", "Mix & Garnish", "Liquor Package"];

export default function EventForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
    try {
      const recaptchaToken = executeRecaptcha ? await executeRecaptcha("event_form") : undefined;
      await axios.post("/api/contact", { ...data, formType: "event", recaptchaToken });
      setSubmitted(true);
    } catch (err) {
      const status = err?.response?.status;
      setError(
        status === 403
          ? "We couldn't verify your submission. Please refresh the page and try again."
          : "Something went wrong. Please try again or email us directly.",
      );
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
        {...register("_gotcha")}
      />

      <div className="field">
        <label htmlFor="event-name">Name *</label>
        <input
          id="event-name"
          placeholder="Required Field"
          aria-invalid={errors.name ? "true" : undefined}
          {...register("name", { required: true })}
        />
        {errors.name && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="event-email">e-mail *</label>
        <input
          id="event-email"
          type="email"
          placeholder="Required Field"
          aria-invalid={errors.email ? "true" : undefined}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="event-phone">Phone</label>
        <input id="event-phone" type="tel" {...register("phone")} />
      </div>

      <div className="field">
        <label htmlFor="event-guests">Number of Guests *</label>
        <input
          id="event-guests"
          type="number"
          min="1"
          placeholder="Required Field"
          aria-invalid={errors.guests ? "true" : undefined}
          {...register("guests", { required: true })}
        />
        {errors.guests && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="event-date">Date of Event *</label>
        <input
          id="event-date"
          type="date"
          aria-invalid={errors.date ? "true" : undefined}
          {...register("date", { required: true })}
        />
        {errors.date && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="event-start">Start Time *</label>
          <input
            id="event-start"
            type="time"
            aria-invalid={errors.startTime ? "true" : undefined}
            {...register("startTime", { required: true })}
          />
          {errors.startTime && <span className="field-error" role="alert">Required</span>}
        </div>
        <div className="field">
          <label htmlFor="event-end">End Time *</label>
          <input
            id="event-end"
            type="time"
            aria-invalid={errors.endTime ? "true" : undefined}
            {...register("endTime", { required: true })}
          />
          {errors.endTime && <span className="field-error" role="alert">Required</span>}
        </div>
      </div>

      <fieldset className="field">
        <legend>Select Your Package</legend>
        <div className="checkbox-row">
          {PACKAGES.map((pkg) => (
            <label key={pkg}>
              <input type="checkbox" value={pkg} {...register("packages")} />
              {pkg}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="field">
        <legend>Custom Bar Selections</legend>
        <div className="checkbox-row">
          {CUSTOM_OPTIONS.map((opt) => (
            <label key={opt}>
              <input type="checkbox" value={opt} {...register("customBarSelections")} />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="event-message">Message</label>
        <textarea id="event-message" placeholder="Type something..." rows={5} {...register("message")} />
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <OutlineButton type="submit" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
          {submitting ? "Sending..." : "Request a Quote"}
        </OutlineButton>
      </div>
    </form>
  );
}
