"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Emergency)"],
      color: "bg-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@reliablethermocraft.com", "support@reliablethermocraft.com"],
      color: "bg-blue-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["1234 Industrial Boulevard", "Manufacturing District, State 12345"],
      color: "bg-blue-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:00 PM",
        "24/7 Emergency Service Available",
      ],
      color: "bg-blue-600",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(to_right,_transparent_1px,_transparent_1px)] bg-white [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_black,_transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-6">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Professional Thermal Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your thermal solution needs? Contact our expert team today for a comprehensive consultation
            and custom engineering solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <Building2 className="w-6 h-6 text-blue-600" />
              Contact Information
            </h2>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`${info.color} p-3 rounded-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-gray-900">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="temperature-control">Temperature Control Systems</SelectItem>
                        <SelectItem value="industrial-heating">Industrial Heating Solutions</SelectItem>
                        <SelectItem value="installation">Installation & Maintenance</SelectItem>
                        <SelectItem value="safety-compliance">Safety & Compliance</SelectItem>
                        <SelectItem value="energy-management">Energy Management</SelectItem>
                        <SelectItem value="custom-engineering">Custom Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] group"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <Card className="bg-white border-gray-200 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gray-50 p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Our Location
              </h2>
              <p className="text-gray-600 mt-2">
                Visit our state-of-the-art facility in the heart of the manufacturing district
              </p>
            </div>
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.894332294983!2d73.73169949999999!3d19.9288572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddecafbfffffff%3A0xc1e12fdc472e7dcb!2sReliable%20Thermocraft!5e0!3m2!1sen!2sin!4v1750126687549!5m2!1sen!2sin"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                title="Reliable Thermocraft Manufacturing Facility Location"
                referrerPolicy="no-referrer-when-downgrade"
              // className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ModernContact
