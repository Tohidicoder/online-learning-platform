import React from "react";
import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

// HERO IMAGE
import heroImage from "../assets/images/experts/h.png";

// EXPERT IMAGES
import expert1 from "../assets/images/experts/1.webp";
import expert2 from "../assets/images/experts/2.webp";
import expert3 from "../assets/images/experts/3.webp";
import expert4 from "../assets/images/experts/4.webp";
import expert5 from "../assets/images/experts/5.webp";
import expert6 from "../assets/images/experts/6.webp";
import expert7 from "../assets/images/experts/7.webp";
import expert8 from "../assets/images/experts/8.webp";

// FOOTER IMAGES
import bgImage from "../assets/images/s.webp";
import footerBgImage from "../assets/images/Bg.png";
import logo from "../assets/images/L.svg";

// ==========================================
// EXPERT DATA
// ==========================================

const experts = [
  { name: "Leslie Upton", role: "INSTRUCTOR", image: expert1 },
  { name: "Darnell Kuphal", role: "INSTRUCTOR", image: expert2 },
  { name: "Steven Roob", role: "INSTRUCTOR", image: expert3 },
  { name: "Wanda Abshire", role: "INSTRUCTOR", image: expert4 },
  { name: "Lee Schmitt", role: "INSTRUCTOR", image: expert5 },
  { name: "Jasmine Konopelski", role: "INSTRUCTOR", image: expert6 },
  { name: "Tonya Flatley", role: "INSTRUCTOR", image: expert7 },
  { name: "Colin Fay", role: "INSTRUCTOR", image: expert8 },
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

const footerLinkClass = `
  inline-block
  text-[14px] md:text-[15px] lg:text-[16px]
  leading-[1.8]
  font-normal
  transition-colors duration-300
  focus-visible:outline-none
`;

// ==========================================
// TEAM COMPONENT
// ==========================================

export default function Team() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* ======================================
          1. HERO SECTION
      ====================================== */}

      <section className="relative isolate flex min-h-[350px] w-full items-center justify-center overflow-hidden px-5 py-20 sm:min-h-[430px] lg:min-h-[520px] xl:min-h-[560px]">
        {/* HERO BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center center",
          }}
        />

        {/* DARK OVERLAY */}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#06292b]/55"
        />

        {/* HERO CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-[1250px] text-center"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Our experts
          </h1>
        </motion.div>
      </section>

      {/* ======================================
          2. CONTACT / TEAM HEADING
      ====================================== */}

      <section className="px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[750px] text-center"
        >
          <h2 className="text-[27px] font-bold text-[#163638] sm:text-3xl lg:text-[38px]">
            Contact Us
          </h2>

          <h3 className="mt-4 text-lg font-semibold leading-relaxed text-[#263c42] sm:text-xl">
            Know our expert team agents, they solve your questions
          </h3>

          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-7 text-[#89979b] sm:text-sm">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id.
          </p>
        </motion.div>
      </section>

      {/* ======================================
          3. EXPERT TEAM CARDS
      ====================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
              }}
              className="group mx-auto w-full max-w-[330px] overflow-hidden bg-white text-center"
            >
              {/* EXPERT IMAGE */}

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f3f6f5]">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-full w-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* EXPERT DETAILS */}

              <div className="px-3 pb-3 pt-6">
                <h3 className="text-xl font-semibold text-[#163638] transition-colors duration-300 group-hover:text-[#d9a500] sm:text-[21px]">
                  {expert.name}
                </h3>

                <p className="mt-3 text-xs font-semibold tracking-[2px] text-[#89979b]">
                  {expert.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================
          4. CTA BACKGROUND IMAGE SECTION
      ====================================== */}

      <section className="relative isolate flex min-h-[300px] items-center justify-center overflow-hidden px-6 py-12 sm:min-h-[320px] lg:min-h-[350px] xl:min-h-[370px]">
        {/* BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
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
          className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-7 sm:flex-row sm:justify-between lg:gap-12"
        >
          <h2 className="text-center text-[27px] font-bold leading-[1.3] text-white sm:text-left sm:text-[30px] lg:text-[36px] xl:text-[40px]">
            Are you ready to start
            <br />
            your journey?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* BROWSE COURSES */}

            <a
              href="#courses"
              className="flex min-h-[48px] min-w-[155px] items-center justify-center border border-white bg-transparent px-7 text-[13px] font-semibold !text-white transition-all duration-300 hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:!text-white"
            >
              Browse Courses
            </a>

            {/* BECOME AN INSTRUCTOR */}

            <a
              href="#contact"
              className="flex min-h-[48px] min-w-[185px] items-center justify-center border border-[#ffbd00] bg-[#ffbd00] px-7 text-[13px] font-semibold text-[#163638] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#163638]"
            >
              Become An Instructor
            </a>
          </div>
        </motion.div>
      </section>

      {/* ======================================
          5. MAIN FOOTER
      ====================================== */}

      <footer
        id="contact"
        className="relative isolate overflow-hidden bg-[#06292b] text-white"
      >
        {/* FOOTER BACKGROUND IMAGE */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${footerBgImage})`,
            backgroundPosition: "center",
            transform: "scale(1.01)",
          }}
        />

        {/* GREEN OVERLAY */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[#06292b]/90"
        />

        {/* DOT TEXTURE */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.3) 0.6px, transparent 0.6px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* FOOTER CONTENT */}

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-x-8 gap-y-12 px-6 py-16 sm:grid-cols-3 md:grid-cols-5 md:gap-x-10 md:px-10 md:py-20 lg:gap-x-14 lg:px-14 lg:py-24 xl:gap-x-16">
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
                className="h-[44px] w-auto max-w-[190px] object-contain object-left transition-opacity duration-300 group-hover:opacity-80 lg:h-[48px]"
              />
            </a>

            <p className="mt-5 max-w-[270px] text-[14px] leading-[1.9] text-[#b0c2be] lg:text-[15px]">
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
              <h3 className="text-[17px] font-semibold leading-tight text-white lg:text-[19px]">
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
                    className="mt-1 block text-[14px] font-semibold text-white transition-colors duration-300 hover:text-[#ffbd00]"
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
                    className="mt-1 block break-words text-[14px] font-semibold text-white transition-colors duration-300 hover:text-[#ffbd00]"
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
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row md:px-10 lg:px-14">
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
      </footer>
    </main>
  );
}
