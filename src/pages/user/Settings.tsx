import { Camera } from "lucide-react";
const Settings = () => {
  return (
    <div className="container py-12">
      <div className=" mx-auto flex max-w-4xl flex-col rounded-md border bg-slate-800">
        <div className="flex items-center justify-around py-8 ">
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
              <input type="file" id="file-input" hidden />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-2xl font-semibold">Monroe Parker</h3>
              <span className="text-sm text-sky-500 underline">@Monroe</span>
            </div>
          </div>
          <button className=" rounded-full border border-slate-100 bg-rose-500 px-4 py-1 text-sm font-medium ">
            delete account
          </button>
        </div>

        <form className="p-10">
          <div className="mx-auto max-w-2xl space-y-8 border ">
            {/* Firstname/Lastname */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <label className="w-24 text-start" htmlFor="firstname">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  value={"firstname"}
                  className=" rounded-lg border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium outline-none"
                />
              </div>

              <div className="flex items-center gap-x-4">
                <label className="w-24 text-start" htmlFor="lastname">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  value={"lastname"}
                  className=" rounded-lg border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium outline-none"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="flex items-center gap-x-10">
              <label className="w-32 text-start" htmlFor="email">
                Gender
              </label>
              <select className="w-1/4 rounded-lg border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium outline-none">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Email */}
            <div className="flex items-center gap-x-10">
              <label className="w-32 text-start" htmlFor="email">
                Email
              </label>
              <div className="flex-grow">
                <input
                  id="email"
                  type="text"
                  value={"test@mail.com"}
                  className="w-full rounded-lg border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex items-center gap-x-10">
              <label className="w-32 text-start" htmlFor="password">
                Password
              </label>
              <div className="flex-grow">
                <input
                  id="password"
                  type="password"
                  value={"test123"}
                  className="w-full rounded-lg border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium outline-none"
                />
              </div>
            </div>

            {/* Number phone */}
            <div className="flex items-center gap-x-10">
              <label className="w-32 text-start" htmlFor="numberPhone">
                Number phone
              </label>
              <div className="flex-grow">
                <input
                  id="numberPhone"
                  type="text"
                  value={"+6282222222222"}
                  className="w-full rounded-lg border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-center  gap-x-3 pt-4">
              <button className="rounded-lg bg-slate-700 px-10 py-2 text-sm font-semibold">
                Cancle
              </button>
              <button className="rounded-lg bg-sky-500 px-10 py-2 text-sm font-semibold">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
