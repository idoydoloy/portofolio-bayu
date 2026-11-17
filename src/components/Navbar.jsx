
import { useState, useEffect } from 'react';

import {
  Home,
  UserRound,
  BriefcaseBusiness,
  FolderKanban,
  Code2,
  Mail,
  ChevronDown,
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [manualExpand, setManualExpand] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'About', href: '#about', icon: UserRound, id: 'about' },
    { name: 'Experience', href: '#experience', icon: BriefcaseBusiness, id: 'experience' },
    { name: 'Projects', href: '#projects', icon: FolderKanban, id: 'projects' },
    { name: 'Skills', href: '#skills', icon: Code2, id: 'skills' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 80;

      setIsScrolled(scrolled);

      if (!scrolled) {
        setManualExpand(false);
      }

      // Menentukan section yang sedang terlihat
      let currentSection = 'home';

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && section.getBoundingClientRect().top <= 180) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isExpanded = !isScrolled || manualExpand;

  return (
    <nav
      className={`
        fixed z-50 left-1/2 -translate-x-1/2
        transition-all duration-500 ease-in-out
        ${
          isMobile
            ? 'bottom-4 top-auto w-[calc(100%-24px)] max-w-[430px]'
            : 'top-5 bottom-auto w-max max-w-[95%]'
        }
      `}
    >
      <div
        className={`
          flex items-center
          bg-white/90 backdrop-blur-xl
          border border-[#DCE9EC]
          shadow-[0_8px_35px_rgba(25,105,133,0.13)]
          rounded-full
          transition-all duration-500 ease-in-out
          ${
            isMobile
              ? 'w-full justify-between gap-1 p-2'
              : 'gap-2 p-2'
          }
        `}
      >

        {/* LOGO - DESKTOP */}
        {!isMobile && (
          <a
            href="#home"
            aria-label="Home"
            className="
              w-10 h-10 shrink-0 rounded-full
              bg-[#2283A6] text-white
              flex items-center justify-center
            "
          >
            <Code2 size={21} />
          </a>
        )}

        {/* MENU */}
        <div
          className={`
            flex items-center overflow-hidden
            transition-all duration-500 ease-in-out
            ${
              isMobile
                ? 'w-full justify-between gap-1'
                : `gap-1 ${
                    isExpanded
                      ? 'max-w-[650px] opacity-100'
                      : 'max-w-0 opacity-0'
                  }`
            }
          `}
        >
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                title={link.name}
                aria-label={link.name}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setActiveSection(link.id)}
                className={`
                  flex items-center rounded-full
                  font-semibold whitespace-nowrap
                  transition-all duration-300

                  ${
                    isMobile
                      ? `flex-1 min-w-0 flex-col justify-center gap-1 py-2 px-0 ${
                          isActive
                            ? 'bg-[#E5F3F8] text-[#2283A6]'
                            : 'text-[#647780] hover:bg-[#E5F3F8]'
                        }`
                      : `gap-2 px-3 py-2.5 text-sm ${
                          isActive && !isScrolled
                            ? 'text-[#2283A6]'
                            : 'text-[#647780]'
                        } hover:bg-[#E5F3F8] hover:text-[#2283A6]`
                  }
                `}
              >
                <Icon size={isMobile ? 19 : 17} strokeWidth={2} />

                {!isMobile && (
                  <span>{link.name}</span>
                )}
              </a>
            );
          })}
        </div>

        {/* TOGGLE - DESKTOP */}
        {!isMobile && isScrolled && (
          <button
            onClick={() => setManualExpand(!manualExpand)}
            aria-label={
              isExpanded
                ? 'Collapse navigation'
                : 'Expand navigation'
            }
            aria-expanded={isExpanded}
            className="
              w-10 h-10 shrink-0 rounded-full
              bg-[#E5F3F8] text-[#2283A6]
              hover:bg-[#2283A6] hover:text-white
              flex items-center justify-center
              transition-all duration-300
            "
          >
            <ChevronDown
              size={19}
              className={`
                transition-transform duration-300
                ${isExpanded ? 'rotate-180' : ''}
              `}
            />
          </button>
        )}

      </div>
    </nav>
  );
}
