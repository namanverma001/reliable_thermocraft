import condenser from "@/Assets/condenser.jpg"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import pressurevessel from '@/Assets/products/pressurevessel.jpg'
import chemicalreactor from '@/Assets/products/chemicalreactor.jpg'
import heatExchanger from '@/Assets/products/heatexchanger.png';
import storageTank from '@/Assets/products/storagetank.jpg';       // Adjust the path as necessary
import distillationColumn from '@/Assets/products/distillationcolumn.png'; // Adjust the path as necessary
import reboiler from '@/Assets/products/reboiler.jpg';             // Adjust the path as necessary
import limpetJacketed from '@/Assets/products/limpetcoil.png'; // Adjust the path as necessary

import finnedHeatExchanger from '@/Assets/products/fineheat.jpg';
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  }

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.h2 className="text-lg font-medium text-blue-600 tracking-wide" variants={itemVariants}>
                About
              </motion.h2>
              <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
                RELIABLE THERMOCRAFT
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                variants={itemVariants}
              />
            </motion.div>

            <motion.div className="space-y-6 text-gray-700 leading-relaxed" variants={itemVariants}>
              <motion.p className="text-lg font-medium text-gray-800" variants={itemVariants}>
                <span className="text-blue-600 font-bold">Established in 2005</span>, RELIABLE THERMOCRAFT stands as a
                trusted leader in the manufacturing of high-quality equipment for the oil and gas and chemical
                industries. With a steadfast commitment to innovation, precision, and client satisfaction, we have grown
                significantly, expanding our
                <span className="font-semibold"> state-of-the-art manufacturing unit in 2020</span> to meet the evolving
                demands of our global clientele.
              </motion.p>

              <motion.p variants={itemVariants}>
                Our team of dedicated professionals brings unparalleled expertise in designing and fabricating a wide
                range of equipment, including:
              </motion.p>

              <motion.div className="grid grid-cols-2 gap-2 my-4" variants={itemVariants}>
                {[
                  "Pressure Vessels",
                  "Chemical Reactors",
                  "Distillation Columns",
                  "Storage Tanks",
                  "Heat Exchangers",
                  "Fins Tube Heat Exchangers",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.1,
                        },
                      },
                    }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={itemVariants}>
                We pride ourselves on delivering{" "}
                <span className="font-semibold text-gray-900">customized solutions</span> and commissioning projects
                tailored to the specific requirements of our clients, ensuring seamless integration and operational
                efficiency.
              </motion.p>

              <motion.p variants={itemVariants}>
                At RELIABLE THERMOCRAFT, <span className="font-semibold text-blue-600">quality is at the core</span> of
                everything we do. Our rigorous quality control processes, combined with cutting-edge technology, ensure
                that every product meets the highest industry standards for safety, reliability, and performance.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-l-4 border-blue-600"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-medium text-gray-900 italic">
                  "Join us on our journey to redefine excellence in industrial equipment manufacturing. With RELIABLE
                  THERMOCRAFT, you gain a partner dedicated to your success, delivering world-class solutions that stand
                  the test of time."
                </p>
              </motion.div>

              <motion.div className="flex items-center space-x-4 pt-4" variants={itemVariants}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">19+ Years of Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Global Clientele</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Pressure Vessel */}
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg group"
                variants={imageVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={pressurevessel}
                  alt="Pressure Vessel Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Pressure Vessels</p>
                </div>
              </motion.div>

              {/* Heat Exchanger - Tall */}
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg row-span-2 group"
                variants={imageVariants}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heatExchanger}
                  alt="Heat Exchanger Equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Heat Exchangers</p>
                </div>
              </motion.div>

              {/* Chemical Reactor */}
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg group"
                variants={imageVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={chemicalreactor}
                  alt="Chemical Reactor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Chemical Reactors</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Storage Tank */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-24 rounded-lg overflow-hidden shadow-xl bg-white p-1 group"
              variants={floatingVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={storageTank}
                alt="Storage Tank"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-center justify-center">
                <span className="text-white text-xs font-semibold">Storage Tanks</span>
              </div>
            </motion.div>

            {/* Floating Distillation Column */}
            <motion.div
              className="absolute top-1/2 -right-6 w-28 h-28 rounded-full overflow-hidden shadow-xl bg-white p-1 group"
              variants={floatingVariants}
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ duration: 0.3 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <img
                src={distillationColumn}
                alt="Distillation Column"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold text-center">Distillation</span>
              </div>
            </motion.div>

            {/* Company Branding Element */}
            <motion.div
              className="absolute bottom-8 right-4 bg-white rounded-xl shadow-xl p-4 group"
              variants={floatingVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                <motion.span
                  className="text-white font-bold text-lg z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  RT
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20" />
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs font-semibold text-gray-800">Since 2005</p>
                <p className="text-xs text-gray-600">Excellence</p>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              variants={floatingVariants}
              animate={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              ISO Certified
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
