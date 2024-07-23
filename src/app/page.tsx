import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import ProjectMap from "@/components/home/ProjectMap";
import CompanyProfile from "@/components/home/CompanyProfile";
import OurParner from "@/components/home/OurParner";
import OurService from "@/components/home/OurService";
import toast, { Toaster } from 'react-hot-toast';
import CarouselComponent from "@/components/home/CarouselComponent";
import SGECarousel from "@/components/home/SGECarousel";

export default function HomePage() {

  return (
    <>
    <div><Toaster/></div>
      <Hero />
      <SGECarousel/>
      <OurParner />
    </>
  );
}
