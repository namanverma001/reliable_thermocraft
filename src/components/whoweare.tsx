import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhoWeAre() {
    const achievements = [
        "ISO 9001:2015 Certified",
        "Innovative Technology",
        "Custom Engineering",
        "Global Standards Compliance",
        "Expert Technical Team",

    ];

    return (
        <section className="font-libre flex flex-col lg:flex-row w-full min-h-fit py-8 lg:py-10 px-6 lg:px-16 xl:px-28 gap-8 lg:gap-12 items-center justify-center">
            <div className="container relative w-full lg:w-1/2 px-0">
                <motion.h2
                    className="text-base lg:text-[18px] font-semibold text-blue-500 tracking-wider"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    WHO WE ARE
                </motion.h2>

                <div className="mt-4 lg:mt-6">
                    <motion.h3
                        className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-navy-900 font-libre tracking-tighter"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        Pioneering Thermal Solutions for Industrial Excellence
                    </motion.h3>

                    <motion.p
                        className="mt-3 lg:mt-4 text-base lg:text-lg text-gray-500"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        Setting New Standards in Thermal Process Engineering
                    </motion.p>

                    <div className="mt-6 lg:mt-8 grid gap-3 lg:gap-4 grid-cols-1 lg:grid-cols-2">
                        {achievements.map((text, index) => (
                            <motion.div
                                key={text}
                                className="flex items-center gap-2 text-sm lg:text-base"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
                            >
                                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-blue-500 flex-shrink-0" />
                                <span className="leading-relaxed">{text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="mt-6 lg:mt-8 text-sm lg:text-base text-gray-400 leading-relaxed text-left lg:text-justify bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-800/10"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.4 }}
                        whileHover={{
                            rotateX: 5,
                            rotateY: 5,
                            scale: 1.02,
                        }}
                    >
                        Welcome to Reliable Thermocraft, where we pioneer excellence in industrial equipment manufacturing. Since 2005, we have been a trusted partner for the Oil and Gas, Chemical, API, and Energy Industries, delivering innovative, high-quality solutions that drive global operations. With our state-of-the-art facility and a team of dedicated professionals, we specialize in crafting Pressure Vessels, Chemical Reactors, Distillation Columns, Storage Tanks, Heat Exchangers, Fins tube heat exchanger, and more. Our turnkey project commissioning ensures seamless integration tailored to your needs.                    </motion.p>
                </div>
            </div>

            <div className='w-full h-px lg:w-px lg:h-full bg-gray-300 lg:bg-black hidden lg:block'></div>

            <div className='w-full lg:w-1/2 mt-6 lg:mt-0 px-0'>
                <div className="relative pb-[56.25%] h-0">
                    <iframe
                        src="https://www.youtube.com/embed/U6G58HU2Zg0"
                        title="Company Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg lg:rounded-2xl shadow-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}