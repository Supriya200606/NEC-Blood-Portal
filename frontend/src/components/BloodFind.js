import React,{useState,useEffect} from 'react';
import { showBloodRequestData } from '../apis/endpoint';
import { useNavigate } from "react-router-dom";

const BloodFind = () => {
    const navigate= useNavigate();
    const [selectedBloodType, setSelectedBloodType] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Find Blood Donors</h1>
      <div className="flex flex-col md:flex-row border-y-4 border-x-2 rounded-3xl p-4 bg-white shadow-md">
        <div className="input-group mb-4 md:mb-0 md:mr-4">
          <label className="block mb-2 text-red-600 font-bold">Blood Group:</label>
          <select
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
            className="border p-2 rounded w-full"
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

        <div className="input-group mb-4 md:mb-0 md:mr-4">
          <label className="block mb-2 text-red-600 font-bold">Location:</label>
          <select
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <button
          className="search-button border p-2 rounded bg-red-600 text-white w-full md:w-auto hover:bg-red-700 transition-colors"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="results mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Results:</h2>
        {results.length > 0 ? (
          <ul className="list-none space-y-4">
            {results.map((result, index) => (
              <li
                key={index}
                className="p-4 bg-red-50 border-l-4 border-red-500 rounded shadow"
              >
                <div className="text-4xl font-extrabold text-red-600 mb-4">
                  {result.bloodType}
                </div>
                <div>{result.fullname}</div>
                <div className="mt-2 text-sm text-gray-600">{result.age}</div>
                <button
                  onClick={() => navigate("/contactuser", { state: { user: result } })}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                >
                  Connect with Donor
                </button>
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
