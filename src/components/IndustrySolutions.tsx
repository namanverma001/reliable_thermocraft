
import React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, TestTubes, Pill, Fuel, Leaf, Building, Play, Pause } from "lucide-react"

const industries = [
    {
        icon: Factory,
        title: "Chemical Industry",
        description: "Integrated systems for efficient chemical manufacturing and processing.",
        features: ["Reactors", "Distillation Units", "Heat Exchangers"],
        gradient: "from-blue-400 via-blue-600 to-slate-600",
        number: "01",
    },
    {
        icon: Pill,
        title: "Pharmaceutical",
        description: "Clean and precise process systems for pharma production.",
        features: ["Sterile Vessels", "Wiped Film Evaporators", "ATFD Systems"],
        gradient: "from-slate-400 via-slate-600 to-blue-600",
        number: "02",
    },
    {
        icon: Leaf,
        title: "Food & Beverage",
        description: "Hygienic thermal solutions for food and beverage processing.",
        features: ["Falling Film Evaporators", "Storage Tanks", "Heat Recovery"],
        gradient: "from-blue-500 via-slate-500 to-blue-700",
        number: "03",
    },
    {
        icon: Fuel,
        title: "Petrochemical",
        description: "Durable equipment for oil refining and petrochemical processes.",
        features: ["Pressure Vessels", "Re-boilers", "Distillation Columns"],
        gradient: "from-slate-500 via-blue-500 to-slate-700",
        number: "04",
    },
    {
        icon: TestTubes,
        title: "Research & Development",
        description: "Pilot-scale units for experimental and scale-up studies.",
        features: ["Pilot Plants", "Batch Systems", "Data Logging"],
        gradient: "from-blue-600 via-slate-600 to-blue-800",
        number: "05",
    },
    {
        icon: Building,
        title: "Industrial Utilities",
        description: "Robust utility solutions for process plants and facilities.",
        features: ["Heat Exchangers", "Steam Heaters", "Hot Water Coils"],
        gradient: "from-slate-600 via-blue-600 to-slate-800",
        number: "06",
    }
];

const ModernIndustrySolutions = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % industries.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <section className="min-h-screen bg-white relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-blue-600 text-sm font-medium">INDUSTRIES</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-4 leading-none">
                        Industry
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">Solutions</span>
                    </h2>
                </motion.div>

                {/* Main Content Area */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Industry List */}
                        <div className="space-y-4">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative cursor-pointer transition-all duration-500 ${currentIndex === index ? "scale-105" : "hover:scale-102"
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                    whileHover={{ x: 10 }}
                                >
                                    <div
                                        className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-500
                    ${currentIndex === index
                                                ? "border-blue-500 bg-gradient-to-r from-blue-50 to-slate-50 shadow-xl"
                                                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                                            }
                  `}
                                    >
                                        {/* Number */}
                                        <div className="absolute -left-4 -top-4">
                                            <div
                                                className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                        ${currentIndex === index
                                                        ? "bg-gradient-to-r from-blue-500 to-slate-500 text-white"
                                                        : "bg-slate-100 text-slate-400"
                                                    }
                      `}
                                            >
                                                {industry.number}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500
                        ${currentIndex === index ? "bg-gradient-to-r from-blue-500 to-slate-500" : "bg-slate-100"}
                      `}
                                            >
                                                <industry.icon
                                                    className={`w-6 h-6 ${currentIndex === index ? "text-white" : "text-slate-600"}`}
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <h3
                                                    className={`text-xl font-bold transition-colors duration-500 ${currentIndex === index ? "text-slate-900" : "text-slate-700"
                                                        }`}
                                                >
                                                    {industry.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm mt-1">{industry.description}</p>
                                            </div>

                                            <ArrowRight
                                                className={`w-5 h-5 transition-all duration-500 ${currentIndex === index ? "text-blue-500 translate-x-2" : "text-slate-400"
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Side - Feature Display */}
                        <div className="relative">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                {/* Large Icon Background */}
                                <div className="relative mb-8">
                                    <div
                                        className={`
                    w-32 h-32 rounded-3xl bg-gradient-to-br ${industries[currentIndex].gradient} 
                    flex items-center justify-center shadow-2xl
                  `}
                                    >
                                        {React.createElement(industries[currentIndex].icon, { className: "w-16 h-16 text-white" })}
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse" />
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-500 rounded-full opacity-30 animate-pulse delay-1000" />
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl font-black text-slate-900 mb-4">{industries[currentIndex].title}</h3>

                                {/* Description */}
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{industries[currentIndex].description}</p>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    {industries[currentIndex].features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 + 0.3 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full" />
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Learn More
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4 mt-16">
                        <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="rounded-full">
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>

                        <div className="flex gap-2">
                            {industries.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`View ${industries[index].title} industry`}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-blue-500 w-8" : "bg-slate-300 hover:bg-slate-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModernIndustrySolutions
