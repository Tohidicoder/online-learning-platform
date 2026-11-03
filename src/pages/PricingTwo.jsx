import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

// ==========================================
// IMAGE IMPORTS
// ==========================================

import logo1 from "../assets/images/logos/1.svg";
import logo2 from "../assets/images/logos/2.svg";
import logo3 from "../assets/images/logos/3.svg";
import logo4 from "../assets/images/logos/4.svg";
import logo5 from "../assets/images/logos/5.svg";
import logo6 from "../assets/images/logos/6.svg";

import faqImage from "../assets/images/c.svg";
import logo from "../assets/images/L.svg";

// ==========================================
// PARTNER LOGOS
// ==========================================

const partnerLogos = [
  { id: 1, image: logo1, alt: "Partner 1" },
  { id: 2, image: logo2, alt: "Partner 2" },
  { id: 3, image: logo3, alt: "Partner 3" },
  { id: 4, image: logo4, alt: "Partner 4" },
  { id: 5, image: logo5, alt: "Partner 5" },
  { id: 6, image: logo6, alt: "Partner 6" },
];

// ==========================================
// PRICING PLANS
// ==========================================

const plans = [
  {
    id: "basic",
    name: "Basic plan",
    price: 199,
    description: "No credit card required.",
  },
  {
    id: "starter",
    name: "Starter plan",
    price: 299,
    description: "No credit card required.",
    featured: true,
  },
  {
    id: "platinum",
    name: "Platinum plan",
    price: 399,
    description: "No credit card required.",
  },
];

// ==========================================
// PRICING FEATURES
// ==========================================

const features = [
  { id: 1, name: "Access to 30+ top courses", available: [true, true, true] },
  { id: 2, name: "Certification prep", available: [true, true, true] },
  { id: 3, name: "Customizable content", available: [true, true, true] },
  { id: 4, name: "AI-powered coding exercises", available: [true, true, true] },
  {
    id: 5,
    name: "Analytics and adoption reports",
    available: [true, true, true],
  },
  { id: 6, name: "24/7 customer support", available: [true, true, true] },
  { id: 7, name: "Instructor Q&A", available: [true, true, true] },
  { id: 8, name: "Skills assessments", available: [true, true, true] },
];

// ==========================================
// FAQ DATA
// ==========================================

const faqItems = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "You can enroll in an online course by selecting your preferred course, creating an account, and clicking the Enroll Now button. Follow the instructions to complete your registration.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Most of our courses are beginner-friendly and do not require previous experience. Some advanced courses may require basic knowledge of the subject.",
  },
  {
    question: "What are the technical requirements for online learning?",
    answer:
      "You only need a computer, tablet, or smartphone with a stable internet connection and an updated web browser. Some courses may require additional software or tools.",
  },
  {
    question: "What if I encounter technical difficulties?",
    answer:
      "Our support team is available to help you with technical problems. You can contact us through our support page or send us a message.",
  },
  {
    question: "Are there live classes, or can I learn at my own pace?",
    answer:
      "You can learn at your own pace using our recorded lessons. Selected courses may also include live classes and interactive sessions with instructors.",
  },
];

// ==========================================
// TESTIMONIAL DATA
// ==========================================

const testimonials = [
  {
    name: "Linda Grady",
    role: "Co-assistant manager",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
  },
  {
    name: "Jim Adams",
    role: "Designer",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis.",
  },
];

// ==========================================
// FOOTER LINKS
// ==========================================

const footerLinks = [
  {
    title: "Popular courses",
    links: ["Finance", "Management", "Design", "Web development"],
  },
  {
    title: "Company",
    links: ["About", "Courses", "Blog", "Contact", "License", "Pricing"],
  },
  {
    title: "CMS",
    links: ["Course details", "Instructor details", "Blog details"],
  },
];

// ==========================================
// MAIN PRICING COMPONENT
// ==========================================

