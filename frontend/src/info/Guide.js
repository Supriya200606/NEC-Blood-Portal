import { useNavigate } from "react-router-dom";
    const Guide =()=>{
const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-red-800 text-center mb-4">
            Guide to Blood Donation
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Your decision to donate blood can save up to three lives. Here's everything you need to know
            about the donation process and how to prepare.
          </p>
        </div>
      </div>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Basic Eligibility Requirements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="font-semibold">Health Status</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Must be in good general health</li>
              <li>• No fever or active infections</li>
              <li>• Normal blood pressure</li>
              <li>• Adequate hemoglobin levels</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="font-semibold">Age & Weight</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Age: 18-65 years</li>
              <li>• Minimum weight: 50kg</li>
              <li>• BMI within healthy range</li>
              <li>• Valid ID required</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="font-semibold">Restrictions</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• No recent surgeries</li>
              <li>• No ongoing medications</li>
              <li>• No recent tattoos (no less than 6 months)</li>
              <li>• No pregnancy or recent delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Before Donation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Do's</h3>
              <div className="space-y-4">
                {[
                  {  text: "Have a good night's sleep" },
                  {   text: "Eat a healthy meal before donation" },
                  { text: "Drink plenty of water" },
                  {  text: "Bring valid identification" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Don'ts</h3>
              <div className="space-y-4">
                {[
                  "Skip meals before donation",
                  "Consume alcohol 24 hours before",
                  "Smoke on donation day",
                  "Exercise heavily before donation"
                ].map((text, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                "Avoid heavy lifting"
              ]
            },
            {
              title: "Next 24 Hours",
              items: [
                "Drink extra fluids",
                "Avoid strenuous activities",
                "No alcohol consumption",
                "Eat iron-rich foods"
              ]
            },
            {
              title: "When to Seek Help",
              items: [
                "Prolonged bleeding",
                "Severe bruising",
                "Dizziness or weakness",
                "Persistent arm pain"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-red-700">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2 text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Save Lives?</h2>
          <p className="text-gray-600 mb-8">
            Your blood donation can make a significant difference in someone's life.
          </p>
          <button onClick={()=>navigate("/form")} className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition-colors">
            Schedule a Donation
          </button>
        </div>
      </section>
    </div>
  );
};


export default Guide;