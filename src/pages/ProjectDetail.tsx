import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Share2, Clock, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/projects/';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}${id}/`)
      .then(res => res.json())
      .then(data => {
        setProject(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Helper to convert YouTube URL to embed format
  function getYouTubeEmbedUrl(url: string) {
    if (!url) return '';
    // Handle both youtu.be and youtube.com links
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 mb-6"
                  onClick={() => navigate('/projects')}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
                <div className="mb-6">
                  {/* Removed category badge */}
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-xl text-blue-100 mb-6">
                    {project.description}
                  </p>
                </div>
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-blue-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.created_at ? new Date(project.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Featured Image or Video */}
                    {project.media_type === 'video' && project.video_url ? (
                      <div className="mb-8 aspect-video">
                        <iframe
                          src={getYouTubeEmbedUrl(project.video_url)}
                          title={project.title}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                          allowFullScreen
                        />
                      </div>
                    ) : project.image && (
                      <div className="mb-8">
                        <img
                          src={project.image.startsWith('http') ? project.image : `http://localhost:8000${project.image}`}
                          alt={project.title}
                          className="w-full h-96 object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    )}
                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:text-gray-600 prose-blockquote:border-blue-500">
                      <h2>Description</h2>
                      <p>{project.description}</p>
                      {project.specs && project.specs.length > 0 && (
                        <>
                          <h2>Specifications</h2>
                          <ul>{project.specs.map((spec: string, i: number) => <li key={i}>{spec}</li>)}</ul>
                        </>
                      )}
                      {project.applications && project.applications.length > 0 && (
                        <>
                          <h2>Applications</h2>
                          <ul>{project.applications.map((app: string, i: number) => <li key={i}>{app}</li>)}</ul>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6"
                  >
                    {/* Tags */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags && project.tags.map((tag: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    {/* Share */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Share2 className="w-4 h-4" />
                          Share This Project
                        </h3>
                        <div className="space-y-3">
                          <Button 
                            variant="outline" 
                            className="w-full justify-start"
                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                          >
                            Copy Link
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full justify-start"
                            onClick={() => window.open(`mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(window.location.href)}`)}
                          >
                            Share via Email
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Contact CTA */}
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">Interested in Similar Solutions?</h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          Contact our team to discuss your project requirements.
                        </p>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => navigate('/contact')}
                        >
                          Get in Touch
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;