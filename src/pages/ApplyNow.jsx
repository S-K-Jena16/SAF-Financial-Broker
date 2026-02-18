import { useState } from "react";
import { useNavigate } from "react-router-dom";

const qualifications = [
  "Bachelor of Arts",
  "Bachelor of Commerce",
  "Bachelor of Science",
  "Masters of Arts",
  "Masters of Commerce",
  "Masters of Science",
  "Diploma Holders",
];

const nationalities = [
  "India",
  "United States",
  "United Kingdom",
  "UAE",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "South Africa",
  "Singapore",
  "Saudi Arabia",
  "Qatar",
  "Nepal",
  "Sri Lanka",
  "Bangladesh",
  "Pakistan",
  "Other",
];

export default function ApplyNow({ jobTitle, onClose }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    qualification: "",
    gender: "",
    email: "",
    phone: "",
    nationality: "",
    resume: null,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setForm((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    let newErrors = {};

    Object.keys(form).forEach((key) => {
      if (!form[key]) newErrors[key] = true;
    });

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = true;

    if (form.phone && !/^[0-9+\-\s]{7,15}$/.test(form.phone))
      newErrors.phone = true;

    if (form.resume) {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(form.resume.type)) newErrors.resume = true;
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (form.resume.size > maxSize) newErrors.resume = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // Placeholder for real API integration
      // await fetch("/api/apply", { method: "POST", body: JSON.stringify(form) });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      setErrors((prev) => ({ ...prev, submit: true }));
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const inputClass = (name) =>
    `border p-3 rounded w-full ${
      errors[name] ? "border-red-500" : "border-slate-300"
    }`;

  const errorText = (name) =>
    errors[name] && (
      <p className="text-red-500 text-sm mt-1">Please fill this field</p>
    );

  const title = jobTitle || "Apply Now";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-xl p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          ❌
        </button>

        <h2 className="text-2xl font-semibold mb-6">{title}</h2>

        {submitted ? (
          <div className="text-center py-10">
            <h3 className="text-green-600 text-lg font-semibold">
              Application Submitted Successfully
            </h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                name="firstName"
                placeholder="First Name *"
                onChange={handleChange}
                className={inputClass("firstName")}
              />
              {errorText("firstName")}
            </div>

            <div>
              <input
                name="lastName"
                placeholder="Last Name *"
                onChange={handleChange}
                className={inputClass("lastName")}
              />
              {errorText("lastName")}
            </div>

            <div>
              <select
                name="qualification"
                onChange={handleChange}
                className={inputClass("qualification")}
              >
                <option value="">Select Qualification *</option>
                {qualifications.map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
              {errorText("qualification")}
            </div>

            <div>
              <select
                name="gender"
                onChange={handleChange}
                className={inputClass("gender")}
              >
                <option value="">Select Gender *</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errorText("gender")}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errorText("email")}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone Number *"
                onChange={handleChange}
                className={inputClass("phone")}
              />
              {errorText("phone")}
            </div>

            <div className="md:col-span-2">
              <select
                name="nationality"
                onChange={handleChange}
                className={inputClass("nationality")}
              >
                <option value="">Select Nationality *</option>
                {nationalities.map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
              {errorText("nationality")}
            </div>

            {/* Resume Upload Box */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">
                Upload Resume (PDF/DOC) *
              </label>

              <div
                className={`flex items-center border rounded overflow-hidden ${
                  errors.resume ? "border-red-500" : "border-slate-300"
                }`}
              >
                <label className="bg-gray-200 px-4 py-3 cursor-pointer">
                  Choose File
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
                <div className="px-4 py-3 text-gray-500 w-full">
                  {form.resume ? form.resume.name : "Upload your resume"}
                </div>
              </div>
              {errorText("resume")}
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                rows={4}
                placeholder="Message *"
                onChange={handleChange}
                className={inputClass("message")}
              />
              {errorText("message")}
            </div>

            <button type="submit" className="btn-primary md:col-span-2">
              Send Message
            </button>
            {errors.submit && (
              <p className="md:col-span-2 text-red-500 text-sm mt-2">
                Something went wrong while submitting. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
