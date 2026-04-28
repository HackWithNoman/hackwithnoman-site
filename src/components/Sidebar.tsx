import { Home, FileText, Search, Code, Wrench, Mail } from "lucide-react";
import { SiGithub, SiX, SiLinkedin } from "react-icons/si";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: FileText, label: "Blog" },
  { icon: Search, label: "Deep Dives" },
  { icon: Code, label: "Projects" },
  { icon: Wrench, label: "Tools" },
  { icon: Mail, label: "Contact" },
];

const socialLinks = [
  { icon: SiX, label: "Twitter", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiGithub, label: "GitHub", href: "#" },
];

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/5 md:sticky md:top-0 p-6 md:h-screen md:overflow-y-auto border-r border-gray-200">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-6 overflow-hidden ring-2 ring-gray-100">
        <img
          src="https://images.pexels.com/photos/4487599/pexels-photo-4487599.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name/Title */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-1">Noman</h1>
        <p className="text-sm text-gray-500">Front-End Developer</p>
      </div>

      {/* About Me */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 leading-relaxed">
          Developer, writer, and creator. I build things for the web and share
          what I learn.
        </p>
      </div>

      {/* Vertical Nav */}
      <nav className="mb-8">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-gray-600 px-3 py-2 pl-0 hover:pl-3 hover:border-l-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-150"
                >
                  <Icon size={16} strokeWidth={1.5} className="text-gray-400" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className="border-gray-200 mb-6" />

      {/* Stay Connected */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Stay Connected
        </h3>
        <div className="flex flex-col gap-2">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition-colors duration-150"
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
