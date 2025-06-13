import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhoWeAre() {
    const achievements = [
        "ISO 9001:2015 Certified",
        "Innovative Technology",
        "Custom Engineering",
        "Global Standards Compliance",
        "Expert Technical Team",
        "24/7 Support & Service"
    ];

    return (
        <section className="font-libre flex flex-col sm:flex-row w-full min-h-fit py-6 sm:py-10 px-5 sm:px-28 sm:gap-8 items-center justify-center">
            <div className="container relative w-full sm:w-1/2 px-2 sm:px-0">
                <motion.h2
                    className="text-base sm:text-[18px] font-semibold text-blue-500 tracking-wider"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    WHO WE ARE
                </motion.h2>

                <div className="mt-4 sm:mt-6">
                    <motion.h3
                        className="text-2xl sm:text-4xl font-bold leading-tight text-navy-900 md:text-5xl font-libre tracking-tighter"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        Pioneering Thermal Solutions for Industrial Excellence
                    </motion.h3>

                    <motion.p
                        className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        Setting New Standards in Thermal Process Engineering
                    </motion.p>

                    <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-2">
                        {achievements.map((text, index) => (
                            <motion.div
                                key={text}
                                className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
                            >
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                                <span>{text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-400 leading-relaxed text-left sm:text-justify bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-800/10"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.4 }}
                        whileHover={{
                            rotateX: 5,
                            rotateY: 5,
                            scale: 1.02,
                        }}
                    >
                        At Reliable Thermocraft, we are industry leaders in thermal process engineering and reactor systems design. Our state-of-the-art facilities and expert engineering team specialize in creating innovative thermal solutions that drive industrial excellence. We combine cutting-edge technology with precision engineering to deliver systems that meet the highest safety standards and efficiency requirements. From custom reactor designs to integrated thermal management solutions, we ensure optimal performance and reliability for your critical processes.
                    </motion.p>
                </div>
            </div>

            <div className='w-1 h-full text-black hidden sm:block'></div>
            <div className='w-full sm:w-1/2 mt-6 sm:mt-0'>
                <div className="relative pb-[56.25%] h-0">
                    <iframe
                        src="https://www.youtube.com/embed/U6G58HU2Zg0"
                        title="Company Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-xl sm:rounded-2xl shadow-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}