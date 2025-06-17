import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { motion } from "framer-motion"

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
    title: "Copper Heat Exchanger",
    subtitle: "Shell And Tube Heat Exchanger",
    description: "High-efficiency copper heat exchangers designed for optimal thermal transfer in industrial applications with superior corrosion resistance.",
    detailedDescription: "Our copper heat exchangers are engineered for superior performance in demanding industrial environments. Featuring corrosion-resistant copper construction and optimized tube configurations for maximum heat transfer efficiency. These units are designed to handle various process fluids while maintaining excellent thermal conductivity and durability.",
    category: "Heat Exchangers",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
    ],
    features: ["Corrosion Resistant", "High Thermal Conductivity", "Durable Construction", "Easy Maintenance"],
    specifications: {
      Material: "Copper Tubes, Steel Shell",
      "Temperature Range": "-20°C to 200°C",
      "Pressure Rating": "Up to 16 bar",
      "Heat Transfer Area": "10-500 m²",
      "Tube Diameter": "12-25 mm",
      "Shell Diameter": "200-2000 mm",
    },
    applications: ["Chemical Processing", "HVAC Systems", "Power Generation", "Food & Beverage"],
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    title: "Falling Film Evaporator",
    subtitle: "Shell And Tube Heat Exchanger",
    description: "Advanced falling film evaporators for efficient liquid concentration and separation processes in chemical industries.",
    detailedDescription: "Our falling film evaporators utilize gravity-driven thin film technology to achieve maximum heat transfer efficiency while minimizing energy consumption. Perfect for heat-sensitive materials and continuous operation requirements.",
    category: "Heat Exchangers",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
    ],
    features: ["Energy Efficient", "Gentle Processing", "Continuous Operation", "Low Fouling"],
    specifications: {
      Material: "Stainless Steel 316L",
      "Evaporation Capacity": "100-10000 kg/hr",
      "Heat Transfer Area": "5-200 m²",
      "Operating Pressure": "Vacuum to 3 bar",
      "Temperature Range": "40°C to 150°C",
    },
    applications: ["Pharmaceutical", "Food Processing", "Chemical Concentration", "Wastewater Treatment"],
    rating: 4.7,
    reviews: 18,
  },
  {
    id: 3,
    title: "Rising Film Evaporator",
    subtitle: "Force Circulation Evaporators",
    description: "High-performance rising film evaporators designed for efficient concentration of heat-sensitive materials.",
    detailedDescription: "Rising film evaporators use natural circulation principles to create efficient heat transfer while maintaining product quality. Ideal for applications requiring gentle handling of temperature-sensitive products.",
    category: "Heat Exchangers",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
    ],
    features: ["Natural Circulation", "Low Energy Consumption", "Minimal Maintenance", "High Efficiency"],
    specifications: {
      Material: "Stainless Steel 304/316",
      "Circulation Rate": "High velocity flow",
      "Heat Transfer Coefficient": "1000-3000 W/m²K",
      "Concentration Range": "5-80% solids",
      "Operating Temperature": "60°C to 120°C",
    },
    applications: ["Sugar Industry", "Dairy Processing", "Chemical Solutions", "Fruit Juice Concentration"],
    rating: 4.6,
    reviews: 15,
  },
  {
    id: 4,
    title: "Fins Tube Heat Exchanger",
    subtitle: "Air Heat Exchanger / Heating Coil",
    description: "Extended surface heat exchangers with finned tubes for enhanced air-to-fluid heat transfer applications.",
    detailedDescription: "Our finned tube heat exchangers maximize heat transfer surface area through strategically designed fins, making them ideal for air heating and cooling applications. These units offer superior performance in HVAC and industrial air treatment systems.",
    category: "Heat Exchangers",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
    ],
    features: ["Extended Surface Area", "Compact Design", "High Air Flow", "Corrosion Resistant Fins"],
    specifications: {
      "Fin Material": "Aluminum/Copper",
      "Tube Material": "Copper/Stainless Steel",
      "Air Velocity": "2-15 m/s",
      "Heat Duty": "50-5000 kW",
      "Operating Pressure": "Up to 25 bar",
    },
    applications: ["HVAC Systems", "Air Preheaters", "Industrial Drying", "Process Air Heating"],
    rating: 4.5,
    reviews: 22,
  },
  {
    id: 5,
    title: "Distillation Column",
    subtitle: "Separation Equipment",
    description: "Precision-engineered distillation columns for efficient separation of liquid mixtures based on volatility differences.",
    detailedDescription: "Our distillation columns are designed with optimized internals and precise engineering to achieve maximum separation efficiency. These columns can handle various feed compositions and provide consistent product purity.",
    category: "Reactors",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
    ],
    features: ["High Separation Efficiency", "Optimized Internals", "Flexible Operation", "Energy Efficient"],
    specifications: {
      Material: "Stainless Steel 316L",
      "Column Diameter": "300-3000 mm",
      "Height": "5-50 meters",
      "Number of Trays": "10-100 stages",
      "Operating Pressure": "Vacuum to 40 bar",
    },
    applications: ["Petroleum Refining", "Chemical Processing", "Alcohol Production", "Solvent Recovery"],
    rating: 4.9,
    reviews: 31,
  },
  {
    id: 6,
    title: "Chemical Reactor",
    subtitle: "With Agitator and Limpet Coil",
    description: "Versatile chemical reactors equipped with efficient agitation systems and temperature control through limpet coils.",
    detailedDescription: "Our chemical reactors combine robust construction with precise temperature control and optimal mixing capabilities. The integrated limpet coil system ensures uniform temperature distribution while the agitator provides consistent mixing for various chemical processes.",
    category: "Reactors",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
    ],
    features: ["Efficient Mixing", "Temperature Control", "Corrosion Resistant", "Scalable Design"],
    specifications: {
      Material: "Stainless Steel 316L",
      "Volume Range": "100-10000 liters",
      "Agitator Type": "Anchor/Paddle/Turbine",
      "Temperature Range": "-20°C to 300°C",
      "Pressure Rating": "Vacuum to 10 bar",
    },
    applications: ["Chemical Synthesis", "Pharmaceutical Manufacturing", "Food Processing", "Polymer Production"],
    rating: 4.8,
    reviews: 27,
  },
  {
    id: 7,
    title: "Hydro Generator Reactor",
    subtitle: "With Agitator and Limpet Coil",
    description: "Specialized hydro generator reactors designed for hydrogenation processes with precise control and safety features.",
    detailedDescription: "Advanced hydro generator reactors engineered for safe and efficient hydrogenation reactions. Features include high-pressure capability, advanced safety systems, and precise temperature control for optimal reaction conditions.",
    category: "Reactors",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    ],
    features: ["High Pressure Capability", "Safety Systems", "Catalyst Support", "Automated Control"],
    specifications: {
      Material: "Hastelloy/Inconel",
      "Operating Pressure": "Up to 100 bar",
      "Temperature Range": "50°C to 400°C",
      "Hydrogen Flow Rate": "1-1000 Nm³/hr",
      "Catalyst Loading": "Fixed/Slurry bed",
    },
    applications: ["Hydrogenation Reactions", "Pharmaceutical Synthesis", "Fine Chemicals", "Catalyst Testing"],
    rating: 4.7,
    reviews: 19,
  },
  {
    id: 8,
    title: "Pressure Vessel",
    subtitle: "Gas Scrubber / Knock Out Drum",
    description: "Robust pressure vessels designed for gas-liquid separation and scrubbing applications in various industrial processes.",
    detailedDescription: "Our pressure vessels are engineered to meet stringent safety standards while providing reliable performance in gas processing applications. These units effectively separate liquid droplets from gas streams and can handle various operating conditions.",
    category: "Pressure Vessels",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
    ],
    features: ["ASME Code Compliance", "Efficient Separation", "Corrosion Resistant", "Easy Maintenance"],
    specifications: {
      Material: "Carbon Steel/Stainless Steel",
      "Design Pressure": "Up to 150 bar",
      "Design Temperature": "-50°C to 400°C",
      "Volume Range": "0.1-100 m³",
      "Internals": "Demister pads/Wire mesh",
    },
    applications: ["Gas Processing", "Petrochemical", "Oil & Gas", "Chemical Plants"],
    rating: 4.6,
    reviews: 23,
  },
  {
    id: 9,
    title: "Gas Filter Separator",
    subtitle: "Pressure Vessel",
    description: "Advanced gas filter separators for removing solid particles and liquid droplets from gas streams with high efficiency.",
    detailedDescription: "These specialized pressure vessels combine filtration and separation technologies to ensure clean gas streams. Designed with replaceable filter elements and efficient liquid collection systems for continuous operation.",
    category: "Pressure Vessels",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
    ],
    features: ["High Filtration Efficiency", "Replaceable Elements", "Automatic Drainage", "Low Pressure Drop"],
    specifications: {
      "Filtration Rating": "0.1-100 microns",
      "Operating Pressure": "Up to 100 bar",
      "Temperature Range": "-40°C to 200°C",
      "Gas Flow Rate": "10-10000 Nm³/hr",
      "Filter Media": "Pleated/Cartridge/Coalescing",
    },
    applications: ["Natural Gas Processing", "Compressed Air Systems", "Instrument Air", "Process Gas Cleaning"],
    rating: 4.7,
    reviews: 20,
  },
  {
    id: 10,
    title: "Storage Tank",
    subtitle: "Industrial Storage Solution",
    description: "Versatile storage tanks designed for safe and efficient storage of various liquids and chemicals in industrial applications.",
    detailedDescription: "Our storage tanks are constructed with high-quality materials and designed to meet industry standards for safe storage of chemicals, water, and other process fluids. Available in various sizes and configurations to meet specific requirements.",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    ],
    features: ["Leak-Proof Design", "Chemical Resistant", "Various Capacities", "Easy Installation"],
    specifications: {
      Material: "Stainless Steel/FRP/Carbon Steel",
      "Capacity Range": "100-100000 liters",
      "Design Pressure": "Atmospheric to 10 bar",
      "Temperature Range": "-20°C to 200°C",
      "Insulation": "Optional",
    },
    applications: ["Chemical Storage", "Water Treatment", "Food & Beverage", "Pharmaceutical"],
    rating: 4.5,
    reviews: 35,
  },
  {
    id: 11,
    title: "Storage Tank with Limpet Coil",
    subtitle: "Temperature Controlled Storage",
    description: "Advanced storage tanks equipped with limpet coils for precise temperature control during storage and processing.",
    detailedDescription: "These specialized storage tanks feature integrated limpet coil systems that provide uniform heating or cooling throughout the stored material. Perfect for applications requiring temperature maintenance or gradual heating/cooling processes.",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    ],
    features: ["Temperature Control", "Uniform Heating", "Energy Efficient", "Precise Control"],
    specifications: {
      Material: "Stainless Steel 316L",
      "Heating/Cooling Medium": "Steam/Hot Water/Glycol",
      "Temperature Control": "±2°C accuracy",
      "Coil Surface Area": "Optimized for capacity",
      "Insulation": "High-grade thermal insulation",
    },
    applications: ["Chocolate Manufacturing", "Chemical Processing", "Pharmaceutical", "Food Processing"],
    rating: 4.8,
    reviews: 16,
  },
  {
    id: 12,
    title: "Water Bath Heater",
    subtitle: "Precision Heating System",
    description: "Reliable water bath heaters for precise temperature control in laboratory and industrial heating applications.",
    detailedDescription: "Our water bath heaters provide stable and uniform heating for various applications requiring precise temperature control. These units feature advanced temperature controllers and safety systems for reliable operation.",
    category: "Reactors",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
    ],
    features: ["Precise Temperature Control", "Uniform Heating", "Safety Features", "Digital Display"],
    specifications: {
      "Temperature Range": "Ambient to 200°C",
      "Temperature Accuracy": "±0.5°C",
      "Bath Volume": "5-500 liters",
      "Heating Elements": "Stainless steel immersion",
      "Control System": "PID controller",
    },
    applications: ["Laboratory Testing", "Quality Control", "Sample Preparation", "Industrial Heating"],
    rating: 4.6,
    reviews: 28,
  },
]

