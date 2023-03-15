import Link from "next/link";
import Image from "next/image";
import { type FC } from "react";
import NavLink from "./NavLink";

const Navigation: FC = () => {
  return (
    <nav className="mb-10 flex items-center justify-between border-b-8 border-yellow-50 p-8">
      <Link
        href="/"
        className="flex items-center rounded-xl p-2 transition-colors duration-300 hover:bg-yellow-200 active:bg-yellow-500"
      >
        <Image
          src="https://daqvdvltgohkkrwpgpfd.supabase.co/storage/v1/object/public/img/logo.png?t=2023-03-14T16%3A29%3A25.190Z"
          alt="Logo"
          width={48}
          height={48}
        />

        <h1 className="ml-1 text-3xl font-bold tracking-tighter text-green-700">
          Cook Your Dream
        </h1>
      </Link>

      <ul className="mr-32 flex space-x-3 text-green-800">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/breakfast">Breakfast</NavLink>
        </li>
        <li>
          <NavLink href="/lunch">Lunch</NavLink>
        </li>
        <li>
          <NavLink href="/dinner">Dinner</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink href="/aboutus">About us</NavLink>
        </li>
        <li>
          <NavLink href="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
