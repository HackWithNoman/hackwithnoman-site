import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F9F7F2]" id="home">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text Content - 65% width */}
        <div className="w-full md:w-[65%]">
          {/* Main Heading */}
          <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold tracking-tight text-[#111827] mb-6">
            Hey, I'm Noman!
          </h1>

          {/* Body Paragraphs */}
          <div className="space-y-4">
            <p className="text-[1.125rem] leading-[1.7] text-[#111827]">
              I'm a developer, writer, and creator. I build things for the web
              and share what I learn{" "}
              <Link href="/" className="text-[#D84B7E] underline">
                writing on this blog
              </Link>
              .
            </p>
            <p className="text-[1.125rem] leading-[1.7] text-[#111827]">
              Currently exploring new ways to build modern, accessible web
              applications with clean code and thoughtful design.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#F3F1ED] border border-[#E5E7EB] px-4 py-2 rounded-sm flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Download
                size={16}
                strokeWidth={1.5}
                className="text-[#A1365D]"
              />
              <Link href="/" className="text-[#A1365D] font-medium">
                Download CV
              </Link>
            </button>
          </div>
        </div>

        {/* Illustration Placeholder - 35% width */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/avatar.jpg"
              alt="Noman"
              className="w-full h-full object-cover rounded-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
