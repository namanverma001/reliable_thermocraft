import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const projects = [
    {
        id: 1,
        title: "Agitated Thin Film Dryer",
        category: "Drying Solutions",
        image: "/products/ATFD.jpg",
        description: "Advanced agitated thin film dryer for efficient drying of heat-sensitive materials with precise temperature control.",
        specs: [
            "Heating Area: 0.1 to 2 Sq.mt",
            "Material: SS316/SS304/Hastelloy",
            "Temperature: Up to 300°C"
        ],
        applications: [
            "Chemical Processing",
            "Pharmaceutical",
            "Food & Beverage"
        ],
        tags: ["Temperature Control", "Automation", "Vacuum System"]
    },
    {
        id: 2,
        title: "Wiped Film Evaporator",
        category: "Evaporation",
        image: "/products/WFE.jpg",
        description: "High-performance wiped film evaporator for gentle processing of heat-sensitive products with minimal residence time.",
        specs: [
            "Heating Area: 0.1 to 2 Sq.mt",
            "Material: SS316/SS304/Hastelloy",
            "Operating Pressure: Full Vacuum to 3 bar"
        ],
        applications: [
            "Fine Chemicals",
            "Pharmaceuticals",
            "Food Processing"
        ],
        tags: ["Vacuum System", "Heat Transfer", "Process Control"]
    },
    {
        id: 3,
        title: "Rising Film Evaporator",
        category: "Evaporation",
        image: "/products/RFE.jpg",
        description: "Efficient rising film evaporator designed for continuous evaporation of liquids with natural circulation.",
        specs: [
            "Capacity: Up to 3000 kg/hr",
            "Material: SS316/SS304",
            "Steam Pressure: Up to 3 bar"
        ],
        applications: [
            "Chemical Industry",
            "Food & Beverage",
            "Water Treatment"
        ],
        tags: ["Steam Heating", "Continuous Process", "Automation"]
    },
    {
        id: 4,
        title: "Short Path Distillation",
        category: "Distillation",
        image: "/products/SPD.jpg",
        description: "Advanced short path distillation system for high-purity separation of heat-sensitive materials.",
        specs: [
            "Evaporator Area: 0.1 to 1 Sq.mt",
            "Operating Pressure: 0.001 to 1 mbar",
            "Internal Condenser Design"
        ],
        applications: [
            "Fine Chemicals",
            "Pharmaceuticals",
            "Specialty Oils"
        ],
        tags: ["High Vacuum", "Molecular Distillation", "Temperature Control"]
    },
    {
        id: 5,
        title: "Falling Film Evaporator",
        category: "Evaporation",
        image: "/products/FFE.jpg",
        description: "High-efficiency falling film evaporator for gentle concentration of heat-sensitive products.",
        specs: [
            "Capacity: Custom designs available",
            "Material: SS316/SS304/Special alloys",
            "Multiple Effect Options"
        ],
        applications: [
            "Food Processing",
            "Chemical Industry",
            "Pharmaceutical"
        ],
        tags: ["Energy Efficient", "Continuous Process", "Low Residence Time"]
    },
    {
        id: 6,
        title: "Pilot Plant Units",
        category: "Research & Development",
        image: "/products/Pilot.jpg",
        description: "Comprehensive pilot plant setups for process development and scale-up studies.",
        specs: [
            "Multiple Configurations",
            "Fully Instrumented",
            "Data Logging Capability"
        ],
        applications: [
            "Process Development",
            "Research Institutes",
            "Industrial R&D"
        ],
        tags: ["Research", "Scale-up", "Process Optimization"]
    }
];

const categories = ["All", "Evaporation", "Distillation", "Drying Solutions", "Research & Development"];

const ProjectShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }) as any
    );

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

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

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                            className="text-sm"
                        >
                            {category}
                        </Button>
                    ))}
                </div>                <div className="relative">                    <Carousel
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
                        {filteredProjects.map((project) => (
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
                                    <DialogContent className="max-w-3xl">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                                <Badge className="mb-4" variant="secondary">{project.category}</Badge>
                                                <p className="text-gray-600 mb-6">{project.description}</p>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-lg font-semibold mb-2">Specifications</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            {project.specs.map((spec, index) => (
                                                                <li key={index}>{spec}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-lg font-semibold mb-2">Applications</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            {project.applications.map((app, index) => (
                                                                <li key={index}>{app}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
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
