import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import condenser from '@/Assets/backservice.jpg';

const services = [
  {
    id: 1,
    number: '01.',
    title: 'Reactor Systems',
    description:
      'State-of-the-art reactor systems designed and manufactured for optimal process efficiency and control, with custom solutions for every industry need.',
  },
  {
    id: 2,
    number: '02.',
    title: 'Industrial Solutions',
    description:
      'Complete thermal process solutions for manufacturing and industrial applications, optimized for maximum efficiency and performance.',
  },
  {
    id: 3,
    number: '03.',
    title: 'Engineering Excellence',
    description:
      'Expert engineering services combining innovative design with technical precision to deliver superior thermal management solutions.',
  },
  {
    id: 4,
    number: '04.',
    title: 'Quality Assurance',
    description:
      'ISO 9001:2015 certified processes ensuring the highest standards of quality and safety in every system we deliver.',
  },
  {
    id: 5,
    number: '05.',
    title: 'Technical Support',
    description:
      'Comprehensive 24/7 technical support and maintenance services to ensure your systems operate at peak performance.',
  },
  {
    id: 6,
    number: '06.',
    title: 'System Integration',
    description:
      'Seamless integration of thermal solutions into your existing processes, with full commissioning and optimization support.',
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();

  const handleInteraction = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  const handleNavigate = (serviceId) => {
    navigate('/products');
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-blue-500 mb-2 sm:mb-4 font-libre text-xs sm:text-[18px] tracking-wider font-bold">
            OUR SERVICES
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-libre font-bold text-navy-900 tracking-tighter">
            Innovative Solutions for
            <br />
            Industrial Excellence
          </h3>
        </div>

        {/* Services Grid with Background Image */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full rounded-lg lg:rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${condenser})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Services Grid */}
          <div className="relative flex overflow-x-auto snap-x snap-mandatory font-libre hide-scrollbar gap-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] snap-start group border-r border-white/20 overflow-hidden"
                onMouseEnter={() => setIsHovered(service.id)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleInteraction(service.id)}
              >
                {/* Background Overlay */}
                <div
                  className={cn(
                    'absolute inset-0 bg-blue-900/60 transition-opacity duration-300',
                    (activeId === service.id || isHovered === service.id)
                      ? 'opacity-90'
                      : 'opacity-60'
                  )}
                />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col">
                  {/* Plus Icon */}
                  <button
                    aria-label={`Toggle ${service.title} details`}
                    className={cn(
                      'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white/40 flex items-center justify-center',
                      'text-white transition-transform duration-300 hover:border-white/60',
                      (activeId === service.id || isHovered === service.id)
                        ? 'rotate-45'
                        : ''
                    )}
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>

                  {/* Title */}
                  <div className="mt-auto">
                    <span className="text-white/60 text-sm sm:text-base md:text-lg">
                      {service.number}
                    </span>
                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* Slide-up Content */}
                <div
                  className={cn(
                    'absolute left-0 right-0 bottom-0 bg-blue-600 p-4 sm:p-6 md:p-8 transition-transform duration-500 ease-in-out transform',
                    (activeId === service.id || isHovered === service.id)
                      ? 'translate-y-0'
                      : 'translate-y-full'
                  )}
                  style={{ height: '70%' }}
                >
                  <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    {service.number} {service.title}
                  </h4>
                  <p className="text-white/90 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    onClick={() => handleNavigate(service.id)}
                    variant="outline"
                    className="border-white bg-white text-blue-600 text-xs sm:text-sm md:text-base py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 hover:bg-blue-50 transition-colors"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex justify-center mt-4 gap-2 sm:hidden">
            {services.map((service) => (
              <div
                key={service.id}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${activeId === service.id ? 'bg-blue-500' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
