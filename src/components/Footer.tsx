import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Services from './Services';
import logo from '@/Assets/logo.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <img src={logo} alt="Reliable Thermocraft" className="h-12" />
            <p className="text-gray-300 leading-relaxed">
              Trusted leader in industrial equipment manufacturing since 2005 — specializing in pressure vessels, reactors, heat exchangers, and distillation systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products and services</Link></li>
              {/* <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li> */}
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919423927384" className="text-gray-300 hover:text-blue-400 block">+91 9423927384</a>
                  <a href="tel:+918087027384" className="text-gray-300 hover:text-blue-400 block">+91 8087027384</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:works@reliablecrafts.com" className="text-gray-300 hover:text-blue-400 block">works@reliablecrafts.com</a>
                  <a href="mailto:sales@reliablecrafts.com" className="text-gray-300 hover:text-blue-400 block">sales@reliablecrafts.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.google.com/maps/place/Reliable+Thermocraft/@19.9288572,73.7316995,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 block"
                  >
                    S.No.22/1/1/B, Near Agra-Bombay Road<br />
                    Behind The Furniture Stop, Opp. CNG Pump<br />
                    Vilholi, Nashik, Maharashtra 422010
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Reliable Thermocraft. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
