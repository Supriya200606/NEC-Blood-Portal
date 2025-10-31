import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            Guide to Blood Donation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your decision to donate blood can save up to three lives. Here's everything you need to know
            about the donation process and how to prepare.
          </p>
        </div>
      </div>

      {/* Eligibility Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Basic Eligibility Requirements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Health Status",
              items: [
                "Must be in good general health",
                "No fever or active infections",
                "Normal blood pressure",
                "Adequate hemoglobin levels",
              ],
            },
            {
              title: "Age & Weight",
              items: [
                "Age: 18-65 years",
                "Minimum weight: 50kg",
                "BMI within healthy range",
                "Valid ID required",
              ],
            },
            {
              title: "Restrictions",
              items: [
                "No recent surgeries",
                "No ongoing medications",
                "No recent tattoos (within 6 months)",
                "No pregnancy or recent delivery",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold mb-4 text-red-700">{section.title}</h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Before Donation */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Before Donation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Do's",
                items: [
                  "Have a good night's sleep",
                  "Eat a healthy meal before donation",
                  "Drink plenty of water",
                  "Bring valid identification",
                ],
              },
              {
                title: "Don'ts",
                items: [
                  "Skip meals before donation",
                  "Consume alcohol 24 hours before",
                  "Smoke on donation day",
                  "Exercise heavily before donation",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-red-700 mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Donation */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">After Donation Care</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Immediate Care",
              items: [
                "Rest for 10-15 minutes",
                "Have some refreshments",
                "Keep the bandage on for 4-5 hours",
                "Avoid heavy lifting",
              ],
            },
            {
              title: "Next 24 Hours",
              items: [
                "Drink extra fluids",
                "Avoid strenuous activities",
                "No alcohol consumption",
                "Eat iron-rich foods",
              ],
            },
            {
              title: "When to Seek Help",
              items: [
                "Prolonged bleeding",
                "Severe bruising",
                "Dizziness or weakness",
                "Persistent arm pain",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-4 text-red-700">{section.title}</h3>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Ready to Save Lives?</h2>
          <p className="text-gray-600 mb-8">
            Your blood donation can make a significant difference in someone's life.
          </p>
          <button
            onClick={() => navigate("/form")}
            className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-800 transition-colors"
          >
            Schedule a Donation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Guide;
