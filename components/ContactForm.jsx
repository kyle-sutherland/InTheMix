//modules
import React, { useState } from 'react'
import { useRouter } from 'next/router'
//styles
// import styles from './ContactForm.module.css'
//components
import { ActionButton } from 'components/buttons'

export default function ContactForm() {


  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;
  // const recaptchaRef = React.createRef();
  // const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const confirmationMessage = (
    <React.Fragment>
      <p>Thank you for your inquiry! We will get back to you within 48 hours.</p>

      <button
        className="btn btn-primary text-dark"
        onClick={() => router.replace("/#contact", undefined, { shallow: true })}
      >
        {" "}
        Submit Another Response{" "}
      </button>
    </React.Fragment>
  );

  const contactForm = (
    <>
      <h3>Drop me a line.</h3>
      <form
        method="POST"
        name="contact-form"
        action="/?success=true#contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
      >
        <input
          type="hidden"
          name="subject"
          value={`${submitterName} has sent a message from your website`}
        />
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
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
            </div>
          </div>
          {/*<Recaptcha*/}
          {/*  ref={recaptchaRef}*/}
          {/*  sitekey={SITE_RECAPTCHA_KEY}*/}
          {/*  size="normal"*/}
          {/*  id="recaptcha-google"*/}
          {/*  onChange={() => setButtonDisabled(false)}*/}
          {/*/>*/}
          <div className="mt-6 flex justify-end gap-x-6">
            <ActionButton type="submit" text="Submit" />
          </div>
        </div>
      </form>
    </>
  )

  return (
    <>
      {formVisible ? contactForm : confirmationMessage}
    </>
  )
}
