import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import BlogNotesSection from "./BlogNotesSection";
import DeepDivesSection from "./DeepDivesSection";
import ProjectsSection from "./ProjectsSection";
import ToolsSection from "./ToolsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <div className="bg-[#FAF9F6] font-['Inter',_system-ui,_sans-serif] text-[#1a1a1a] min-h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        <Sidebar />

        <main className="w-full md:w-4/5 p-6 md:p-12">
          <HeroSection />
          <BlogNotesSection />
          <DeepDivesSection />
          <ProjectsSection />
          <ToolsSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
