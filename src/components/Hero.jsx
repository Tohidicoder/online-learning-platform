import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import girlImage from "../assets/images/Banner-Girl.webp";
import achievementImage from "../assets/images/Achievements.webp";
import trustedImage from "../assets/images/Trusted-By-Image.avif";
import halfMoon from "../assets/images/Half-Moon.svg";
import yellowDot from "../assets/images/Yellow-Dot.svg";
import blueCircle from "../assets/images/Blue-Circle.svg";
import heroBackground from "../assets/images/hero-background.svg";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Motion settings
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const noMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1, x: 0, y: 0 } }
    : {};

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#082a2e] text-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${heroBackground}")` }}
      />

      {/* Hero layout */}
      <div className="mx-auto grid min-h-screen max-w-[1600px] items-center gap-8 px-5 pb-12 pt-28 sm:px-8 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-12 lg:pb-8 lg:pt-24 xl:gap-14 xl:px-16">
        {/* Student image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[760px] lg:mx-0"
        >
          {/* Decorative circle */}
          <motion.img
            src={blueCircle}
            alt=""
            aria-hidden="true"
            {...noMotion}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: [0, -9, 0], rotate: [0, 8, 0] }
            }
            transition={{
              duration: 4,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[12%] top-[12%] z-20 w-10 sm:w-12"
          />

          {/* Yellow dot */}
          <motion.img
            src={yellowDot}
            alt=""
            aria-hidden="true"
            animate={
              reduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }
            }
            transition={{
              duration: 2.5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[18%] top-[34%] z-20 w-3"
          />

          {/* Half moon */}
          <motion.img
            src={halfMoon}
            alt=""
            aria-hidden="true"
            animate={reduceMotion ? {} : { rotate: [0, 5, 0] }}
            transition={{
              duration: 5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-[22%] left-0 z-0 w-32 sm:w-44 lg:w-48"
          />

          {/* Main student image — larger */}
          <motion.img
            src={girlImage}
            alt="Student learning online"
            fetchPriority="high"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="relative z-10 mx-auto block h-auto max-h-[72vh] w-full object-contain object-bottom sm:max-h-[80vh] lg:max-h-[88vh]"
          />

          {/* Achievement card */}
          <motion.img
            src={achievementImage}
            alt="Student achievement awards"
            initial={reduceMotion ? false : { opacity: 0, x: -20, y: 15 }}
            animate={
              reduceMotion
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 1, x: 0, y: [0, -5, 0] }
            }
            transition={{
              opacity: { duration: 0.6, delay: 0.45 },
              x: { duration: 0.6, delay: 0.45 },
              y: {
                duration: 3.5,
                delay: 0.8,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-[19%] left-0 z-20 w-[43%] max-w-[260px] object-contain sm:left-1 sm:w-[42%] lg:bottom-[21%]"
          />

          {/* Trusted students card */}
          <motion.img
            src={trustedImage}
            alt="Trusted by students"
            initial={reduceMotion ? false : { opacity: 0, x: 20, y: 15 }}
            animate={
              reduceMotion
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 1, x: 0, y: [0, 5, 0] }
            }
            transition={{
              opacity: { duration: 0.6, delay: 0.65 },
              x: { duration: 0.6, delay: 0.65 },
              y: {
                duration: 4,
                delay: 1,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-[2%] right-0 z-20 w-[45%] max-w-[285px] object-contain drop-shadow-xl sm:w-[46%]"
          />

          {/* Decorative yellow dot */}
          <motion.span
            aria-hidden="true"
            animate={
              reduceMotion ? {} : { scale: [1, 1.25, 1], opacity: [1, 0.6, 1] }
            }
            transition={{
              duration: 3,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[60%] z-20 h-3.5 w-3.5 rounded-full bg-[#ffb900]"
          />
        </motion.div>

        {/* Heading and content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-full max-w-[600px] pb-8 lg:mx-0 lg:pb-0"
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-sm"
          >
            Online Learning
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.3 }}
            className="max-w-[600px] text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-[54px]"
          >
            More than{" "}
            <span className="whitespace-nowrap text-[#ffb900]">25000+</span>{" "}
            education courses online
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.45 }}
            className="mt-5 max-w-[470px] text-sm leading-7 text-white/75 sm:text-[15px]"
          >
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </motion.p>

          {/* Animated button */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6 }}
            className="mt-7"
          >
            <motion.a
              href="#courses"
              whileHover={reduceMotion ? {} : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
              className="group inline-flex min-h-12 items-center gap-3 rounded border border-white/20 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-[#ffb900] hover:bg-[#ffb900] hover:text-[#082a2e]"
            >
              Get Started
              <motion.span
                animate={reduceMotion ? {} : { x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex"
              >
                <ArrowRight size={17} aria-hidden="true" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
