import React from "react";

const Bank = () => {

  const bloodBanks = [
    {
      name: "Mechi Zonal Hospital Blood Bank",
      location: "Bhadrapur, Jhapa",
      phone: "+977-23-520153",
    },
    {
      name: "Birtamod Blood Bank",
      location: "Birtamod, Jhapa",
      phone: "+977-23-540200",
    },
    {
      name: "Central NRCS Blood Bank",
      location: "Soaltee-Mode, Kathmandu",
      phone: "01-4288485",
    },
    {
      name: "Patan Hospital Blood Bank",
      location: "Patan, Lalitpur",
      phone: "01-5522295",
    },
    {
      name: "Pokhara Blood Bank",
      location: "Pokhara, Kaski",
      phone: "061-521091",
    },
    {
      name: "Bharatpur NRCS Regional BTSC",
      location: "Bharatpur, Chitwan",
      phone: "056-520880",
    },
    {
      name: "Biratnagar Blood Bank",
      location: "Rangeli Road, Biratnagar",
      phone: "021-523326",
    },
    {
      name: "Nepalgunj Blood Bank",
      location: "Banke, Nepalgunj",
      phone: "081-520174",
    },
    {
      name: "Dhulikhel Hospital Blood Bank",
      location: "Dhulikhel",
      phone: "011-490497",
    },
    {
      name: "Universal College of Medical Sciences Blood Bank",
      location: "Bhairahawa",
      phone: "071-522896",
    },
  ];
  const generateRandomQuantity = () => Math.floor(Math.random() * 3) + 1;

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const bloodBankData = bloodBanks.map(bank => {
    const quantities = bloodGroups.reduce((acc, group) => {
      acc[group] = generateRandomQuantity();
      return acc;
    }, {});
    return { ...bank, quantities };
  });


  return (
    <>
      <div className="overflow-x-auto p-4 sm:p-10 rounded-lg">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-red-50 text-lg sm:text-2xl font-bold">
              <th className="py-2 px-2 sm:px-4 border-b text-left text-red-600">Blood Bank</th>
              <th className="py-2 px-2 sm:px-4 border-b text-left text-red-600">Location</th>
              <th className="py-2 px-2 sm:px-4 border-b text-left text-red-600">Phone</th>
              {bloodGroups.map((group, index) => (
                <th key={index} className="py-2 px-2 sm:px-4 border-b text-left text-red-600">{group}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bloodBankData.map((bank, index) => (
              <tr key={index} className="hover:bg-gray-100 font-bold">
                <td className="py-2 px-2 sm:px-4 border-b text-gray-800">{bank.name}</td>
                <td className="py-2 px-4 border-b text-gray-800">{bank.location}</td>
                <td className="py-2 px-4 border-b text-gray-800">{bank.phone}</td>
                {bloodGroups.map((group, idx) => (
                  <td key={idx} className="py-2 px-4 border-b text-gray-600 font-semibold">{bank.quantities[group]} Units</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default Bank;
