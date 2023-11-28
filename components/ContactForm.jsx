//modules
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
//styles
// import styles from './ContactForm.module.css'
//components
import { ActionButton } from 'components/buttons'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [submitterName, setSubmitterName] = useState("");
  if (state.succeeded) {
    return <p>Thanks for reaching out! Robyn will be in touch soon.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="subject"
        value={`${submitterName} has sent a message from your website`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          <input type="text" name="_gotcha" className="hidden"/>
        </label>
      </p>
      <div>
        <div className="mt-0">
          <label htmlFor="name" className="block text-sm font-medium leading-6">
            Name
          </label>
          <div className="mt-2">
            <div className="flex sm:max-w-md">
              <input
                id="name"
                name="name"
                required
                onChange={(e) => setSubmitterName(e.target.value)}
                type="text"
                className="block flex-1  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              E-mail Address
            </label>
            <div className="mt-2">
              <div className="flex sm:max-w-md">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="block flex-1  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              required
              className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
              rows={3}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-x-6">
          <ActionButton text="Submit" type="submit" disabled={state.submitting} />
        </div>
      </div>
    </form>
  );
}



