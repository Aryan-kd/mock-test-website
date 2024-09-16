"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const BottomNavbar = () => {
  return (
    <footer className="w-full min-h-[10vh] flex justify-center items-center px-4 bg-primary">
      <ul className="w-full flex justify-around items-center text-white text-lg">
        <li className="flex justify-center items-center gap-3 hover:text-dark transition-all ease-in-out">
          <FontAwesomeIcon icon={faHome} />
          <Link href={"/"}>Home</Link>
        </li>
        <li className="flex justify-center items-center gap-3 hover:text-dark transition-all ease-in-out">
          <FontAwesomeIcon icon={faFile} />
          <Link href={"/"}>About</Link>
        </li>
        <li className="flex justify-center items-center gap-3 hover:text-dark transition-all ease-in-out">
          <FontAwesomeIcon icon={faList} />
          <Link href={"/"}>Leaderboard</Link>
        </li>
        <li className="flex justify-center items-center gap-3 hover:text-dark transition-all ease-in-out">
          <FontAwesomeIcon icon={faUser} />
          <Link href={"/"}>Profile</Link>
        </li>
      </ul>
    </footer>
  );
};

export default BottomNavbar;
