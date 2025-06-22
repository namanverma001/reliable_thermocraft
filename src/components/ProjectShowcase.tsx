import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import pressurevessel from '@/Assets/products/pressurevessel.jpg'
import chemicalreactor from '@/Assets/products/chemicalreactor.jpg'
import heatExchanger from '@/Assets/products/heatexchanger.png';
import storageTank from '@/Assets/products/storagetank.jpg';       // Adjust the path as necessary
import distillationColumn from '@/Assets/products/distillationcolumn.png'; // Adjust the path as necessary
import reboiler from '@/Assets/products/reboiler.jpg';             // Adjust the path as necessary
import limpetJacketed from '@/Assets/products/limpetcoil.png'; // Adjust the path as necessary

import finnedHeatExchanger from '@/Assets/products/fineheat.jpg'; // Adjust the path as necessary
const projects = [
    {
        id: 1,
        title: "Pressure Vessels",
        category: "Storage & Containment",
        image: pressurevessel,
        description: "Custom-engineered pressure vessels designed for high-pressure and corrosive applications with reliable performance.",
        tags: ["High Pressure", "Custom Design", "Corrosion Resistant"]
    },
    {
        id: 2,
        title: "Chemical Reactors",
        category: "Reaction Systems",
        image: chemicalreactor,
        description: "Robust chemical reactors for various reaction types with options for agitation, temperature control, and pressure regulation.",
        tags: ["Jacketed", "Agitator", "Temperature Control"]
    },
    {
        id: 3,
        title: "Heat Exchangers",
        category: "Heat Transfer",
        image: heatExchanger,
        description: "Highly efficient heat exchangers including shell & tube, plate, and air-cooled models for industrial heat transfer applications.",
        tags: ["Thermal Efficiency", "Compact Design", "Low Fouling"]
    },
    {
        id: 4,
        title: "Storage Tanks",
        category: "Storage & Containment",
        image: storageTank,
        description: "Durable storage tanks designed for atmospheric and low-pressure applications, customizable for various industries.",
        tags: ["Atmospheric", "Custom Size", "Corrosion Resistant"]
    },
    {
        id: 5,
        title: "Distillation Column",
        category: "Separation Systems",
        image: distillationColumn,
        description: "High-efficiency distillation columns for separation and purification of chemical mixtures in continuous or batch modes.",
        tags: ["Separation", "High Purity", "Fractionation"]
    },
    {
        id: 6,
        title: "Re-boiler",
        category: "Thermal Equipment",
        image: reboiler,
        description: "Reliable re-boilers designed to supply heat to distillation columns with consistent thermal efficiency and control.",
        tags: ["Heat Supply", "Column Integration", "Energy Efficient"]
    },
    {
        id: 7,
        title: "Limpet Coil & Jacketed Vessels",
        category: "Reaction Systems",
        image: limpetJacketed,
        description: "Specialized vessels with limpet coil or jacketed options for controlled heating/cooling in chemical processing.",
        tags: ["Thermal Jacket", "Pressure Rated", "Custom Agitation"]
    },
    {
        id: 8,
        title: "Finned Tube Heat Exchanger / Steam Air Heater / Hot Water Coils",
        category: "Heat Transfer",
        image: finnedHeatExchanger,
        description: "Versatile finned tube heat exchangers and air heaters for efficient thermal management in air and liquid applications.",
        tags: ["Air Heating", "Compact", "Energy Efficient"]
    }
];

const ProjectShowcase = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }) as any
    );

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(to_right,_transparent_1px,_transparent_1px)] bg-white [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_black,_transparent)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4"
                    >
                        Our Products
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Advanced Industrial Solutions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our comprehensive range of thermal processing equipment
                    </p>
                </motion.div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            skipSnaps: false,
                            inViewThreshold: 0.75
                        }}
                        plugins={[plugin.current]}
                        className="w-full max-w-7xl mx-auto"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {projects.map((project) => (
                                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                                className="group cursor-pointer"
                                            >
                                                <Card className="overflow-hidden">
                                                    <CardContent className="p-0">
                                                        <div className="aspect-[4/3] relative overflow-hidden">
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                                    <Button variant="default" className="w-full">
                                                                        <Eye className="w-4 h-4 mr-2" />
                                                                        View Details
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-6">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                                                                <Badge variant="secondary">{project.category}</Badge>
                                                            </div>
                                                            <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.tags.map((tag, index) => (
                                                                    <Badge key={index} variant="outline" className="text-xs">
                                                                        {tag}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                        <Badge className="mb-4" variant="secondary">{project.category}</Badge>
                                                        <p className="text-gray-600 text-base leading-relaxed">{project.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 md:-left-12" />
                        <CarouselNext className="absolute right-0 md:-right-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
