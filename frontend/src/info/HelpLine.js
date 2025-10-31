import React from "react";

const HelpLine = () => {
  // Update these contact numbers to the real NEC Medical Hospital / Nandha Engineering College contacts
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
        "Healthy adults aged 18-65 who meet the medical screening criteria (weight above 50kg, good health, and no recent illnesses) are eligible. The Nandha Medical Hospital team performs health screening before donation.",
    },
    {
      question: "What precautions should I take before donating blood?",
      answer:
        "Eat a balanced meal, drink plenty of fluids, get adequate rest, and avoid alcohol for 24 hours prior. Bring a valid ID and ensure you haven't taken any medications that might affect donation eligibility.",
    },
    {
      question: "How do I find blood donors through NEC Blood Portal?",
      answer:
        "Use the blood search feature in the portal to find donors by blood type and location. You can contact donors directly through the provided contact options - email or WhatsApp messaging.",
    },
    {
      question: "What should I do if I feel unwell after donating?",
      answer:
        "Contact the Nandha Medical Hospital emergency line immediately or visit the nearest medical facility. Keep the donor information card provided after donation for reference.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Follow medical guidelines: whole blood donations are typically allowed once every 56 days (8 weeks). Always consult with medical professionals before your next donation.",
    },
    {
      question: "How do I register as a blood donor on NEC Blood Portal?",
      answer:
        "Create an account using your email, fill out the donor registration form with your blood type and contact details. Ensure all information is accurate for emergency blood requests.",
    },
  ];

  return(
  
    <div className="bg-slate-200 text-black text-xl ">
      
      <div>
        <div className="p-6 min-h-screen">
          <h1 className=" text-center lg:text-5xl text-slate-700 font-bold">
            Nandha Medical Hospital — Helpline (Nandha Engineering College)
          </h1>

          <div className=" shadow-lg rounded-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Quick Contacts
            </h2>
            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="text-gray-600 font-medium">
                    {contact.name}
                  </span>
                  
                  <span>
                    {contact.number}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="  rounded-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-red-600 font-serif mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 font-bold text-md">
              {faqs.map((faq, index) => (
                <div key={index}>
                    <span>Q.{faq.question}</span>
                    <div>A.{faq.answer}</div>
                 
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
 

  );

};
export default HelpLine;
