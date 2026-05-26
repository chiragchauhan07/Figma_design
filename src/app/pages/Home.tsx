import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto w-full p-6 flex-1 mt-8 lg:mt-16 relative z-10 pb-20">
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-[#A855F7]">Step</span> into the
        </h1>
        
        <h2 className="text-6xl sm:text-7xl md:text-[7rem] font-mono tracking-[0.25em] mb-8 leading-none ml-1">
          f<span className="text-[#A855F7]">u</span>t<span className="text-[#A855F7]">u</span>re
        </h2>

        <p className="text-white/60 text-base md:text-lg max-w-[450px] leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Link to="/register" className="bg-[#A855F7] hover:bg-[#9333ea] px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            Get Started
          </Link>
          <Link to="/pricing" className="border border-white/20 hover:bg-white/10 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors">
            Our pricing
          </Link>
        </div>

        <div className="w-full max-w-[450px] h-[1px] bg-white/10 mb-10" />

        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-5xl md:text-6xl font-bold tracking-tight">500k</span>
            <span className="text-white/60 text-sm mt-1 font-medium">worldwide users</span>
          </div>
          
          <div className="flex -space-x-4 pl-2">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGZhY2V8ZW58MXx8fHwxNzc5NzI0MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="User 1" 
              className="w-16 h-16 rounded-full border-[3px] border-[#050505] object-cover relative z-30"
            />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW4lMjBmYWNlfGVufDF8fHx8MTc3OTc1NzUwOXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="User 2" 
              className="w-16 h-16 rounded-full border-[3px] border-[#050505] object-cover relative z-20"
            />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9sZGVyJTIwd29tYW4lMjBmYWNlfGVufDF8fHx8MTc3OTc1NzUxM3ww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="User 3" 
              className="w-16 h-16 rounded-full border-[3px] border-[#050505] object-cover relative z-10"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Column - Spline 3D Design */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1.15 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full aspect-square lg:aspect-auto lg:h-[750px] relative mt-8 lg:-mt-12 lg:-mr-10 lg:translate-x-6"
      >
        {/* Subtle inner glow to match the premium feel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="w-full h-full relative">
          <iframe 
            src="https://my.spline.design/chips-UU2P0U0Zfq64SPXegeaMt4XX/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="Spline 3D Design"
            className="relative z-10 w-full h-full scale-[1.05]"
          ></iframe>
          
          {/* Watermark hider overlay */}
          <div className="absolute bottom-2 right-2 w-40 h-12 bg-[#050505] z-20 pointer-events-none" />
        </div>
      </motion.div>
    </main>
  );
}
