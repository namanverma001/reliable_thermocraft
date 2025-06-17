import { useState } from "react"
import Image from "@/Assets/condenser.jpg"
export default function OurJourney() {
    const timelineYears = [2013, 2014, 2018, 2021, 2023]

    return (
        <div className="bg-gray-50 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Our Journey</h2>
                            <h3 className="text-xl md:text-2xl font-medium text-gray-800">Beginning with Process Solutions</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Established in 2013, Process Solutions with designing, manufacturing with installation of process
                                technologies and complete turnkey solutions.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute top-6 left-6 right-6 h-0.5 bg-blue-600"></div>

                            {/* Timeline Points */}
                            <div className="flex justify-between items-center relative">
                                {timelineYears.map((year, index) => (
                                    <div key={year} className="flex flex-col items-center">
                                        <div
                                            className={`w-12 h-12 rounded-full border-4 flex items-center justify-center relative z-10 ${index === 0 ? "bg-blue-600 border-blue-600" : "bg-white border-blue-600"
                                                }`}
                                        >
                                            {index === 0 && <div className="w-3 h-3 bg-white rounded-full"></div>}
                                        </div>
                                        <span className="mt-4 text-lg font-semibold text-gray-900">{year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Team Photo */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={Image}
                                alt="Process Solutions team members group photo"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
