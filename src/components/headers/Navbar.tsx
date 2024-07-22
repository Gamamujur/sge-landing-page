"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Translator from "@/utils/Translator";
import LanguageSwitcher from "./LanguageSwitcher";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownImage from "@/components/Dropdown/DropdownImage";
import {useSearchParams, usePathname} from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || undefined;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const options = [
        {
            text: "Aquahelix",
            url: Translator.gotoUrl("/aquahelix", lang)
        },
        {
            text: "AquaClear Cube",
            url: Translator.gotoUrl("/aquaclear-cube", lang),
        },
        {
            text: Translator.t("bluewave-industries", lang),
            url: Translator.gotoUrl("/bluewave", lang),
        },
    ];
    const options_company = [
        {
            image: "/img/company-navbar/nadic.png",
            url: "https://nadic.co.id/",
        },
        {
            image: "/img/company-navbar/seg.png",
            url: "javascript:void(0);",
        },
        {
            image: "/img/company-navbar/smi.png",
            url: "javascript:void(0);",
        },
        {
            image: "/img/company-navbar/sge.png",
            url: "javascript:void(0);",
        },
        {
            image: "/img/company-navbar/bluewave.png",
            url: "https://bluewave.industries/login",
        },
        {
            image: "/img/company-navbar/utl.png",
            url: "javascript:void(0);",
        },
    ];

    return (
        <nav className="bg-white dark:bg-gray-800">
            <div className="mx-auto font-semibold max-w-7xl">
                <div
                    className="flex items-center justify-between h-16"
                    style={{height: "100px"}}
                >
                    <div className="flex items-center ml-8 align-middle sm:ml-0">
                        <Link href={Translator.gotoUrl("/", lang)}>
              <span className="flex-shrink-0">
                <Image
                    width={236}
                    height={48}
                    unoptimized
                    className="pl-6 xl:pl-0"
                    src="/logo_k3.png"
                    alt="Logo"
                />
              </span>
                        </Link>

                        <div className="relative py-2 cursor-pointer group">
              <span className="flex-shrink-0">
                <Image
                    width={236}
                    height={48}
                    unoptimized
                    className="object-scale-down ml-6 cursor-default w-36 xl:ml-7 "
                    src="/img/company-navbar/iso.png"
                    alt="Logo"
                />
              </span>
                            <div
                                className="absolute z-50 invisible bg-white border-2 shadow-lg left-10 w-fit rounded-xl group-hover:visible">
                                <div className="block p-2 text-sm font-medium cursor-default hover:text-black">
                                    ISO 9001:2015
                                </div>
                                <hr/>
                                <div className="block p-2 text-sm font-medium cursor-default hover:text-black">
                                    ISO 14001:2015
                                </div>
                                <hr/>
                                <div className="block p-2 text-sm font-medium cursor-default hover:text-black">
                                    ISO 45001:2018
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <div className="flex items-center ml-4 xl:ml-6">
                            <div className="flex ml-10 space-x-4 align-middle">
                                <a
                                    className={`text-lg ${
                                        pathname === "/about-us"
                                            ? "text-[#0C5095]"
                                            : "text-[#41444B]"
                                    } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                                    href={Translator.gotoUrl("/about-us", lang)}
                                >
                                    {Translator.t("about-us", lang)}
                                </a>
                                <Link
                                    className={`text-lg ${
                                        pathname === "/project"
                                            ? "text-[#0C5095]"
                                            : "text-[#41444B]"
                                    } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                                    href={Translator.gotoUrl("/project", lang)}
                                >
                                    {Translator.t("project", lang)}
                                </Link>
                                <div>
                                    <Dropdown
                                        options={options}
                                        title={Translator.t("sol-product", lang)}
                                    />
                                </div>
                                <LanguageSwitcher/>
                                <div>
                                    <DropdownImage
                                        options={options_company}
                                        title="Satria Nusa Group"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mr-2 xl:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none"
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
                                <path
                                    d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="xl:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:text-white"
                            href="/about-us"
                        >
                            {Translator.t("about-us", lang)}
                        </a>
                        <a
                            className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:text-white"
                            href="/project"
                        >
                            {Translator.t("project", lang)}
                        </a>
                        <Link
                            className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:hover:text-white"
                            href="/machinaries-or-wastewater-technology"
                        >
                            {Translator.t("machinaries-title", lang)}
                        </Link>
                        <Link
                            className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:hover:text-white"
                            href="/bluewave"
                        >
                            {Translator.t("bluewave-industries", lang)}
                        </Link>
                        <Link
                            className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:hover:text-white"
                            href="/bacteria"
                        >
                            {Translator.t("consumables", lang)}
                        </Link>
                        <LanguageSwitcher/>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
