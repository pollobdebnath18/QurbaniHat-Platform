"use client";
import React from "react";
import { toast } from "react-toastify";

const BuyButton = ({ details }) => {
  return (
    <div>
      <button
        onClick={() => {
          toast.success(`${details.name} Buy Successfully`, {
            position: "top-center",
          });
        }}
        className="btn btn-primary"
      >
        Buy Now
      </button>
    </div>
  );
};
export default BuyButton;
