import About from "./About";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  GraduationCap,
  UserRound,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

import aboutImage from "../assets/images/s.webp";
import profileCardImage from "../assets/images/Card.avif";
import background from "../assets/images/B.png";
import InstructorSection from "./InstructorSection";
import Footer from "../pages/Footer";

// FEATURES
const features = [
  {
    title: "450+ online courses",
    description: "Learn new skills at your own pace.",
    icon: UserRound,
  },
  {
    title: "Personalized learning",
    description: "Learning designed around your goals.",
    icon: GraduationCap,
  },
  {
    title: "Lifetime update",
    description: "Keep growing with updated content.",
    icon: RefreshCw,
  },
];

// STATISTICS
const stats = [
  { end: 1.5, suffix: "K", label: "FINISH SEASONS", decimals: 1 },
  { end: 7.8, suffix: "K", label: "ENROLLED", decimals: 1 },
  { end: 100, suffix: "%", label: "JOB PLACEMENT", decimals: 0 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

// ANIMATED COUNTER
function CountUp({ end, suffix, decimals, reduceMotion }) {
  const [count, setCount] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (reduceMotion) {
      setCount(end);
      return;
    }

    let frame = 0;
    const totalFrames = 60;

    const timer = setInterval(() => {
      frame += 1;

      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(end * eased);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [end, reduceMotion]);

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function AboutOne() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-[#10282b]">
      {/* ABOUT HERO */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0c272a] sm:min-h-[345px] md:min-h-[390px] lg:min-h-[410px]">
        <img
          src={background}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#082629]/75" />

        {/* BACKGROUND SHAPES */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={reduceMotion ? {} : { x: [0, 15, 0], y: [0, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 top-10 h-56 w-56 rounded-full border border-white/10"
          />

          <motion.div
            animate={reduceMotion ? {} : { rotate: [0, 8, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
          />
        </div>

        {/* HERO TEXT */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:py-24"
        >
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffbd20]">
            About Us
          </p>

          <h1 className="mx-auto max-w-[720px] text-[36px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[46px] md:text-[56px] lg:text-[62px]">
            You’re sincerely
            <br />
            determined to grow
          </h1>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="relative mx-auto max-w-[1200px] px-5 pb-20 pt-12 sm:px-8 md:pt-16 lg:px-8 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* MAIN IMAGE AND PROFILE CARD */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[550px] md:mx-0 md:-mt-20"
          >
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src={aboutImage}
                alt="Students learning together"
                whileHover={reduceMotion ? {} : { scale: 1.035 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-[340px] w-full rounded-2xl object-cover sm:h-[430px] md:h-[480px] lg:h-[520px] xl:h-[550px]"
              />
            </div>

            {/* LARGE PROFILE CARD */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              whileHover={reduceMotion ? {} : { y: -5 }}
              className="absolute -bottom-12 right-2 z-10 w-[200px] overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(16,40,43,0.18)] sm:right-5 sm:w-[230px] md:right-3 md:w-[245px] lg:right-5 lg:w-[260px] xl:w-[275px]"
            >
              <img
                src={profileCardImage}
                alt="Student profiles, enrollment information and rating"
                className="block h-auto w-full rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>

          {/* STORY CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="pt-2 md:pt-0"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d69b00]"
            >
              Our Story
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[500px] text-[32px] font-extrabold leading-[1.16] tracking-[-0.035em] text-[#10282b] sm:text-[38px] lg:text-[43px]"
            >
              Limitless learning and get more possibilities
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[480px] text-[13px] leading-[1.9] text-[#687678] sm:text-[14px] lg:text-[15px]"
            >
              Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
              maecenas scelerisque imperdiet nec. Pellentesque mauris amet
              ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium
              est elementum elementum rhoncus.
            </motion.p>

            {/* STATISTICS */}
            <motion.div
              variants={fadeUp}
              className="mt-9 grid grid-cols-3 divide-x divide-[#dce3e3]"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="min-w-0 px-2 first:pl-0 last:pr-0 sm:px-4"
                >
                  <p className="whitespace-nowrap text-[26px] font-extrabold leading-none tracking-tight text-[#10282b] sm:text-[32px] lg:text-[35px]">
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      reduceMotion={reduceMotion}
                    />
                  </p>

                  <p className="mt-3 text-[8px] font-bold uppercase leading-4 tracking-[0.08em] text-[#697779] sm:text-[10px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURES BAR */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-24 grid grid-cols-1 gap-7 rounded-2xl border border-white/10 bg-[#0c272a] px-6 py-8 text-white shadow-[0_18px_45px_rgba(12,39,42,0.14)] sm:grid-cols-2 sm:px-8 lg:mt-28 lg:grid-cols-3 lg:gap-6 lg:px-8 lg:py-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={reduceMotion ? {} : { y: -3 }}
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 group-hover:border-[#ffb900] group-hover:text-[#ffb900]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold leading-6">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-white/65">
                    {feature.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-white/0 transition-colors duration-300 group-hover:text-[#ffb900]"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* OTHER SECTIONS */}
      <About />
      <InstructorSection />
      <Footer />
    </main>
  );
}
