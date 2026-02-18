import { useState, useEffect } from "react";

const contact = {
  phone: "+971 (04) 885 4003",
  website: "safinanceservice.com",
  address: "Dubai, UAE",
};

export default function TopBrandHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shrink header and change bg on scroll
  const headerStyle =
    scrollY > 50
      ? "bg-white shadow-lg backdrop-blur-md py-2"
      : "bg-white/50 backdrop-blur-sm py-4";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${headerStyle}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/images/logo.jpg"
              alt="Company logo"
              className="h-14 sm:h-16 lg:h-20 w-auto max-h-[80px] object-contain transition-all duration-500"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-slate-700">
            {/* Phone */}
            <div className="relative group">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-amber-300/50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                {contact.phone}
              </a>
              {/* Tooltip */}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Call us now
              </span>
            </div>

            {/* Website */}
            <div className="relative group">
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-amber-300/50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </span>
                {contact.website}
              </a>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Visit our site
              </span>
            </div>

            {/* Address */}
            <div className="relative group">
              <div className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-amber-300/50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                {contact.address}
              </div>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Locate us on map
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
