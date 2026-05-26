import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden flex flex-col">
      <div style={{ zoom: 0.9 }} className="flex-1 flex flex-col w-full relative">
        {/* Background glow */}
        <div className="absolute top-[10%] -left-64 w-[600px] h-[600px] bg-[#A855F7]/20 rounded-full blur-[150px] pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full relative z-10">
          <Link to="/" className="flex items-baseline gap-1.5 cursor-pointer">
            <span className="text-4xl font-light text-[#A855F7]">X</span>
            <span className="text-2xl font-normal tracking-wide">Zone</span>
          </Link>

          <nav className="hidden md:flex bg-white/5 border border-white/10 rounded-[30px] p-1.5 items-center gap-2 backdrop-blur-sm">
            <Link to="/" className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105">Home</Link>
            <Link to="/features" className="text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors">Features</Link>
            <Link to="/pricing" className="text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors">Contact</Link>
          </nav>

          <Link to="/register" className="bg-[#A855F7] hover:bg-[#9333ea] text-white px-8 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Register
          </Link>
        </header>

        {/* Nested Routes */}
        <Outlet />
      </div>
    </div>
  );
}
