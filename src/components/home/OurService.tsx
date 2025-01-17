"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function OurService() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  const serviceData = [
    {
      img: "/img/home/service1.png",
      alt: "waste",
      title: Translator.t("service-title-1", lang),
      desc: <div>{Translator.t("service-1-desc", lang)}</div>,
    },
    {
      img: "/img/home/service2.png",
      alt: "waste",
      title: Translator.t("service-title-2", lang),
      desc: <div>{Translator.t("service-2-desc", lang)}</div>,
    },
    {
      img: "/img/home/service3.png",
      alt: "waste",
      title: Translator.t("service-title-3", lang),
      desc: <div>{Translator.t("service-3-desc", lang)}</div>,
    },
    {
      img: "/img/home/service4.png",
      alt: "waste",
      title: Translator.t("service-title-4", lang),
      desc: (
        <ul className="list-disc ml-8">
          <li>AMDAL & UKL-UPL</li>
          <li>DELH & DPLH</li>
          <li>{Translator.t("service-4-desc-3", lang)}</li>
          <li>PROPER</li>
        </ul>
      ),
    },
  ];
  return (
    <div className="py-10 mt-10">
      <div className="text-xl md:text-5xl font-bold text-[#0E4F94] text-center">
        {Translator.t("our-service-title", lang)}
      </div>
      <p className="text-center mx-4 md:mx-auto md:w-[880px] mt-7 text-base">
        {Translator.t("our-service-desc", lang)}
      </p>
      <div className="hidden md:flex justify-center py-3 text-3xl mt-7 mx-auto max-w-7xl">
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 0 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 0 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(0)}
        >
          {Translator.t("service-title-1", lang)}
        </div>
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 1 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 1 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(1)}
        >
          {Translator.t("service-title-2", lang)}
        </div>
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 2 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 2 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(2)}
        >
          {Translator.t("service-title-3", lang)}
        </div>
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 3 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 3 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(3)}
        >
          {Translator.t("service-title-4", lang)}
        </div>
      </div>
      <div className="hidden md:flex">
        {serviceData[activeservice] && (
          <div className="mx-auto w-[880px] flex gap-12 justify-between items-center mt-12">
            <div className="w-1/3 rounded-3xl overflow-hidden">
              <Image
                src={serviceData[activeservice].img}
                alt={serviceData[activeservice].alt}
                width={600}
                height={600}
              />
            </div>
            <div className="w-2/3">
              <div className="text-3xl text-[#0E4F94] font-bold">
                {serviceData[activeservice].title}
              </div>
              <div className="mt-7 text-base">
                {serviceData[activeservice].desc}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden mx-4">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="mx-auto flex flex-col gap-12 justify-between items-center mt-12"
          >
            <div className="rounded-3xl overflow-hidden mx-10">
              <Image src={item.img} alt={item.alt} width={600} height={600} />
            </div>
            <div className="">
              <div className="text-lg text-[#0E4F94] font-bold text-center">
                {index + 1}. {item.title}
              </div>
              <div className="mt-7 text-base">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurService;
