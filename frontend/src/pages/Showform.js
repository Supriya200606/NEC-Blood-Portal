import React, { useEffect, useState } from "react";
import { getFormById, deleteForm } from "../apis/endpoint";   

const Showform = () => {
  const [forms, setForms] = useState([]);

 
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


  const deleteForm = async (id) => {

    try {
        const response = await deleteForm();
  
        setForms(forms.filter((form) => form._id !== id));
    } catch (error) {
        console.error('Error deleting form:', error);
    }
};

useEffect(() => {
  fetchForms();
}, []);


  return (
    <div className="p-4">
      <h1 className="text-gray-800 text-2xl font-bold text-center mb-4">
        Here are the Forms that you have submitted, either to request blood or
        donate blood.
      </h1>

      <div className="grid grid-cols-1 gap-4">
       
        { forms.map((form => (
            <div
              key={form._id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{form.tag}</h3>
              <ul className="list-disc pl-5">
                <li className="text-gray-700">Full Name: {form.fullname}</li>
                <li className="text-gray-700">Blood Type: {form.bloodType}</li>
                <li className="text-gray-700">Address: {form.address}</li>
                <li className="text-gray-700">Contact Number: {form.contactNumber}</li>
                <div className="text-center mt-4">
                  <button
              onClick={() => deleteForm(form._id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Form
                  </button>
                </div>
              </ul>
            </div>
)))}
      </div>
    </div>
  );
};

export default Showform;
