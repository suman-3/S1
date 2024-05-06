import Footer from "@/components/Footer/footer";
import Header from "@/components/Navbar/Navbar";
import Banner from "@/components/utils/banner";
import { Inter } from "next/font/google";
import "./styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "InnoFusion 1.0",
  description: "Kolkata's First ever Hardware + Software Hackathon",
};
//bg-gradient-to-br from-indigo-900 to-cyan-700
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased text-[#aaccf8] tracking-tight select-none grainy bg-gradient-to-tr from-[#160f4e] to-[#010007] opacity-100`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
          <Footer />
        </div>
      </body>
    </html>
  );
}
