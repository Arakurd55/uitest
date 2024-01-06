import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import avatar from "../../public/avatar.jpg";
import Avatar from "./Avatar";
import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Found Items",
    path: "/found-items",
  },
  {
    title: "Lost Items",
    path: "/lost-items",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-start px-10 pt-4 pb-4 border-b border-stone-400">
      <Image
        className="w-16 h-16 mr-auto"
        width={24}
        height={24}
        alt="logo"
        src={logo}
      />
      <ul className="flex gap-10 mr-40 ">
        {links.map((link) => (
          <Link
            className="font-semibold text-[#848484] text-lg"
            href={`${link.path}`}
            key={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <Avatar src={avatar} />
    </nav>
  );
}
