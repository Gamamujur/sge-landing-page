import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter, Open_Sans } from "next/font/google";
import Navbar from "@/components/headers/Navbar";
import Contact from "@/components/footer/Contact";
import NotSupport from '@/components/mobile/NotSupport';
import SGEFooter from "@/components/home/SGEFooter";

const inter = Inter({ subsets: ["latin"] });
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Satria Guna Elektrik",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${opensans.className} pts-20 text-[#41444B]`}>
        <Navbar />
        {children}
        <SGEFooter/>
        {/* <NotSupport /> */}
      </body>
    </html>
  );
}
