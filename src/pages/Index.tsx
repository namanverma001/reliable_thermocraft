
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhoWeAre from '../components/whoweare';
import Global from '../components/globalservices';
import Testimonials from '../components/Testimonials';
import ProjectShowcase from '../components/ProjectShowcase';
import TechnologyStack from '../components/TechnologyStack';
import IndustrySolutions from '../components/IndustrySolutions';
import RDExcellenceCenter from '@/components/excellence';
import OurClients from '@/components/ourclients';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeAre />
      <Services />
      <TechnologyStack />
      <ProjectShowcase />
      <RDExcellenceCenter />
      <Global />
      <IndustrySolutions />
      <OurClients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
