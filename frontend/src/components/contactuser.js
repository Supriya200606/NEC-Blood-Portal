import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, User, Droplet, Weight, Heart } from "lucide-react";

const ContactUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  if (!user) {
    navigate(-1);
    return null;
  }

  // Prepare WhatsApp Number Formatting
  let phoneNumber = user.contactnumber.replace(/[^\d+]/g, "");
  if (!phoneNumber.startsWith("+") && !phoneNumber.startsWith("91")) {
    phoneNumber = "91" + phoneNumber.replace(/^0+/, "");
  } else if (phoneNumber.startsWith("+")) {
    phoneNumber = phoneNumber.substring(1);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 border-t-4 border-red-600">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-red-700">{user.fullname}</h1>
          <p className="text-sm text-gray-500 mt-1">Voluntary Blood Donor</p>
        </div>

        <div className="mt-6 space-y-4">

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <Droplet className="text-red-600" /> Blood Type
            </span>
            <span className="text-lg font-bold text-red-700">{user.bloodType}</span>
          </div>

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <User className="text-red-600" /> Age
            </span>
            <span className="text-red-600">{user.age} years</span>
          </div>

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <Weight className="text-red-600" /> Weight
            </span>
            <span className="text-red-600">{user.weight} kg</span>
          </div>

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <Heart className="text-red-600" /> Gender
            </span>
            <span className="text-red-600">{user.gender}</span>
          </div>

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <Phone className="text-red-600" /> Contact
            </span>
            <span className="text-red-600">{user.contactnumber}</span>
          </div>

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <Mail className="text-red-600" /> Email
            </span>
            <span className="text-red-600">{user.email}</span>
          </div>

          <div className="flex justify-between bg-slate-50 p-3 rounded-lg border">
            <span className="font-semibold flex items-center gap-2 text-gray-700">
              <MapPin className="text-red-600" /> Address
            </span>
            <span className="text-red-600">{user.address}</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition font-semibold"
          >
            ← Back
          </button>

          <button
            onClick={() =>
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}&su=Blood Donation Request&body=Hi ${user.fullname}, I found your profile on NEC Blood Portal. I am in need of ${user.bloodType} blood. Can you help me?`,
                "_blank"
              )
            }
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
          >
            📧 Email
          </button>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  `Hi ${user.fullname}, I am in need of ${user.bloodType} blood. Can you help me?`
                )}`,
                "_blank"
              )
            }
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
          >
            📱 WhatsApp
          </button>

          <button
            onClick={() => window.open(`tel:${user.contactnumber}`, "_self")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            📞 Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUser;
