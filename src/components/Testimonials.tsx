import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "John Smith",
        position: "Operations Director",
        company: "Global Manufacturing Co.",
        content: "Reliable Thermocraft's reactor systems have significantly improved our production efficiency. Their expertise in thermal management is unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Johnson",
        position: "Chief Engineer",
        company: "Industrial Solutions Ltd",
        content: "The technical support team is exceptional. They've helped us optimize our thermal processes and reduce energy consumption by 30%.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Chen",
        position: "Plant Manager",
        company: "Advanced Materials Corp",
        content: "Their custom engineering solutions perfectly addressed our unique requirements. The quality and reliability of their systems are outstanding.",
        rating: 5
    },
    {
        id: 4,
        name: "Emma Davis",
        position: "Technical Director",
        company: "Precision Industries",
        content: "The integration of their thermal management systems was seamless. Their attention to detail and professional approach sets them apart.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-blue-500 text-sm font-bold tracking-wider mb-3">TESTIMONIALS</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover how our thermal solutions have helped businesses across industries achieve their goals.
                    </p>
                </motion.div>

                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                                <div className="p-2">
                                    <Card className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="p-6">
                                            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
                                            <div className="flex items-center space-x-1 mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 mb-6">{testimonial.content}</p>
                                            <div className="border-t pt-4">
                                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                                <p className="text-sm text-gray-600">{testimonial.position}</p>
                                                <p className="text-sm text-blue-500">{testimonial.company}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;