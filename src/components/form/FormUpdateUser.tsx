/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserUpdateType, userUpdateSchema } from "@/lib/apis/user/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./elements/ErrorMessage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { updateUser } from "@/lib/apis/user/api";
import { toast } from "../ui/use-toast";
import ModalDelete from "./elements/ModalDelete";
import { useToken } from "@/context/token-provider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProfileSkeleton from "./elements/ProfileSkeleton";

const FormUpdateUser = () => {
  const { user } = useToken();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      nama_depan: "",
      nama_belakang: "",
      username: "",
      email: "",
      password: "",
      repassword: "",
      gender: "",
      hp: "",
      foto_profil: "",
    },
  });

  useEffect(() => {
    setValue("nama_depan", user.FirstName!);
    setValue("nama_belakang", user.LastName!);
    setValue("username", user.Username!);
    setValue("email", user.Email!);
    setValue("gender", user.Gender!);
    setValue("hp", user.Hp!);
  }, [user]);

  const handleUpdateUser = async (body: IUserUpdateType) => {
    try {
      const result = await updateUser(body);
      if (user.Username !== body.username) {
        localStorage.setItem("username", body.username);
      }

      toast({
        description: result.message,
      });
      navigate("/");
    } catch (error: any) {
      toast({
        description: error.toString(),
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdateUser)}
      className=" border-900 mx-auto flex max-w-4xl flex-col rounded-md border border-white/10 bg-black shadow-lg"
    >
      {user.Image ? (
        <div className=" flex items-center justify-around py-8">
          <div className="flex items-center gap-x-8">
            <div className="relative ">
              <label htmlFor="file-input" className="cursor-pointer">
                <img
                  src={
                    user.Image === "default"
                      ? "https://source.unsplash.com/200x200?person"
                      : user.Image
                  }
                  className="h-24 w-24 rounded-full object-cover "
                  alt="profile"
                />
                <Camera className="absolute bottom-0 right-0  rounded-full bg-slate-700 " />
              </label>

              <Input
                type="file"
                id="file-input"
                className="hidden"
                {...register("foto_profil")}
              />
              <ErrorMessage
                className="absolute -bottom-6 left-0"
                error={errors.foto_profil}
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-2xl font-semibold">
                {user.FirstName} {user.LastName}
              </h3>
              <span className="text-sm text-sky-500 underline">
                @{user.Username}
              </span>
            </div>
          </div>
          <ModalDelete>
            <button
              className=" rounded-full bg-rose-600 px-4 py-1 font-inter text-sm "
              type="button"
            >
              delete account
            </button>
          </ModalDelete>
        </div>
      ) : (
        <ProfileSkeleton />
      )}

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
              {...register("nama_depan")}
              placeholder="Monroe"
            />
            <ErrorMessage error={errors.nama_depan} />
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
              {...register("nama_belakang")}
              placeholder="Parker"
            />
            <ErrorMessage error={errors.nama_belakang} />
          </div>

          {/* username */}
          <div className="relative flex items-center gap-x-10">
            <Label htmlFor="username" className="w-32 text-start">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              className=" w-1/3"
              {...register("username")}
              placeholder="username"
            />
            <ErrorMessage error={errors.username} />
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
              <option value="" selected hidden>
                Choose Gender
              </option>
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
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="test@mail.com"
            />
            <ErrorMessage error={errors.email} />
          </div>

          {/* Password */}
          <div className="flex items-center gap-x-10">
            <Label htmlFor="password" className="min-w-[8rem] text-start">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Password"
            />
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
              placeholder="Re-password"
            />
            <ErrorMessage error={errors.repassword} />
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-x-10">
            <Label htmlFor="phone-number" className="min-w-[8rem] text-start">
              Phone Number
            </Label>
            <Input
              id="phone-number"
              type="text"
              {...register("hp")}
              placeholder="Phone Number"
            />
            <ErrorMessage error={errors.hp} />
          </div>

          <div className="flex items-center justify-center  gap-x-3 pt-4">
            <button
              className="rounded-lg border bg-white/20 px-10 py-2 text-sm font-semibold  shadow"
              onClick={() => reset()}
            >
              Cancle
            </button>
            <button
              className="rounded-lg bg-sky-500 px-10 py-2 text-sm font-semibold"
              aria-disabled={isSubmitting}
              disabled={isSubmitting}
              type="submit"
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
