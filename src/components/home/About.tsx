"use client";
import SwiperCarousel from "../SwiperCarousel";

const About = () => {
  return (
    <section
      className="flex justify-center mt-10 mb-4 md:mb-10 px-5 xl:px-10 md:mx-0 items-center"
      id="about"
    >
      {/* <div className="md:pl-36 md:pr-12 mt-10">
        <div className="font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
          {Translator.t("about-us", lang)}
        </div>
        <div className="mt-6">
          <span className="font-bold text-base md:text-lg lg:text-xl xl:text-1xl mr-1">
            PT. Satria Nusa Enjinering (Satria Nusa)
          </span>
          <span className="text-base md:text-lg lg:text-xl xl:text-1xl">
            {Translator.t("satria-nusa-desc-1", lang)}
          </span>
        </div>

        <AboutLearnMore searchParams={searchParams} />
      </div> */}

      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <div className="w-full flex items-center justify-center relative mb-4 mt-4">
            {/* <NewCarousel /> */}
            <SwiperCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
