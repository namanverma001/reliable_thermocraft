import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsComponent from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of industrial equipment projects and thermal management solutions delivered across various industries.
            </p>
          </div>
        </div>
        <ProjectsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;