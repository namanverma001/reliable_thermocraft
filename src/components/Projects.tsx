import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

// Helper for API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/projects/';

// Helper to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string) {
	if (!url) return '';
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
	return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

const Projects = () => {
	const navigate = useNavigate();
	const [projects, setProjects] = useState<any[]>([]);

	// Fetch projects from backend
	useEffect(() => {
		fetch(API_URL)
			.then(res => res.json())
			.then(data => setProjects(data));
	}, []);

	const handleProjectClick = (projectId: number) => {
		navigate(`/projects/${projectId}`);
	};

	return (
		<section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="container mx-auto px-4">
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
								onClick={() => handleProjectClick(project.id)}
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
			</div>
		</section>
	);
};

export default Projects;