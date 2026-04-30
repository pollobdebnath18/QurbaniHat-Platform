import Link from "next/link";
import React from "react";
import MyLink from "./MyLink";
import Image from "next/image";

const Navbar = () => {
  const middleSide = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/allanimals" },
  ];

  const rightSide = [
    { name: "Sign In", path: "/animals/signin" },
    { name: "Sign Up", path: "/animals/signup" },
  ];

  return (
    <div className=" bg-gray-600 shadow-lg">
      <div className="navbar  max-w-[1100px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {middleSide.map((link) => {
                return (
                  <li key={link.path}>
                    <MyLink href={link.path}>{link.name}</MyLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <Image className="rounded-full"
              src={
                "https://play-lh.googleusercontent.com/BZhHPtx-N0TRzWIso_Ib--N79_wSUCuHgcMlplfyqXprBvj5OVmt35ph1THYTN9lHLg=w240-h480-rw"
              }
              alt="eid icon"
              width={40}
              height={40}
            ></Image>
            <a className="text-xl text-purple-600">QurbaniHat</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {middleSide.map((link) => {
              return (
                <li key={link.path}>
                  <MyLink href={link.path}>{link.name}</MyLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {rightSide.map((lnk) => {
              return (
                <li key={lnk.path}>
                  <MyLink href={lnk.path}>{lnk.name}</MyLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
