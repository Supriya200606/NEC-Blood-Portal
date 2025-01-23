import React from "react";

const HelpLine = () => {
  
  const contacts = [
{ name: "General Helpline", number: "9800000000" },
{ name: "Emergency Services", number: "100" },
{name: "Ambulance services", number:"101"},
{ name: "Nearest Blood Bank", number: "9800000001" },
{ name: "Health Queries", number: "9800000002" },
];


  const faqs = [
    {
      question: "Who is eligible to donate blood?",
      answer:
        "Anyone between the ages of 18 and 65, weighing at least 50 kg, and in good health can donate blood. Ensure you are not on any medication or suffering from conditions that may disqualify you.",
    },
    {
      question: "What precautions should I take before donating?",
      answer:
        "Eat a healthy meal, stay hydrated, and avoid alcohol or smoking 24 hours before donating.",
    },
    {
      question: "Where can I find the nearest blood donation camp?",
      answer:
        "Use the location feature in our app to find the nearest donation camp or blood bank.",
    },
    {
      question: "What should I do if I feel unwell after donating?",
      answer:
        "Contact your nearest medical center or use the emergency helpline in the app for immediate assistance.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "You can donate whole blood every 56 days and platelets every 7 days, up to 24 times a year.",
    },
    {
      question: "What are the health benefits of donating blood?",
      answer:
        "Donating blood can help reduce harmful iron stores, improve cardiovascular health, and even stimulate blood cell production.",
    },
  ];

  return(
  
    <div className="bg-slate-200 text-black text-xl ">
      
      <div>
        <div className="p-6 min-h-screen">
          <h1 className=" text-center lg:text-5xl text-slate-700 font-bold">
            Helpline Section
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
