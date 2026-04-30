"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();

  const activePath = pathName === href;

  console.log("pathname", pathName, "activepath", activePath);
  return (
    <Link
      href={href}
      className={`px-2 py-1 text-[20px] ${activePath ? "text-purple-500 border-blue-500" : "hover:bg-gray-400"}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;
