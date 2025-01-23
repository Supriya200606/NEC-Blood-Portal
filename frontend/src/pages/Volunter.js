import React, { useState } from 'react';

const Volunteer= () => {
  const [volunteerData, setVolunteerData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    volunteerType: '',
    availability: '',
    skills: '',
    consent: false,
  });


  const validateForm = () => {
    const errors = {};
    if (!volunteerData.contactNumber || !/^\d{10}$/.test(volunteerData.contactNumber)) {
      errors.contactNumber = 'A valid 10-digit contact number is required';
    }
    if (!volunteerData.email || !/\S+@\S+\.\S+/.test(volunteerData.email)) {
      errors.email = 'A valid email address is required';
    }
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Volunteer request submitted successfully!');
      setVolunteerData({
        fullName: '',
        contactNumber: '',
        email: '',
        volunteerType: '',
        availability: '',
        skills: '',
        consent: false,
      });
    }
  };

  return (

    <div className='bg-slate-200'>
    <div className="max-w-3xl text-black mx-auto mt-10 p-5 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-5 text-center">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
\        <div>
          <label className="block mb-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={volunteerData.fullName}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={volunteerData.contactNumber}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Email Address:</label>
          <input
            type="email"
            name="email"
            value={volunteerData.email}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Volunteer Type:</label>
          <select
            name="volunteerType"
            value={volunteerData.volunteerType}
            className="w-full border rounded p-2"
          >
            <option value="">Select Type</option>
            <option value="Event Volunteer">Event Volunteer</option>
            <option value="Blood Donater">Blood Donater</option>
            <option value="Administrative Support">Administrative Support</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Availability:</label>
          <input
            type="text"
            name="availability"
            value={volunteerData.availability}
            className="w-full border rounded p-2"
            placeholder=" Weekdays, Weekends"
          />
        </div>

        <div>
          <label className="block mb-1">Skills/Experience:</label>
          <textarea
            name="skills"
            value={volunteerData.skills}
            className="w-full border rounded p-2"
            placeholder="Describe your experience on blood donation"
          />
        </div>

        <div>
          <label className="block">
            <input
              type="checkbox"
              name="consent"
              checked={volunteerData.consent}
            />
            I consent to participate as a volunteer
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white hover:bg-red-800 hover:text-white p-2 rounded mt-4 "
        >
          Submit 
        </button>
      </form>
    </div>
    </div>
  );
};

export default Volunteer;
