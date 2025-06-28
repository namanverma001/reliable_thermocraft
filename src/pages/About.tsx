import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Aboutus from '../components/aboutus';
import Aboutmission from '../components/aboutmission';
import Aboutjourney from '../components/aboutjourney';
import Image from "@/Assets/condenser.jpg"

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-0">
        {/* Hero Section with Background */}
        <div className="relative min-h-[60vh] flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={Image}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                About Reliable Thermocraft
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Learn about our journey, values, and commitment to delivering exceptional thermal management solutions since 2005.
              </p>
            </div>
          </div>
        </div>

        {/* Rest of the Content */}
        <About />
        <Aboutjourney />
        <Aboutus />
        <Aboutmission />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
