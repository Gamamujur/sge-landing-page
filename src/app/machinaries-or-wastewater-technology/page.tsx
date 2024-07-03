"use client";

import React from "react";
import Image from "next/image";
import Translator from "@/utils/Translator";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Machineries = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <div>
      <div className="relative">
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full "
          src="/img/solutions-and-product/banner.png"
          alt=""
        />
        <div className="px-5 mx-auto max-w-7xl xl:px-0">
          <h1 className="absolute top-0 w-full text-xl font-bold text-white translate-y-5 md:w-1/2 md:translate-y-20 xl:translate-y-32 lg:translate-y-10 sm:text-3xl md:text-5xl lg:top-10">
            <div data-aos="zoom-out-up" data-aos-duration="800">
              {Translator.t("machinaries-title", lang)}
            </div>
          </h1>
        </div>
        <div className="px-5 py-20 xl:px-0">
          <Image
            className="absolute right-0 z-0"
            src="/img/solutions-and-product/pattern.png"
            width={900}
            height={600}
            alt=""
          />
          <div className="relative z-50 w-2/3 mx-auto text-center max-w-7xl lg:w-1/2">
            <h1
              className="text-[#0E4F94] font-bold text-5xl"
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              {Translator.t("machinaries-title", lang)}
            </h1>
            <p
              className="mt-5 text-base text-black"
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              {Translator.t("machinaries-desc", lang)}
            </p>
          </div>
          <div className="z-50 px-10 mx-auto max-w-7xl">
            <div
              className="grid w-full grid-cols-1 gap-20 mt-10 md:grid-cols-2 xl:grid-cols-3 "
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <Link
                href={Translator.gotoUrl("/membrane-bio-reactor", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64"
                  src="/img/solutions-and-product/mbr.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Membrane Bio Reactor (MBR)
                </p>
              </Link>
              <Link
                href={Translator.gotoUrl("/reverse-osmosis", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/reverse-osmosis.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Reverse Osmosis
                </p>
              </Link>
              <Link
                href={Translator.gotoUrl("/dissolved-air-flotation", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/daf.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Dissolved Air Flotation
                </p>
              </Link>
              <Link
                href={Translator.gotoUrl("/aquahelix-surface-aerator", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/aquahelix.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Aquahelix Surface Aerator
                </p>
              </Link>
              <Link
                href={Translator.gotoUrl("/filter-press", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/fp.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Filter Press
                </p>
              </Link>
              <Link
                href={Translator.gotoUrl("/wet-scrubber", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/ws.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Wet Scrubber
                </p>
              </Link>
              <Link
                href={Translator.gotoUrl("/aquahelix-aquaclear", lang)}
                className="relative flex flex-col items-center justify-end py-5 overflow-hidden transition duration-300 ease-in-out hover:rounded-2xl hover:font-bold hover:bg-[#EDF2F5]"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/lct.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-semibold text-center">
                  Aquahelix AquaClear Cube
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machineries;
