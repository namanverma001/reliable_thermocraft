import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Factory,
  Gauge,
  Flame,
  Thermometer,
  Container,
  FlaskConical,
  Zap,
  Droplets,
  Settings,
  Wind,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const services = [
  {
    title: "Pressure Vessels",
    description:
      "Custom-engineered vessels built for high-pressure applications. Designed with precision to suit your specific operating conditions, material compatibility, and safety requirements.",
    icon: Gauge,
    features: ["High-pressure applications", "Custom engineering", "Safety compliance", "Material compatibility"],
  },
  {
    title: "Chemical Reactors",
    description:
      "Application-specific reactors equipped with custom internals, advanced agitation systems, and integrated heat transfer solutions for high efficiency.",
    icon: FlaskConical,
    features: ["Custom internals", "Advanced agitation", "Heat transfer integration", "Process control"],
  },
  {
    title: "Heat Exchangers",
    description:
      "Shell & Tube, Plate Type, and Air-Cooled configurations optimized for thermal duties, fluid properties, and fouling characteristics.",
    icon: Thermometer,
    features: ["Shell & Tube", "Plate Type", "Air-Cooled", "Superior heat transfer"],
  },
  {
    title: "Storage Tanks",
    description:
      "Robust atmospheric and low-pressure storage tanks manufactured using corrosion-resistant materials with customizable nozzle configurations.",
    icon: Container,
    features: ["Atmospheric pressure", "Low-pressure variants", "Corrosion-resistant", "Custom nozzles"],
  },
  {
    title: "Distillation Columns",
    description:
      "Tray and packed columns tailored for separation processes with internals optimized to maximize throughput, efficiency, and purity levels.",
    icon: Factory,
    features: ["Tray columns", "Packed columns", "Optimized internals", "High efficiency"],
  },
  {
    title: "Reboilers",
    description:
      "Thermosiphon, forced circulation, and kettle-type variants engineered to match your distillation column's heat load and process dynamics.",
    icon: Flame,
    features: ["Thermosiphon type", "Forced circulation", "Kettle-type", "Energy efficient"],
  },
  {
    title: "Limpet Coil & Jacketed Vessels",
    description:
      "Advanced heat transfer systems for temperature-sensitive operations, enabling precise thermal control and energy efficiency.",
    icon: Zap,
    features: ["Temperature control", "Limpet coil design", "Jacketed systems", "Energy efficient"],
  },
  {
    title: "Mixing Tanks",
    description:
      "Heavy-duty mixing tanks for high-viscosity materials and complex reactions, featuring specialized impellers and robust agitators.",
    icon: Settings,
    features: ["High-viscosity handling", "Specialized impellers", "Robust agitators", "ETP applications"],
  },
  {
    title: "Fine Tube Heat Exchangers",
    description:
      "Compact, high-efficiency heat exchangers including Steam Air Heaters and Hot Water Coils, optimized for limited space environments.",
    icon: Wind,
    features: ["Compact design", "High efficiency", "Space optimization", "Precise control"],
  },
  {
    title: "Process Skids",
    description:
      "Fully integrated, skid-mounted process systems pre-assembled with piping, pumps, valves, instrumentation, and automation.",
    icon: Droplets,
    features: ["Fully integrated", "Pre-assembled", "Rapid deployment", "Minimal on-site work"],
  },
]

const industries = [
  "Chemical Processing",
  "Pharmaceutical",
  "Petrochemical",
  "Food Processing",
  "Oil & Gas",
  "Water Treatment",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <Header />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-900 to-slate-900 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Products & Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            High-performance, custom-engineered process equipment designed for demanding industrial applications
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {industries.map((industry) => (
              <Badge key={industry} variant="secondary" className="bg-blue-800 text-blue-100 hover:bg-blue-700">
                {industry}
              </Badge>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Custom Quote
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Process Equipment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver reliable, efficient, and tailored solutions that meet your operational needs with precision
              engineering and superior performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"
                      >
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 bg-gradient-to-r from-blue-900 to-slate-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Optimize Your Process?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Our engineering team is ready to design custom solutions that meet your specific requirements. Contact us
            today for a consultation and detailed quote.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Request Consultation
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
                Download Catalog
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solutions?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Custom Engineering",
                description: "Every solution is tailored to your specific operating conditions and requirements",
                color: "green"
              },
              {
                icon: Gauge,
                title: "Proven Reliability",
                description: "Built for durability and optimal performance in demanding industrial environments",
                color: "blue"
              },
              {
                icon: Zap,
                title: "Energy Efficient",
                description: "Designed to maximize efficiency and minimize operational costs",
                color: "purple"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
