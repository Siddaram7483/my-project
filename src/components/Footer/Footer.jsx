import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { BsArrowRightCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-3xl text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell className="text-secondary text-3xl" />
              <p>Coders</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>
              At Coders Gym, we are more than just a fitness center; we are a
              community dedicated to helping you achieve your health and
              wellness goals. Our state-of-the-art facility features
              cutting-edge equipment, a variety of group classes, and
              personalized training programs designed to fit your unique needs.
            </p>
            <div className="flex gap-4">
              <a
                href="/"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <HiLocationMarker />
              </a>
              <a
                href="/"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="/"
                className="text-3xl hover:text-gray-400 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <HiPhone className="text-xl" />
                <a href="tel:+1234567890" className="hover:text-gray-400">
                  +91 7488883333
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiMail className="text-xl" />
                <a
                  href="mailto:info@codersgym.com"
                  className="hover:text-gray-400"
                >
                  info@codersgym.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiLocationMarker className="text-xl" />
                <span>123 Fitness St, Gym City, GY 560066 Bengaluru</span>
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  Home <BsArrowRightCircle />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  About Us <BsArrowRightCircle />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  Services <BsArrowRightCircle />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  Contact <BsArrowRightCircle />
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Subscribe to Our Newsletter
            </h3>
            <p>
              Stay updated with our latest news, fitness tips, and special
              offers. Enter your email below to subscribe.
            </p>
            <form className="flex gap-3 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-transparent text-teal-500 px-6 py-3 rounded-lg border border-teal-500 shadow-lg hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Coders Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
