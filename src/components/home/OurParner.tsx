"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function OurParner() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const parner = [
    {
      img: "/img/partner/aquahelix_logo 1.png",
      alt: "aquahelix",
    },
    {
      img: "/img/partner/teco_logo 1.png",
      alt: "teco",
    },
    {
      img: "/img/partner/tranmax 1.png",
      alt: "tranmax",
    },
    {
      img: "/img/partner/tsurumi.png",
      alt: "tsurumi",
    },
    {
      img: "/img/partner/Cakoeda.png",
      alt: "cokoeda",
    },
    {
      img: "/img/partner/speck 1.png",
      alt: "speck",
    },
    {
      img: "/img/partner/abb 1.png",
      alt: "abb",
    },
    {
      img: "/img/partner/hydracell 1.png",
      alt: "hydracell",
    },
    {
      img: "/img/partner/APP Kenji.png",
      alt: "APP Kenji",
    },
    {
      img: "/img/partner/image 40.png",
      alt: "image 40",
    },
    {
      img: "/img/partner/pentair (1).png",
      alt: "pentair",
    },
    {
      img: "/img/partner/metering.png",
      alt: "metering",
    },
    {
      img: "/img/partner/futsu.png",
      alt: "futsu",
    },
    {
      img: "/img/partner/Ki-deb.png",
      alt: "Ki-deb",
    },
    {
      img: "/img/partner/elektrim.png",
      alt: "elektrim",
    },
    {
      img: "/img/partner/Yuema logo 1.png",
      alt: "Yuema",
    },
    {
      img: "/img/partner/toshirama.png",
      alt: "toshirama",
    },
    {
      img: "/img/partner/ebara.png",
      alt: "ebara",
    },
    {
      img: "/img/partner/rockwell.png",
      alt: "rockwell-automation",
    },
  ];
  return (
    <div className="flex flex-col justify-between gap-10 py-20 mx-4 my-10 md:mx-auto md:max-w-7xl md:flex-row md:gap-3">
      <div>
        <div className="text-4xl font-bold text-[#0E4F94] text-center md:text-left">{Translator.t("our-partner-title", lang)}</div>
        <p className="max-w-xl text-base text-center mt-7 md:text-left">
          {Translator.t("our-partner-desc", lang)}
        </p>
      </div>
      <div className="grid items-center justify-center grid-cols-4 gap-6 md:grid-cols-5 md:gap-10">
        {parner.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.alt}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}

export default OurParner;
