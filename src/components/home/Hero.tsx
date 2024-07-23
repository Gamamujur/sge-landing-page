"use client";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
import Image from "next/image.js";
import HeroButton from "./HeroButton";

const Hero = () => {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || undefined;

    return (
        <section className="relative">
            <Image
                src={"/img/home/main-home.png"}
                className="object-cover h-[320px] md:h-[508px]"
                alt=""
                width={2000}
                height={400}
            />

            <div className="absolute top-0 left-0 flex justify-between w-full h-full">
                <div className="flex flex-col justify-center w-1/2 pl-20 space-y-5">
                    <h1 className="text-[40px] font-[700] leading-10 text-black">
                        {Translator.t("hero-header", lang)}
                    </h1>
                    <h1 className="font-bold tracking-tighter">Contact Us</h1>

                    <div className="flex gap-5">
                        <HeroButton label="WhatsApp" />
                        <HeroButton label="Email" />
                    </div>
                </div>

                <div className="relative w-1/2 h-full">
                    <Image
                        src={"/img/home/hero-main-1.png"}
                        alt="Hero Image"
                        width={490}
                        height={490}
                        className="absolute left-52"
                    />

                    <Image
                        src={"/img/home/hero-main-2.png"}
                        alt="Hero Image"
                        width={240}
                        height={240}
                        className="absolute bottom-0 left-[160px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
