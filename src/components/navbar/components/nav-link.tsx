"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

type Props = {
  link: {
    name: string;
    href: string;
    icon?: IconType;
  };
};

export const NavLink = ({ link }: Props) => {
  const pathname = usePathname();

  const isActive =
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

  return (
    <li className="w-full relative cursor-pointer">
      <Link
        href={link.href}
        className={`text-gray-500 font-medium text-xl lg:text-base capitalize whitespace-nowrap transition-all duration-300 ${isActive ? "text-green-600 font-bold" : ""}`}
      >
        {link.name}
      </Link>
    </li>
  );
};
