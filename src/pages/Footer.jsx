import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";

import bgImage from "../assets/images/s.webp";
import footerBgImage from "../assets/images/Bg.png";
import logo from "../assets/images/L.svg";

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
// FOOTER LINK STYLE
// ==========================================

const footerLinkClass = `
  inline-block
  text-[14px] md:text-[15px] lg:text-[16px]
  leading-[1.8]
  font-normal
  transition-colors duration-300
  focus-visible:outline-none
`;

// ==========================================
// FOOTER COMPONENT
// ==========================================

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  // Previous testimonial
  const previous = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Next testimonial
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <footer className="w-full overflow-hidden bg-white">
      {/* ======================================
          1. TESTIMONIAL SECTION
      ====================================== */}

      <section
        className="
          flex min-h-[360px]
          items-center justify-center
          bg-[#eff6f8]
          px-5 py-16
          sm:min-h-[390px]
          lg:min-h-[440px]
          lg:px-10
          lg:py-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto flex w-full max-w-[1200px]
            flex-col items-center justify-center
            text-center
          "
        >
          {/* QUOTE ICON - FLIPPED */}

          <div
            aria-hidden="true"
            className="
              mb-3 h-[65px]
              scale-x-[-1]
              font-serif text-[105px]
              font-bold leading-[0.85]
              text-[#dce8e9]
              sm:text-[115px]
            "
          >
            “
          </div>

          {/* TESTIMONIAL TEXT */}

          <div
            className="
              flex min-h-[100px]
              w-full items-center justify-center
              overflow-hidden
              lg:min-h-[115px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="
                  mx-auto max-w-[1000px]
                  text-[15px] font-medium
                  leading-[1.9]
                  text-[#263c42]
                  sm:text-[17px]
                  lg:text-[19px]
                  xl:text-[20px]
                "
              >
                “{current.quote}”
              </motion.p>
            </AnimatePresence>
          </div>

          {/* PERSON NAME AND ROLE */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`person-${activeIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-6"
            >
              <h3 className="text-[19px] font-semibold text-[#263c42] sm:text-[21px] lg:text-[23px]">
                {current.name}
              </h3>

              <p className="mt-2 text-[12px] font-medium uppercase tracking-[1.5px] text-[#89979b] sm:text-[13px]">
                {current.role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* SLIDER BUTTONS */}

          <div className="mt-8 flex items-center justify-center gap-4">
            {/* PREVIOUS - LEFT BUTTON */}

            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full border
                border-[#94a6aa]
                text-[#667d82]
                transition-all duration-300
                hover:border-[#ffbd00]
                hover:bg-[#ffbd00]
                hover:text-[#163638]
                sm:h-14 sm:w-14
              "
            >
              <ArrowLeft size={20} />
            </button>

            {/* NEXT - RIGHT BUTTON */}

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full border
                border-[#94a6aa]
                text-[#667d82]
                transition-all duration-300
                hover:border-[#ffbd00]
                hover:bg-[#ffbd00]
                hover:text-[#163638]
                sm:h-14 sm:w-14
              "
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ======================================
          2. CTA BACKGROUND IMAGE SECTION
      ====================================== */}

      <section
        className="
          relative isolate
          flex min-h-[300px]
          items-center justify-center
          overflow-hidden px-6 py-12
          sm:min-h-[320px]
          lg:min-h-[350px]
          xl:min-h-[370px]
        "
      >
        {/* CTA BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-20
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 43%",
            transform: "scale(1.01)",
          }}
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 -z-10 bg-[#102b2d]/35" />

        {/* CTA CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto flex w-full
            max-w-[1250px]
            flex-col items-center
            justify-center gap-7
            sm:flex-row sm:justify-between
            lg:gap-12
          "
        >
          <h2
            className="
              text-center text-[27px]
              font-bold leading-[1.3]
              text-white
              sm:text-left sm:text-[30px]
              lg:text-[36px]
              xl:text-[40px]
            "
          >
            Are you ready to start
            <br />
            your journey?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* BROWSE COURSES */}

            <a
              href="#courses"
              style={{ color: "#ffffff" }}
              className="
                flex min-h-[48px]
                min-w-[155px]
                items-center justify-center
                border border-white
                bg-transparent px-7
                text-[13px] font-semibold
                !text-white
                transition-all duration-300
                hover:border-[#ffbd00]
                hover:bg-[#ffbd00]
                hover:!text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              Browse Courses
            </a>

            {/* BECOME AN INSTRUCTOR */}

            <a
              href="#contact"
              className="
                flex min-h-[48px]
                min-w-[185px]
                items-center justify-center
                border border-[#ffbd00]
                bg-[#ffbd00] px-7
                text-[13px] font-semibold
                text-[#163638]
                transition-all duration-300
                hover:border-white
                hover:bg-white
                hover:text-[#163638]
              "
            >
              Become An Instructor
            </a>
          </div>
        </motion.div>
      </section>

      {/* ======================================
          3. MAIN FOOTER
          NO WHITE GAP BETWEEN CTA AND FOOTER
      ====================================== */}

      <section
        id="contact"
        className="
          relative isolate
          overflow-hidden
          bg-[#06292b]
          text-white
        "
      >
        {/* FOOTER BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 -z-20
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${footerBgImage})`,
            backgroundPosition: "center",
            transform: "scale(1.01)",
          }}
        />

        {/* GREEN OVERLAY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 -z-10
            bg-[#06292b]/90
          "
        />

        {/* SUBTLE DOT TEXTURE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 -z-10
            opacity-[0.12]
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.3) 0.6px, transparent 0.6px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* FOOTER CONTENT */}

        <div
          className="
            relative z-10 mx-auto
            grid w-full max-w-[1400px]
            grid-cols-2
            gap-x-8 gap-y-12
            px-6 py-16
            sm:grid-cols-3
            md:grid-cols-5
            md:gap-x-10
            md:px-10 md:py-20
            lg:gap-x-14
            lg:px-14 lg:py-24
            xl:gap-x-16
          "
        >
          {/* LOGO AND DESCRIPTION */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
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
                className="
                  h-[44px] w-auto max-w-[190px]
                  object-contain object-left
                  transition-opacity duration-300
                  group-hover:opacity-80
                  lg:h-[48px]
                "
              />
            </a>

            <p
              className="
                mt-5 max-w-[270px]
                text-[14px] leading-[1.9]
                text-[#b0c2be]
                lg:text-[15px]
              "
            >
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique eros.
            </p>
          </motion.div>

          {/* FOOTER LINK COLUMNS */}

          {footerLinks.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              className="min-w-0"
            >
              <h3
                className="
                  text-[17px] font-semibold
                  leading-tight text-white
                  lg:text-[19px]
                "
              >
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Courses" || link === "Web development"
                          ? "#courses"
                          : "#contact"
                      }
                      className={footerLinkClass}
                      style={{ color: "rgba(255, 255, 255, 0.65)" }}
                      onMouseEnter={(event) => {
                        event.currentTarget.style.color = "#ffbd00";
                      }}
                      onMouseLeave={(event) => {
                        event.currentTarget.style.color =
                          "rgba(255, 255, 255, 0.65)";
                      }}
                      onFocus={(event) => {
                        event.currentTarget.style.color = "#ffbd00";
                      }}
                      onBlur={(event) => {
                        event.currentTarget.style.color =
                          "rgba(255, 255, 255, 0.65)";
                      }}
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-2 sm:col-span-1"
          >
            <h3 className="text-[17px] font-semibold leading-tight text-white lg:text-[19px]">
              Need help?
            </h3>

            <div className="mt-5 space-y-6">
              {/* PHONE */}

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#ffbd00]" />

                <div>
                  <p className="text-[13px] text-[#b0c2be]">Call us</p>

                  <a
                    href="tel:+18881234567"
                    className="
                      mt-1 block text-[14px]
                      font-semibold text-white
                      transition-colors duration-300
                      hover:text-[#ffbd00]
                    "
                  >
                    (888) 123 4567
                  </a>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#ffbd00]" />

                <div className="min-w-0">
                  <p className="text-[13px] text-[#b0c2be]">Need support?</p>

                  <a
                    href="mailto:info@example.com"
                    className="
                      mt-1 block break-words
                      text-[14px] font-semibold
                      text-white
                      transition-colors duration-300
                      hover:text-[#ffbd00]
                    "
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT BAR */}

        <div className="relative z-10 border-t border-white/20">
          <div
            className="
              mx-auto flex w-full
              max-w-[1400px]
              flex-col items-center
              justify-between gap-3
              px-6 py-6
              sm:flex-row
              md:px-10
              lg:px-14
            "
          >
            <p className="text-center text-[12px] font-medium text-[#b0c2be] sm:text-left">
              DESIGN BY{" "}
              <span className="font-bold text-[#ffbd00]">FAEZEH TOHIDI</span>
            </p>

            <p className="text-center text-[12px] font-medium text-[#b0c2be] sm:text-right">
              POWERED BY{" "}
              <span className="font-bold text-white">
                REACT &amp; TAILWIND CSS
              </span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
