import { useState, useRef } from "react";
import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  // ⭐ IMPORTANT → Same keys as EmailJS template
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a9t013g",
        "template_evf9s9z",
        formRef.current,
        "P5onXj5YXCnHmP_R2",
      )
      .then(() => {
        setSubmitted(true);

        setForm({
          user_name: "",
          user_email: "",
          company: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        heroImage="/images/contact.jpg"
        fullViewport
        title="Contact Us"
        subtitle="Get in touch for a confidential conversation."
        showCta={false}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE CONTENT */}
          <div>
            <SectionTitle
              subtitle="Get in Touch"
              title="We would love to hear from you"
              description="Fill out the form and our team will respond."
            />

            <div className="mt-10 space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow">
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-slate-600">info@safinanceservice.com</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow">
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-slate-600">+971 (04) 885 4003</p>
              </div>

              {/* LOCATION */}
                <div className="p-6 bg-white rounded-2xl shadow">
                  <h4 className="font-semibold mb-2">Our Location</h4>
                  <p className="text-slate-600 mb-4">
                    Dubai, UAE
                  </p>

                  <div className="w-full h-64 rounded-xl overflow-hidden">
                    <iframe
                      title="office-location"
                      src="https://www.google.com/maps?q=Dubai,+UAE&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow">
              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="text-green-600 text-xl font-semibold">
                    Message Sent Successfully
                  </h3>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="user_name"
                      value={form.user_name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full p-3 border rounded-xl"
                    />

                    <input
                      type="email"
                      name="user_email"
                      value={form.user_email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full p-3 border rounded-xl"
                    />
                  </div>

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full p-3 border rounded-xl"
                  />

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-xl"
                  >
                    <option value="">Select Topic</option>
                    <option value="Financial Advisory">
                      Financial Advisory
                    </option>
                    <option value="Corporate Finance">Corporate Finance</option>
                    <option value="Risk Management">Risk Management</option>
                    <option value="Tax">Tax</option>
                    <option value="Valuation">Valuation</option>
                    <option value="Strategy">Strategy</option>
                  </select>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full p-3 border rounded-xl"
                  />

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
