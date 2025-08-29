import { useState } from "react";
import useContactFormStore from "../../store/contactFormStore";
import Popup from "../popup";

const ContactUsForm = () => {
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const {
    firstName,
    lastName,
    email,
    phone,
    serviceType,
    message,
    acceptedTerms,
    setField,
    resetForm,
    submitForm,
  } = useContactFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("You must accept the terms.");
      return;
    }

    try {
      await submitForm();
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      alert("Failed to submit form. Please try again.");
      console.log("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      {IsSubmitted && <Popup setIsSubmitted={setIsSubmitted} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setField("email", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setField("phone", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Service Type?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {[
              "Web Application Security Audits",
              "PCI DSS Gap Assessments",
              "Cloud Security Assessments",
              "Security Awareness Training",
            ].map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="serviceType"
                  value={service}
                  checked={serviceType === service}
                  onChange={(e) => setField("serviceType", e.target.value)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="Type your message..."
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setField("acceptedTerms", e.target.checked)}
          />
          <span className="text-sm">
            I accept the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms
            </a>
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Book your call
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
