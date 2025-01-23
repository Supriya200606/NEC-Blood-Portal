import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Blood request pos has been posted.Review the Form. ', time: '5m ago' },
    { id: 2, message: 'Your blood donate form is successfully submitted.', time: '15m ago' },
    { id: 3, message: 'Your account has been succesfully registered  .', time: '1h ago' },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className='bg-slate-200'>
    <div className="max-w-lg mx-auto p-4 bg-white shadow-3xl rounded-lg border border-slate-200 h-screen  w-1/2">
      <h2 className="text-lg font-semibold text-black mb-4 border-b-4">Notifications</h2>
      <ul className="space-y-3">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={"p-3 rounded-lg flex justify-between items-center "}
          >
            <div>
              <p className="text-md font-medium text-gray-700">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      {notifications.length === 0 && (
        <p className="text-sm text-gray-500 text-center mt-4">No new notifications.</p>
      )}
    </div>
    </div>
  );
};

export default Notification;
