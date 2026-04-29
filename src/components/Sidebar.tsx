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
    <aside className="w-full p-8 bg-primary md:h-screen md:overflow-y-auto md:border-r md:border-border">
      {/* Profile Image as Logo */}
      <a href="/" className="flex items-start mb-4">
        <div className="w-16 h-16 rounded-full bg-border overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Noman"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </a>

      <hr className="border-border my-6" />

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
                  className="flex items-center gap-3 text-[1rem] font-bold text-text-primary hover:text-accent transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className="border-border my-6" />

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
                className="flex items-center gap-2 text-[0.875rem] text-text-secondary hover:text-accent transition-colors"
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
