"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-6xl text-yellow-500" />
        </div>

        {/* HEADING */}
        <h1 className="text-5xl font-bold mb-4">404</h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-500 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        {/* BUTTON */}
        <Link href="/">
          <button className="btn btn-primary px-6">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
