import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import broucher from "@/Assets/Reliable Thermocraft Broucher.pdf"
const Hero = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&h=800&q=80",
      title: "Your Text 1",
      subtitle: "Your subtitle 1",
      description: "Your description goes here. "
    },
    {
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=1200&h=800&q=80",
      title: "Your Text 2",
      subtitle: "Your subtitle 2",
      description: "Your description goes here. "
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&h=800&q=80",
      title: "Your Text 3",
      subtitle: "Your subtitle 3",
      description: "Your description goes here. "
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&h=800&q=80",
      title: "Your Text 4",
      subtitle: "Your subtitle 4",
      description: "Your description goes here. "
    }
  ];


  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images with Ultra Smooth Transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-out"
            style={{
              backgroundImage: `url("${slide.image}")`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
              filter: index === currentSlide ? 'blur(0px)' : 'blur(2px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full -mt-20">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-sm font-medium text-white animate-fade-in">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Since 2005
              </div>

              {/* Animated Text Content */}
              <div className="min-h-[200px]">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white transition-all duration-1000 ease-out ${isAnimating
                  ? 'opacity-0 transform translate-y-12 scale-95'
                  : 'opacity-100 transform translate-y-0 scale-100'
                  }`}>
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {currentSlideData.title}
                  </span>
                  <span className="block text-blue-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    {currentSlideData.subtitle}
                  </span>
                </h1>
                <p className={`text-xl text-blue-100 leading-relaxed mt-6 transition-all duration-1000 ease-out ${isAnimating
                  ? 'opacity-0 transform translate-y-12'
                  : 'opacity-100 transform translate-y-0'
                  }`} style={{ transitionDelay: '0.3s' }}>
                  {currentSlideData.description}
                </p>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${isAnimating
              ? 'opacity-0 transform translate-y-12'
              : 'opacity-100 transform translate-y-0'
              }`} style={{ transitionDelay: '0.5s' }}>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group hover:scale-105 hover:shadow-lg" onClick={() => navigate('/products')}>
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={() => window.open(broucher, '_blank')}>
                Download Catalog
              </button>
            </div>

            {/* Animated Stats */}
            <div className={`grid grid-cols-3 gap-8 pt-8 border-t border-blue-600/30 transition-all duration-1000 ease-out ${isAnimating
              ? 'opacity-0 transform translate-y-12'
              : 'opacity-100 transform translate-y-0'
              }`} style={{ transitionDelay: '0.7s' }}>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white">00+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white">00%</div>
                <div className="text-sm text-blue-200">Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
