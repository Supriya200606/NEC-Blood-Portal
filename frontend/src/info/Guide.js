import { useNavigate } from "react-router-dom";
import { Droplet, HeartPulse, ShieldCheck } from "lucide-react";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">

      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex justify-center gap-3 items-center">
          <Droplet size={40} /> Guide to Blood Donation
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Your single donation can save up to **three lives**. Learn how to prepare and donate safely.
        </p>
      </div>

      {/* Eligibility Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
          Basic Eligibility Requirements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <HeartPulse className="text-red-600" size={36} />,
              title: "Health Status",
              items: [
                "Good general health",
                "No fever or infections",
                "Normal blood pressure",
                "Healthy hemoglobin levels",
              ],
            },
            {
              icon: <ShieldCheck className="text-red-600" size={36} />,
              title: "Age & Weight",
              items: [
                "Age: 18 to 65 years",
                "Weight: Minimum 50kg",
                "Valid government ID",
                "Rested and hydrated",
              ],
            },
            {
              icon: <Droplet className="text-red-600" size={36} />,
              title: "Restrictions",
              items: [
                "No major surgery recently",
                "No recent tattoos (< 6 months)",
                "No pregnancy/breastfeeding",
                "No continuous medication",
              ],
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-red-100"
            >
              <div className="flex justify-center mb-4">{box.icon}</div>
              <h3 className="text-lg font-semibold text-center text-red-700 mb-4">
                {box.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {box.items.map((item, i2) => (
                  <li key={i2}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Before Donation */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
            Before Donation
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-lg">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">✅ Do’s</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Get a good night’s sleep.</li>
                <li>Eat a nutritious meal before donating.</li>
                <li>Drink 2–3 glasses of water.</li>
                <li>Carry valid identification.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Avoid</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Skipping meals before donation.</li>
                <li>Drinking alcohol 24 hours prior.</li>
                <li>Smoking immediately before donating.</li>
                <li>Heavy exercise before donation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After Donation */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
          After Donation Care
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Right After Donation",
              items: ["Rest 10–15 minutes", "Have refreshments", "Keep bandage for 4 hours", "Avoid lifting weights"],
            },
            {
              title: "Next 24 Hours",
              items: ["Drink extra fluids", "Avoid heavy exercise", "No alcohol", "Eat iron-rich food"],
            },
            {
              title: "Seek Medical Help If",
              items: ["Severe dizziness", "Bleeding doesn't stop", "Persistent pain", "Excessive bruising"],
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-red-100"
            >
              <h3 className="text-lg font-semibold text-red-700 mb-4">{box.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {box.items.map((item, i2) => (
                  <li key={i2}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Save Lives?</h2>
        <p className="mb-6 text-lg opacity-90">
          Just one donation can make a life-changing difference.
        </p>
        <button
          onClick={() => navigate("/form")}
          className="bg-white text-red-700 font-bold py-3 px-8 rounded-lg shadow hover:bg-red-50 transition"
        >
          Schedule Donation
        </button>
      </section>
    </div>
  );
};

export default Guide;