const categories = [
  { name: "Heat Exchangers", icon: Thermometer, count: 4 },
  { name: "Reactors", icon: Settings, count: 4 },
  { name: "Storage", icon: Container, count: 2 },
  { name: "Pressure Vessels", icon: Gauge, count: 2 },
]

const ImageGallery: React.FC<{
  images: string[]
  selectedIndex: number
  onSelect: (index: number) => void
  title: string
}> = ({ images, selectedIndex, onSelect, title }) => (
  <div className="space-y-4">
    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
      <img
        src={images[selectedIndex] || "/placeholder.svg"}
        alt={`${title} - Image ${selectedIndex + 1}`}
        className="w-full h-80 object-cover transition-all duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
    <div className="flex space-x-3 justify-center">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`View image ${index + 1} of ${title}`}
          className={`relative overflow-hidden rounded-xl transition-all duration-300 ${selectedIndex === index
            ? "ring-3 ring-blue-500 scale-110 shadow-lg"
            : "hover:scale-105 hover:shadow-md"
            }`}
        >
          <img
            src={image}
            alt={`${title} thumbnail ${index + 1}`}
            className="w-20 h-16 object-cover"
          />
        </button>
      ))}
    </div>
  </div>
)

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Add scroll to top effect when product is selected
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selectedProduct])

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products

  const handleProductClick = (product: Product) => {
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedProduct(product)
      setSelectedImageIndex(0)
      setIsAnimating(false)
    }, 300)
  }

  const handleCloseDetails = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedProduct(null)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      {selectedProduct ? (
        // Product Detail View
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4 py-4 md:py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg"
              >
                <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white p-4 md:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                      >
                        {selectedProduct.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-blue-200"
                      >
                        {selectedProduct.subtitle}
                      </motion.p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                          {selectedProduct.category}
                        </Badge>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Button
                          variant="ghost"
                          size="lg"
                          onClick={handleCloseDetails}
                          className="text-white hover:bg-white/20 rounded-full p-2 md:p-3"
                        >
                          <X className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <ImageGallery
                        images={selectedProduct.gallery}
                        selectedIndex={selectedImageIndex}
                        onSelect={setSelectedImageIndex}
                        title={selectedProduct.title}
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-6 md:space-y-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                                }`}
                            />
                          ))}
                          <span className="ml-3 text-gray-600 font-medium">
                            {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {selectedProduct.detailedDescription}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedProduct.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          Request Quote
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Download Specs
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        // Products List View
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
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
                        <CardDescription className="text-base md:text-lg text-gray-600">
                          {category.count} Products Available
                        </CardDescription>
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
                    <Card
                      className="group hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
                      onClick={() => handleProductClick(product)}
                    >
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
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}