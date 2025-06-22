import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  ArrowRight,
  Factory,
  Gauge,
  Settings,
  Zap,
  CheckCircle,
  Star,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Thermometer,
  Wind,
  Container,
  X,
  Eye,
} from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { motion } from "framer-motion"
import pressurevessel from '@/Assets/products/pressurevessel.jpg'
import chemicalreactor from '@/Assets/products/chemicalreactor.jpg'
import heatExchanger from '@/Assets/products/heatexchanger.png';
import storageTank from '@/Assets/products/storagetank.jpg';       // Adjust the path as necessary
import distillationColumn from '@/Assets/products/distillationcolumn.png'; // Adjust the path as necessary
import reboiler from '@/Assets/products/reboiler.jpg';             // Adjust the path as necessary
import limpetJacketed from '@/Assets/products/limpetcoil.png'; // Adjust the path as necessary

import finnedHeatExchanger from '@/Assets/products/fineheat.jpg';
type Product = {
  id: number
  title: string
  subtitle: string
  description: string
  detailedDescription: string
  category: string
  image: string
  gallery: string[]
  features: string[]
  specifications: {
    [key: string]: string
  }
  applications: string[]
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    title: "Pressure Vessel",
    subtitle: "Storage & Containment",
    description: "Custom-engineered pressure vessels designed for high-pressure and corrosive applications with reliable performance.",
    detailedDescription: "Our pressure vessels are engineered to meet stringent safety standards while providing reliable performance in gas and liquid processing applications. Built with corrosion-resistant materials and designed to handle various pressures, these vessels are ideal for chemical, oil & gas, and pharma sectors.",
    category: "Pressure Vessels",
    image: pressurevessel,
    gallery: [pressurevessel],
    features: ["High Pressure", "Corrosion Resistant", "Custom Design", "Long Service Life"],
    specifications: {
      "Design Pressure": "Up to 100 bar",
      "Material": "SS316/SS304/Carbon Steel",
      "Capacity": "100L to 100,000L"
    },
    applications: ["Chemical Processing", "Oil & Gas", "Pharmaceutical"],
    rating: 4.7,
    reviews: 21
  },
  {
    id: 2,
    title: "Chemical Reactors",
    subtitle: "Reaction Systems",
    description: "Robust chemical reactors for various reaction types with options for agitation, temperature control, and pressure regulation.",
    detailedDescription: "Reliable Thermocraft's chemical reactors offer precise temperature control, custom agitation, and high-pressure tolerance. Ideal for batch and continuous processing in pharmaceutical, fine chemical, and petrochemical industries.",
    category: "Reactors",
    image: chemicalreactor,
    gallery: [chemicalreactor],
    features: ["Agitation", "Temperature Control", "Jacketed Design", "Durable Construction"],
    specifications: {
      "Capacity": "50L to 50,000L",
      "Material": "SS316/SS304/Glass Lined",
      "Max Temperature": "Up to 300°C"
    },
    applications: ["Pharmaceuticals", "Petrochemicals", "Fine Chemicals"],
    rating: 4.6,
    reviews: 19
  },
  {
    id: 3,
    title: "Heat Exchangers",
    subtitle: "Shell & Tube / Plate / Finned Type",
    description: "Highly efficient heat exchangers including shell & tube, plate, and air-cooled models for industrial heat transfer applications.",
    detailedDescription: "Our heat exchangers are designed for maximum thermal efficiency with options including shell & tube, finned tube, and plate types. Built to industry standards using stainless steel, copper, and special alloys for long life and high performance.",
    category: "Heat Exchangers",
    image: heatExchanger,
    gallery: [heatExchanger],
    features: ["Thermal Efficiency", "Compact Design", "Low Fouling", "Custom Options"],
    specifications: {
      "Type": "Shell & Tube / Plate / Finned",
      "Material": "SS316/SS304/Copper",
      "Thermal Duty": "Up to 500 kW"
    },
    applications: ["HVAC", "Power Plants", "Chemical Industry"],
    rating: 4.8,
    reviews: 25
  },
  {
    id: 4,
    title: "Storage Tanks",
    subtitle: "Storage & Containment",
    description: "Durable storage tanks designed for atmospheric and low-pressure applications, customizable for various industries.",
    detailedDescription: "Our storage tanks are constructed from high-quality materials to ensure safe storage of process liquids. Designed for both atmospheric and low-pressure conditions, they are used across water treatment, food, and chemical sectors.",
    category: "Storage",
    image: storageTank,
    gallery: [storageTank],
    features: ["Corrosion Resistant", "Customizable", "Leak-Proof", "High Capacity"],
    specifications: {
      "Capacity": "500L to 100,000L",
      "Material": "SS316/SS304/MS",
      "Configuration": "Vertical/Horizontal"
    },
    applications: ["Water Storage", "Chemical Storage", "Food Industry"],
    rating: 4.5,
    reviews: 17
  },
  {
    id: 5,
    title: "Distillation Column",
    subtitle: "Separation Systems",
    description: "High-efficiency distillation columns for separation and purification of chemical mixtures in continuous or batch modes.",
    detailedDescription: "Our distillation columns are designed with structured and random packing options or trays for optimal separation. Built for continuous or batch operations, these units are ideal for refining, recovery, and high-purity production.",
    category: "Reactors",
    image: distillationColumn,
    gallery: [distillationColumn],
    features: ["High Separation Efficiency", "Optimized Internals", "Flexible Operation", "Energy Efficient"],
    specifications: {
      "Height": "Up to 30 meters",
      "Material": "SS316/SS304",
      "Packing": "Structured/Random/Tray"
    },
    applications: ["Petrochemical", "Solvent Recovery", "Pharmaceutical"],
    rating: 4.9,
    reviews: 28
  },
  {
    id: 6,
    title: "Re-boiler",
    subtitle: "Thermal Equipment",
    description: "Reliable re-boilers designed to supply heat to distillation columns with consistent thermal efficiency and control.",
    detailedDescription: "Engineered for efficient heat supply, our re-boilers ensure smooth distillation operations with options including thermosyphon, kettle, and forced circulation types.",
    category: "Heat Exchangers",
    image: reboiler,
    gallery: [reboiler],
    features: ["Column Integration", "High Efficiency", "Compact Design", "Multiple Configurations"],
    specifications: {
      "Type": "Kettle / Thermosyphon / Forced Circulation",
      "Material": "SS316/SS304",
      "Capacity": "Custom Designs"
    },
    applications: ["Distillation", "Refining", "Chemical Recovery"],
    rating: 4.6,
    reviews: 22
  },
  {
    id: 7,
    title: "Limpet Coil & Jacketed Vessels",
    subtitle: "Reaction Systems",
    description: "Specialized vessels with limpet coil or jacketed options for controlled heating/cooling in chemical processing.",
    detailedDescription: "These vessels ensure precise thermal control during reactions through limpet coil or jacketed designs, making them perfect for sensitive and exothermic processes.",
    category: "Reactors",
    image: limpetJacketed,
    gallery: [limpetJacketed],
    features: ["Thermal Control", "Pressure Rated", "Agitation Options", "Durable"],
    specifications: {
      "Capacity": "100L to 50,000L",
      "Material": "SS316/SS304",
      "Pressure": "Up to 10 bar"
    },
    applications: ["Chemical Reaction", "Heat Exchange", "Pharmaceutical"],
    rating: 4.7,
    reviews: 20
  },
  {
    id: 8,
    title: "Finned Tube Heat Exchanger / Steam Air Heater / Hot Water Coils",
    subtitle: "Heat Transfer Equipment",
    description: "Versatile finned tube heat exchangers and air heaters for efficient thermal management in air and liquid applications.",
    detailedDescription: "These units maximize thermal transfer in compact footprints. Ideal for air heating, steam distribution, and HVAC applications with superior energy efficiency.",
    category: "Heat Exchangers",
    image: finnedHeatExchanger,
    gallery: [finnedHeatExchanger],
    features: ["Compact", "Energy Efficient", "Air Heating", "High Performance"],
    specifications: {
      "Type": "Finned Tube / Coil / Air Heater",
      "Material": "SS/Copper/Aluminium",
      "Temperature": "Up to 300°C"
    },
    applications: ["HVAC Systems", "Drying Processes", "Industrial Heating"],
    rating: 4.5,
    reviews: 18
  }
];


