import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Cpu, Gauge, Shield, Lightbulb, Cog, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const technologies = [
    {
        icon: Thermometer,
        title: "Temperature Control",
        description: "Precision temperature management systems with real-time monitoring and control"
    },
    {
        icon: Cpu,
        title: "Smart Automation",
        description: "Advanced automation solutions for optimal process efficiency"
    },
    {
        icon: Gauge,
        title: "Performance Monitoring",
        description: "Real-time performance tracking and analytics systems"
    },
    {
        icon: Shield,
        title: "Safety Systems",
        description: "Integrated safety protocols and emergency response systems"
    },
    {
        icon: Lightbulb,
        title: "Energy Efficiency",
        description: "Innovative solutions for maximum energy conservation"
    },
    {
        icon: Cog,
        title: "Process Integration",
        description: "Seamless integration with existing industrial processes"
    }
];

const TechnologyStack = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(to_right,_transparent_1px,_transparent_1px)] bg-white [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_black,_transparent)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-start mb-16"
                    >
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <Badge className="mb-4" variant="secondary">Our Technology</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Advanced Technology <span className="text-blue-600">Stack</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-xl">
                                Revolutionizing thermal processes with cutting-edge technologies and innovative solutions.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <Card className="p-6 bg-blue-50/50 border-none">
                                <p className="text-gray-600 mb-4">
                                    Our technology stack represents the culmination of years of research and development in thermal processing solutions.
                                </p>
                                <Button variant="default" className="group">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Card>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group h-full hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg">
                                    <div className="p-8">
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                <tech.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{tech.description}</p>
                                        <div className="pt-2 mt-auto">
                                            <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                                                Explore
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;
