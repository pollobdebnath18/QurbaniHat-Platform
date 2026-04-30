import Link from "next/link";
import React from "react";
import MyLink from "./MyLink";

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
    <div>
      <div className="navbar  shadow-sm">
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
              {/* {links.map((link) => {
                return (
                  <Link href={`link.path`} key={link.path}>
                    {link.name}
                  </Link>
                );
              })} */}
            </ul>
          </div>
          <h2 className="text-purple-600 border border-amber-100">logo</h2>
          <a className="text-xl text-purple-600">QurbaniHat</a>
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
