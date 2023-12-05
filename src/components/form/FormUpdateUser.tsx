import { userUpdateSchema } from "@/lib/apis/user/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
const FormUpdateUser = () => {
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
            <Input
              type="file"
              id="file-input"
              className="hidden"
              {...register("profile_picture")}
            />
            <ErrorMessage
              className="absolute -bottom-6 left-0"
              error={errors.profile_picture}
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-2xl font-semibold">Monroe Parker</h3>
            <span className="text-sm text-sky-500 underline">@Monroe</span>
          </div>
        </div>
        <button className=" rounded-full bg-rose-600 px-4 py-1 font-inter text-sm ">
          delete account
        </button>
      </div>

      <div className="p-10">
        <div className="mx-auto max-w-2xl space-y-8 ">
          {/* Firstname */}
          <div className="relative flex items-center gap-x-10">
            <Label htmlFor="firstname" className="w-32 text-start">
              First name
            </Label>
            <Input
              id="firstname"
              type="text"
              className=" w-1/3"
              {...register("first_name")}
            />
            <ErrorMessage error={errors.first_name} />
          </div>

          {/* Lastname */}
          <div className="relative flex items-center gap-x-10">
            <Label htmlFor="lastname" className="w-32 text-start">
              Last name
            </Label>
            <Input
              id="lastname"
              type="text"
              className=" w-1/3"
              {...register("last_name")}
            />
            <ErrorMessage error={errors.last_name} />
          </div>

          {/* Gender */}
          <div className="relative flex items-center gap-x-10">
            <Label
              className="min-w-[8rem] text-start font-semibold"
              htmlFor="email"
            >
              Gender
            </Label>
            <select
              className="flex h-10 w-1/3 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("gender")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ErrorMessage error={errors.gender} />
          </div>

          {/* Email */}
          <div className=" flex items-center gap-x-10">
            <Label htmlFor="email" className="min-w-[8rem] text-start">
              Email
            </Label>
            <Input id="email" type="email" {...register("email")} />
            <ErrorMessage error={errors.email} />
          </div>

          {/* Password */}
          <div className="flex items-center gap-x-10">
            <Label htmlFor="password" className="min-w-[8rem] text-start">
              Password
            </Label>
            <Input id="password" type="password" {...register("password")} />
            <ErrorMessage error={errors.password} />
          </div>

          {/* Re-Password */}
          <div className="flex items-center gap-x-10">
            <Label htmlFor="repassword" className="min-w-[8rem] text-start">
              Re-password
            </Label>
            <Input
              id="repassword"
              type="password"
              {...register("repassword")}
            />
            <ErrorMessage error={errors.repassword} />
          </div>

          {/* Number phone */}
          <div className="flex items-center gap-x-10">
            <Label htmlFor="phone-number" className="min-w-[8rem] text-start">
              Numbe phone
            </Label>
            <Input
              id="phone-number"
              type="text"
              {...register("phone_number")}
            />
            <ErrorMessage error={errors.phone_number} />
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
  );
};

export default FormUpdateUser;
