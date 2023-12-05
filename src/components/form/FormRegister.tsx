import { registerSchema } from "@/lib/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      password: "",
      repassword: "",
      phone_number: "",
    },
  });
  const handleRegister = () => {
    alert("Register successfuly, please login");
    window.location.href = "/login";
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="w-full max-w-xl space-y-8 p-4"
    >
      <div className="flex flex-col gap-y-1 font-inter">
        <h1 className="text-2xl font-semibold uppercase text-slate-900">
          Sign up to get started
        </h1>
        <p className="text-sm font-normal text-gray-700">
          If you already have an account,
          <Link to={"/login"} className="ml-1 text-sky-500">
            Login here!
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="relative flex w-1/2 flex-col justify-center gap-y-2">
          <label htmlFor="first-name" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
            placeholder="first name"
            id="first-name"
            {...register("first_name")}
          />
          <ErrorMessage
            error={errors.first_name}
            className="absolute -bottom-6 left-1"
          />
        </div>

        <div className="relative flex w-1/2 flex-col justify-center gap-y-2">
          <label htmlFor="last-name" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
            placeholder="last name"
            id="last-name"
            {...register("last_name")}
          />
          <ErrorMessage
            error={errors.last_name}
            className="absolute -bottom-6 left-1"
          />
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-y-2">
        <label htmlFor="gender" className="font-semibold">
          Gender
        </label>
        <select
          id="gender"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
          {...register("gender")}
        >
          <option value="" disabled selected hidden>
            Choose Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ErrorMessage
          error={errors.gender}
          className="absolute -bottom-6 left-1"
        />
      </div>

      <div className="relative flex w-full flex-col gap-y-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
          placeholder="test@mail.com"
          {...register("email")}
        />
        <ErrorMessage
          error={errors.email}
          className="absolute -bottom-6 left-1"
        />
      </div>

      <div className="relative flex w-full flex-col gap-y-2">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
          {...register("password")}
        />
        <ErrorMessage
          error={errors.password}
          className="absolute -bottom-6 left-1"
        />
      </div>

      <div className="relative flex w-full flex-col gap-y-2">
        <label htmlFor="re-password" className="font-semibold">
          Re-Password
        </label>
        <input
          type="password"
          id="password"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
          {...register("repassword")}
        />
        <ErrorMessage
          error={errors.repassword}
          className="absolute -bottom-6 left-1"
        />
      </div>

      <div className="relative flex w-full flex-col gap-y-2">
        <label htmlFor="phone-number" className="font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          id="phone-number"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none"
          {...register("phone_number")}
        />
        <ErrorMessage
          error={errors.phone_number}
          className="absolute -bottom-6 left-1"
        />
      </div>

      <button
        className="w-full rounded-lg bg-slate-800 px-5 py-3 font-medium text-white"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader className={"animate-spin text-2xl"} />
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default FormRegister;
