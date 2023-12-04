import { loginSchema } from "@/lib/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Rss } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
    <div className="flex min-h-screen ">
      <div className="relative w-3/5 bg-black/30 bg-[url('https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-3.jpg')]  bg-cover bg-center bg-no-repeat  bg-blend-soft-light">
        <div className="font-inter absolute bottom-0 left-1/2 z-30 w-full max-w-2xl -translate-x-1/2 space-y-5 pb-32">
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
          onSubmit={handleSubmit(handleLogin)}
          className="w-full max-w-xl space-y-8 p-4"
        >
          <div className="font-inter flex flex-col gap-y-1">
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
      </div>
    </div>
  );
};

export default Login;
