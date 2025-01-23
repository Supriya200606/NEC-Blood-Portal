import { Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-6 w-6 text-red-400" />
              <span className="text-xl font-bold">BloodLife</span>
            </div>
            <p className="text-gray-300">
              Every drop counts. Join us in saving lives through blood donation.
            </p>
            <ul className="space-y-2 text-gray-300 pt-4">
              <li className="hover:text-red-300 cursor-pointer">Terms of Service</li>
              <li className="hover:text-red-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-300 transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/form" className="text-gray-300 hover:text-red-300 transition-colors">
                  Donate/Request Blood
                </Link>
              </li>

              <li>
                <Link to="/ablood" className="text-gray-300 hover:text-red-300 transition-colors">
                  Blood Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span>Emergency Hotline:</span>
                <p className="hover:text-red-300 cursor-pointer">100</p>
              </li>
              <li className="flex items-center space-x-2">
                <span>Email:</span>
                <p className="hover:text-red-300 cursor-pointer">help@healthnet.org</p>
              </li>
              <li>
                <a href="/helpline" className="hover:text-red-300 cursor-pointer">
                  HelpLine Portal
                </a>
              </li>
              <li>
                <a href="/bank" className="hover:text-red-300 cursor-pointer">
                  Blood Bank Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-300">
              <li
                onClick={() => navigate("/volunteer")}
                className="hover:text-red-300 cursor-pointer"
              >
                Donor Stories
              </li>
              <li
                onClick={() => navigate("/campaigns")}
                className="hover:text-red-300 cursor-pointer"
              >
                Campaigns
              </li>

              <li
                onClick={() => navigate("/volunteer")}
                className="hover:text-red-300 cursor-pointer"
              >
                Volunteer
              </li>
              <li className="hover:text-red-300 cursor-pointer">Partner Organizations</li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-red-800 mt-8 pt-4">
          <div className="text-center text-gray-300">
            <p>&copy; 2024 HealthNet. Saving Lives Digitally.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
