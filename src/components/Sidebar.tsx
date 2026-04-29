import { Terminal, User, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";

const navItems = [
  { icon: Terminal, label: "Blog", link: "#blog" },
  { icon: Briefcase, label: "Projects", link: "#projects" },
  { icon: User, label: "About Me", link: "#about" },
];

const socialLinks = [
  { icon: SiX, label: "Twitter", href: "https://x.com/HackWithNoman" },
  { icon: SiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hackwithnoman/" },
  { icon: SiGithub, label: "GitHub", href: "https://github.com/HackWithNoman" },
];

interface SidebarProps {
  onNavClick?: () => void;
}

const Sidebar = ({ onNavClick }: SidebarProps) => {
  return (
    <aside className="w-full p-6 lg:p-8 bg-primary md:h-screen md:overflow-y-auto md:border-r md:border-black/12 md:shadow-[4px_0_24px_-2px_rgba(0,0,0,0.03)] flex flex-col md:sticky md:top-0">
      {/* Profile Section */}
      <div className="flex flex-col items-start mb-2 px-3">
        <Link href="/" className="group inline-block mb-5 relative">
          <div className="w-20 h-20 rounded-full bg-border overflow-hidden ring-2 ring-transparent group-hover:ring-accent transition-all duration-300 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/avatar.jpg"
                alt="Noman"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
          </div>
        </Link>
        <h1 className="text-[1.5rem] font-extrabold text-text-primary tracking-tight mt-4">Noman</h1>
        <p className=" text-xs font-semibold text-accent mt-1 tracking-wide">Front-End Developer</p>
        <div className="text-xs flex items-center gap-1.5 text-text-secondary mt-2 tracking-wide">
          <MapPin size={14} />
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>

      <hr className="border-border my-6" />

      {/* Primary Navigation */}
      <nav className="mb-auto">
        <p className="text-[0.7rem] font-bold text-text-secondary uppercase tracking-wider mb-3 px-3">Menu</p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.link}
                  onClick={onNavClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[0.95rem] font-medium text-text-secondary hover:text-accent hover:bg-black/5 transition-all duration-300 group"
                >
                  <Icon size={18} strokeWidth={2} className="text-text-secondary group-hover:text-accent group-hover:-translate-y-0.5 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links - Pushed to bottom on Desktop */}
      <div className="mt-8 md:mt-0">
        <hr className="border-border mb-6 block md:hidden" />
        <p className="text-[0.7rem] font-bold text-text-secondary uppercase tracking-wider mb-3 px-3">Connect</p>
        <div className="flex flex-col gap-1">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                target="_blank"
                key={item.label}
                href={item.href}
                onClick={onNavClick}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-[0.875rem] font-medium text-text-secondary hover:text-text-primary hover:bg-black/5 transition-all duration-300 group"
              >
                <Icon size={16} className="group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
