"use client";
import Image from "next/image";
import React from "react";
import Tooltip from "../Hover/Tooltips";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";

function ImpactEquivalent({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="relative mt-9 pb-6">
      <div className="text-[#0E4F94] text-sm md:text-2xl text-center font-semibold">
        Equivalent to clean water access for:
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 md:gap-8 ">
        <div
          className="bg-opacity-50 relative px-5 py-9 rounded-2xl bg-left bg-cover shadow-md"
          style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
        >
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-50 rounded-2xl"></div>

          <div className="relative">
            <div className="flex gap-5 justify-center items-center">
              <Image
                className="h-11 w-auto md:h-auto"
                src={"/img/home/home.png"}
                alt=""
                width={100}
                height={100}
              />
              <div>
                <div className="text-[#0E4F94] font-bold text-sm md:text-3xl">
                  {(total).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
                <div className="mt-3 font-bold text-sm md:text-base">
                  Households
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-2 bottom-2 z-10">
            <Tooltip content={Translator.t("tooltips-1", lang)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-info text-blue-500 opacity-60 hover:opacity-100"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </Tooltip>
          </div>
        </div>
        <div
          className="bg-opacity-50 relative px-5 py-9 rounded-2xl bg-left bg-cover shadow-md"
          style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
        >
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-50 rounded-2xl"></div>

          <div className="relative">
            <div className="flex gap-5 justify-center items-center">
              <Image
                className="h-11 w-auto md:h-auto"
                src={"/img/home/people.png"}
                alt=""
                width={70}
                height={70}
              />
              <div>
                <div className="text-[#0E4F94] font-bold text-sm md:text-3xl">
                  {((total * 1000) / 200).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
                <div className="mt-3 font-bold text-sm md:text-base">
                  People
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-2 bottom-2 z-10">
            <Tooltip content={Translator.t("tooltips-2", lang)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-info text-blue-500 opacity-60 hover:opacity-100"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactEquivalent;
