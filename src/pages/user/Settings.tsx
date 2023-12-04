import { userUpdateSchema } from "@/lib/apis/user/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Camera, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      profile_picture: "",
      first_name: "Monroe",
      last_name: "Parker",
      gender: "male",
      email: "test@mail.com",
      password: "",
      repassword: "",
      phone_number: "6282222222222",
    },
  });
  const handleUpdateUser = () => {
    alert("Changes saved successfully");
  };

  return (
    <div className=" container py-12">
      <form
        onSubmit={handleSubmit(handleUpdateUser)}
        className=" border-900 mx-auto flex max-w-4xl flex-col rounded-md border border-white/10 bg-black shadow-lg"
      >
        <div className=" flex items-center justify-around py-8">
          <div className="flex items-center gap-x-8">
            <div className="relative ">
              <label htmlFor="file-input" className="cursor-pointer">
                <img
                  src="https://source.unsplash.com/80x80?person"
                  className="h-24 w-24 rounded-full"
                  alt="person"
                />
                <Camera className="absolute bottom-0 right-0  rounded-full bg-slate-700 " />
              </label>
              <input
                type="file"
                id="file-input"
                hidden
                {...register("profile_picture")}
              />
              <div className="absolute -bottom-6 left-0 text-xs text-red-500">
                {errors.profile_picture && (
                  <p className="whitespace-nowrap">
                    {errors.profile_picture.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-2xl font-semibold">Monroe Parker</h3>
              <span className="text-sm text-sky-500 underline">@Monroe</span>
            </div>
          </div>
          <button className=" font-inter rounded-full bg-rose-600 px-4 py-1 text-sm ">
            delete account
          </button>
        </div>

        <div className="p-10">
          <div className="mx-auto max-w-2xl space-y-8 ">
            {/* Firstname */}
            <div className="relative flex items-center gap-x-10">
              <label
                className="w-32 text-start font-semibold"
                htmlFor="firstname"
              >
                First name
              </label>
              <input
                id="firstname"
                type="text"
                className=" w-1/3 rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium  outline-none"
                {...register("first_name")}
              />
              <div className=" absolute right-28 top-1/2 flex -translate-y-1/2 items-center gap-x-2 text-sm text-red-500">
                {errors.first_name && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.first_name.message}</p>
                  </>
                )}
              </div>
            </div>

            {/* Lastname */}
            <div className="relative flex items-center gap-x-10">
              <label
                className="w-32 text-start font-semibold"
                htmlFor="lastname"
              >
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                className=" w-1/3 rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium outline-none"
                {...register("last_name")}
              />
              <div className=" absolute right-28 top-1/2 flex -translate-y-1/2 items-center gap-x-2 text-sm text-red-500">
                {errors.last_name && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.last_name.message}</p>
                  </>
                )}
              </div>
            </div>

            {/* Gender */}
            <div className="relative flex items-center gap-x-10">
              <label className="w-32 text-start font-semibold" htmlFor="email">
                Gender
              </label>
              <select
                className="w-1/3 rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium outline-none"
                {...register("gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className=" absolute right-28 top-1/2 flex -translate-y-1/2 items-center gap-x-2 text-sm text-red-500">
                {errors.gender && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.gender.message}</p>
                  </>
                )}
              </div>
            </div>

            {/* Email */}
            <div className=" flex items-center gap-x-10">
              <label className="w-32 text-start font-semibold" htmlFor="email">
                Email
              </label>
              <div className="flex-grow">
                <input
                  id="email"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium outline-none"
                  {...register("email")}
                />
              </div>
              <div className="  flex items-center gap-x-2 text-sm text-red-500">
                {errors.email && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.email.message}</p>
                  </>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="flex items-center gap-x-10">
              <label
                className="w-32 text-start font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex-grow ">
                <input
                  id="password"
                  type="password"
                  className=" w-full rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium outline-none"
                  {...register("password")}
                />
              </div>
              <div className="  flex items-center gap-x-2 text-sm text-red-500">
                {errors.password && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.password.message}</p>
                  </>
                )}
              </div>
            </div>

            {/* Re-Password */}
            <div className="flex items-center gap-x-10">
              <label
                className="w-32 text-start font-semibold"
                htmlFor="re-password"
              >
                Re-password
              </label>
              <div className="flex-grow ">
                <input
                  id="re-password"
                  type="password"
                  className=" w-full rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium outline-none"
                  {...register("repassword")}
                />
              </div>
              <div className="  flex items-center gap-x-2 text-sm text-red-500">
                {errors.repassword && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.repassword.message}</p>
                  </>
                )}
              </div>
            </div>

            {/* Number phone */}
            <div className="flex items-center gap-x-10">
              <label
                className="w-32 text-start font-semibold"
                htmlFor="numberPhone"
              >
                Number phone
              </label>
              <div className="flex-grow">
                <input
                  id="numberPhone"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-[#09090B] px-4 py-2 text-sm font-medium outline-none "
                  {...register("phone_number")}
                />
              </div>
              <div className="  flex items-center gap-x-2 text-sm text-red-500">
                {errors.phone_number && (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <p>{errors.phone_number.message}</p>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center  gap-x-3 pt-4">
              <button className="rounded-lg border bg-white/20 px-10 py-2 text-sm font-semibold  shadow">
                Cancle
              </button>
              <button
                className="rounded-lg bg-sky-500 px-10 py-2 text-sm font-semibold"
                aria-disabled={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader className={"animate-spin text-2xl"} />
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
