const Register = () => {
  return (
    <div className="min-h-screen flex ">
      <div className="w-1/2 bg-slate-800"></div>
      <div className="w-1/2 bg-white flex flex-col items-center justify-center text-slate-900">
        <div className="max-w-xl p-4 w-full space-y-8">
          <h1 className="uppercase font-semibold text-3xl text-slate-900">register</h1>

          <div className="flex items-center gap-x-4">
            <div className="flex flex-col gap-y-2 w-1/2">
              <label htmlFor="first-name" className="font-semibold">
                First Name
              </label>
              <input
                type="text"
                className="border px-5 py-2 rounded-lg shadow outline-none border-slate-400"
                placeholder="first name"
                id="first-name"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-1/2">
              <label htmlFor="last-name" className="font-semibold">
                Last Name
              </label>
              <input
                type="text"
                className="border px-5 py-2 rounded-lg shadow outline-none border-slate-400"
                placeholder="last name"
                id="last-name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="gender" className="font-semibold">
              Gender
            </label>
            <select
              id="gender"
              className="border px-5 py-2 rounded-lg shadow outline-none border-slate-400">
              <option value="choose" disabled selected hidden>
                Choose Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border px-5 py-2 rounded-lg shadow outline-none border-slate-400"
              placeholder="test@mail.com"
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border px-5 py-2 rounded-lg shadow outline-none border-slate-400"
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="phone-number" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              id="phone-number"
              className="border px-5 py-2 rounded-lg shadow outline-none border-slate-400"
            />
          </div>

          <button className="font-medium px-5 py-3 bg-slate-800 text-white w-full rounded-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
