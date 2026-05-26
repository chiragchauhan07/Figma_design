import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto w-full p-6 flex-1 relative z-10 pt-16 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
        
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get in <span className="text-[#A855F7]">touch</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-md mb-12">
            Have questions about our platform or pricing? Our team is ready to help you build the future.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white/90 mb-1">Email us</h3>
                <p className="text-white/50 text-sm mb-1">We typically reply within 2 hours.</p>
                <a href="mailto:hello@xzone.com" className="text-[#A855F7] hover:text-[#9333ea] transition-colors text-sm font-medium">hello@xzone.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white/90 mb-1">Live chat</h3>
                <p className="text-white/50 text-sm mb-1">Available Monday to Friday, 9am-5pm EST.</p>
                <button className="text-[#A855F7] hover:text-[#9333ea] transition-colors text-sm font-medium">Open chat</button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white/90 mb-1">Office</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  123 Innovation Drive<br />
                  Tech District, CA 94103<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-white/70">First name</label>
                <input 
                  type="text" 
                  id="firstName"
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#A855F7]/50 focus:ring-1 focus:ring-[#A855F7]/50 transition-all"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-white/70">Last name</label>
                <input 
                  type="text" 
                  id="lastName"
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#A855F7]/50 focus:ring-1 focus:ring-[#A855F7]/50 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
              <input 
                type="email" 
                id="email"
                className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#A855F7]/50 focus:ring-1 focus:ring-[#A855F7]/50 transition-all"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#A855F7]/50 focus:ring-1 focus:ring-[#A855F7]/50 transition-all resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button type="submit" className="bg-[#A855F7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] mt-2">
              Send message
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}
