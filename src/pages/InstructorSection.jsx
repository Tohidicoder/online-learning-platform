import { motion } from "motion/react";

import instructorImage from "../assets/images/l.webp";
import studentAvatars from "../assets/images/c.avif";

import logo1 from "../assets/images/logos/1.svg";
import logo2 from "../assets/images/logos/2.svg";
import logo3 from "../assets/images/logos/3.svg";
import logo4 from "../assets/images/logos/4.svg";
import logo5 from "../assets/images/logos/5.svg";
import logo6 from "../assets/images/logos/6.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function AboutOne() {
  return (
    <main className="w-full overflow-hidden bg-white font-sans">
      {/* LOGO SECTION */}
      <section className="w-full bg-[#10292c] py-7 md:py-9">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 px-4 text-center text-xs font-medium tracking-wide text-white/70 md:mb-6 md:text-sm"
        >
          Learn from 350+ leading universities and companies with us
        </motion.p>

        <div className="about-logo-slider">
          <div className="about-logo-track">
            {/* FIRST LOGO GROUP */}
            <div className="about-logo-group">
              {logos.map((logo, index) => (
                <div
                  className="flex h-10 w-24 shrink-0 items-center justify-center md:h-12 md:w-32"
                  key={`first-${index}`}
                >
                  <img
                    src={logo}
                    alt={`University logo ${index + 1}`}
                    className="h-full w-full object-contain brightness-125"
                  />
                </div>
              ))}
            </div>

            {/* SECOND LOGO GROUP */}
            <div className="about-logo-group" aria-hidden="true">
              {logos.map((logo, index) => (
                <div
                  className="flex h-10 w-24 shrink-0 items-center justify-center md:h-12 md:w-32"
                  key={`second-${index}`}
                >
                  <img
                    src={logo}
                    alt=""
                    className="h-full w-full object-contain brightness-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR SECTION */}
      <section className="w-full bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            className="order-2 text-center md:order-1 md:text-right"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[#10292c] sm:text-4xl lg:text-5xl">
              Became an instructor
            </h1>

            <p className="mb-7 ml-auto max-w-[540px] text-sm leading-8 text-[#777777] sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
              scelerisque urna quis semper amet. Nisl tincidunt tortor nullam
              est nec commodo orci dictum in. Lorem consectetur donec purus
              sagittis.
            </p>

            {/* BUTTON - ALWAYS WHITE TEXT */}
            <motion.a
              href="#start-teaching"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="!text-white inline-flex min-h-12 items-center justify-center rounded-sm bg-[#10292c] px-8 text-sm font-medium transition-colors duration-300 hover:!text-white hover:bg-black sm:min-h-14 sm:px-10 sm:text-base"
              style={{ color: "#ffffff" }}
            >
              Start Teaching Today
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="order-1 flex items-center justify-center md:order-2"
            initial={{ opacity: 0, x: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[370px] w-full max-w-[570px] sm:h-[450px] lg:h-[520px]">
              {/* MAIN IMAGE */}
              <img
                src={instructorImage}
                alt="Become an instructor"
                className="h-full w-full scale-[1.08] object-contain object-center sm:scale-110 lg:scale-[1.14]"
              />

              {/* PROFILE CARD */}
              <motion.div
                className="absolute left-0 top-16 z-10 flex min-h-[90px] w-[175px] flex-col items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.12)] sm:top-20 sm:min-h-[100px] sm:w-[205px] lg:left-[-15px] lg:top-24 lg:w-[220px]"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/* STUDENT AVATARS */}
                <div className="relative h-10 w-[155px] shrink-0 overflow-hidden sm:h-12 sm:w-[180px] lg:h-[54px] lg:w-[190px]">
                  <img
                    src={studentAvatars}
                    alt="Student profiles"
                    className="absolute left-[-10px] top-[-24px] h-[89px] w-[178px] max-w-none object-contain object-top sm:left-[-12px] sm:top-[-27px] sm:h-[99px] sm:w-[198px] lg:h-[105px] lg:w-[210px]"
                  />
                </div>

                {/* RATING */}
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                  <span className="text-xs leading-none tracking-wide text-[#ffb900] sm:text-sm">
                    ★★★★★
                  </span>

                  <span className="text-[10px] font-medium leading-none text-[#555555] sm:text-xs">
                    4.94 (625)
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GAP BEFORE FOOTER */}
      <div className="h-8 w-full bg-white sm:h-12 lg:h-16" />

      {/* LOGO SLIDER ANIMATION */}
      <style>{`
        .about-logo-slider {
          position: relative;
          width: 100%;
          max-width: 1350px;
          margin: 0 auto;
          overflow: hidden;

          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
        }

        .about-logo-track {
          display: flex;
          width: 200%;
          animation: about-logo-scroll 30s linear infinite;
          will-change: transform;
        }

        .about-logo-group {
          width: 50%;
          flex: 0 0 50%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          gap: 25px;
          padding: 0 25px;
          box-sizing: border-box;
        }

        @keyframes about-logo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .about-logo-track {
            animation-duration: 24s;
          }

          .about-logo-group {
            gap: 12px;
            padding: 0 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-logo-track {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
