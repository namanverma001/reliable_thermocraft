
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import pressurevessel from '@/Assets/products/pressurevessel.jpg'
import chemicalreactor from '@/Assets/products/chemicalreactor.jpg'
import heatExchanger from '@/Assets/products/heatexchanger.png';
import storageTank from '@/Assets/products/storagetank.jpg';       // Adjust the path as necessary
import distillationColumn from '@/Assets/products/distillationcolumn.png'; // Adjust the path as necessary
import reboiler from '@/Assets/products/reboiler.jpg';             // Adjust the path as necessary
import limpetJacketed from '@/Assets/products/limpetcoil.png'; // Adjust the path as necessary
import finnedHeatExchanger from '@/Assets/products/fineheat.jpg';

const equipmentData = {
    "pressure-vessels": {
        title: "Pressure Vessels",
        description:
            "Custom-engineered vessels for high-pressure applications with optimized design for your specific operating conditions and material requirements.",
        image: pressurevessel,
        specifications: [
            "Specification text will add here "
        ],
    },
    "chemical-reactors": {
        title: "Chemical Reactors",
        description:
            "Application-specific reactor designs with custom internals, agitation systems, and heat transfer solutions for enhanced process efficiency.",
        image: chemicalreactor,
        specifications: [
            "Specification text will add here "
        ],
    },
    "heat-exchangers": {
        title: "Heat Exchangers",
        description:
            "Shell & tube, plate type, and air-cooled configurations optimized for your thermal duty requirements and fouling considerations.",
        image: heatExchanger,
        specifications: [
            "Specification text will add here "
        ],
    },
    "storage-tanks": {
        title: "Storage Tanks",
        description:
            "Atmospheric and low-pressure storage solutions with corrosion-resistant materials and custom nozzle configurations per process needs.",
        image: storageTank,
        specifications: [
            "Specification text will add here "
        ],
    },
    "distillation-column": {
        title: "Distillation Column",
        description:
            "Tray and packed column designs with optimized internals for your specific separation requirements and throughput capacity.",
        image: distillationColumn,
        specifications: [
            "Specification text will add here "
        ],
    },
    "re-boiler": {
        title: "Re-boiler",
        description:
            "Thermosiphon, forced circulation, and kettle-type configurations designed for your column's heat duty and operating parameters.",
        image: reboiler,
        specifications: [
            "Specification text will add here "
        ],
    },
    "limpet-coil-jacketed": {
        title: "Limpet Coil & Jacketed Vessels",
        description:
            "Heat transfer solutions for temperature-sensitive processes with customized coil configurations and jacket designs for optimal thermal performance.",
        image: limpetJacketed,
        specifications: [
            "Specification text will add here "
        ],
    },
    "fins-tube-heat-exchanger": {
        title: "Finned Tube Heat Exchanger / Steam Air Heater / Hot Water Coils",
        description:
            "Fine Tube Heat Exchangers, Steam Air Heater, Hot Water Coils  Compact heat transfer solutions with enhanced surface area design for high thermal efficiency in limited space applications, ideal for precise temperature control requirements.",
        image: finnedHeatExchanger,
        specifications: [
            "Specification text will add here "
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
