"use client";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { NavLink } from "./nav-link";
import { navLinks } from "@/constants/nav-links";
import Image from "next/image";
import { mainLogo } from "../../../../public/imgs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <IoMenuOutline size={35} className="text-green-800 cursor-pointer" />
        </button>
      )}

      {/* Overlay + Sidebar */}
      <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
        {/* backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        />

        {/* sidebar */}
        <div
          className={`absolute inset-0 bg-white flex flex-col justify-center
          transform transition-transform duration-300 ease-in-out ps-10
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          ${isOpen ? "pointer-events-auto" : ""}`}
        >
          {/* Logo */}
          <Image
            src={mainLogo}
            alt="النجعاوي لشراء الأثاث المستعمل بالرياض"
            priority
            width={150}
            height={150}
            className="absolute top-6 inset-s-5"
          />

          {/* close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-12 inset-e-5 text-black cursor-pointer"
          >
            <IoClose size={35} />
          </button>

          <ul className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                link={link}
                onClick={() => setIsOpen(false)} 
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      {navLinks.map((link, idx) => (
        <NavLink key={idx} link={link} />
      ))}
    </ul>
  );
};

export const NavbarMenu = () => {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
};
