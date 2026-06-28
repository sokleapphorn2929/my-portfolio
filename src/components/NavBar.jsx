import { useState, useRef, useEffect } from "react";

export function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  // Track geometry values for the links only
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const tabsRef = useRef({});

  const menuItems = [
    "About",
    "Skill",
    "Project",
    "Experience",
    "Contact",
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (item) => {
    setActiveTab(item);
    setIsOpen(false); // Closes the mobile toggle menu drawer if it's open

    const targetSection = document.getElementById(item);
    if (targetSection) {
      // Offset matches your navbar's height + padding to keep titles visible
      const navbarOffset = 90; 
      const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Triggers when the section crosses into the viewport center
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    menuItems.forEach((item) => {
      const el = document.getElementById(item);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Recalculate dimensions dynamically
  useEffect(() => {
    const activeElement = tabsRef.current[activeTab];
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        top: activeElement.offsetTop,
        width: activeElement.offsetWidth,
        height: activeElement.offsetHeight,
      });
    }
  }, [activeTab, isOpen]);

  return (
    <div className="flex justify-center w-full px-4">
      <nav
        className={`fixed top-7 z-50 w-full max-w-88 md:max-w-2xl rounded-xl outline bg-white/70 shadow-lg ${
          isDarkMode
            ? "shadow-blue-800/20 outline-white/10"
            : "shadow-black/20 outline-white/50"
        } backdrop-blur-md transition-all duration-300 md:h-12 dark:bg-black/20 flex flex-col md:flex-row md:items-center px-4 justify-between`}
      >
        {/* Top Header Row (Mobile View Header) */}
        <div className="flex items-center justify-between w-full md:w-auto h-12 md:h-full">
          <div className="font-bold flex items-center h-full">
            <h2 className="text-lg text-blue-600">SOKLEAP.</h2>
          </div>

          {/* Mobile Right Utility Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-1.5 text-current focus:outline-none ${isDarkMode ? "dark-btn" : "light-btn"} rounded-lg`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sun"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-1.5 text-current focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-list-filter transition-transform duration-200 ${
                  isOpen ? "rotate-90 text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <path d="M2 5h20" />
                <path d="M6 12h12" />
                <path d="M9 19h6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Content Area */}
        <div
          className={`grid transition-all duration-300 ease-in-out w-full md:flex md:items-center md:gap-4 md:w-auto ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pb-4 md:pb-0"
              : "grid-rows-[0fr] opacity-0 md:opacity-100 pb-0"
          }`}
        >
          <div className="overflow-hidden md:overflow-visible flex flex-col md:flex-row md:items-center md:gap-4">
            {/* Nav Links Container holding the active glass background element */}
            <div className="relative">
              <ul className="relative flex flex-col gap-1 text-sm font-semibold pt-1 md:pt-0 md:flex-row md:items-center md:gap-1">
                {/* SMOOTH GLASSY SLIDING BACKDROP */}
                <div
                  className="absolute rounded-lg bg-white/5 outline outline-black/5 dark:outline-white/10 backdrop-blur-sm transition-all duration-300 ease-out pointer-events-none"
                  style={{
                    transform: `translate3d(${indicatorStyle.left}px, ${indicatorStyle.top}px, 0)`,
                    width: `${indicatorStyle.width}px`,
                    height: `${indicatorStyle.height}px`,
                  }}
                />

                {/* ITERATE CONTENT LINKS */}
                {menuItems.map((item) => (
                  <li key={item} className="w-full md:w-auto">
                    <button
                      ref={(el) => (tabsRef.current[item] = el)}
                      onClick={() => handleNavClick(item)} // Swapped direct state update for our scroll controller
                      className={`w-full text-center md:text-left md:w-auto block px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer hover:text-blue-600 ${
                        activeTab === item ? "text-blue-600 font-bold" : ""
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dark Mode Toggle for Desktop (Kept outside the absolute tracking wrapper) */}
            <div className="hidden md:block border-l border-black/10 dark:border-white/10 pl-4">
              <button
                onClick={toggleDarkMode}
                className={`flex items-center justify-center text-current p-1.5 hover:text-purple-600 transition-colors duration-200 ${isDarkMode ? "dark-btn" : "light-btn"} rounded-lg`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon"
                  >
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
