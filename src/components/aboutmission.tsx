import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye, Award, CheckCircle, ArrowRight } from "lucide-react"
import BrochurePDF from "@/Assets/Reliable Thermocraft Broucher.pdf"

export default function Component() {
    const [activeTab, setActiveTab] = useState("mission")

    const tabs = [
        { id: "mission", label: "Mission", icon: Target },
        { id: "vision", label: "Vision", icon: Eye },
        { id: "values", label: "Core Values", icon: Award },
    ]

    const content = {
        mission: {
            title: "Our Mission",
            subtitle: "Trusted Excellence in Process Equipment Manufacturing",
            description:
                "To be the most trusted organization in process equipment manufacturing, delivering world-class solutions that meet global standards while ensuring customer integrity and timely project completion.",
            keyPoints: [
                {
                    title: "World-Class Solutions",
                    description: "Delivering cutting-edge process equipment that meets international standards",
                },
                {
                    title: "Global Standards",
                    description: "Ensuring compliance with worldwide quality and safety regulations",
                },
                {
                    title: "Customer Integrity",
                    description: "Building lasting relationships through transparent and ethical practices",
                },
                {
                    title: "Timely Delivery",
                    description: "Committed to meeting project deadlines without compromising quality",
                },
            ],
        },
        vision: {
            title: "Our Vision",
            subtitle: "Engineering Excellence Through Innovation and Growth",
            description:
                "To be a professionally managed, growth-oriented organization that achieves engineering excellence while fostering innovation, enriching stakeholder value, and maintaining a caring culture for employees and customers.",
            keyPoints: [
                {
                    title: "Professional Management",
                    description: "Implementing best-in-class management practices and governance",
                },
                {
                    title: "Engineering Excellence",
                    description: "Pursuing the highest standards in technical innovation and quality",
                },
                {
                    title: "Innovation Culture",
                    description: "Fostering creativity and continuous improvement across all operations",
                },
                {
                    title: "Stakeholder Value",
                    description: "Creating sustainable value for all stakeholders and communities",
                },
            ],
        },
        values: {
            title: "Core Values",
            subtitle: "The Principles That Guide Our Every Decision",
            description:
                "Our core values form the foundation of our organizational culture, driving us to maintain the highest standards of integrity, innovation, and customer service in everything we do.",
            keyPoints: [
                {
                    title: "Integrity & Trust",
                    description: "Maintaining transparency and ethical practices in all business dealings",
                },
                {
                    title: "Innovation & Excellence",
                    description: "Continuously pushing boundaries to deliver superior solutions",
                },
                {
                    title: "Customer Focus",
                    description: "Placing customer needs at the center of everything we do",
                },
                {
                    title: "Sustainable Growth",
                    description: "Building for the future while respecting environmental responsibilities",
                },
            ],
        },
    }

    const currentContent = content[activeTab as keyof typeof content]

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = BrochurePDF;
        link.setAttribute("download", "Reliable-Thermocraft-Broucher.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Professional Header Section */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight">
                            Delivering Innovation for Carbon Neutral World
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto px-2">
                            Based on New Generation Separation and Process Technologies
                        </p>
                    </div>

                    {/* Mobile-First Tab Navigation */}
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:flex-row bg-slate-100 rounded-lg p-1 shadow-inner w-full sm:w-auto max-w-md sm:max-w-none">
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative px-4 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 font-medium mb-1 sm:mb-0 text-sm sm:text-base ${activeTab === tab.id
                                            ? "text-white bg-slate-800 shadow-lg"
                                            : "text-slate-600 hover:text-slate-800 hover:bg-white"
                                            }`}
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="truncate">{tab.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-7xl mx-auto"
                    >
                        {/* Title Section */}
                        <div className="text-center mb-8 sm:mb-16">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight px-2"
                            >
                                {currentContent.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light px-2"
                            >
                                {currentContent.subtitle}
                            </motion.p>
                        </div>

                        {/* Main Content Grid - Mobile First */}
                        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 mb-8 sm:mb-16">
                            {/* Description Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="lg:col-span-2 order-1"
                            >
                                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 h-full">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6">Overview</h3>
                                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">{currentContent.description}</p>

                                    {/* Key Points Grid - Stack on Mobile */}
                                    <div className="space-y-4 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 sm:space-y-0">
                                        {currentContent.keyPoints.map((point, index) => (
                                            <motion.div
                                                key={point.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                                            >
                                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">{point.title}</h4>
                                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{point.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Download Brochure Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="order-2"
                            >
                                {/* Call to Action */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-slate-800 text-white rounded-xl p-4 sm:p-6 text-center"
                                >
                                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Download Brochure</h4>
                                    <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Get detailed information about our services</p>
                                    <button
                                        onClick={handleDownload}
                                        className="inline-flex items-center space-x-2 bg-white text-slate-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors text-sm sm:text-base"
                                    >
                                        <span>Download Brochure</span>
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Bottom Feature Bar - Mobile Responsive */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="bg-white rounded-xl shadow-lg p-4 sm:p-8"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                                <div className="space-y-2">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Precision Engineering</h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Exact specifications, every time</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Quality Assurance</h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Rigorous testing and validation</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Industry Recognition</h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Award-winning solutions</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Future-Ready</h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Sustainable technology solutions</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}