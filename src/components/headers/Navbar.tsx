"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Translator from "@/utils/Translator";
import LanguageSwitcher from "./LanguageSwitcher";

import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div
          className="flex items-center justify-between h-16"
          style={{ height: "100px" }}
        >
          <div className="sm:ml-0 ml-8 flex items-center">
            <Link href="/">
              <span className="flex-shrink-0">
                <Image
                  width={236}
                  height={48}
                  unoptimized
                  className=""
                  src="/logo_k3.png"
                  alt="Workflow"
                />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-4 md:ml-6">
              <div className="flex items-baseline ml-10 space-x-4">
                <a
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href={Translator.gotoUrl("/", lang)}
                >
                  {Translator.t("home", lang)}
                </a>
                <a
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href={Translator.gotoUrl("#our-service-section", lang)}
                >
                  {Translator.t("our-services", lang)}
                </a>
                <Link
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href={Translator.gotoUrl("/waste_water_technology", lang)}
                >
                  {Translator.t("waste-water-technology", lang)}
                </Link>
                <Link
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href={Translator.gotoUrl("/products", lang)}
                >
                  {Translator.t("our-products", lang)}
                </Link>
                <a
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href={Translator.gotoUrl("#contact", lang)}
                >
                  {Translator.t("contact-us", lang)}
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          <div className="flex mr-2 md:hidden">
            <button
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-2 py-1 rounded-md text-base font-medium"
              href={Translator.gotoUrl("/", lang)}
            >
              {Translator.t("home", lang)}
            </a>
            <a
              className="text-gray-500 hover:text-gray-800 dark:text-white block px-2 py-1 rounded-md text-base font-medium"
              href={Translator.gotoUrl("#about", lang)}
            >
              {Translator.t("about-us", lang)}
            </a>
            <a
              className="text-gray-500 hover:text-gray-800 dark:text-white block px-2 py-1 rounded-md text-base font-medium"
              href={Translator.gotoUrl("#our-service-section", lang)}
            >
              {Translator.t("our-services", lang)}
            </a>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-2 py-1 rounded-md text-base font-medium"
              href={Translator.gotoUrl("/waste_water_technology", lang)}
            >
              {Translator.t("waste-water-technology", lang)}
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-2 py-1 rounded-md text-base font-medium"
              href={Translator.gotoUrl("/products", lang)}
            >
              {Translator.t("our-products", lang)}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
