import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import lindaImage from "../assets/images/linda.png";
import jimImage from "../assets/images/Jim.avif";
import backgroundImage from "../assets/images/bg.jpeg";

const testimonials = [
  {
    quote:
      "Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.",
    name: "Linda Grady",
    role: "Co-assistant Manager",
    image: lindaImage,
  },
  {
    quote:
      "The learning experience helped me build confidence, develop practical skills, and move closer to my professional goals.",
    name: "Jim Adams",
    role: "Designer",
    image: jimImage,
  },
];

// Animated number that starts when it enters the viewport.
function CountUp({ target, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation.
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const changeTestimonial = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#082c2d] py-14 text-white sm:py-16 lg:py-[68px]"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(5, 35, 36, 0.82),
            rgba(5, 35, 36, 0.9)
          ),
          url(${backgroundImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 15% 20%,
              rgba(63, 145, 120, 0.2),
              transparent 45%
            ),
            radial-gradient(
              ellipse at 85% 85%,
              rgba(3, 18, 21, 0.35),
              transparent 55%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          {/* LEFT: Heading and image */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white">
                Our Testimonials
              </p>

              <h2 className="max-w-sm font-serif text-3xl font-medium italic leading-tight tracking-tight text-white sm:text-[35px]">
                Trusted by our successful students
              </h2>
            </motion.div>

            {/* Testimonial image */}
            <div className="relative mt-6 aspect-[4/3] w-full max-w-[390px] overflow-hidden rounded-sm bg-white/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTestimonial.name}
                  src={activeTestimonial.image}
                  alt={`${activeTestimonial.name}, testimonial`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Animated statistics and testimonial */}
          <div className="flex min-w-0 flex-col justify-center lg:pt-8">
            {/* Animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="mb-7 grid grid-cols-2 gap-4 sm:mb-8 sm:gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-sans text-3xl font-medium tracking-tight text-white sm:text-[36px]">
                  <CountUp target={70} suffix="M" />
                </span>

                <span className="border-l border-white/35 pl-3 font-sans text-[10px] font-normal leading-relaxed text-white/75">
                  Successful
                  <br />
                  Students
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-sans text-3xl font-medium tracking-tight text-white sm:text-[36px]">
                  <CountUp target={25} suffix="K" />
                </span>

                <span className="border-l border-white/35 pl-3 font-sans text-[10px] font-normal leading-relaxed text-white/75">
                  Global Job
                  <br />
                  Placements
                </span>
              </div>
            </motion.div>

            {/* Testimonial text */}
            <div className="min-h-[175px] sm:min-h-[165px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <blockquote className="max-w-xl font-serif text-[13px] font-normal italic leading-[1.8] text-white/80 sm:text-sm">
                    “{activeTestimonial.quote}”
                  </blockquote>

                  <div className="mt-5">
                    <p className="font-serif text-base font-medium italic tracking-tight text-white sm:text-lg">
                      {activeTestimonial.name}
                    </p>

                    <p className="mt-1 font-sans text-[10px] font-normal uppercase tracking-[0.06em] text-white/60 sm:text-[11px]">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="mt-4 flex items-center gap-2">
              <motion.button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => changeTestimonial(-1)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-emerald-300 hover:bg-emerald-300/15"
              >
                <ArrowLeft size={17} strokeWidth={1.5} />
              </motion.button>

              <motion.button
                type="button"
                aria-label="Next testimonial"
                onClick={() => changeTestimonial(1)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-emerald-300 hover:bg-emerald-300/15"
              >
                <ArrowRight size={17} strokeWidth={1.5} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
