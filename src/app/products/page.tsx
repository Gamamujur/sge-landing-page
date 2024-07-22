"use client";
import React from "react";
import Banner from "@/components/page/banner";
import Product from "@/components/page/Product";
import ProductSecondary from "@/components/page/ProductSecondary";
import Translator from '@/utils/Translator';
import { useSearchParams } from 'next/navigation';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || undefined;
  const machineries = [
    {
      title: Translator.t('aquaclear-cube-surface-aerator-title', lang),
      image: "/img/produk/productaquahelix.png",
      image2: "",
      text: Translator.t('aquaclear-cube-surface-aerator-desc-1', lang),
      text2:
        "<div class='mt-5 text-[#41444B]'>" + Translator.t('aquaclear-cube-surface-aerator-desc-2', lang) + "</div> <div class='mt-5 text-[#41444B]'>" + Translator.t('aquaclear-cube-surface-aerator-desc-3', lang) + "</div>",
    },
    {
      title: Translator.t('lamella-clarifier-tank', lang),
      image: "/img/produk/produk2.png",
      image2: "",
      text: Translator.t('lamella-clarifier-tank-desc', lang),
      text2: "",
    },
    {
      title: Translator.t('membrane-bio-reactor-title', lang),
      image: "/img/product/product1.png",
      image2: "",
      text: Translator.t('membrane-bio-reactor-desc-1', lang),
      text2:
        "<p>" + Translator.t('membrane-bio-reactor-desc-2', lang) + "</p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;text-align:justify;'>" + Translator.t('membrane-bio-reactor-desc-3', lang) + "</p><ol style='list-style-type: decimal;'><li>" + Translator.t('membrane-bio-reactor-desc-3-1', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-2', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-3', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-4', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-5', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-6', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-7', lang) + "</li><li><span >" + Translator.t('membrane-bio-reactor-desc-3-8', lang) + "</span></li></ol>",
    },
    {
      title: Translator.t('dissolved-air-flotation', lang),
      image: "/img/produk/produk4.png",
      image2: "",
      text: Translator.t('dissolved-air-flotation-desc-1', lang),
      text2:
        "<div class='mt-5 text-[#41444B]'>" + Translator.t('dissolved-air-flotation-desc-2', lang) + "</div><div class='mt-5 text-[#41444B]'>" + Translator.t('dissolved-air-flotation-desc-3', lang) + "</div><div class='mt-5 text-[#41444B]'>" + Translator.t('dissolved-air-flotation-desc-4', lang) + "</div>",
    },
    {
      title: Translator.t('filter-press-title', lang),
      image: "/img/produk/produk5.png",
      image2: "",
      text: Translator.t('filter-press-desc-1', lang),
      text2: "<div class='mt-5 text-[#41444B]'>" + Translator.t('filter-press-desc-2', lang) + "</div> <div class='mt-5 text-[#41444B]'class='mt-5 text-[#41444B]'>" + Translator.t('filter-press-desc-3', lang) + "</div class='mt-5 text-[#41444B]'><p>1. " + Translator.t('filter-press-desc-4-1', lang) + "</p><p>" + Translator.t('filter-press-desc-4-2', lang) + "</p><p>2. " + Translator.t('filter-press-desc-5-1', lang) + "</p><p>" + Translator.t('filter-press-desc-5-2', lang) + "</p><p>3. " + Translator.t('filter-press-desc-6-1', lang) + "</p><p>" + Translator.t('filter-press-desc-6-2', lang) + "</p><div>",
    },
    {
      title: Translator.t('wet-scrubber', lang),
      image: "/img/produk/produk6.png",
      image2: "",
      text: Translator.t('wet-scrubber-desc-1', lang),
      text2: "",
    },
  ];

  const bacteria = [
    {
      title: "Aerobic -  Compound Bacteria",
      image: "/img/produk/bakteri1.png",
    },
    {
      title: "Anaerobic -  Compound Bacteria",
      image: "/img/produk/bakteri2.png",
    },
  ];
  const clotes = [
    {
      title: "Filter Clothes",
      image: "/img/produk/clotes1.png",
    },
  ];
  return (
    <>
      <Banner title="Our Products" path="Home / Products" image="/bg3.png" />
      <div className="mx-auto max-w-7xl my-14">
        <div className="font-bold text-blue-800 pts-24 px-4">Machineries</div>
        {machineries.map((data, index) => (
          <Product key={index} data={data} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl my-14">
        <div className="font-bold text-blue-800 pts-24 px-4">
          Consumable - Bacteria
        </div>
        {bacteria.map((data, index) => (
          <ProductSecondary key={index} data={data} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl my-14">
        <div className="font-bold text-blue-800 pts-24 px-4">
          Consumable - Filter Clotes
        </div>
        {clotes.map((data, index) => (
          <ProductSecondary key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default page;