const categories = [
  { name: "Heat Exchangers", icon: Thermometer },
  { name: "Reactors", icon: Settings },
  { name: "Storage", icon: Container, },
  { name: "Pressure Vessels", icon: Gauge },
]

export default function Products() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Products List View */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent leading-tight"
              >
                Industrial Equipment Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-2xl mb-8 md:mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
              >
                Precision-engineered industrial equipment for chemical processing, heat transfer,
                storage applications, and advanced manufacturing processes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4"
              >
                {["ISO Certified", "Custom Solutions", "Global Support"].map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Badge className="bg-white/20 text-white border-white/30 text-base md:text-lg px-4 md:px-6 py-2 md:py-3">
                      {badge}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-20 bg-white relative"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Product Categories</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of industrial equipment categories
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`text-center hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${selectedCategory === category.name
                      ? "ring-4 ring-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-indigo-50"
                      : "hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50"
                      }`}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                  >
                    <CardHeader className="pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`mx-auto w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 ${selectedCategory === category.name
                          ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg"
                          : "bg-gradient-to-br from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200"
                          }`}
                      >
                        <category.icon className={`h-8 w-8 md:h-10 md:w-10 ${selectedCategory === category.name ? "text-white" : "text-blue-600"
                          }`} />
                      </motion.div>
                      <CardTitle className="text-xl md:text-2xl text-gray-900">{category.name}</CardTitle>

                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Products</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of industrial equipment designed for maximum efficiency and reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="group cursor-pointer"
                      >
                        <Card className="group hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                          <div className="relative overflow-hidden">
                            <motion.img
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              src={product.image}
                              alt={product.title}
                              className="w-full h-56 md:h-72 object-cover transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Badge className="absolute top-3 left-3 md:top-4 md:left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 shadow-lg">
                              {product.category}
                            </Badge>
                            <div className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center space-x-1 bg-white/90 px-2 md:px-3 py-1 rounded-full">
                              <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                              <span className="text-xs md:text-sm font-semibold text-gray-800">{product.rating}</span>
                            </div>
                          </div>

                          <CardHeader className="pb-4">
                            <CardTitle className="text-xl md:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {product.title}
                            </CardTitle>
                            <CardDescription className="text-base md:text-lg text-gray-600 font-medium">
                              {product.subtitle}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="pb-4 md:pb-6">
                            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">{product.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {product.features.slice(0, 3).map((feature, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 px-2 md:px-3 py-1 text-xs md:text-sm"
                                >
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>

                          <CardFooter>
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-sm md:text-base">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto w-[95vw] md:w-auto left-[2.5%] md:left-[50%] translate-x-0 md:translate-x-[-50%]">
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-4 md:space-y-6">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{product.title}</h3>
                            <Badge className="mb-2 md:mb-4" variant="secondary">{product.category}</Badge>
                            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{product.detailedDescription}</p>
                          </div>

                          <div className="space-y-4 md:space-y-6">
                            <div>
                              <h4 className="text-base md:text-lg font-semibold mb-2">Key Features</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm md:text-base">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-base md:text-lg font-semibold mb-2">Specifications</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm md:text-base">
                                {Object.entries(product.specifications).map(([key, value], index) => (
                                  <li key={index}><strong>{key}:</strong> {value}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-base md:text-lg font-semibold mb-2">Applications</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm md:text-base">
                                {product.applications.map((app, index) => (
                                  <li key={index}>{app}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center space-x-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                    }`}
                                />
                              ))}
                              <span className="text-sm text-gray-600 font-medium">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <Footer />
      </motion.div>
    </div>
  )
}