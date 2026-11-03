import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";

import pricingHero from "../assets/images/courses/17.webp";
import PricingTwo from "./PricingTwo";
import Career from "./career";
// import Footer from "./Footer";

// ==========================================
// PRICING DATA
// ==========================================

const plans = [
  {
    name: "Basic",
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: "Perfect for beginners who want to start learning.",
    features: [
      "Access to 10+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
    ],
    popular: false,
  },
  {
    name: "Standard",
    monthlyPrice: 299,
    yearlyPrice: 239,
    description: "Everything you need to grow your skills.",
    features: [
      "Access to 30+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
    ],
    popular: false,
  },
  {
    name: "Premium",
    monthlyPrice: 699,
    yearlyPrice: 559,
    description: "The ultimate learning experience for everyone.",
    features: [
      "Access to 50+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
    popular: true,
  },
];

// ==========================================
// PRICING PAGE
// ==========================================

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-white">
      {/* ==================================
          HERO SECTION
      ================================== */}

      <section
        className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center md:min-h-[460px] lg:min-h-[490px]"
        style={{
          backgroundImage: `url(${pricingHero})`,
        }}
      >
        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-[#07191b]/70" />

        {/* Hero Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto w-full max-w-4xl px-5 pt-16 text-center text-white"
        >
          <span className="mb-6 block text-xs font-medium tracking-[2px]">
            PRICING
          </span>

          <h1 className="mx-auto max-w-[700px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px]">
            Flexible pricing plan for
            <br />
            everyone
          </h1>
        </motion.div>
      </section>

      {/* ==================================
          PRICING PLANS SECTION
      ================================== */}

      <section className="bg-white px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28">
        <div className="mx-auto w-full max-w-[1120px]">
          {/* Monthly / Yearly Toggle */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center justify-center gap-4 md:mb-12"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                !isYearly ? "text-[#10282c]" : "text-gray-400"
              }`}
            >
              MONTHLY
            </button>

            {/* Toggle */}

            <button
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Switch billing period"
              aria-pressed={isYearly}
              className="relative flex h-[27px] w-[52px] items-center rounded-full bg-[#e5e5e5] p-[4px]"
            >
              <motion.span
                animate={{
                  x: isYearly ? 25 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className="block h-[19px] w-[19px] rounded-full bg-[#ffb900] shadow-sm"
              />
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                isYearly ? "text-[#10282c]" : "text-gray-400"
              }`}
            >
              YEARLY
            </button>
          </motion.div>

          {/* ==================================
              PRICING CARDS
          ================================== */}

          <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {plans.map((plan, index) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

              return (
                <motion.div
                  key={plan.name}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -9,
                  }}
                  className={`relative flex min-h-[480px] flex-col overflow-hidden rounded-[5px] shadow-[0_12px_45px_rgba(0,0,0,0.11)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(0,0,0,0.16)] lg:min-h-[510px] ${
                    plan.popular
                      ? "bg-[#10282c] text-white"
                      : "bg-white text-[#10282c]"
                  }`}
                >
                  {/* Premium Yellow Top Border */}

                  {plan.popular && (
                    <div className="absolute left-0 top-0 h-[10px] w-full bg-[#ffb900]" />
                  )}

                  {/* Card Content */}

                  <div className="flex flex-1 flex-col px-7 pb-9 pt-12 sm:px-8 lg:px-9 lg:pt-12">
                    {/* Plan Name */}

                    <h3 className="mb-5 text-base font-semibold tracking-tight">
                      {plan.name}
                    </h3>

                    {/* Description */}

                    <p
                      className={`mb-6 min-h-[48px] text-[13px] leading-[22px] ${
                        plan.popular ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Price */}

                    <div className="mb-9 flex items-baseline gap-1">
                      <motion.span
                        key={`${plan.name}-${price}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[30px] font-bold tracking-tight lg:text-[34px]"
                      >
                        ${price}
                      </motion.span>

                      <span
                        className={`text-xs ${
                          plan.popular ? "text-gray-300" : "text-[#10282c]"
                        }`}
                      >
                        /month
                      </span>
                    </div>

                    {/* Features */}

                    <ul className="mb-10 flex flex-col gap-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-[2px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-[#ffb900]">
                            <Check
                              size={11}
                              strokeWidth={2.5}
                              className="text-[#ffb900]"
                            />
                          </span>

                          <span
                            className={`text-[12px] leading-[19px] ${
                              plan.popular ? "text-gray-300" : "text-gray-500"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Subscribe Button */}

                    <a
                      href={`mailto:support@example.com?subject=${encodeURIComponent(
                        `Subscribe to ${plan.name} Plan`,
                      )}`}
                      className={`mt-auto flex h-[44px] w-full items-center justify-center gap-2 rounded-[4px] text-[12px] font-semibold text-white transition-all duration-300 ${
                        plan.popular
                          ? "bg-[#ffb900] hover:bg-[#e5a600]"
                          : "bg-[#10282c] hover:bg-[#ffb900]"
                      }`}
                    >
                      <span className="text-white">Subscribe This Plan</span>

                      <ArrowUpRight
                        size={15}
                        className="text-white transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <PricingTwo />
      {/* <Footer /> */}
      <Career />
    </main>
  );
}
