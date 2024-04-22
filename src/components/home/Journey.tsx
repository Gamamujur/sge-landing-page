import React from "react";
import Impact from "./Impact";
import About from "./About";

function Journey() {
  return (
    <div className="relative">
      <Impact />
      <div className="flex py-60">
        <div className="mx-auto max-w-7xl">
          <div className="text-[#0E4F94] text-5xl font-bold">
            A Journey to <br /> Grow Together
          </div>
          <p className="mt-7">
            Starting with experience in the electro-mechanical field since the
            1990s and civil construction in 2011, PT Satria Nusa Enjinering
            (SNE) was established with the aim of providing reliable water and
            wastewater management solutions for Indonesia's manufacturing
            industry
          </p>
          <p className="mt-7">
            SNE was officially established in 2020 and continues to grow rapidly
            with various successes throughout Indonesia. SNE has a workshop
            facility in Deli Serdang equipped with specialized equipment for the
            production of wastewater treatment machinery. SNE also has
            laboratories in Medan, Jakarta & Surabaya that support our engineers
            to collect and analyze data continuously for quality and
            cost-effective system design.
          </p>
          <button className="text-white bg-[#0E4F94] py-3 px-3 mt-8 rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Journey;