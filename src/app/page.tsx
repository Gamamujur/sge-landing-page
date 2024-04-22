"use client";
import About from "@/components/home/About";
import Expand from "@/components/home/Expand";
import Hero from "@/components/home/Hero";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import OurProject from "./ourproject";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";
import Impact from "@/components/home/Impact";
import Journey from "@/components/home/Journey";

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <>
      <Hero />
      <Journey />
      <section id="our-service-section">
        <Expand />
      </section>
      <section className="flex justify-center py-12" id="portofolio">
        <div className="flex flex-col mx-4 max-w-7xl">
          <div className="text-3xl font-bold text-center uppercase mt-7 md:text-4xl lg:text-5xl">
            {Translator.t("project-portofolio-title", lang)}
          </div>
          <p className="mt-8 mb-10 text-base text-center md:text-lg lg:text-xl">
            {Translator.t("project-portofolio-desc", lang)}
          </p>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full my-5"
            src="/map.png"
            alt=""
          />
        </div>
      </section>
      <OurProject />
      <section className="flex flex-col justify-center">
        <div className="text-3xl font-bold text-center uppercase mt-14 md:text-4xl lg:text-5xl">
          {Translator.t("our-products-partners", lang)}
        </div>
        <span className="w-5/6 mx-auto md:w-1/2 lg:mb-36">
          <Marquee speed={100}>
            <div className="flex items-center justify-center py-12 mx-5 space-x-9">
              <Image
                unoptimized
                width={100}
                height={100}
                src="/smi.png"
                className="h-16"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                className="h-16"
                src="/aquahelix-mbr-pump.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/aquahelix.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/teco.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/sge.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/nadic.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/seg.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/yuema.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/transm.png"
                alt=""
              />
            </div>
          </Marquee>
        </span>
      </section>
    </>
  );
}
