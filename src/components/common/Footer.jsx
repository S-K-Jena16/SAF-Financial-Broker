import { Link } from "react-router-dom";
import { services } from "../../data/services"; // 👈 ADD THIS

const footerContact = {
  phone: "+971 (04) 885 4003",
  email: "info@safinanceservice.com",
  website: "safinanceservice.com",
  address: "Dubai, UAE",
};

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LEFT */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/logo.jpg"
                alt="Company logo"
                className="h-35 md:h-50 object-contain"
              />
            </Link>

            {/* <p className="text-slate-600 text-base leading-relaxed max-w-md">
              We are here to build financial foundations for clients to empower
              them today through expert advice with our pioneer management
              services.
            </p> */}
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-600 hover:text-amber-500">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-amber-500">About</Link></li>
              <li><Link to="/career" className="text-slate-600 hover:text-amber-500">Career</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 font-semibold text-lg mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-slate-600 hover:text-amber-500 transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 font-semibold text-lg mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">
              <a
                href="https://maps.google.com/?q=Dubai,UAE"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-600 hover:text-amber-500 text-sm"
              >
                📍 Dubai, UAE
              </a>

              <a
                href={`mailto:${footerContact.email}`}
                className="block text-slate-600 hover:text-amber-500 text-sm"
              >
                📧 {footerContact.email}
              </a>

              <a
                href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                className="block text-slate-600 hover:text-amber-500 text-sm"
              >
                📞 {footerContact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-500 text-sm">
            Copyright © {new Date().getFullYear()} SAF. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

