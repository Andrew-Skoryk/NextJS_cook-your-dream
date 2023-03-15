"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";
import cn from "classnames";

type Props = LinkProps & {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<Props>) => {
  const path = usePathname();

  const linkPathname = new URL(href, location.href).pathname;
  const activePathname = new URL(path, location.href).pathname;
  const isActive =  linkPathname === activePathname;

  return (
    <Link
      href={href}
      className={cn("rounded-xl p-2 font-medium hover:bg-yellow-200 transition-colors duration-300 active:bg-yellow-500", {
        "bg-yellow-400": isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
