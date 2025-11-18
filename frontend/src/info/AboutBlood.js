const AboutBlood = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      {/* Header */}
      <h1 className="text-center text-5xl font-extrabold text-red-700 mb-10">
        Donation Knowledge
      </h1>

      {/* Table Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-red-600 text-white text-center py-4 text-2xl font-bold">
          Compatible Blood Type Donors
        </div>

        <table className="w-full text-lg">
          <thead className="bg-red-100 text-red-700 font-semibold">
            <tr>
              <th className="py-3 px-4 border-b">Blood Type</th>
              <th className="py-3 px-4 border-b">Donate Blood To</th>
              <th className="py-3 px-4 border-b">Receive Blood From</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {[
              ["A+", "A+, AB+", "A+, A-, O+, O-"],
              ["O+", "O+, A+, B+, AB+", "O+, O-"],
              ["B+", "B+, AB+", "B+, B-, O+, O-"],
              ["AB+", "AB+", "Everyone"],
              ["A-", "A+, A-, AB+, AB-", "A-, O-"],
              ["O-", "Everyone", "O-"],
              ["B-", "B+, B-, AB+, AB-", "B-, O-"],
              ["AB-", "AB+, AB-", "AB-, A-, B-, O-"],
            ].map((row, index) => (
              <tr
                key={index}
                className="hover:bg-red-50 transition-all text-center"
              >
                <td className="py-3 px-4 font-bold text-red-600">{row[0]}</td>
                <td className="py-3 px-4">{row[1]}</td>
                <td className="py-3 px-4">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-center text-4xl font-extrabold text-red-700 mb-8">
          Benefits of Blood Donation
        </h2>

        <div className="grid md:grid-cols-2 gap-6 px-6">
          {[
            "Saves lives of patients in need.",
            "Helps control and balance iron levels in the body.",
            "Reduces the risk of heart-related diseases.",
            "Promotes mental satisfaction & social responsibility.",
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-8 border-red-600 text-gray-800 text-lg font-medium hover:shadow-xl transition-all"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBlood;
