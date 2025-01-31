import React, { useEffect, useState } from "react";
import { getFormById,deleteForm } from "../apis/endpoint";  
import { useNavigate } from "react-router-dom"; 

const Showform = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate('');

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await getFormById();
        console.log("Fetched forms:", res);

        const data = res.data || res;
        if (!data || Object.keys(data).length === 0) {
          throw new Error("No form data found");
        }

        setForms(Array.isArray(data) ? data : [data]);

      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    fetchForms();
  }, []);

const handledelete = async () => {
    try {
        // Assuming you have an API endpoint to delete all forms
        await deleteForm();
        setForms([]);
        navigate('/login');
        console.log("All forms deleted successfully");
        
    } catch (error) {
        console.error("Error deleting forms:", error);
    }
};

  return (
    <div className="p-4">
      <h1 className="text-gray-800 text-2xl font-bold text-center mb-4">
        Here are the Forms that you have submitted, either to request blood or
        donate blood.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forms.length > 0 ? (
          forms.map((form, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{form.tag}</h3>
              <p className="text-gray-700">{form.fullname}</p>
              <p className="text-gray-700">{form.bloodType}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No forms found.</p>
        )}
        <div>
          
            <button
              onClick={handledelete}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete All Forms
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default Showform;

