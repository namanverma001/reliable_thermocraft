import BgImage from '@/Assets/team1.jpg';
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RDExcellenceCenter() {
    const navigate = useNavigate();

    // TODO: Replace with actual capabilities text from client
    const capabilities = [
        "Capability 1",
        "Capability 2",
        "Capability 3",
        "Capability 4",
        "Capability 5"
    ];
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <img
                src={BgImage}
                alt="R&D Laboratory Facility"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen">
                <div className="flex w-full max-w-7xl mx-auto">
                    {/* Left Content Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-lg bg-white/95 backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center"
                    >
                        <div className="space-y-6">
                            {/* Header */}
                            <div className="space-y-2">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-sm font-medium text-gray-600 tracking-wide uppercase"
                                >
                                    TEXT TO BE ADDED
                                </motion.p>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                >
                                    CAPIBILITIES
                                    <br />
                                    TEXT
                                </motion.h1>
                            </div>

                            {/* Capabilities List */}
                            <div className="space-y-3">
                                {capabilities.map((capability, index) => (
                                    <motion.div
                                        key={capability}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                        <p className="text-blue-700 font-medium text-sm lg:text-base">{capability}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="pt-4"
                            >
                                <Button
                                    size="lg"
                                    className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 flex items-center gap-2 transition-all duration-200 hover:shadow-lg h-auto"
                                    onClick={() => navigate('/products')}
                                >
                                    <span className="text-lg tracking-wide">EXPLORE</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Image space (handled by background) */}
                    <div className="hidden lg:block flex-1" />
                </div>
            </div>
        </section>
    )
}
