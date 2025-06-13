
import React from 'react';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const achievements = [
    "ISO 9001:2015 Certified Quality Management",
    "25+ Years of Industry Experience",
    "500+ Successful Project Completions",
    "24/7 Technical Support Available",
    "Nationwide Service Coverage",
    "Expert Engineering Team"
  ];

  const stats = [
    { icon: Users, number: "50+", label: "Expert Engineers" },
    { icon: Globe, number: "15", label: "States Served" },
    { icon: Award, number: "98%", label: "Customer Satisfaction" },
    { icon: CheckCircle, number: "1000+", label: "Systems Installed" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Reliable Thermocraft
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 1995, Reliable Thermocraft has been at the forefront of thermal technology innovation, 
                providing cutting-edge heating, cooling, and temperature control solutions to industries 
                across the nation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, combined with decades of expertise, has made us the trusted 
                partner for companies requiring reliable thermal management systems. From small-scale 
                applications to large industrial installations, we deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center"
                alt="Industrial facility"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
