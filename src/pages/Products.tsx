import { useState } from "react"
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
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
  price: string
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    title: "Copper Heat Exchanger",
    subtitle: "Shell And Tube Heat Exchanger",
    description:
      "High-efficiency copper heat exchangers designed for optimal thermal transfer in industrial applications.",
    detailedDescription:
      "Our copper heat exchangers are engineered for superior performance in demanding industrial environments. Featuring corrosion-resistant copper construction and optimized tube configurations for maximum heat transfer efficiency.",
    category: "Heat Exchangers",
    image: "/placeholder.svg",
    gallery: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: ["Corrosion Resistant", "High Thermal Conductivity", "Durable Construction"],
    specifications: {
      Material: "Copper Tubes, Steel Shell",
      "Temperature Range": "-20°C to 200°C",
      "Pressure Rating": "Up to 16 bar",
      "Heat Transfer Area": "10-500 m²",
      "Tube Diameter": "12-25 mm",
      "Shell Diameter": "200-2000 mm",
    },
    applications: ["Chemical Processing", "HVAC Systems", "Power Generation", "Food & Beverage"],
    price: "Starting from $5,000",
    rating: 4.8,
    reviews: 24,
  },
  // ... other products stay the same
]

const categories = [
  { name: "Heat Exchangers", icon: Zap, count: 3 },
  { name: "Reactors", icon: Settings, count: 3 },
  { name: "Storage", icon: Factory, count: 2 },
  { name: "Pressure Vessels", icon: Gauge, count: 2 },
]

const ImageGallery: React.FC<{
  images: string[]
  selectedIndex: number
  onSelect: (index: number) => void
  title: string
}> = ({ images, selectedIndex, onSelect, title }) => (
  <div className="space-y-4">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[selectedIndex] || "/placeholder.svg"}
        alt={`${title} - Image ${selectedIndex + 1}`}
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="flex space-x-2">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`View image ${index + 1} of ${title}`}
          className={`relative overflow-hidden rounded-md transition-all duration-300 ${selectedIndex === index ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
            }`}
        >
          <img
            src={image}
            alt={`${title} thumbnail ${index + 1}`}
            className="w-16 h-12 object-cover"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />

      {selectedProduct ? (
        // Product Detail View
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
                <p className="text-blue-200">{selectedProduct.subtitle}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge className="bg-white/20 text-white">{selectedProduct.category}</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseDetails}
                  className="text-white hover:bg-white/20"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ImageGallery
                  images={selectedProduct.gallery}
                  selectedIndex={selectedImageIndex}
                  onSelect={setSelectedImageIndex}
                  title={selectedProduct.title}
                />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(selectedProduct.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                            }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        ({selectedProduct.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">{selectedProduct.price}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProduct.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Quote</Button>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Download Specs
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">{key}</h4>
                      <p className="text-gray-600 text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Applications</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {selectedProduct.applications.map((application, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-center"
                    >
                      <span className="font-medium text-blue-900 text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold mb-2">Need More Information?</h3>
                  <p className="text-blue-100 text-sm">Our technical experts are ready to help</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Phone className="h-6 w-6 mx-auto mb-2 text-blue-200" />
                    <h4 className="font-semibold text-sm mb-1">Call Us</h4>
                    <p className="text-blue-100 text-xs">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-6 w-6 mx-auto mb-2 text-blue-200" />
                    <h4 className="font-semibold text-sm mb-1">Email Us</h4>
                    <p className="text-blue-100 text-xs">info@industrial-solutions.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-6 w-6 mx-auto mb-2 text-blue-200" />
                    <h4 className="font-semibold text-sm mb-1">Visit Us</h4>
                    <p className="text-blue-100 text-xs">123 Industrial Blvd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Products List View
        <>
          <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">Industrial Equipment Solutions</h1>
                <p className="text-xl mb-8 text-blue-100">
                  Precision-engineered industrial equipment for chemical processing, heat transfer, and
                  storage applications.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map(category => (
                  <Card
                    key={category.name}
                    className={`text-center hover:shadow-lg transition-all duration-300 cursor-pointer ${selectedCategory === category.name ? "ring-2 ring-blue-500" : ""
                      }`}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                  >
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <category.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription>{category.count} Products Available</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Products</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore our comprehensive range of industrial equipment designed for maximum efficiency
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600">{product.category}</Badge>
                    </div>

                    <CardHeader>
                      <CardTitle>{product.title}</CardTitle>
                      <CardDescription>{product.subtitle}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  )
}
