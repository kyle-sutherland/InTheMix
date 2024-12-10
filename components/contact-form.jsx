// modules
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// components
import { ActionButton } from "/components/buttons";
import Datepicker from "react-tailwindcss-datepicker";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
//wooo

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { register, handleSubmit } = useForm({
    data: { "g-recaptcha-response": executeRecaptcha },
  });
  const [submitterName, setSubmitterName] = useState("");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [formSubitted, setFormSubitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Send form data to API route
      const response = await axios.post("/api/contact", data);
      console.log("API response:", response.data);
      setFormSubitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const confirmationMessage = (
    <>
      <div className="container grid grid-flow-dense auto-cols-auto grid-rows-3">
        <div className="h-48">
          <p>Thanks for reaching out! We will be in touch soon.</p>
        </div>
      </div>
    </>
  );

  const form = (
    <form onSubmit={handleSubmit(onSubmit)} action="#contact/?success=true">
      <div className="container grid grid-flow-dense auto-cols-auto grid-rows-3">
        <input
          type="hidden"
          name="subject"
          value={`${submitterName} has sent a message from your website`}
        />
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              {...register("_gotcha")}
            />
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
                    {...register("name")}
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
                      {...register("email")}
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
                      {...register("phone")}
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
                    {...register("guests")}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="cocktails"
                className="text-sm font-medium leading-6"
              >
                Will you be having Signature Cocktails?
              </label>
              <div className="items-center">
                <input
                  id="cocktails"
                  type="checkbox"
                  name="cocktails"
                  className="flex-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light"
                  {...register("cocktails")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="text-sm font-medium leading-6">
                When is your event?
              </label>
              <div className="mt-2 items-center">
                <Datepicker
                  id="date"
                  name="date"
                  value={value}
                  onChange={handleValueChange}
                  required
                />
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
                  {...register("message")}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-6 flex justify-end gap-x-6">
              <ActionButton text="Submit" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  return <>{formSubitted ? confirmationMessage : form}</>;
}
