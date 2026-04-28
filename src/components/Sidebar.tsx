import { Terminal, Pencil, User, Moon } from "lucide-react";

const navItems = [
  { icon: Terminal, label: "Blog" },
  { icon: User, label: "Projects" },
  { icon: Terminal, label: "About Me" },
];

const socialLinks = [
  { label: "Email signup", href: "#" },
  { label: "Bluesky", href: "#" },
  { label: "RSS feed", href: "#" },
];

interface SidebarProps {
  onNavClick?: () => void;
}

const Sidebar = ({ onNavClick }: SidebarProps) => {
  return (
    <aside className="w-full p-8 bg-[#FAF9F6] md:h-screen md:overflow-y-auto md:border-r md:border-[#E5E7EB]">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        {/* Floppy disk icon/emoji */}
        <span className="text-xl" role="img" aria-label="floppy disk">
          💾
        </span>

        {/* Name/Title */}
        <div className="flex-1">
          <h1 className="text-[1.125rem] font-bold text-[#111827]">Noman</h1>
        </div>

        {/* Utility Icons */}
        <div className="flex items-center gap-2">
          {/* Moon icon for dark mode */}
          <Moon size={18} strokeWidth={1.5} className="text-[#111827]" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#E5E7EB] my-6" />

      {/* About Me Section */}
      <div className="mb-8">
        <h2 className="text-[1rem] font-bold mb-4">About Me</h2>
        <p className="text-[0.875rem] leading-[1.5] text-[#374151]">
          Hi, I'm <span className="text-[#D84B7E]">Noman</span>! I'm a
          developer, writer, and creator. I build things for the web and share
          what I learn. 🌱
        </p>
      </div>

      {/* Divider */}
      <hr className="border-[#E5E7EB] my-6" />

      {/* Primary Navigation */}
      <nav className="mb-8">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href="#"
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

      {/* Divider */}
      <hr className="border-[#E5E7EB] my-6" />

      {/* Stay Connected Section */}
      <div>
        <h3 className="text-[1rem] font-bold mb-4">Stay Connected</h3>
        <div className="flex flex-col gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onNavClick}
              className="text-[0.875rem] text-[#6B7280] hover:underline transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
