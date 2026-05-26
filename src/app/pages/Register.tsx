import { motion } from "motion/react";
import { Link } from "react-router";
import { Github } from "lucide-react";

export default function Register() {
  return (
    <main className="max-w-md mx-auto w-full p-6 flex-1 relative z-10 pt-20 pb-20 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Create your account
        </h1>
        <p className="text-white/60 text-sm">
          Join 500k+ users building the future today.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white/[0.02] border border-white/10 rounded-3xl p-8"
      >
        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 bg-white text-black px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/90">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              <path d="M1 1h22v22H1z" fill="none"/>
            </svg>
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 bg-white/[0.05] border border-white/10 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/[0.08]">
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] bg-white/10 flex-1"></div>
          <span className="text-white/40 text-xs uppercase tracking-wider font-medium">Or continue with email</span>
          <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="reg-email" className="text-sm font-medium text-white/70">Email address</label>
            <input 
              type="email" 
              id="reg-email"
              className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#A855F7]/50 focus:ring-1 focus:ring-[#A855F7]/50 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="reg-password" className="text-sm font-medium text-white/70">Password</label>
            <input 
              type="password" 
              id="reg-password"
              className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#A855F7]/50 focus:ring-1 focus:ring-[#A855F7]/50 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="bg-[#A855F7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] mt-2">
            Create account
          </button>
        </form>

        <p className="text-center text-white/50 text-sm mt-6">
          Already have an account? <Link to="/" className="text-[#A855F7] hover:text-[#9333ea] font-medium transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </main>
  );
}
