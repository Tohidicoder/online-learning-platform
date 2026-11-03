import { motion } from "motion/react";
import { CheckCircle2, ArrowUpRight, Phone, Mail } from "lucide-react";

// ==========================================
// IMAGE IMPORTS
// ==========================================

import careerHero from "../assets/images/courses/17.webp";
import careerAboutOne from "../assets/images/courses/3.webp";
import careerAboutTwo from "../assets/images/h.webp";

import ctaBackground from "../assets/images/s.webp";
import footerBackground from "../assets/images/Bg.png";
import logo from "../assets/images/L.svg";

// ==========================================
// JOB DATA
// ==========================================

const jobs = [
  {
    id: 1,
    title: "Software Development Instructor",
    salary: "$25K - $35K",
    applicants: "50 POSTS AVAILABLE",
    experience: "2 years",
    type: "Full-time, Permanent",
  },
  {
    id: 2,
    title: "Machine Learning Educator",
    salary: "$20K - $35K",
    applicants: "35 POSTS AVAILABLE",
    experience: "2 years",
    type: "Full-time, Permanent",
  },
  {
    id: 3,
    title: "Blockchain Technology Instructor",
    salary: "$26K - $40K",
    applicants: "47 POSTS AVAILABLE",
    experience: "3 years",
    type: "Full-time, Permanent",
  },
  {
    id: 4,
    title: "Digital Design and UX Instructor",
    salary: "$23K - $35K",
    applicants: "50 POSTS AVAILABLE",
    experience: "2 years",
    type: "Full-time, Permanent",
  },
];

// ==========================================
// WHY WE ARE DATA
// ==========================================

const benefits = [
  {
    title: "Full network visibility worldwide",
    description:
      "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Supported the use of fiber optic cable",
    description:
      "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
  text-white/65
  transition-colors duration-300
  hover:text-[#ffbd00]
  focus-visible:text-[#ffbd00]
  focus-visible:outline-none
`;

// ==========================================
// CAREER PAGE
// ==========================================

export default function Career() {
  return (
    <main className="w-full overflow-hidden bg-white font-sans">
      {/* =====================================
          1. HERO SECTION
      ====================================== */}

      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#102426] lg:min-h-[580px]">
        {/* Background Image */}

        <img
          src={careerHero}
          alt="Instructor working with a laptop"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-[#06191c]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06191c]/70 via-transparent to-[#06191c]/30" />

        {/* Hero Content */}

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pt-20 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[620px]"
          >
            <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[2px] text-white/90">
              We Are Hiring
            </span>

            <h1 className="max-w-[600px] text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              Begin your journey as an instructor
            </h1>

            <p className="mt-6 max-w-[470px] text-sm leading-7 text-white/75 sm:text-base">
              Share your knowledge, inspire new learners and become part of a
              community that makes education accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          2. WHY WE ARE SECTION
      ====================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          {/* IMAGES */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto flex min-h-[390px] w-full max-w-[540px] items-center"
          >
            {/* MAIN IMAGE */}

            <div className="absolute left-0 top-0 h-[290px] w-[68%] overflow-hidden rounded-sm sm:h-[340px]">
              <img
                src={careerAboutOne}
                alt="Woman learning online"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* SECOND IMAGE */}

            <div className="absolute bottom-0 right-0 z-10 h-[245px] w-[43%] overflow-hidden rounded-sm border-[6px] border-white sm:h-[290px]">
              <img
                src={careerAboutTwo}
                alt="Student working on a laptop"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[510px]"
          >
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[1.5px] text-[#f5ad00]">
              Why We Are
            </span>

            <h2 className="max-w-[480px] text-3xl font-semibold leading-[1.2] tracking-tight text-[#10282d] sm:text-4xl">
              We help connectivity across the world
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* BENEFITS */}

            <div className="mt-8 space-y-7">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    size={21}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#10282d]"
                  />

                  <div>
                    <h3 className="text-[15px] font-semibold text-[#10282d]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          3. JOB OPENING SECTION
      ====================================== */}

      <section className="bg-[#eef6f8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
          {/* SECTION HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-[600px] text-center"
          >
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[1.5px] text-[#f0a900]">
              Job Opening
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-[#10282d] sm:text-4xl">
              Be a part of our faculty
            </h2>

            <p className="mx-auto mt-4 max-w-[460px] text-sm leading-7 text-gray-500">
              Discover exciting opportunities and join our team of passionate
              educators.
            </p>
          </motion.div>

          {/* JOB CARDS */}

          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group flex flex-col justify-between bg-white p-7 shadow-[0_2px_15px_rgba(15,40,45,0.025)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(15,40,45,0.09)] sm:p-9"
              >
                {/* JOB INFORMATION */}

                <div>
                  <h3 className="text-lg font-semibold leading-snug text-[#10282d] transition-colors duration-300 group-hover:text-[#d99a00] sm:text-xl">
                    {job.title}
                  </h3>

                  <div className="mt-3 space-y-1">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                      {job.applicants}
                    </p>

                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                      4367 Julia Shores, Direktor 0438
                    </p>
                  </div>

                  {/* SALARY AND APPLY BUTTON */}

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <div className="flex min-h-[45px] min-w-[145px] items-center justify-center bg-[#ffb800] px-5 text-sm font-semibold text-[#10282d] transition-colors duration-300 group-hover:bg-[#eaa500]">
                      {job.salary}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = `mailto:support@example.com?subject=${encodeURIComponent(
                          `Application for ${job.title}`,
                        )}`;
                      }}
                      className="flex min-h-[45px] items-center justify-center gap-2 bg-[#10282d] px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-[#f5ad00] hover:text-[#10282d]"
                    >
                      Apply Now
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                {/* JOB DETAILS */}

                <ul className="mt-7 space-y-2 border-t border-gray-100 pt-5 text-sm text-gray-500">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f0a900]">•</span>
                    <span>
                      <strong className="font-medium text-gray-600">
                        Job Description:
                      </strong>{" "}
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#f0a900]">•</span>
                    <span>
                      <strong className="font-medium text-gray-600">
                        Job Type:
                      </strong>{" "}
                      {job.type}
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#f0a900]">•</span>
                    <span>
                      <strong className="font-medium text-gray-600">
                        Experience:
                      </strong>{" "}
                      {job.experience}
                    </span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          4. CTA SECTION
          TESTIMONIAL SECTION REMOVED
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
        {/* CTA BACKGROUND */}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaBackground})`,
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

          {/* CTA BUTTONS */}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
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

      {/* =====================================
          5. MAIN FOOTER
      ====================================== */}

      <footer
        id="contact"
        className="
          relative isolate
          w-full overflow-hidden
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
            backgroundImage: `url(${footerBackground})`,
            backgroundPosition: "center",
            transform: "scale(1.01)",
          }}
        />

        {/* GREEN OVERLAY */}

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#06292b]/90" />

        {/* SUBTLE DOT TEXTURE */}

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

        {/* =====================================
            6. COPYRIGHT BAR
        ====================================== */}

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
      </footer>
    </main>
  );
}
