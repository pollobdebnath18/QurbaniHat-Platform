"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      image: photo,
      password: password,
    });
    console.log({ data, error });
    if (error) {
      toast.error(error?.message || "SignUp Failed");
    }
    if (data) {
      toast.success("SignUp Successfully");
      router.push("/animals/signin");
      console.log(name, email, password);
    }
  };
  const googleSignup = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div
      data-theme="light"
      className="bg-gray-400 flex justify-center px-4 py-4"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-30 items-center">
        <div className="hidden md:block space-y-4">
          <h1 className="text-4xl font-bold text-primary">Join QurbaniHat</h1>
          <p className="text-gray-600">
            Create your account and start exploring livestock for Qurbani
            booking.
          </p>

          <div className="bg-base-100 p-6 rounded-xl shadow">
            <p className="text-sm">
              ✔ Fast registration
              <br />
              ✔ Secure authentication
              <br />✔ Access all animals anytime
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Create Account</h2>

            <form className="space-y-4 mt-4" onSubmit={handleSignUp}>
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="https://your-photo-link.com"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <button className="btn btn-primary w-full">Sign Up</button>
            </form>

            <div className="divider">OR</div>

            <button
              className="btn bg-white text-black border border-gray-300 w-full flex items-center justify-center gap-2"
              onClick={googleSignup}
            >
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
              Already have an account?{" "}
              <Link
                href={"/animals/signin"}
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
