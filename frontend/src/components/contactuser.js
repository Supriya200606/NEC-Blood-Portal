import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const { user } = location.state || {};

  
  if (!user) {
    navigate(-1); 
    return null;
  }

  return (
    <div className="min-h-screen font-semibold bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-100 rounded-xl shadow-lg p-8 border-2 shadow-black">
        <h1 className="text-5xl font-extrabold text-red-600 text-center mb-2">
          {user.fullname}
        </h1>
        <p className="text-center text-gray-600 mb-6">Blood Donor Profile</p>

        <div className="space-y-6">
          
          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Blood Type:</span>
            <span className="text-lg text-red-700">{user.bloodType}</span>
          </div>

        
          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Age:</span>
            <span className="text-lg text-red-700">{user.age} years</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Weight:</span>
            <span className="text-lg text-red-700">{user.weight} kg</span>
          </div>

    
          <div className="flex justify-between items-center p-4  bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Gender:</span>
            <span className="text-lg text-red-700">{user.gender}</span>
          </div>

      
          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Contact Number:</span>
            <span className="text-lg text-red-700">{user.contactnumber}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Email:</span>
            <span className="text-lg text-red-700">{user.email}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Address:</span>
            <span className="text-lg text-red-700">{user.address}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>How to connect:</strong> Use the buttons below to email or message via WhatsApp.
          </p>
          <p className="text-xs text-blue-600 mt-1">
            <strong>Note:</strong> WhatsApp will open in a new tab. Make sure you have WhatsApp installed or use WhatsApp Web.
          </p>
        </div>
       
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => navigate(-1)} 
            className="px-6 py-2 bg-white text-red-600 font-bold border-2 border-red-600 rounded-lg shadow hover:bg-red-50 transition-all"
          >
            ← Back
          </button>
          
          <button
            onClick={() => {
              const subject = `Blood Donation Request for ${user.bloodType}`;
              const body = `Hi ${user.fullname},\n\nI hope you're doing well. I found your profile on NEC Blood Portal and saw that you're a ${user.bloodType} blood donor.\n\nI urgently need ${user.bloodType} blood. Would you be able to help or guide me?\n\nThank you for your time and consideration.\n\nBest regards`;
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');

            }}
            className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition-all"
          >
            📧 Email
          </button>
          
          <button
            onClick={() => {
              const message = `Hi ${user.fullname}, I urgently need ${user.bloodType} blood type. Can you help me or guide me to someone who can? I found your profile on NEC Blood Portal. Thank you!`;
              
              // Clean phone number and ensure it has country code
              let phoneNumber = user.contactnumber.replace(/[^\d+]/g, '');
              
              // If number doesn't start with + or country code, assume it's Indian number and add +91
              if (!phoneNumber.startsWith('+') && !phoneNumber.startsWith('91')) {
                // Remove leading zeros and add India country code
                phoneNumber = phoneNumber.replace(/^0+/, '');
                phoneNumber = `91${phoneNumber}`;
              } else if (phoneNumber.startsWith('+')) {
                // Remove + sign as wa.me doesn't need it
                phoneNumber = phoneNumber.substring(1);
              }
              
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              console.log('Opening WhatsApp with URL:', whatsappUrl);
              
              try {
                const newWindow = window.open(whatsappUrl, '_blank');
                if (!newWindow) {
                  // Fallback if popup is blocked
                  alert(`WhatsApp link: ${whatsappUrl}\n\nIf WhatsApp doesn't open automatically, copy this link and paste it in your browser.`);
                }
              } catch (error) {
                console.error('Error opening WhatsApp:', error);
                alert(`Please manually contact: ${user.contactnumber}\n\nMessage: ${message}`);
              }
            }}
            className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 transition-all"
          >
            📱 WhatsApp
          </button>
          
          <button
            onClick={() => {
              const phoneNumber = user.contactnumber;
              window.open(`tel:${phoneNumber}`, '_self');
            }}
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            📞 Call
          </button>

        </div>
      </div>
    </div>
  );
};

export default ContactUser;
