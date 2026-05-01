"use client";
import React from "react";

const Signin = () => {
  return (
    <div
      data-theme="light"
      className=" bg-gray-400 flex items-center justify-center px-4 py-8 "
    >
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-30 items-center">
       
        <div className="hidden md:block space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Welcome to QurbaniHat
          </h1>
          <p className="text-gray-600">
            Manage livestock booking easily. Find cows, goats, sheep and more
            for Qurbani.
          </p>

          <div className="bg-base-100 p-6 rounded-xl shadow">
            <p className="text-sm">
              ✔ Secure authentication
              <br />
              ✔ Fast booking system
              <br />✔ Trusted livestock marketplace
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Login Account</h2>

            <form className="space-y-4 mt-4">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="text-right">
                <a className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <button className="btn btn-neutral w-full">Login</button>
            </form>

            <div className="divider">OR</div>

            <button className="btn bg-white text-black border border-gray-300 w-full flex gap-2 items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 512 512">
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </svg>
              Continue with Google
            </button>

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <a className="text-primary font-medium hover:underline">
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
