"use client";
import { useState } from "react";
import AccountFormField from "./AccountFormField";
import AddressFormField from "./AddressFormField";
import PersonalFormField from "./PersonalFormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Summary from "./Summary";

const FormField = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const schema = z
    .object({
      full_name: z.string().nonempty("Full name is required"),
      email: z.string().nonempty("Email is required").email("Invalid email"),
      phone_number: z
        .string()
        .nonempty("Phone number is required")
        .min(10, "Phone number at least 10 characters"),
      street_address: z.string().nonempty("Street address is required"),
      city: z.string().nonempty("City is required"),
      zip_code: z
        .string()
        .nonempty("Zip code in required")
        .min(5, "Zip code at least 5 digits")
        .regex(/^\d+$/, "Zip code must be numeric"),
      user_name: z
        .string()
        .nonempty("Username is required")
        .min(4, "Username at least 4 characters"),
      password: z
        .string()
        .nonempty("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirm_password: z.string().nonempty("Confirm password is required"),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values) => {
    setFormData(values);
    setStep(4);
  };

  // handle next step
  const handleNext = async () => {
    let fields = [];

    if (step === 1) {
      fields = ["full_name", "email", "phone_number"];
    } else if (step === 2) {
      fields = ["street_address", "city", "zip_code"];
    }

    const isValid = await trigger(fields);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-6">
      <div className="max-w-[600px] w-full">
        <div className="w-full relative">
          {step !== 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="cursor-pointer absolute left-0 bg-gray-700 text-white rounded px-2 py-1"
            >
              Previous
            </button>
          )}
          {step !== 3 && step !== 4 && (
            <button
              onClick={handleNext}
              className="cursor-pointer absolute right-0 bg-gray-700 text-white rounded px-2 py-1"
            >
              Next
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          {step === 1 && (
            <PersonalFormField register={register} errors={errors} />
          )}
          {step === 2 && (
            <AddressFormField register={register} errors={errors} />
          )}
          {step === 3 && (
            <AccountFormField register={register} errors={errors} />
          )}
          {step === 3 && (
            <div className="mt-3.5 text-center">
              <input
                type="submit"
                value="Save"
                className="w-1/3 cursor-pointer bg-sky-700 text-white rounded px-4 py-2"
              />
            </div>
          )}
          {step === 4 && (
            <Summary formData={formData} reset={reset} setStep={setStep} />
          )}
        </form>
      </div>
    </div>
  );
};

export default FormField;
