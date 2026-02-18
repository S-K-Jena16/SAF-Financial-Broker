import { useState, useEffect } from "react";
import { services } from "../../data/services";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services", dropdown: true },
  { path: "/contact", label: "Contact" },
  { path: "/career", label: "Career" },
];

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();

  // Scroll Hide / Show Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
  };

  return (
    <header
      onMouseMove={handleMouseMove}
      className={`fixed top-0 w-full z-50 bg-white shadow-lg border-b border-amber-400/20
      transition-transform duration-500 ease-in-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Mouse Reflection */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mouseX}px 50%, rgba(255,215,0,0.12), transparent 40%)`,
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* LOGO */}
          <Link to="/">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="h-28 md:h-40 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((nav) => {
              const active = location.pathname === nav.path;

              if (nav.dropdown) {
                return (
                  <li
                    key={nav.label}
                    className="relative"
                    onMouseEnter={() => setShowServicesDropdown(true) }
                    onMouseLeave={() => setTimeout(() => setShowServicesDropdown(false),100)}
                  >
                    {/* Trigger */}
                    <Link
                      to="/services"
                      className={`text-lg font-medium ${
                        active
                          ? "text-amber-500"
                          : "text-gray-800 hover:text-amber-500"
                      }`}
                    >
                      Services
                    </Link>

                    {/* Dropdown */}
                    {showServicesDropdown && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl p-3 border border-amber-200"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            onClick={() => setShowServicesDropdown(false)}
                            
                            className="block px-4 py-2 rounded-lg hover:bg-amber-400"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                  )}
                </li>

                );
              }

              return (
                <li key={nav.path}>
                  <Link
                    to={nav.path}
                    className={`text-lg font-medium ${
                      active
                        ? "text-amber-500"
                        : "text-gray-800 hover:text-amber-500"
                    }`}
                  >
                    {nav.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* APPLY BUTTON */}
          <div className="hidden md:block">
            <Link
              to="/apply"
              className="px-7 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-500"
            >
              Apply Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`md:hidden text-2xl transition-all duration-300
            ${isOpen 
              ? "rotate-180 scale-110 text-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.6)]" 
              : "rotate-0 scale-100 text-gray-800"}
            hover:scale-110 active:scale-95`}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
        <div
        className={`md:hidden mt-4 bg-white rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 ease-out
        ${isOpen ? "max-h-[500px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"}`}
      >
        {navLinks.map((nav) => {
          if (nav.dropdown) {
            return (
              <div key={nav.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between w-full py-3 text-lg"
                >
                  Services
                  <span
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ease-out
                  ${
                    mobileServicesOpen
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 rounded-lg hover:bg-amber-400"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={nav.path}
              to={nav.path}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-lg"
            >
              {nav.label}
            </Link>
          );
        })}

        {/* APPLY NOW BUTTON */}
        <div className="pt-4">
        <Link
         to="/apply"
        onClick={() => setIsOpen(false)}
        className="block text-center px-6 py-3 rounded-full font-semibold text-black
        bg-gradient-to-r from-amber-400 to-yellow-500
        hover:scale-105 active:scale-95 transition"
       >
        Apply Now
        </Link>
        </div>
        </div>
        )}
      </nav>
    </header>
  );
}
