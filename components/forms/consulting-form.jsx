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
          Thanks for reaching out! We&apos;ll be in touch to discuss how we can help.
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
        <label htmlFor="consult-business">Business / Project Name *</label>
        <input
          id="consult-business"
          placeholder="Required Field"
          aria-invalid={errors.businessName ? "true" : undefined}
          {...register("businessName", { required: true })}
        />
        {errors.businessName && <span className="field-error" role="alert">Required</span>}
      </div>

      <fieldset className="field">
        <legend>Project Type</legend>
        <div className="checkbox-row checkbox-col">
          {PROJECT_TYPES.map((type) => (
            <label key={type}>
              <input type="checkbox" value={type} {...register("projectTypes")} />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="consult-location">Location *</label>
        <input
          id="consult-location"
          placeholder="Required Field"
          aria-invalid={errors.location ? "true" : undefined}
          {...register("location", { required: true })}
        />
        {errors.location && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="consult-name">Name *</label>
        <input
          id="consult-name"
          placeholder="Required Field"
          aria-invalid={errors.name ? "true" : undefined}
          {...register("name", { required: true })}
        />
        {errors.name && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="consult-email">e-mail *</label>
        <input
          id="consult-email"
          type="email"
          placeholder="Required Field"
          aria-invalid={errors.email ? "true" : undefined}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="consult-phone">Phone *</label>
        <input
          id="consult-phone"
          type="tel"
          placeholder="Required Field"
          aria-invalid={errors.phone ? "true" : undefined}
          {...register("phone", { required: true })}
        />
        {errors.phone && <span className="field-error" role="alert">Required</span>}
      </div>

      <div className="field">
        <label htmlFor="consult-message">Message</label>
        <textarea id="consult-message" rows={5} {...register("message")} />
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
