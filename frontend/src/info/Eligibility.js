const Eligibility = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 text-gray-800">
      
      {/* Who Can Donate Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 text-center">
          Who Can Donate Blood?
        </h1>

        <p className="text-lg md:text-xl text-center mb-10 text-gray-600">
          Blood donation is a noble act that can save multiple lives. However, donors must meet safe health conditions.
        </p>

        <div className="space-y-8 text-lg">
          <div>
            <h2 className="font-bold text-red-600 text-2xl mb-2">General Health Requirements</h2>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
              <li>The donor must be in good general health.</li>
              <li>Minimum weight should be **50 kg**.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-red-600 text-2xl mb-2">Age Requirement</h2>
            <p>Eligible age range: **17 to 65 years**.</p>
          </div>

          <div>
            <h2 className="font-bold text-red-600 text-2xl mb-2">Blood Requirements</h2>
            <p>Normal hemoglobin levels are required:</p>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
              <li>Women: **12.5 g/dL and above**</li>
              <li>Men: **13.5 g/dL and above**</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-red-600 text-2xl mb-2">Donation Interval</h2>
            <p>
              Minimum **56 days (8 weeks)** gap is required between whole blood donations.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-red-600 text-2xl mb-2">Tattoos & Piercings</h2>
            <p>
              People with tattoos/piercings can donate **if done more than 6 months ago** and healed properly.
            </p>
          </div>
        </div>
      </div>

      {/* Who Cannot Donate Section */}
      <div className="max-w-5xl mx-auto bg-red-600 text-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Who Cannot Donate Blood?
        </h1>

        <p className="text-lg md:text-xl text-center mb-10 text-red-100">
          Certain health conditions prevent safe donation to protect both donor and recipient.
        </p>

        <div className="space-y-8 text-lg text-red-50 leading-relaxed">
          <div>
            <h2 className="font-bold text-white text-2xl mb-2">Health Conditions</h2>
            <ul className="list-disc ml-6">
              <li>Recent blood transfusions.</li>
              <li>Severe heart diseases or history of stroke.</li>
              <li>Chronic blood disorders (e.g., hemophilia, sickle cell).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-white text-2xl mb-2">Infectious Diseases</h2>
            <p>
              People with **malaria, hepatitis, HIV, severe infections, fever, cold, or flu** should not donate until fully recovered.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white text-2xl mb-2">Lifestyle Restrictions</h2>
            <ul className="list-disc ml-6">
              <li>People with recent intravenous drug use.</li>
              <li>High-risk unprotected sexual activity may disqualify you.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Eligibility;
