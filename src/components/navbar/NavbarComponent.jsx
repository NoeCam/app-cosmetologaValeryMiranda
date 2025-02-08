"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Title from "@/components/title/Title";

const links = [
  { name: "Inicio", href: "/", icon: "/icon-home.svg" },
  { name: "Contacto", href: "/contact", icon: "/icon-map.svg" },
  {
    name: "Reserva tu cita",
    href: "/appointments",
    icon: "/icon-calendar.svg",
  },
];

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center shadow sticky top-0 z-50 bg-slate-50">
      <Link href="/">
        <Image
          src="/Logo-Marca-Agua-Negro.png"
          alt="Logo"
          width={100}
          height={50}
          className="mx-5"
          unoptimized
        />
      </Link>

      <nav className="fixed bottom-0 w-full md:relative md:w-auto bg-slate-50">
        <ul className="flex flex-row md:justify-end justify-around items-center gap-5 pt-1">
          {links.map((link) => (
            <li key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className={clsx(
                  "h-[48px] flex items-center justify-center px-4 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110",
                  {
                    "border-b-4 border-gold font-bold": pathname === link.href,
                  }
                )}
              >
                {/* Contenedor de ícono: Solo visible en móviles */}
                <span className="block md:hidden">
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </span>

                {/* Contenedor de texto: Solo visible en pantallas md o más grandes */}
                <span className="hidden md:block">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
