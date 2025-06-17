"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const equipmentData = {
    "pressure-vessels": {
        title: "Pressure Vessels",
        description:
            "High-quality pressure vessels designed for various industrial applications. Our vessels are manufactured to meet international standards and can handle extreme pressures and temperatures.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Working pressure: Up to 300 bar",
            "Temperature range: -40°C to 600°C",
            "Material: Carbon steel, Stainless steel, Alloy steel",
            "Capacity: 50L to 50,000L",
        ],
    },
    "chemical-reactors": {
        title: "Chemical Reactors",
        description:
            "Advanced chemical reactors for pharmaceutical, chemical, and petrochemical industries. Designed for optimal mixing, heat transfer, and reaction control.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Volume: 100L to 20,000L",
            "Agitation speed: Variable RPM",
            "Heating/Cooling: Jacket or coil system",
            "Material: SS316L, Hastelloy, Inconel",
        ],
    },
    "heat-exchangers": {
        title: "Heat Exchangers",
        description:
            "Efficient heat exchangers for thermal management in industrial processes. Available in shell & tube, plate, and spiral configurations.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Heat transfer area: 1-1000 m²",
            "Design pressure: Up to 40 bar",
            "Design temperature: Up to 400°C",
            "Types: Shell & tube, Plate, Spiral",
        ],
    },
    "storage-tanks": {
        title: "Storage Tanks",
        description:
            "Robust storage tanks for liquid and gas storage applications. Custom-designed for specific requirements and environmental conditions.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Capacity: 1,000L to 100,000L",
            "Material: MS, SS304, SS316L",
            "Design: Vertical, Horizontal",
            "Features: Insulation, Heating coils",
        ],
    },
    "distillation-column": {
        title: "Distillation Column",
        description:
            "Precision-engineered distillation columns for separation processes. Optimized for maximum efficiency and product purity.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Height: 3-30 meters",
            "Diameter: 0.5-5 meters",
            "Tray types: Sieve, Bubble cap, Valve",
            "Packing: Structured, Random",
        ],
    },
    "re-boiler": {
        title: "Re-boiler",
        description:
            "High-performance re-boilers for distillation and evaporation systems. Designed for optimal heat transfer and energy efficiency.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Heat duty: 50kW to 5MW",
            "Types: Thermosiphon, Forced circulation",
            "Material: Carbon steel, Stainless steel",
            "Design pressure: Up to 25 bar",
        ],
    },
    "limpet-coil-jacketed": {
        title: "Limpet Coil & Jacketed Vessels",
        description:
            "Specialized vessels with limpet coils and jackets for precise temperature control in chemical and pharmaceutical processes.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Volume: 100L to 10,000L",
            "Jacket pressure: Up to 10 bar",
            "Coil material: SS316L, Copper",
            "Insulation: PUF, Mineral wool",
        ],
    },
    "fins-tube-heat-exchanger": {
        title: "Fins Tube Heat Exchanger / Steam Air Heater / Hot Water Coils",
        description:
            "Finned tube heat exchangers for air heating applications. Ideal for HVAC systems, industrial air heating, and process air treatment.",
        image: "/placeholder.svg?height=400&width=600",
        specifications: [
            "Fin material: Aluminum, Copper",
            "Tube material: Copper, SS304",
            "Air flow: 1000-50000 CFM",
            "Steam pressure: Up to 10 bar",
        ],
    },
}

export default function ProcessEquipment() {
    const [selectedEquipment, setSelectedEquipment] = useState<string>("pressure-vessels")

    const equipmentList = [
        { key: "pressure-vessels", label: "Pressure Vessels" },
        { key: "chemical-reactors", label: "Chemical Reactors" },
        { key: "heat-exchangers", label: "Heat Exchangers" },
        { key: "storage-tanks", label: "Storage Tanks" },
        { key: "distillation-column", label: "Distillation Column" },
        { key: "re-boiler", label: "Re-boiler" },
        { key: "limpet-coil-jacketed", label: "Limpet Coil & Jacketed Vessels" },
        { key: "fins-tube-heat-exchanger", label: "Fins Tube Heat Exchanger / Steam Air Heater / Hot Water Coils" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content - Product Details */}
                    <div className="lg:col-span-3">
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                            {equipmentData[selectedEquipment as keyof typeof equipmentData].title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {equipmentData[selectedEquipment as keyof typeof equipmentData].description}
                                        </p>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications:</h3>
                                            <ul className="space-y-2">
                                                {equipmentData[selectedEquipment as keyof typeof equipmentData].specifications.map(
                                                    (spec, index) => (
                                                        <li key={index} className="text-gray-600 flex items-start">
                                                            <span className="text-blue-600 mr-2">•</span>
                                                            {spec}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-[400px]">
                                        <img
                                            src={equipmentData[selectedEquipment as keyof typeof equipmentData].image}
                                            alt={equipmentData[selectedEquipment as keyof typeof equipmentData].title}
                                            className="rounded-lg object-cover w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar - Equipment Navigation */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-bold text-blue-600 mb-6 tracking-wide">Our Equipment</h4>
                                <div className="space-y-2">
                                    {equipmentList.map((equipment) => (
                                        <button
                                            key={equipment.key}
                                            onClick={() => setSelectedEquipment(equipment.key)}
                                            className={`w-full text-left p-3 rounded-lg transition-colors duration-200 text-sm ${selectedEquipment === equipment.key
                                                ? "bg-blue-100 text-blue-700 font-medium"
                                                : "hover:bg-gray-100 text-gray-600"
                                                }`}
                                        >
                                            {equipment.label}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
