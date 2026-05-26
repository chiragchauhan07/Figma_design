import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small projects just getting started.",
      features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
      buttonText: "Start for free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing teams that need more power and advanced features.",
      features: ["Unlimited projects", "Advanced analytics", "Priority email support", "50GB storage", "Custom domains"],
      buttonText: "Get Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs and high volume.",
      features: ["Everything in Pro", "Dedicated success manager", "24/7 phone support", "Unlimited storage", "SSO & Advanced Security"],
      buttonText: "Contact sales",
      popular: false
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
          Simple, transparent <span className="text-[#A855F7]">pricing</span>
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          Choose the plan that best fits your needs. No hidden fees, ever.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-8 rounded-3xl relative ${
              plan.popular 
                ? "bg-white/[0.05] border-[#A855F7] border-2 shadow-[0_0_30px_rgba(168,85,247,0.15)] md:-mt-8 md:mb-8" 
                : "bg-white/[0.02] border border-white/10"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A855F7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-white/50 text-sm mb-6 min-h-[40px]">{plan.description}</p>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
              {plan.period && <span className="text-white/50">{plan.period}</span>}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <Check className="w-5 h-5 text-[#A855F7]" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              to={plan.name === "Enterprise" ? "/contact" : "/register"}
              className={`block text-center w-full py-3 rounded-full text-sm font-semibold transition-all ${
                plan.popular 
                  ? "bg-[#A855F7] hover:bg-[#9333ea] text-white hover:scale-105" 
                  : "border border-white/20 hover:bg-white/10 text-white"
              }`}
            >
              {plan.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
