"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="md:mx-20">
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-serif font-semibold text-xl"
            >
              <li>
                <Link href="/addcontacts">Add Contacts</Link>
              </li>
              <li>
                <Link href="/allcontacts">All Contacts</Link>
              </li>
            </ul>
          </div>
          <h1>
            <Link href="/">
              <h1 className="text-3xl font-serif font-semibold">CMA</h1>
            </Link>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 font-serif font-semibold text-xl">
            <li>
              <Link href="/addcontacts">Add Contacts</Link>
            </li>
            <li>
              <Link href="/allcontacts">All Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
