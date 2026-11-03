import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";

// ==========================================
// LOCAL IMAGES
// ==========================================

// FOOTER IMAGES
import bgImage from "../assets/images/s.webp";
import footerBgImage from "../assets/images/Bg.png";
import logo from "../assets/images/L.svg";

// BLOG IMAGES
import blogHero from "../assets/images/courses/4.webp";

import blog1 from "../assets/images/courses/23.webp";
import blog2 from "../assets/images/courses/13.webp";
import blog3 from "../assets/images/courses/14.webp";
import blog4 from "../assets/images/courses/15.webp";
import blog5 from "../assets/images/courses/16.webp";
import blog6 from "../assets/images/courses/17.webp";

import blog7 from "../assets/images/courses/18.webp";
import blog8 from "../assets/images/courses/19.webp";
import blog9 from "../assets/images/courses/20.webp";
import blog10 from "../assets/images/courses/21.webp";
import blog11 from "../assets/images/courses/22.webp";
import blog12 from "../assets/images/courses/6.webp";

// ==========================================
// BLOG POSTS DATA
// ==========================================

const blogPosts = [
  // PAGE 1
  {
    id: 1,
    category: "CAREER",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2024",
    image: blog1,
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title: "Master online learning with proven strategies",
    date: "October 4, 2024",
    image: blog2,
  },
  {
    id: 3,
    category: "TEACHING",
    title: "How to enhance your learning experience today",
    date: "October 3, 2024",
    image: blog3,
  },
  {
    id: 4,
    category: "CAREER",
    title: "The evolution of teaching tools in the 21st century",
    date: "September 17, 2024",
    image: blog4,
  },
  {
    id: 5,
    category: "DEVELOPMENT",
    title: "The role of parental involvement in academic achievement",
    date: "September 16, 2024",
    image: blog5,
  },
  {
    id: 6,
    category: "TEACHING",
    title: "The role of technology in modern classrooms",
    date: "September 14, 2024",
    image: blog6,
  },

  // PAGE 2
  {
    id: 7,
    category: "CAREER",
    title: "How globalization is shaping curriculum development",
    date: "September 13, 2024",
    image: blog7,
  },
  {
    id: 8,
    category: "DEVELOPMENT",
    title: "How personalized learning is changing education",
    date: "September 12, 2024",
    image: blog8,
  },
  {
    id: 9,
    category: "CAREER",
    title: "Empowering teachers with continuous professional development",
    date: "September 11, 2024",
    image: blog9,
  },
  {
    id: 10,
    category: "TEACHING",
    title: "Advances in educational technology and online learning",
    date: "September 2, 2024",
    image: blog10,
  },
  {
    id: 11,
    category: "CAREER",
    title: "Exploring the benefits of project-based learning",
    date: "September 2, 2024",
    image: blog11,
  },
  {
    id: 12,
    category: "DEVELOPMENT",
    title: "Promoting inclusivity and diversity in education",
    date: "August 29, 2024",
    image: blog12,
  },
];

const POSTS_PER_PAGE = 6;

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
// BLOG COMPONENT
// ==========================================

function BlogContent() {
  // WHAT WE LEARN: Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  // Show six posts on each page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // WHAT WE LEARN: Pagination function
  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ================= BLOG HERO ================= */}

      <section
        className="relative flex min-h-[390px] items-center overflow-hidden bg-cover bg-center sm:min-h-[430px] lg:min-h-[480px]"
        style={{
          backgroundImage: `url(${blogHero})`,
          backgroundPosition: "center 45%",
        }}
      >
        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pt-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[650px]"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[1.5px] text-white/90">
              News and Journals
            </p>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Planning to transition
              <br />
              to a new career?
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG POSTS ================= */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          {/* Blog cards */}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            >
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group overflow-hidden border border-[#dedede] bg-white transition-colors duration-300 hover:border-[#b8b8b8]"
                >
                  {/* Image */}

                  <div className="aspect-[1.4/1] overflow-hidden bg-[#f2f2f2]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Card content */}

                  <div className="flex min-h-[175px] flex-col px-5 py-6 sm:px-6">
                    <p className="mb-3 text-[11px] font-bold tracking-[0.7px] text-[#10292c]">
                      {post.category}
                    </p>

                    <h2 className="mb-5 text-[17px] font-semibold leading-snug text-[#10292c]">
                      {post.title}
                    </h2>

                    <p className="mt-auto text-sm text-[#888888]">
                      {post.date}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ================= PAGINATION ================= */}

          <div className="mt-14 flex items-center justify-center gap-7">
            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-2 text-sm font-medium text-[#10292c] transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={17} />
              Previous
            </button>

            <div className="flex items-center gap-2 text-sm text-[#10292c]">
              <span className="font-semibold">{currentPage}</span>

              <span className="text-[#999999]">/</span>

              <span className="text-[#777777]">{totalPages}</span>
            </div>

            <button
              type="button"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 text-sm font-medium text-[#10292c] transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ==========================================
// FOOTER COMPONENT
// ==========================================

function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-white">
      {/* ======================================
          1. CTA BACKGROUND IMAGE SECTION
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
          2. MAIN FOOTER
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

// ==========================================
// MAIN COMPONENT
// BLOG + FOOTER IN ONE FILE
// ==========================================

export default function BlogDodge6() {
  return (
    <>
      <BlogContent />
      <Footer />
    </>
  );
}
