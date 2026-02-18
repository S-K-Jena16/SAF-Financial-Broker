import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // ✅ Auto scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // ✅ Show button after scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600 hover:scale-110 transition-transform ${
        visible ? "block" : "hidden"
      }`}
    >
      <HiArrowUp className="w-6 h-6" />
    </button>
  );
}