export default function PricingTwo() {
  const [activeFAQ, setActiveFAQ] = useState(2);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ TOGGLE
  const toggleFAQ = (index) => {
    setActiveFAQ((current) => (current === index ? null : index));
  };

  // TESTIMONIAL NAVIGATION
  const previousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="w-full overflow-hidden bg-white font-[Poppins,sans-serif] text-[#20383d]">
      {/* ======================================
          1. PARTNER LOGO SECTION
      ====================================== */}

      <section className="relative w-full overflow-hidden bg-[#eff6f8] py-7 sm:py-8 lg:py-9">
        <p className="mb-6 px-4 text-center text-[12px] font-medium tracking-wide text-[#20383d] sm:text-[13px] lg:text-[14px]">
          Learn from 350+ leading universities and companies with us
        </p>

        <div className="logo-slider relative mx-auto w-full max-w-[1100px] overflow-hidden">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#eff6f8] to-transparent sm:w-28 lg:w-36" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#eff6f8] to-transparent sm:w-28 lg:w-36" />

          {/* INFINITE LOGO TRACK */}
          <div className="logo-track flex w-max items-center">
            {/* FIRST GROUP */}
            <div className="logo-group flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20">
              {partnerLogos.map((item) => (
                <div
                  key={`first-${item.id}`}
                  className="flex h-14 w-24 shrink-0 items-center justify-center sm:h-16 sm:w-28 lg:h-[70px] lg:w-32"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-11 max-w-full object-contain opacity-65 grayscale transition-opacity duration-300 hover:opacity-100 sm:max-h-12 lg:max-h-14"
                  />
                </div>
              ))}
            </div>

            {/* DUPLICATE GROUP */}
            <div
              aria-hidden="true"
              className="logo-group flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
            >
              {partnerLogos.map((item) => (
                <div
                  key={`second-${item.id}`}
                  className="flex h-14 w-24 shrink-0 items-center justify-center sm:h-16 sm:w-28 lg:h-[70px] lg:w-32"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="max-h-11 max-w-full object-contain opacity-65 grayscale transition-opacity duration-300 hover:opacity-100 sm:max-h-12 lg:max-h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          2. PRICING COMPARISON
      ====================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
        <div className="mx-auto max-w-[1120px]">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center sm:mb-16 lg:mb-20"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#a47b00] sm:text-[13px]">
              OUR PRICING
            </span>

            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight text-[#20383d] sm:text-[36px] lg:text-[42px]">
              Pricing comparison
            </h2>

            <p className="mx-auto mt-4 max-w-[550px] text-[14px] leading-[1.9] text-gray-500 sm:text-[15px]">
              Choose the perfect learning plan and enjoy all the tools you need
              to grow your skills.
            </p>
          </motion.div>

          {/* DESKTOP PRICING TABLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden md:block"
          >
            <div className="grid grid-cols-[1.8fr_repeat(3,minmax(0,1fr))] items-stretch">
              <div />

              {/* PLAN HEADERS */}
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex min-h-[145px] flex-col items-center justify-center px-3 py-5 text-center ${
                    plan.featured
                      ? "rounded-t-md bg-[#20383d] text-white"
                      : "bg-white text-[#20383d]"
                  }`}
                >
                  <h3 className="text-[15px] font-bold lg:text-[17px]">
                    {plan.name}
                  </h3>

                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-[29px] font-bold leading-none lg:text-[34px]">
                      ${plan.price}
                    </span>
                    <span className="text-[12px]">/month</span>
                  </div>

                  <p
                    className={`mt-3 text-[11px] lg:text-[12px] ${
                      plan.featured ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
              ))}

              {/* FEATURES */}
              {features.map((feature, rowIndex) => (
                <div key={feature.id} className="contents">
                  <div
                    className={`flex min-h-[52px] items-center px-4 text-[13px] font-semibold lg:min-h-[58px] lg:px-5 lg:text-[14px] ${
                      rowIndex % 2 === 0 ? "bg-[#eff6f8]" : "bg-white"
                    }`}
                  >
                    {feature.name}
                  </div>

                  {plans.map((plan, planIndex) => (
                    <div
                      key={plan.id}
                      className={`flex min-h-[52px] items-center justify-center lg:min-h-[58px] ${
                        plan.featured
                          ? "bg-[#20383d]"
                          : rowIndex % 2 === 0
                            ? "bg-[#eff6f8]"
                            : "bg-white"
                      } ${
                        plan.featured && rowIndex === features.length - 1
                          ? "rounded-b-md"
                          : ""
                      }`}
                    >
                      {feature.available[planIndex] && (
                        <CheckCircle2
                          size={20}
                          strokeWidth={2.5}
                          className={
                            plan.featured
                              ? "fill-[#ffbd00] text-[#ffbd00] stroke-[#20383d]"
                              : "fill-[#20383d] text-[#20383d] stroke-white"
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* MOBILE PRICING CARDS */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {plans.map((plan, planIndex) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: planIndex * 0.1 }}
                className={`overflow-hidden rounded-lg border ${
                  plan.featured
                    ? "border-[#20383d] bg-[#20383d] text-white shadow-xl"
                    : "border-[#e5edef] bg-white text-[#20383d] shadow-sm"
                }`}
              >
                <div className="px-6 py-8 text-center">
                  <h3 className="text-[19px] font-bold">{plan.name}</h3>

                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    <span className="text-[36px] font-bold">${plan.price}</span>
                    <span className="text-[13px]">/month</span>
                  </div>

                  <p className="mt-3 text-[13px] opacity-70">
                    {plan.description}
                  </p>
                </div>

                <div className="px-6 pb-5">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className={`flex items-center justify-between gap-3 border-t py-4 text-[13px] ${
                        plan.featured ? "border-white/15" : "border-gray-100"
                      }`}
                    >
                      <span>{feature.name}</span>

                      {feature.available[planIndex] && (
                        <CheckCircle2
                          size={19}
                          className={
                            plan.featured
                              ? "shrink-0 fill-[#ffbd00] text-[#ffbd00] stroke-[#20383d]"
                              : "shrink-0 fill-[#20383d] text-[#20383d] stroke-white"
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          3. FAQ SECTION
      ====================================== */}

      <section className="bg-[#f0f6f7] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* FAQ IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <img
              src={faqImage}
              alt="Online learning illustration"
              className="h-auto w-full max-w-[300px] object-contain sm:max-w-[360px] lg:max-w-[420px]"
            />
          </motion.div>

          {/* FAQ CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="mb-9">
              <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#a47b00] sm:text-[13px]">
                CONTACT US
              </span>

              <h2 className="mt-3 text-[30px] font-bold leading-[1.2] tracking-tight text-[#20383d] sm:text-[36px] lg:text-[42px]">
                Frequently asked
                <br className="hidden sm:block" />
                questions
              </h2>

              <p className="mt-4 max-w-[450px] text-[14px] leading-[1.9] text-gray-500 sm:text-[15px]">
                Find answers to common questions about our online learning
                platform.
              </p>
            </div>

            {/* FAQ ACCORDION */}
            <div className="w-full">
              {faqItems.map((item, index) => {
                const isOpen = activeFAQ === index;

                return (
                  <div key={index} className="border-b border-[#cfdddf]">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left text-[14px] font-semibold leading-[1.6] text-[#20383d] transition-colors duration-300 hover:text-[#a47b00] sm:text-[15px] lg:text-[16px]"
                    >
                      <span>{item.question}</span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                        {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[570px] pb-6 pr-8 text-[13px] leading-[2] text-gray-500 sm:text-[14px]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          4. TESTIMONIAL SECTION
          CENTERED / LIGHT BACKGROUND
      ====================================== */}

      <section className="flex min-h-[390px] items-center justify-center bg-[#FAFAF8] px-5 py-20 sm:min-h-[430px] sm:px-8 lg:min-h-[470px] lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center text-center"
        >
          {/* QUOTE ICON */}
          <div
            aria-hidden="true"
            className="mb-4 h-[70px] scale-x-[-1] font-serif text-[115px] font-bold leading-[0.85] text-[#dce8e9] sm:text-[125px]"
          >
            “
          </div>

          {/* TESTIMONIAL TEXT */}
          <div className="flex min-h-[120px] w-full items-center justify-center overflow-hidden lg:min-h-[135px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTestimonial}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35 }}
                className="mx-auto max-w-[1000px] text-[16px] font-medium leading-[1.9] text-[#263c42] sm:text-[18px] lg:text-[20px]"
              >
                “{currentTestimonial.quote}”
              </motion.p>
            </AnimatePresence>
          </div>

          {/* NAME AND ROLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`person-${activeTestimonial}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-7"
            >
              <h3 className="text-[21px] font-bold text-[#263c42] sm:text-[23px] lg:text-[25px]">
                {currentTestimonial.name}
              </h3>

              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[1.5px] text-[#89979b] sm:text-[13px]">
                {currentTestimonial.role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* SLIDER BUTTONS */}
          <div className="mt-9 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#94a6aa] text-[#667d82] transition-all duration-300 hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:text-[#163638] sm:h-14 sm:w-14"
            >
              <ArrowLeft size={21} />
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#94a6aa] text-[#667d82] transition-all duration-300 hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:text-[#163638] sm:h-14 sm:w-14"
            >
              <ArrowRight size={21} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ======================================
          5. MAIN FOOTER
          CTA SECTION REMOVED
      ====================================== */}

      <footer
        id="contact"
        className="relative w-full overflow-hidden bg-[#082d30] text-white"
      >
        {/* FOOTER CONTENT */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-x-8 gap-y-12 px-6 py-20 sm:grid-cols-3 md:grid-cols-5 md:gap-x-10 md:px-10 md:py-24 lg:gap-x-14 lg:px-14 lg:py-28">
          {/* LOGO AND DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 sm:col-span-1"
          >
            <a
              href="/"
              aria-label="Learna home"
              className="group inline-flex items-center"
            >
              <img
                src={logo}
                alt="Learna Logo"
                className="h-[46px] w-auto max-w-[190px] object-contain object-left transition-opacity duration-300 group-hover:opacity-80 lg:h-[50px]"
              />
            </a>

            <p className="mt-6 max-w-[270px] text-[14px] leading-[1.9] text-[#b8caca] lg:text-[15px]">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique eros.
            </p>
          </motion.div>

          {/* FOOTER LINK COLUMNS */}
          {footerLinks.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="min-w-0"
            >
              <h3 className="text-[18px] font-bold leading-tight text-white lg:text-[20px]">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Courses" || link === "Web development"
                          ? "#courses"
                          : "#contact"
                      }
                      className="inline-block text-[14px] leading-[1.8] text-[#b8caca] transition-colors duration-300 hover:text-[#ffbd00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffbd00] md:text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-2 sm:col-span-1"
          >
            <h3 className="text-[18px] font-bold leading-tight text-white lg:text-[20px]">
              Need help?
            </h3>

            <div className="mt-6 space-y-7">
              {/* PHONE */}
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 shrink-0 text-[#ffbd00]" />

                <div>
                  <p className="text-[13px] text-[#b8caca]">Call us</p>

                  <a
                    href="tel:+18881234567"
                    className="mt-2 block text-[14px] font-semibold text-white transition-colors duration-300 hover:text-[#ffbd00] lg:text-[15px]"
                  >
                    (888) 123 4567
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 shrink-0 text-[#ffbd00]" />

                <div className="min-w-0">
                  <p className="text-[13px] text-[#b8caca]">Need support?</p>

                  <a
                    href="mailto:info@example.com"
                    className="mt-2 block break-words text-[14px] font-semibold text-white transition-colors duration-300 hover:text-[#ffbd00] lg:text-[15px]"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="relative z-10 border-t border-white/15">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row md:px-10 lg:px-14">
            <p className="text-center text-[13px] font-medium text-[#b8caca] sm:text-left">
              DESIGN BY{" "}
              <span className="font-bold text-[#ffbd00]">FAEZEH TOHIDI</span>
            </p>

            <p className="text-center text-[13px] font-medium text-[#b8caca] sm:text-right">
              POWERED BY{" "}
              <span className="font-bold text-white">
                REACT &amp; TAILWIND CSS
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* ======================================
          6. LOGO ANIMATION
          NEVER PAUSE ON HOVER
      ====================================== */}

      <style>{`
        .logo-track {
          animation: pricing-logo-marquee 35s linear infinite;
          will-change: transform;
        }

        @keyframes pricing-logo-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
