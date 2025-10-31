import { Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-6 w-6 text-red-400" />
              <span className="text-xl font-bold">RedHope NEC</span>
            </div>
            <p className="text-gray-300">
              Every drop counts. Join us in saving lives through blood donation.
            </p>
            <ul className="space-y-2 text-gray-300 pt-4">
              <li className="hover:text-red-300 cursor-pointer">Terms of Service</li>
              <li className="hover:text-red-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-red-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/form" className="hover:text-red-300 transition-colors">
                  Donate/Request Blood
                </Link>
              </li>
              <li>
                <Link to="/ablood" className="hover:text-red-300 transition-colors">
                  Blood Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/helpline" className="hover:text-red-300 transition-colors">
                  Emergency Helpline
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="hover:text-red-300 transition-colors">
                  Donation Eligibility
                </Link>
              </li>
              <li>
                <Link to="/guide" className="hover:text-red-300 transition-colors">
                  Donation Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t-4 border-red-800 mt-8 pt-4">
          <div className="text-center text-gray-300">
            <p>&copy; 2025 NEC Blood Portal. Saving Lives Digitally.</p>
            <p className="mt-2 text-sm text-gray-400">
              Developed by{" "}
              <span className="text-red-400 font-semibold">M. Supriya</span>,{" "}
              <span className="text-red-400 font-semibold">M.Vikneash</span> &{" "}
              <span className="text-red-400 font-semibold">E.Vinoth</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
