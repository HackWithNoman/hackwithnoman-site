"use client";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import BlogNotesSection from "./BlogNotesSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import BackToTop from "./BackToTop";

const PortfolioPage = () => {
  return (
    <div className="bg-primary font-['Inter',_system-ui,_sans-serif] text-custom-primary min-h-screen">
      {/* Top Navigation - visible below lg */}
      <div className="lg:hidden sticky top-0 z-40">
        <TopNav />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        {/* Left Sidebar - visible on lg+ */}
        <div className="hidden lg:block lg:w-1/5 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-full md:w-4/5 p-6 md:p-12 mx-auto lg:mx-0">
          <HeroSection />
          <AboutSection />
          <BlogNotesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>

      {/* Back to Top Component */}
      <BackToTop />
    </div>
  );
};

export default PortfolioPage;
