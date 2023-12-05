/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRegisterType, registerSchema } from "@/lib/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./elements/ErrorMessage";
import { userRegister } from "@/lib/apis/auth/api";
import { useToast } from "../ui/use-toast";
const FormRegister = () => {
  const navigate = useNavigate();

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      nama_depan: "",
      nama_belakang: "",
      gender: "",
      email: "",
      password: "",
      repassword: "",
      hp: "",
    },
  });
  const handleRegister = async (body: IRegisterType) => {
    try {
      const result = await userRegister(body);
      console.log(result.data);
      toast({
        description: "Registration successfully, please log in",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        description: error,
        variant: "destructive",
      });
    }
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
            className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
            placeholder="Monroe"
            id="first-name"
            {...register("nama_depan")}
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.nama_depan}
            className="absolute -bottom-6 left-1"
          />
        </div>

        <div className="relative flex w-1/2 flex-col justify-center gap-y-2">
          <label htmlFor="last-name" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
            placeholder="Parker"
            id="last-name"
            {...register("nama_belakang")}
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.nama_belakang}
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
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
          {...register("gender")}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
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
        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
          placeholder="username"
          {...register("username")}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        />
        <ErrorMessage
          error={errors.username}
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
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
          placeholder="test@mail.com"
          {...register("email")}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
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
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
          {...register("password")}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          placeholder="Password"
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
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
          {...register("repassword")}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          placeholder="Re-password"
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
          className="rounded-lg border border-slate-400 px-5 py-2 shadow outline-none disabled:opacity-70"
          {...register("hp")}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          placeholder="Phone Number"
        />
        <ErrorMessage error={errors.hp} className="absolute -bottom-6 left-1" />
      </div>

      <button
        className="flex w-full justify-center rounded-lg bg-slate-800 px-5 py-3 font-medium text-white disabled:opacity-70"
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
