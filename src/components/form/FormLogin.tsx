import { loginSchema } from "@/lib/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = () => {
    alert("login successfuly");
    window.location.href = "/";
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full max-w-xl space-y-8 p-4"
    >
      <div className="flex flex-col gap-y-1 font-inter">
        <h2 className="text-2xl font-semibold uppercase text-slate-900">
          Sign in to your account
        </h2>
        <p className="text-sm font-normal text-gray-700">
          If you haven’t signed up yet.
          <Link to={"/register"} className="ml-1 text-sky-500">
            Register here!
          </Link>
        </p>
      </div>

      <div className="relative flex w-full flex-col gap-y-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none "
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

      <button
        className="w-full rounded-lg bg-slate-800 px-5 py-3 font-medium text-white"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader className={"animate-spin text-2xl"} />
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default FormLogin;
