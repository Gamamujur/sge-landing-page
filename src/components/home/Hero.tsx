"use client";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
import Image from "next/image.js";

const Hero = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <section className="relative">
      <Image src={"/img/home/hero.png"} alt="" width={2000} height={400} />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center font-bold leading-snug">
        <div className="w-[800px]">
          Sustainability Starts <br /> <div>from Reliable Engineering</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
