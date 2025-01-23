const AboutBlood = () => {
  return (
    <div className="text-lg bg-slate-200 text-black">
      <div className="flex justify-center items-center ">
        <div className="w-full m-8 rounded-lg shadow-md overflow-hidden">
          <div className="text-[#d21d1d]  text-6xl font-bold py-10  text-center p-4">
            Donation Knowledge
          </div>
          <div className="bg-red-600 text-white text-center py-4 font-bold text-xl">
            Compatible Blood Type Donors
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-red-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Blood Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Donate Blood To
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Receive Blood From
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  A+
                </td>
                <td className="border border-gray-300 px-4 py-2">A+, AB+</td>
                <td className="border border-gray-300 px-4 py-2">
                  A+, A-, O+, O-
                </td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  O+
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  O+, A+, B+, AB+
                </td>
                <td className="border border-gray-300 px-4 py-2">O+, O-</td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  B+
                </td>
                <td className="border border-gray-300 px-4 py-2">B+, AB+</td>
                <td className="border border-gray-300 px-4 py-2">
                  B+, B-, O+, O-
                </td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  AB+
                </td>
                <td className="border border-gray-300 px-4 py-2">AB+</td>
                <td className="border border-gray-300 px-4 py-2">Everyone</td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  A-
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  A+, A-, AB+, AB-
                </td>
                <td className="border border-gray-300 px-4 py-2">A-, O-</td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  O-
                </td>
                <td className="border border-gray-300 px-4 py-2">Everyone</td>
                <td className="border border-gray-300 px-4 py-2">O-</td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  B-
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  B+, B-, AB+, AB-
                </td>
                <td className="border border-gray-300 px-4 py-2">B-, O-</td>
              </tr>
              <tr className="hover:bg-red-100">
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  AB-
                </td>
                <td className="border border-gray-300 px-4 py-2">AB+, AB-</td>
                <td className="border border-gray-300 px-4 py-2">
                  AB-, A-, B-, O-
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <h2 className="text-4xl p-8 mt-10 text-red-700 font-extrabold text-center">
            Benefits of Blood Donation
            </h2>
          
<div className="text-2xl  grid grid-cols-1 gap-10 text-bold justify-items-center  "> 
    <li>
    Saving lives of patients in need of blood transfusions

    </li>
    <li>
    Helping to maintain iron content in the blood

    </li>
    <li>
    Reducing the risk of heart attacks

    </li>
    <li>
    Providing a sense of fulfillment and social responsibility


    </li>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutBlood;
