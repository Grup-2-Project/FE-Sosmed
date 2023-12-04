import { registerSchema } from "@/lib/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Rss } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
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
    <div className="flex min-h-screen ">
      <div className="relative w-3/5 bg-black/30 bg-[url('https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-3.jpg')]  bg-cover bg-center bg-no-repeat  bg-blend-soft-light">
        <div className="font-inter absolute bottom-0 left-1/2 z-30  w-full max-w-2xl -translate-x-1/2 space-y-5 pb-32">
          <Rss className="h-12 w-12" />

          <h3 className="text-2xl font-semibold">Connect With Friends</h3>
          <p className="text-lg leading-8 -tracking-tight">
            This phrase is more casual and playful. It suggests that you are
            keeping your friends updated on what’s happening in your life.
          </p>
        </div>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center bg-white text-slate-900">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="w-full max-w-xl space-y-8 p-4"
        >
          <div className="font-inter flex flex-col gap-y-1">
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
              <div className="absolute -bottom-6 left-1 text-sm text-red-500">
                {errors.first_name && <p>{errors.first_name.message}</p>}
              </div>
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
              <div className="absolute -bottom-6 left-1 text-sm text-red-500">
                {errors.last_name && <p>{errors.last_name.message}</p>}
              </div>
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
            <div className="absolute -bottom-6 left-1 text-sm text-red-500">
              {errors.gender && <p>{errors.gender.message}</p>}
            </div>
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
            <div className="absolute -bottom-6 left-1 text-sm text-red-500">
              {errors.email && <p>{errors.email.message}</p>}
            </div>
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
            <div className="absolute -bottom-6 left-1 text-sm text-red-500">
              {errors.password && <p>{errors.password.message}</p>}
            </div>
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
            <div className="absolute -bottom-6 left-1 text-sm text-red-500">
              {errors.repassword && <p>{errors.repassword.message}</p>}
            </div>
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
            <div className="absolute -bottom-6 left-1 text-sm text-red-500">
              {errors.phone_number && <p>{errors.phone_number.message}</p>}
            </div>
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
      </div>
    </div>
  );
};

export default Register;
