import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Megi Agro Chem Ltd.",
        company: "",
        content: "Reliable Thermocrafts successfully executed process design, equipment supply, and complete plant fabrication for our 30 KL/Day distillery project. Their work quality and engineering services were excellent and met our full satisfaction. We confidently recommend them for future projects."
    },
    {
        id: 2,
        name: "Sumangalam Formulations Pvt. Ltd.",
        company: "",
        content: "We thank Reliable Thermocrafts for their quality-conscious approach, timely execution, and strong technical support in supplying process equipment for our formulation projects. Their commitment and service have been truly commendable."
    },
    {
        id: 3,
        name: "Nirmal Industrial Controls Pvt. Ltd.",
        company: "",
        content: "We sincerely thank Reliable Thermocrafts for successfully completing the heater fabrication job (GJ927) within just 4 weeks, meeting all our requirements. We also appreciate their teamwork and coordination with our QA team."
    },
    {
        id: 4,
        name: "Catapharma Chemicals Pvt. Ltd.",
        company: "",
        content: "We thank Reliable Thermocrafts for consistently supplying high-quality stainless steel reactors and heat exchangers that deliver excellent performance. Their contribution has supported our ongoing success, and we value our continued association."
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
                                            <p className="text-gray-700 mb-6">{testimonial.content}</p>
                                            <div className="border-t pt-4">
                                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
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