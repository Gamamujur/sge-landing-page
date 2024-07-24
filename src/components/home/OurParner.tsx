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
      alt: "aquaclear-cube",
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
    <div className="flex flex-col justify-center gap-10 py-20 mx-4 my-10 md:mx-auto md:max-w-7xl md:flex-col md:gap-20">
      <div className="mx-auto">
        <div className="text-4xl font-bold text-center text-[#282870] md:text-left">{Translator.t("our-partner-title", lang)}</div>
      </div>
      <div className="grid grid-cols-4 gap-6 justify-items-center place-items-center md:grid-cols-5 md:gap-10">
      {parner.map((item, index) => {
          if (index < 15) {
            return (
              <Image
                key={index}
                src={item.img}
                alt={item.alt}
                width={100}
                height={100}
              />
            );    
          }
        })}
      </div>
      <div className="flex items-center justify-center w-full gap-20 -mt-5">
        {parner.map((item, index) => {
          if (index > 14) {
            return (
              <Image
                key={index}
                src={item.img}
                alt={item.alt}
                width={100}
                height={100}
              />
            );    
          }
        })}
      </div>
    </div>
  );
}

export default OurParner;
