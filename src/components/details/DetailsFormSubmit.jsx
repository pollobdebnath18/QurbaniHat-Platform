"use client";

import { toast } from "react-toastify";

const DetailsFormSubmit = ({ details }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`${details?.name} Booking Successfully`);
    // form.reset();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          className="input input-bordered w-full bg-gray-600"
          placeholder="Your Name"
          required
        />
        <input
          className="input input-bordered w-full bg-gray-600"
          placeholder="Phone Email"
          type="email"
          required
        />
        <input
          className="input input-bordered w-full bg-gray-600"
          placeholder="Phone Number"
          required
        />
        <textarea
          className="textarea textarea-bordered w-full bg-gray-600"
          placeholder="address"
          required
        ></textarea>
        <button className="btn btn-primary w-full">Submit Request</button>
      </form>
    </div>
  );
};

export default DetailsFormSubmit;
