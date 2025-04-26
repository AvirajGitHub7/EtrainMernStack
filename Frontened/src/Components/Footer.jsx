import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-32">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        {/* Booking Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Booking</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Train Ticket</a></li>
            <li><a href="#" className="hover:text-blue-500">PNR Status</a></li>
            <li><a href="#" className="hover:text-blue-500">Train Schedule</a></li>
            <li><a href="#" className="hover:text-blue-500">Cancellation</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Policies</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-red-500 text-2xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 E-TrainReservation. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
