import { Play, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function SeparationTechVideo() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const videoUrl = 'https://youtu.be/U6G58HU2Zg0?si=nc6SNZFC9AzrWvWK';
    // Extract video ID from YouTube URL
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handlePlayClick = () => {
        setIsVideoOpen(true);
    }; return (
        <div className="relative w-full h-[450px] md:h-[400px] lg:h-[500px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden rounded-2xl shadow-2xl">
            {/* Background industrial image overlay with blur effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent animate-gradient"></div>

            {/* Industrial pattern/texture overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-8 md:px-16 py-12 md:py-20 gap-8 md:gap-12">
                {/* Play Button */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 relative"
                >
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <button
                        onClick={handlePlayClick}
                        className="group relative w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 backdrop-blur-md border border-white/20"
                    >
                        <Play
                            className="w-10 h-10 md:w-12 md:h-12 text-white ml-2 group-hover:text-blue-200 transition-colors duration-300"
                            fill="currentColor"
                        />
                        {/* Multiple ripple effects */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping animation-delay-0"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping animation-delay-200"></div>
                    </button>
                </motion.div>

                {/* Title and Description */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-1 text-center md:text-left max-w-2xl"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                        YOUR TEXT
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                            YOUR TEXT
                        </span>
                    </h2>
                    <p className="text-blue-100/80 text-lg md:text-xl max-w-xl">
                        YOUR DESCRIPTION                    </p>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-48 h-48 border border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>

            {/* Video Dialog */}
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none">
                    <div className="relative pt-[56.25%] w-full">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}