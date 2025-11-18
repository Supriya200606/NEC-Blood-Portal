import React,{useState,useEffect} from 'react';
import { showBloodRequestData } from '../apis/endpoint';
import { useNavigate } from "react-router-dom";

const BloodFind = () => {
    const navigate= useNavigate();
    const [selectedBloodType, setSelectedBloodType] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [loading] = useState(false);

    const [donorsData,setDonorsData]=useState([{
        fullname:"",
        contactnumber:"",
        email:"",
        bloodType:"",
        age:'',
        weight:'',
        gender:'',
        address:'',
    }]);

    useEffect(()=>{
        const getDonors = async()=>{
            const res = await showBloodRequestData('donor');
            if(res.status === 400){
                throw new Error('Failed to get profile');
            }
            setDonorsData(res);
        }
        getDonors();
    },[]);

    // ✅ Tamil Nadu Districts
    const districts = [
      "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
      "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur",
      "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris",
      "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai",
      "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
      "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
      "Viluppuram", "Virudhunagar"
    ];

    const handleSearch = () => {
      setError("");
      if (!selectedBloodType && !selectedAddress) {
        setError("Please select blood type or address.");
        return;
      }
  
      const filteredResults = donorsData.filter((donor) => {
        const bloodTypeMatch = selectedBloodType
          ? donor.bloodType === selectedBloodType
          : true;
        const addressMatch = selectedAddress
          ? donor.address === selectedAddress
          : true;
  
        return bloodTypeMatch && addressMatch;
      });
  
      setResults(filteredResults);
    };
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg">Find Blood Donors</h1>

      <div className="flex flex-col md:flex-row items-end gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Blood Group</label>
          <select
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Location</label>
          <select
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2 rounded-full bg-red-600 text-white font-medium shadow hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="results mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Results</h2>
        {results.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <li
                key={index}
                className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-3xl font-extrabold text-red-600">{result.bloodType}</div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{result.fullname}</div>
                    <div className="text-sm text-gray-500 mt-1">Age: {result.age} • {result.address}</div>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => navigate("/contactuser", { state: { user: result } })}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                  >
                    Connect with Donor
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && (
            <p className="text-gray-600">No results found. Please try again.</p>
          )
        )}
      </div>
    </div>
  );
};

export default BloodFind;
