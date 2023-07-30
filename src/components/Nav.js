"use client";
import React, { useState } from "react";
import { UserAuth } from "@/utils/useAuth";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import avatar from "../../public/assets/avatar.svg";

const Nav = () => {
  const { user, signOut, signIn } = UserAuth();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className=" flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center items-center">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">idemy</p>
      </Link>

      <div className="sm:flex hidden">
        {user ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <p>Welcome {user.email}</p>
            <Link href="/">Home</Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link href="/signin" className="outline_btn">
              Sign In
            </Link>
            <Link href="/signup" className="outline_btn">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {user ? (
          <div className="flex">
            <Image
              src={avatar}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <p>{user.email}</p>
                <Link href="/">Home</Link>
                <button
                  type="button"
                  onClick={signOut}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2 ml-2">
            <Link href="/signin" className="black_btn">
              Sign in
            </Link>
            <Link href="/signup" className="black_btn">
              Sign Un
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
