"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import React from "react";
import {useSearchParams} from "next/navigation";

function Bacteria() {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || undefined;
    return (
        <div className="relative overflow-x-hidden">
            <div className="flex max-w-7-xl justify-center bg-[#EDF2F5]">
                <Image
                    src="/img/bacteria/bacteria.png"
                    unoptimized
                    className="z-50 object-cover max-w-3xl px-5 mt-48 -my-40"
                    alt=""
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="relative w-full px-5 lg:px-0">
                <div className="absolute flex justify-end w-full top-0 left-0">
                    <Image
                        className="z-0"
                        src="/img/solutions-and-product/pattern.png"
                        width={834}
                        height={834}
                        alt=""
                    />
                </div>
            </div>
            <div className="relative flex justify-center w-full px-5 mt-40 lg:px-0 z-10">
                <div className="text-base max-w-7xl">
                    <div className="mt-5">
                <span className="text-[#0E4F94] text-4xl font-semibold">
              Aerobic - Compound Bacteria
            </span>
                    </div>
                    <p className="mt-8 leading-6">
                        {Translator.t("bacteria-desc-1", lang)}
                    </p>
                    <p className="mt-8 leading-6">
                        {Translator.t("bacteria-desc-2", lang)}
                    </p>
                    <ul className="mt-1 ml-6 list-decimal">
                        <li>
                            {Translator.t("bacteria-list-1", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-2", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-3", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-4", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-5", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-6", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-7", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-8", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-9", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-10", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-11", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-12", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-13", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-14", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-15", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-16", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-17", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-18", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-19", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-20", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-21", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-22", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-23", lang)}
                        </li>
                        <li>
                            {Translator.t("bacteria-list-24", lang)}
                        </li>
                    </ul>
                    <p className="my-20 text-[#9C9C9C]">
                        Design and Manufacturing by PT. Satria Nusa Enjinering
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bacteria;
