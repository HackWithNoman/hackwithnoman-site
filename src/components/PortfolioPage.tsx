"use client";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import HeroSection from "./HeroSection";
import BlogNotesSection from "./BlogNotesSection";
import ProjectsSection from "./ProjectsSection";
import ToolsSection from "./ToolsSection";
import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <div className="bg-[#FAF9F6] font-['Inter',_system-ui,_sans-serif] text-[#1a1a1a] min-h-screen">
      {/* Top Navigation - visible below lg */}
      <div className="lg:hidden">
        <TopNav />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        {/* Left Sidebar - visible on lg+ */}
        <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-r lg:border-gray-200">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-full md:w-4/5 p-6 md:p-12 mx-auto lg:mx-0">
          <HeroSection />
          <ProjectsSection />
          <BlogNotesSection />
          <ToolsSection />
        </main>
      </div>
    </div>
  );
};

export default PortfolioPage;
