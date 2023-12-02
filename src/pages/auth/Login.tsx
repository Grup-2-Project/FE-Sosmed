const Login = () => {
  return (
    <div className="min-h-screen flex ">
      <div className="w-1/2 bg-slate-800"></div>
      <div className="w-1/2 bg-white flex flex-col items-center justify-center text-slate-900">
        <div className="max-w-xl p-4 w-full space-y-8">
          <h1 className="uppercase font-semibold text-3xl text-slate-900">Login</h1>

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

          <button className="font-medium px-5 py-3 bg-slate-800 text-white w-full rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
