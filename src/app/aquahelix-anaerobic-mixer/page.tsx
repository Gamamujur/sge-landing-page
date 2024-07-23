"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import React from "react";
import {useSearchParams} from "next/navigation";

function AquahelixAnaerobicMixer() {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || undefined;
    return (
        <>
            <div className="flex w-full justify-center bg-[#EDF2F5]">
                <Image
                    width={900}
                    height={600}
                    src="/img/solutions-and-product/anaerobic-mixer.svg"
                    className="z-20 object-cover px-5 mt-5 -my-40 max-w-5xl xl:mt-20 xl:px-0"
                    alt=""
                />
            </div>
            <div className="absolute z-10 flex justify-end w-full">
                <Image
                    className="z-0"
                    src="/img/solutions-and-product/pattern.png"
                    width={900}
                    height={600}
                    alt=""
                />
            </div>
            <div className="relative z-20 flex justify-center w-full px-5 mt-44 xl:px-0">
                <div className="max-w-7xl">
                    <div className="mt-5">
                        <span className="text-[#0E4F94] text-4xl font-semibold">
                            {Translator.t("aquahelix-anaerobic-mixer-title", lang)}
                        </span>
                    </div>
                    <p className="mt-5 text-base leading-6">
                        {Translator.t("aquahelix-anaerobic-mixer-desc-1", lang)}
                    </p>
                    <p className="mt-5 text-base leading-6">
                        {Translator.t("aquahelix-anaerobic-mixer-desc-2", lang)}
                    </p>
                    <p className="my-20 text-[#9C9C9C]">
                        Design and Manufacturing by PT. Satria Nusa Enjinering
                    </p>
                </div>
            </div>
        </>
    );
}

export default AquahelixAnaerobicMixer;
