import React, { useEffect, useState } from "react";
import { getFormById } from "../apis/endpoint";
import { Trash2 } from "lucide-react";

const Showform = () => {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;

      if (!userId) return setForms([]);

      const data = await getFormById(userId);
      setForms(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const deleteForm = async (id) => {
    if (!window.confirm("Are you sure you want to delete this form?")) return;

    const token = localStorage.getItem("token");
    const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

    try {
      const response = await fetch(`${API_BASE}/api/deleteform/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete form");

      setForms(forms.filter((form) => form._id !== id));
    } catch (error) {
      console.error("Error deleting form:", error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-red-700 mb-10">
        Your Submitted Forms
      </h1>

      {forms.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No forms submitted yet.
        </p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form) => (
            <div
              key={form._id}
              className="bg-white shadow-lg rounded-xl p-6 border border-red-200 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-bold text-red-700 mb-3 uppercase">
                {form.tag}
              </h2>

              <div className="space-y-2 text-gray-700">
                <p><b>Full Name:</b> {form.fullname}</p>
                <p><b>Blood Type:</b> {form.bloodType}</p>
                <p><b>Email:</b> {form.email}</p>
                <p><b>Age:</b> {form.age} years</p>
                <p><b>Weight:</b> {form.weight} kg</p>
                <p><b>Gender:</b> {form.gender}</p>
                <p><b>Contact:</b> {form.contactnumber || "Not provided"}</p>
                <p><b>Address:</b> {form.address}</p>
              </div>

              <button
                onClick={() => deleteForm(form._id)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-800 transition"
              >
                <Trash2 size={18} /> Delete Form
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Showform;
