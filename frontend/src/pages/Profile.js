import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { getProfile, deleteProfile  } from "../apis/endpoint";



const Profile = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [DOB, setDOB] = useState("");
  const [district,setDistrict] = useState("");
  const [gender, setGender] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile();
        if (!res) {
          console.log('Profile not found');
        }
        setFname(res.fname.toString());
        setLname(res.lname.toString());
        setEmail(res.email.toString());
        setContact(res.contact.toString());
        setBloodType(res.bloodType.toString());
        setDistrict(res.district.toString());
        setDOB(res.DOB.toString());
        setGender(res.gender.toString());
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  const  deleteUser = async () => {
    try {
      const res = await deleteProfile();
      if (res.success) {
        console.log('Profile deleted successfully');
     
    
     
      } else {
        console.log('Failed to delete profile');
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="mt-10">
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <div className="bg-gradient-to-tr from-slate-50 via-grey-200 to-slate-200 w-full md:w-4/5 rounded-3xl shadow-lg p-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
          <Link to="/showform">
           <button className="text-xl md:text-3xl mb-6 text-red-600 font-bold p-2 border-red-400 rounded-full border-4 cursor-pointer">

                  Show my Forms
                  </button>
              </Link>
           
            <div className="text-center">
           
              
              <h1 className="mt-10 text-2xl md:text-3xl font-bold">Donation Detail</h1>
              <h2 className="mt-4 text-lg md:text-xl font-bold text-red-700">{fname} {lname}</h2>
              <table className="mt-4 w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 font-bold">Topic</th>
                    <th className="px-4 py-2 font-bold">No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-bold">No. of Donations</td>
                    <td className="border px-4 py-2 font-bold">5</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">No. of Received Blood</td>
                    <td className="border px-4 py-2 font-bold">2</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">No. of Attended Campaign</td>
                    <td className="border px-4 py-2 font-bold">5</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">No. of volunterring</td>
                    <td className="border px-4 py-2 font-bold">0</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Other</td>
                    <td className="border px-4 py-2 font-bold">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>

          <div className="w-full md:w-3/4 pl-0 md:pl-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 font-serif">Profile</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold text-gray-700">First Name</label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-lg font-bold text-gray-700">Blood Group</label>
                <input
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  type="text"
                  placeholder="Enter blood group"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-gray-700">Gender</label>
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                  placeholder="Enter gender"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Date Of Birth (DOB)</label>
                <input
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                  type="text"
                  placeholder="Enter date of birth"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Mobile Number</label>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="text"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Address</label>
                <input
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  type="text"
                  placeholder="Enter address"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Email ID</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email ID"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </form>
            <button
              onClick={deleteUser}
              className="mt-6 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-800 hover:text-white focus:outline-none"
            >
              Delete Profile
            </button>
            <button
              onClick={deleteUser}
              className="mt-6 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-800 hover:text-white focus:outline-none"
            >
              Edit Profile
            </button>
         

              <div className="flex mt-auto p-4 text text-center justify-end">
              <p>
                <Link to="/login">
                  <button
                    type="submit"
                    className="bg-red-600 text-white hover:bg-red-800 hover:text-white text-lg font-bold p-2 rounded-lg shadow-lg"
                  >
                    Logout
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
