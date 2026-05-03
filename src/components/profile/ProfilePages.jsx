"use client";
import ProfileUpdateModal from "@/components/profile/ProfileUpdateModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

const ProfilePages = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  if (!user) {
    return (
      <div className="text-3xl font-bold flex justify-center items-center pt-10">
        <PulseLoader />
      </div>
    );
  }

  console.log(user?.name?.charAt(0));
  return (
    <div className="flex items-center py-16 justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-gray-800 border border-purple-500 shadow-xl rounded-2xl p-6 text-center">
        {user?.image ? (
          <Image
            src={user?.image}
            alt="user"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-purple-400"
          />
        ) : (
          <div className="w-[120px] h-[120px] mx-auto flex justify-center items-center bg-white rounded-full text-black">
            <FaUserCircle size={60} />
          </div>
        )}

        <h2 className="text-xl font-bold text-white mt-4">{user?.name}</h2>
        <p className="text-gray-300">{user?.email}</p>

        <p className="text-sm text-gray-400 mt-2">
          Last login: {new Date(user?.createdAt).toLocaleString()}
        </p>
        <div className="pt-4">
          <ProfileUpdateModal></ProfileUpdateModal>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;
