import FormRegister from "@/components/form/FormRegister";
import { Rss } from "lucide-react";

const Register = () => {
  return (
    <div className="flex min-h-screen ">
      <div className="relative hidden grow bg-black/30 bg-[url('https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-3.jpg')] bg-cover bg-center  bg-no-repeat bg-blend-soft-light lg:block">
        <div className="absolute bottom-0 left-1/2 z-30 w-full  max-w-2xl -translate-x-1/2 space-y-5 px-10 pb-32 font-inter">
          <Rss className="h-12 w-12" />

          <h3 className="text-2xl font-semibold">Connect With Friends</h3>
          <p className="text-lg leading-8 -tracking-tight">
            This phrase is more casual and playful. It suggests that you are
            keeping your friends updated on what’s happening in your life.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-white p-10 text-slate-900 lg:w-[500px] xl:w-[700px] ">
        <FormRegister />
      </div>
    </div>
  );
};

export default Register;
