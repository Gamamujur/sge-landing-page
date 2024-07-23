"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SGECarousel = () => {
    const carouselItems = [
        {
            id: 1,
            image: "/carousel/1.png",
            altText: "Image 1",
        },
        {
            id: 2,
            image: "/carousel/2.png",
            altText: "Image 2",
        },
        {
            id: 3,
            image: "/carousel/3.png",
            altText: "Image 3",
        },
        {
            id: 4,
            image: "/carousel/4.png",
            altText: "Image 4",
        },
        {
            id: 5,
            image: "/carousel/5.png",
            altText: "Image 5",
        },
        {
            id: 6,
            image: "/carousel/6.png",
            altText: "Image 6",
        },
        {
            id: 7,
            image: "/carousel/7.png",
            altText: "Image 7",
        },
        {
            id: 8,
            image: "/carousel/8.png",
            altText: "Image 8",
        },
    ];

    const itemsPerSlide = 3;
    const slides = [];

    for (let i = 0; i < carouselItems.length; i += itemsPerSlide) {
        slides.push(carouselItems.slice(i, i + itemsPerSlide));
    }

    return (
        <div className="mt-20">
            <h1 className="mb-10 text-4xl font-bold text-center text-[#282870] md:text-center">
                Our Projects
            </h1>
            <Carousel showThumbs={false} dynamicHeight={true}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex h-full gap-5 px-20">
                        {slide.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.altText}
                                    className="max-h-[400px]"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SGECarousel;
