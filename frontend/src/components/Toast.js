const Toast = ({ message }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold z-[9999] animate-fade">
      {message}
    </div>
  );
};

export default Toast;
