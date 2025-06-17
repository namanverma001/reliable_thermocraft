
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye, Award, CheckCircle, ArrowRight } from "lucide-react"

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
            stats: [
                { number: "25+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
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
            stats: [
                { number: "15+", label: "Countries Served" },
                { number: "50+", label: "Patents Filed" },
                { number: "100+", label: "Team Members" },
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
            stats: [
                { number: "Zero", label: "Compromise on Quality" },
                { number: "24/7", label: "Customer Support" },
                { number: "100%", label: "Commitment" },
            ],
        },
    }

    const currentContent = content[activeTab as keyof typeof content]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Professional Header Section */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-6 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-slate-800 mb-4">Delivering Innovation for Carbon Neutral World</h1>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                            Based on New Generation Separation and Process Technologies
                        </p>
                    </div>

                    {/* Professional Tab Navigation */}
                    <div className="flex justify-center">
                        <div className="flex bg-slate-100 rounded-lg p-1 shadow-inner">
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative px-8 py-4 rounded-md transition-all duration-300 flex items-center space-x-3 font-medium ${activeTab === tab.id
                                            ? "text-white bg-slate-800 shadow-lg"
                                            : "text-slate-600 hover:text-slate-800 hover:bg-white"
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{tab.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
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
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl font-bold text-slate-800 mb-4"
                            >
                                {currentContent.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl text-slate-600 font-light"
                            >
                                {currentContent.subtitle}
                            </motion.p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-12 mb-16">
                            {/* Description Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="lg:col-span-2"
                            >
                                <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                    <h3 className="text-2xl font-semibold text-slate-800 mb-6">Overview</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{currentContent.description}</p>

                                    {/* Key Points Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {currentContent.keyPoints.map((point, index) => (
                                            <motion.div
                                                key={point.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                                            >
                                                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-semibold text-slate-800 mb-2">{point.title}</h4>
                                                    <p className="text-slate-600 text-sm">{point.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Statistics Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-xl shadow-lg p-8">
                                    <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Metrics</h3>
                                    <div className="space-y-6">
                                        {currentContent.stats.map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + index * 0.1 }}
                                                className="text-center p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg"
                                            >
                                                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                                                <div className="text-slate-600 font-medium">{stat.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-slate-800 text-white rounded-xl p-6 text-center"
                                >
                                    <h4 className="text-xl font-semibold mb-3">Ready to Partner?</h4>
                                    <p className="text-slate-300 mb-4">Let's discuss your next project</p>
                                    <button className="inline-flex items-center space-x-2 bg-white text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                                        <span>Contact Us</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Bottom Feature Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="bg-white rounded-xl shadow-lg p-8"
                        >
                            <div className="grid md:grid-cols-4 gap-8 text-center">
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Target className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800">Precision Engineering</h4>
                                    <p className="text-slate-600 text-sm">Exact specifications, every time</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800">Quality Assurance</h4>
                                    <p className="text-slate-600 text-sm">Rigorous testing and validation</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Award className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800">Industry Recognition</h4>
                                    <p className="text-slate-600 text-sm">Award-winning solutions</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Eye className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h4 className="font-semibold text-slate-800">Future-Ready</h4>
                                    <p className="text-slate-600 text-sm">Sustainable technology solutions</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
