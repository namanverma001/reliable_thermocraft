import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Clients() {
    const [clients, setClients] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const loadClients = async () => {
            try {
                const loadedClients = await Promise.all(
                    Array.from({ length: 35 }, async (_, i) => {
                        const imageNumber = i + 1
                        const extensions = ['jpg', 'png', 'svg', 'gif', 'webp']

                        for (const ext of extensions) {
                            try {
                                const image = await import(`@/Assets/OurClients/${imageNumber}.${ext}`)
                                return {
                                    id: `client-${imageNumber}`,
                                    name: `Client ${imageNumber}`,
                                    image: image.default,
                                    width: 200,
                                    height: 80,
                                }
                            } catch {
                                continue
                            }
                        }
                        return null
                    })
                )
                setClients(loadedClients.filter(Boolean))
            } catch (error) {
                console.error('Error loading client images:', error)
            }
        }

        loadClients()
    }, [])

    const handleNext = useCallback(() => {
        if (isAnimating || clients.length === 0) return
        setIsAnimating(true)
        setActiveIndex((prev) => (prev + 1) % clients.length)
        setTimeout(() => setIsAnimating(false), 500)
    }, [isAnimating, clients.length])

    const handlePrev = useCallback(() => {
        if (isAnimating || clients.length === 0) return
        setIsAnimating(true)
        setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length)
        setTimeout(() => setIsAnimating(false), 500)
    }, [isAnimating, clients.length])

    useEffect(() => {
        if (isPaused || clients.length === 0) return

        const interval = setInterval(handleNext, 1000)
        return () => clearInterval(interval)
    }, [handleNext, isPaused, clients.length])

    const getPosition = useCallback((index) => {
        const diff = (index - activeIndex + clients.length) % clients.length
        if (diff === 0) return "center"
        if (diff === 1) return "right1"
        if (diff === 2) return "right2"
        if (diff === clients.length - 1) return "left1"
        if (diff === clients.length - 2) return "left2"
        return "hidden"
    }, [activeIndex, clients.length])

    const getStyles = (position) => {
        const baseStyles = "absolute top-1/2 -translate-y-1/2 w-[200px] transition-all duration-500 ease-in-out"

        switch (position) {
            case "center":
                return `${baseStyles} z-30 opacity-100 translate-x-0 scale-125`
            case "left1":
                return `${baseStyles} z-20 opacity-70 -translate-x-[150%] scale-75`
            case "left2":
                return `${baseStyles} z-10 opacity-40 -translate-x-[280%] scale-50`
            case "right1":
                return `${baseStyles} z-20 opacity-70 translate-x-[150%] scale-75`
            case "right2":
                return `${baseStyles} z-10 opacity-40 translate-x-[280%] scale-50`
            default:
                return `${baseStyles} opacity-0 translate-x-[350%] scale-0`
        }
    }

    if (clients.length === 0) {
        return (
            <section className="py-16 px-4 bg-background">
                <p className="text-5xl font-bold text-center text-black mb-16 font-libre tracking-tighter">Our Clients</p>
                <div className="flex justify-center items-center h-[300px]">
                    <p className="text-gray-500">Loading clients...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="py-10 px-4 bg-white">
            <p className="text-4xl sm:text-5xl font-bold text-center text-black mb-16 font-libre tracking-tighter">Our Clients</p>
            <div
                className="max-w-[1920px] mx-auto relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex items-center justify-center h-[300px] relative">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className={getStyles(getPosition(clients.indexOf(client)))}
                        >
                            <img
                                src={client.image}
                                alt={`${client.name} logo`}
                                width={150}
                                height={60}
                                className="object-contain w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrev}
                        disabled={isAnimating}
                        className="rounded-full hover:bg-gray-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={isAnimating}
                        className="rounded-full hover:bg-gray-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {clients.map((client, index) => (
                        <button
                            key={client.id}
                            onClick={() => {
                                if (!isAnimating) {
                                    setIsAnimating(true)
                                    setActiveIndex(index)
                                    setTimeout(() => setIsAnimating(false), 500)
                                }
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                ${activeIndex === index ? "bg-blue-500 w-4" : "bg-gray-300"}
                hover:bg-blue-300`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}