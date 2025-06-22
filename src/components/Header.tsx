import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Logo from '@/Assets/logo.jpg'; // Adjust the path as necessary
import certificate from '@/Assets/certificate.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top contact bar */}
      <div className="hidden md:block">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone size={14} />
                <span>+91 9423927384</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Mail size={14} />
                <span>works@reliablecrafts.com</span>
              </div>
            </div>
            <div className="text-sm opacity-90">
              Professional Thermal Solutions Since 2005
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
              <img src={Logo} alt="Reliable Thermocraft Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Certificate Dialog */}
            <Dialog open={isCertificateOpen} onOpenChange={setIsCertificateOpen}>
              <DialogTrigger asChild>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                  <Award size={18} />
                  <span>Certificate</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] md:w-auto left-[2.5%] md:left-[50%] translate-x-0 md:translate-x-[-50%] p-0">
                <div className="relative">
                  <img
                    src={certificate}
                    alt="ISO 9001:2015 Quality Management Certificate"
                    className="w-full h-auto object-contain max-h-[90vh]"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in bg-white/95 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-3">
              <button onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left rounded-lg hover:bg-blue-50">
                Home
              </button>
              <button onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left rounded-lg hover:bg-blue-50">
                About
              </button>
              <button onClick={() => handleNavigation('/services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left rounded-lg hover:bg-blue-50">
                Services
              </button>
              <button onClick={() => handleNavigation('/products')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left rounded-lg hover:bg-blue-50">
                Products
              </button>
              <button onClick={() => handleNavigation('/projects')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left rounded-lg hover:bg-blue-50">
                Projects
              </button>
              <button onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left rounded-lg hover:bg-blue-50">
                Contact
              </button>
              <button
                onClick={() => setIsCertificateOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium w-full mt-4 flex items-center justify-center space-x-2"
              >
                <Award size={18} />
                <span>Certificate</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
