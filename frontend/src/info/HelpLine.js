import React from "react";
import { Phone, AlertTriangle, HelpCircle } from "lucide-react";

const HelpLine = () => {
  const contacts = [
    { name: "Nandha Medical Hospital - Emergency", number: "07373711224" },
    { name: "Nandha Medical Hospital - General Line", number: "04294-222222" },
    { name: "Nandha Medical Hospital - Emergency", number: "04294-225585" },
    { name: "Campus Security (24/7)", number: "04294-226393" },
    { name: "Ambulance / Patient Transport", number: "919750770555" },
  ];

  const faqs = [
    {
      question: "Who is eligible to donate blood through NEC Blood Portal?",
      answer:
        "Healthy adults aged 18-65 with weight above 50kg and no recent illness. Medical screening is done at Nandha Medical Hospital.",
    },
    {
      question: "What precautions should I take before donating blood?",
      answer:
        "Have a proper meal, drink water, rest well, avoid alcohol for 24 hours and carry a valid ID.",
    },
    {
      question: "How do I find blood donors through this portal?",
      answer:
        "Use the search page to find donors by blood type. You can contact them directly.",
    },
    {
      question: "What should I do if I feel unwell after donating?",
      answer:
        "Contact the hospital emergency service immediately or visit your nearest medical center.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Every 56 days for whole blood donation. Always follow doctor advice.",
    },
    {
      question: "How do I become a registered donor?",
      answer:
        "Create an account and submit your donor information accurately.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-center text-red-700 text-4xl md:text-5xl font-extrabold mb-10">
          Nandha Medical Hospital Helpline
        </h1>

        {/* Contact Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10 border border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-5 flex items-center gap-2">
            <AlertTriangle size={28} /> Emergency Contact Numbers
          </h2>

          <ul className="divide-y">
            {contacts.map((item, index) => (
              <li key={index} className="flex justify-between items-center py-3 text-lg">
                <span className="font-medium text-gray-700">{item.name}</span>

                {/* Clickable phone link */}
                <a
                  href={`tel:${item.number}`}
                  className="flex items-center gap-2 text-red-700 hover:text-red-900 font-semibold"
                >
                  <Phone size={18} /> {item.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-red-700 mb-5 flex items-center gap-2">
            <HelpCircle size={28} /> Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="font-semibold text-red-700">Q. {faq.question}</p>
                <p className="text-gray-700 mt-1">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpLine;
