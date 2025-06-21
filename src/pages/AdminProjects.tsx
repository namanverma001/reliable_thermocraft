import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/projects/';

function getYouTubeEmbedUrl(url: string) {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

const AdminProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    media_type: 'image',
    image: null as File | null,
    video_url: '',
    specs: '',
    applications: '',
    tags: '',
  });
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('admin_auth') !== 'true') {
      navigate('/admin');
      return;
    }
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, [navigate]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === 'image') {
      setForm(f => ({ ...f, image: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if ((k === 'specs' || k === 'applications' || k === 'tags') && typeof v === 'string') {
        formData.append(k, JSON.stringify(v.split(',').map((s: string) => s.trim()).filter(Boolean)));
      } else if (v) {
        formData.append(k, v as any);
      }
    });
    const res = await fetch(API_URL, {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      const newProject = await res.json();
      setProjects(p => [newProject, ...p]);
      setShowModal(false);
      setForm({ title: '', description: '', media_type: 'image', image: null, video_url: '', specs: '', applications: '', tags: '' });
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}${id}/delete/`, { method: 'POST' });
    setProjects(p => p.filter(proj => proj.id !== id));
    setDeletingId(null);
    setConfirmDelete(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Floating Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-3xl z-50 hover:bg-blue-700"
          title="Add New Project"
        >
          +
        </button>
        {/* Add Project Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setShowModal(false)}>&times;</button>
              <h2 className="text-xl font-bold mb-4">Add New Project</h2>
              <form onSubmit={handleFormSubmit}>
                <input name="title" value={form.title} onChange={handleFormChange} placeholder="Title" className="w-full mb-2 p-2 border rounded" required />
                <textarea name="description" value={form.description} onChange={handleFormChange} placeholder="Description" className="w-full mb-2 p-2 border rounded" required />
                <input name="specs" value={form.specs} onChange={handleFormChange} placeholder="Specifications (comma separated)" className="w-full mb-2 p-2 border rounded" />
                <input name="applications" value={form.applications} onChange={handleFormChange} placeholder="Applications (comma separated)" className="w-full mb-2 p-2 border rounded" />
                <input name="tags" value={form.tags} onChange={handleFormChange} placeholder="Tags (comma separated)" className="w-full mb-2 p-2 border rounded" />
                <select name="media_type" value={form.media_type} onChange={handleFormChange} className="w-full mb-2 p-2 border rounded">
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
                {form.media_type === 'image' ? (
                  <input type="file" name="image" accept="image/*" onChange={handleFormChange} className="w-full mb-2" required />
                ) : (
                  <input name="video_url" value={form.video_url} onChange={handleFormChange} placeholder="YouTube Video URL" className="w-full mb-2 p-2 border rounded" required />
                )}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Publish</button>
              </form>
            </div>
          </div>
        )}
        {/* Projects Grid - Horizontal Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer group relative"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      {project.media_type === 'video' && project.video_url ? (
                        <div className="aspect-video">
                          <iframe
                            src={getYouTubeEmbedUrl(project.video_url)}
                            title={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="aspect-video relative group">
                          <img
                            src={project.image ? (project.image.startsWith('http') ? project.image : `http://localhost:8000${project.image}`) : ''}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              Read Full Project
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Delete Button */}
                      <button
                        onClick={e => { e.stopPropagation(); setDeletingId(project.id); setConfirmDelete(true); }}
                        className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-700 z-10"
                        title="Delete Project"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 leading-relaxed text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="mt-4 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        Click to read more →
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Delete Confirmation Modal */}
        {confirmDelete && deletingId && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this project?</p>
              <div className="flex justify-end gap-4 mt-6">
                <button className="px-4 py-2 rounded bg-gray-200" onClick={() => setConfirmDelete(false)}>Cancel</button>
                <button className="px-4 py-2 rounded bg-red-600 text-white" onClick={() => handleDelete(deletingId)}>Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminProjects;
