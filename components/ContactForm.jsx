//modules
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
//components
import { ActionButton } from "components/buttons";
import Datepicker from "react-tailwindcss-datepicker";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [submitterName, setSubmitterName] = useState("");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  if (state.succeeded) {
    return <p>Thanks for reaching out! Robyn will be in touch soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container grid grid-flow-dense auto-cols-auto grid-rows-3">
        <input
          type="hidden"
          name="subject"
          value={`${submitterName} has sent a message from your website`}
        />
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            <input type="text" name="_gotcha" className="hidden" />
          </label>
        </p>
        <div>
          <div className="mt-0">
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6"
              >
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
            </div>
            <div className="mt-6 ">
              <div className="col-span-2">
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
              <div className="col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <div className="flex sm:max-w-md">
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      className="block flex-1  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium leading-6"
              >
                No. Guests
              </label>
              <div className="mt-2">
                <div className="items-center">
                  <input
                    id="guests"
                    type="number"
                    name="guests"
                    required
                    className="block flex-1  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="bool-cocktails"
                className="text-sm font-medium leading-6"
              >
                Will you be having Signature Cocktails?
              </label>
              <div className="items-center">
                <input
                  id="bool-cocktails"
                  type="checkbox"
                  name="bool-cocktails"
                  required
                  className="flex-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light"
                />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="text-sm font-medium leading-6">
                When is your event?
              </label>
              <div className="mt-2 items-center">
                <Datepicker value={value} onChange={handleValueChange} />
              </div>
            </div>
          </div>
          <div className="">
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
          </div>
          <div className="">
            <div className="mt-6 flex justify-end gap-x-6">
              <ActionButton
                text="Submit"
                type="submit"
                disabled={state.submitting}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
