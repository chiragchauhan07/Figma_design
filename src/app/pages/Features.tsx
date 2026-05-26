import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Smartphone, Layers, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#A855F7]" />,
      title: "Lightning Fast",
      description: "Optimized for speed. Experience sub-second load times worldwide with our edge infrastructure."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#A855F7]" />,
      title: "Bank-grade Security",
      description: "Your data is encrypted at rest and in transit. We exceed industry standards for security."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#A855F7]" />,
      title: "AI Powered",
      description: "Leverage the latest in machine learning to automate your most tedious tasks."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#A855F7]" />,
      title: "Mobile First",
      description: "A flawless experience across all devices. Work seamlessly from your desk or on the go."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#A855F7]" />,
      title: "Seamless Integration",
      description: "Connect with your favorite tools in seconds. We support over 1,000+ integrations."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#A855F7]" />,
      title: "Global Reach",
      description: "Available in 50+ languages with localized support to help your business scale globally."
    }
  ];

  return (
    <main className="max-w-7xl mx-auto w-full p-6 flex-1 relative z-10 pt-16 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-[#A855F7]">Features</span> that empower
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          Everything you need to build, scale, and manage your applications in one unified platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#A855F7]/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 flex items-center justify-center mb-6 group-hover:bg-[#A855F7]/20 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">{feature.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
