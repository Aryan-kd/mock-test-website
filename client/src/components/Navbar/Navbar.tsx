"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full min-h-[10vh] flex justify-between items-center px-5 py-3 bg-primary">
      <div className="w-3/12">Nikhil</div>
      <div className="w-1/2">
        <ul className="flex justify-around items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Leaderboard</Link>
          </li>
          <li>
            <Link href={"/"}>Profile</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
