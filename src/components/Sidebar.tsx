import { Terminal, User } from "lucide-react";
import Image from "next/image";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";

const navItems = [
  { icon: Terminal, label: "Blog", link: "#blog" },
  { icon: User, label: "Projects", link: "#projects" },
  { icon: Terminal, label: "About Me", link: "#about" },
];

const socialLinks = [
  { icon: SiX, label: "Twitter", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiGithub, label: "GitHub", href: "#" },
];

interface SidebarProps {
  onNavClick?: () => void;
}

const Sidebar = ({ onNavClick }: SidebarProps) => {
  return (
    <aside className="w-full p-8 bg-[#FAF9F6] md:h-screen md:overflow-y-auto md:border-r md:border-[#E5E7EB]">
      {/* Profile Image as Logo */}
      <a href="/" className="flex items-start mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Noman"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </a>

      <hr className="border-[#E5E7EB] my-6" />

      {/* Primary Navigation */}
      <nav className="mb-8">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.link}
                  onClick={onNavClick}
                  className="flex items-center gap-3 text-[1rem] font-bold text-[#111827] hover:text-[#D84B7E] transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className="border-[#E5E7EB] my-6" />

      {/* Stay Connected Section with Icons */}
      <div>
        <h3 className="text-[1rem] font-bold mb-4">Stay Connected</h3>
        <div className="flex flex-col gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onNavClick}
                className="flex items-center gap-2 text-[0.875rem] text-[#6B7280] hover:text-[#D84B7E] transition-colors"
              >
                <Icon size={14} />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
