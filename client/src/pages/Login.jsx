import React from "react";

const Login = () => {
  return (
    <div className="h-heightWithoutNavbar flex w-full items-center justify-center p-5">
      <div className="flex w-full max-w-[420px] flex-col gap-4 rounded-xl bg-white p-5 shadow-xl">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-center">
            <label className="font-bold">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label className="font-bold">Password</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-500"
              placeholder="*********"
            />
          </div>
        </div>
        <button className="rounded-lg bg-blue-500 px-5 py-2 font-bold text-white hover:bg-blue-600">
          Submit
        </button>
        <div className="flex items-center justify-between text-sm">
          <p className="">New to FindMyNotes?</p>
          <p className="font-bold">Create an account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
