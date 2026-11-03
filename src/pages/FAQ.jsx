import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plus, Minus, Phone, Mail } from "lucide-react";

// ==========================================
// IMAGE IMPORTS
// ==========================================

import faqHero from "../assets/images/f.png";
import bgImage from "../assets/images/s.webp";
import footerBgImage from "../assets/images/Bg.png";
import logo from "../assets/images/L.svg";

// ==========================================
// FAQ DATA
// ==========================================

const faqCategories = [
  {
    title: "Enrollment and registration",
    questions: [
      {
        question: "How do I enroll in an online course?",
        answer:
          "To enroll in an online course, browse our available courses, select the course you are interested in, and click the Enroll Now button. Follow the registration steps to create your account and start learning.",
      },
      {
        question: "What are the benefits of online learning?",
        answer:
          "Online learning offers flexibility, convenient access to educational resources, affordable learning opportunities, and the ability to study at your own pace from anywhere.",
      },
      {
        question:
          "Are there any prerequisites for enrolling in online courses?",
        answer:
          "Most of our courses are designed for learners of different experience levels. Some advanced courses may require basic knowledge or previous experience in the subject.",
      },
      {
        question: "What should I do if I forget my password?",
        answer:
          "Click on the Forgot Password link on the login page. Enter your registered email address and follow the instructions to reset your password.",
      },
      {
        question: "Can I enroll in multiple courses at once?",
        answer:
          "Yes! You can enroll in multiple courses and access them from your personal learning dashboard.",
      },
    ],
  },

  {
    title: "Technical requirements",
    questions: [
      {
        question: "What equipment do I need for online learning?",
        answer:
          "You need a computer, laptop, tablet, or smartphone with a reliable internet connection. Headphones and a microphone can also improve your learning experience.",
      },
      {
        question: "Which browsers are supported?",
        answer:
          "Our learning platform works with modern browsers, including Google Chrome, Firefox, Safari, and Microsoft Edge.",
      },
      {
        question: "Can I access courses on my mobile phone?",
        answer:
          "Yes. Our platform is designed to work on smartphones, tablets, laptops, and desktop computers.",
      },
      {
        question: "What should I do if a video does not play?",
        answer:
          "Check your internet connection, update your browser, and refresh the page. If the problem continues, contact our support team.",
      },
      {
        question: "Do I need special software?",
        answer:
          "Most courses can be accessed directly through your browser. Some specialized courses may recommend additional software.",
      },
    ],
  },

  {
    title: "Assessments and grading",
    questions: [
      {
        question: "How are online courses assessed?",
        answer:
          "Depending on the course, assessments may include quizzes, assignments, practical projects, and final examinations.",
      },
      {
        question: "Can I retake a quiz?",
        answer:
          "Retake availability depends on the course requirements. Check your course instructions for details.",
      },
      {
        question: "Where can I see my grades?",
        answer:
          "You can view your grades, completed assignments, and learning progress through your student dashboard.",
      },
      {
        question: "How long does grading take?",
        answer:
          "Automated quizzes are generally graded immediately. Assignments reviewed by instructors may take additional time.",
      },
      {
        question: "Can I receive feedback from instructors?",
        answer:
          "Yes. Instructors may provide feedback on your assignments and assessments through the learning platform.",
      },
    ],
  },

  {
    title: "Communication and support",
    questions: [
      {
        question: "How can I contact my instructor?",
        answer:
          "You can contact your instructor through the communication options provided inside your course dashboard.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our support team through the contact information available in the footer of our website.",
      },
      {
        question: "Are live sessions available?",
        answer:
          "Some courses offer live sessions, webinars, and interactive discussions with instructors.",
      },
      {
        question: "Can I ask questions during a course?",
        answer:
          "Yes. You can participate in discussions and use the available communication tools to ask course-related questions.",
      },
      {
        question: "How quickly will I receive a response?",
        answer:
          "Our support team aims to respond as quickly as possible during regular support hours.",
      },
    ],
  },

  {
    title: "Certificates and degrees",
    questions: [
      {
        question: "Will I receive a certificate after completing a course?",
        answer:
          "Eligible courses provide a certificate after you successfully complete the required lessons and assessments.",
      },
      {
        question: "How can I download my certificate?",
        answer:
          "After completing the course, visit your learning dashboard and look for the certificate download option.",
      },
      {
        question: "Are certificates available online?",
        answer:
          "Yes. Eligible certificates can be accessed and downloaded digitally through your account.",
      },
      {
        question: "Can I share my certificate?",
        answer:
          "Yes. You can share your certificate with employers, colleagues, and professional networks.",
      },
      {
        question: "Do all courses provide certificates?",
        answer:
          "Certificate availability depends on the individual course. Please review the course details before enrolling.",
      },
    ],
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
// FAQ PAGE
// ==========================================

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(2);

  const currentQuestions = faqCategories[activeCategory].questions;

  const selectCategory = (index) => {
    setActiveCategory(index);
    setActiveQuestion(0);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion((previous) => (previous === index ? null : index));
  };

  return (
    <main className="w-full overflow-hidden bg-white font-sans">
      {/* ======================================
          1. HERO SECTION
      ====================================== */}

      <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[#182c2e] sm:min-h-[380px] lg:min-h-[408px]">
        {/* HERO IMAGE */}

        <img
          src={faqHero}
          alt="Customer support representative talking on the phone"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-center
          "
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-[#171b19]/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />

        {/* HERO CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative z-10
            mx-auto w-full
            max-w-[1200px]
            px-5 pt-20
            text-center
            sm:px-8
          "
        >
          <h1
            className="
            text-[32px] font-semibold
            leading-tight tracking-tight
            text-white
            sm:text-[40px]
            md:text-[48px]
            lg:text-[52px]
          "
          >
            Frequently asked questions
          </h1>

          <p
            className="
            mx-auto mt-4
            max-w-[550px]
            text-[12px] leading-6
            text-white/90
            sm:text-[14px]
          "
          >
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id
          </p>
        </motion.div>
      </section>

      {/* ======================================
          2. FAQ CONTENT SECTION
      ====================================== */}

      <section
        className="
        bg-white
        px-5 py-16
        sm:px-8 sm:py-20
        lg:px-10 lg:py-24
        xl:py-28
      "
      >
        <div
          className="
          mx-auto grid
          w-full max-w-[900px]
          grid-cols-1
          items-start
          gap-10
          md:grid-cols-[256px_minmax(0,1fr)]
          md:gap-12
          lg:gap-[70px]
        "
        >
          {/* =================================
              LEFT SIDE - FAQ CATEGORIES
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              flex w-full flex-col
              overflow-hidden
              bg-[#eff6f8]
            "
          >
            {faqCategories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => selectCategory(index)}
                className={`
                  group flex min-h-[46px]
                  w-full items-center
                  justify-between gap-3
                  px-5 py-3
                  text-left
                  transition-all duration-300
                  ${
                    activeCategory === index
                      ? "bg-[#203a40] text-white"
                      : "bg-[#eff6f8] text-[#71879e] hover:bg-[#e3edf0] hover:text-[#203a40]"
                  }
                `}
              >
                <span className="text-[13px] font-semibold leading-5 sm:text-[14px]">
                  {category.title}
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    shrink-0 transition-transform duration-300
                    ${
                      activeCategory === index
                        ? "translate-x-0 text-white"
                        : "text-[#8ba0b2] group-hover:translate-x-1"
                    }
                  `}
                />
              </button>
            ))}
          </motion.div>

          {/* =================================
              RIGHT SIDE - QUESTIONS
          ================================== */}

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full min-w-0"
          >
            {currentQuestions.map((item, index) => {
              const isOpen = activeQuestion === index;

              return (
                <div
                  key={`${activeCategory}-${index}`}
                  className="border-b border-[#e1e5e6]"
                >
                  {/* QUESTION BUTTON */}

                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    className="
                      flex w-full
                      min-h-[49px]
                      items-center
                      justify-between
                      gap-5 py-3
                      text-left
                    "
                  >
                    <span
                      className="
                      text-[13px]
                      font-semibold
                      leading-6
                      text-[#172f35]
                      transition-colors
                      duration-300
                      hover:text-[#c28d00]
                      sm:text-[14px]
                    "
                    >
                      {item.question}
                    </span>

                    <span className="flex shrink-0 items-center justify-center text-[#102d34]">
                      {isOpen ? (
                        <Minus size={17} strokeWidth={2} />
                      ) : (
                        <Plus size={17} strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  {/* ANSWER */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <p
                          className="
                          max-w-[650px]
                          pb-4 pr-2
                          text-[13px]
                          font-normal
                          leading-[1.9]
                          text-[#858585]
                          sm:text-[14px]
                        "
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================================
          3. CTA BACKGROUND IMAGE SECTION
      ====================================== */}

      <section
        className="
        relative isolate
        flex min-h-[300px]
        items-center justify-center
        overflow-hidden
        px-6 py-12
        sm:min-h-[320px]
        lg:min-h-[350px]
        xl:min-h-[370px]
      "
      >
        {/* CTA BACKGROUND */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-20
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 43%",
          }}
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 -z-10 bg-[#102b2d]/45" />

        {/* CTA CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto flex w-full
            max-w-[1250px]
            flex-col items-center
            justify-center gap-7
            sm:flex-row
            sm:justify-between
            lg:gap-12
          "
        >
          <h2
            className="
            text-center
            text-[27px]
            font-bold
            leading-[1.3]
            text-white
            sm:text-left
            sm:text-[30px]
            lg:text-[36px]
            xl:text-[40px]
          "
          >
            Are you ready to start
            <br />
            your journey?
          </h2>

          {/* CTA BUTTONS */}

          <div
            className="
            flex flex-wrap
            items-center justify-center
            gap-4
          "
          >
            <a
              href="#courses"
              className="
                flex min-h-[48px]
                min-w-[155px]
                items-center justify-center
                border border-white
                bg-transparent px-7
                text-[13px]
                font-semibold
                !text-white
                transition-all duration-300
                hover:border-[#ffbd00]
                hover:bg-[#ffbd00]
                hover:!text-white
              "
            >
              Browse Courses
            </a>

            <a
              href="/career"
              className="
                flex min-h-[48px]
                min-w-[185px]
                items-center justify-center
                border border-[#ffbd00]
                bg-[#ffbd00] px-7
                text-[13px]
                font-semibold
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
          4. MAIN FOOTER
          TESTIMONIALS REMOVED
          LEFT / RIGHT BUTTONS REMOVED
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
            backgroundImage: `url(${footerBgImage})`,
            backgroundPosition: "center",
          }}
        />

        {/* DARK GREEN OVERLAY */}

        <div
          className="
          pointer-events-none
          absolute inset-0 -z-10
          bg-[#06292b]/90
        "
        />

        {/* FOOTER CONTENT */}

        <div
          className="
          relative z-10
          mx-auto grid
          w-full max-w-[1400px]
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 sm:col-span-1"
          >
            <a href="/" aria-label="Learna home" className="inline-flex">
              <img
                src={logo}
                alt="Learna Logo"
                className="
                  h-[44px]
                  w-auto max-w-[190px]
                  object-contain object-left
                  lg:h-[48px]
                "
              />
            </a>

            <p
              className="
              mt-5 max-w-[270px]
              text-[14px]
              leading-[1.9]
              text-[#b0c2be]
              lg:text-[15px]
            "
            >
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique eros.
            </p>
          </motion.div>

          {/* FOOTER LINK GROUPS */}

          {footerLinks.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="min-w-0"
            >
              <h3
                className="
                text-[17px]
                font-semibold
                leading-tight
                text-white
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
                      className="
                        inline-block
                        text-[14px]
                        font-normal
                        leading-[1.8]
                        text-white/60
                        transition-colors duration-300
                        hover:text-[#ffbd00]
                        focus-visible:text-[#ffbd00]
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CONTACT INFORMATION */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 sm:col-span-1"
          >
            <h3
              className="
              text-[17px]
              font-semibold
              leading-tight
              text-white
              lg:text-[19px]
            "
            >
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
                      mt-1 block
                      text-[14px]
                      font-semibold
                      text-white
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
                      mt-1 block
                      break-words
                      text-[14px]
                      font-semibold
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

        {/* ======================================
            5. COPYRIGHT
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
            <p
              className="
              text-center
              text-[12px]
              font-medium
              text-[#b0c2be]
              sm:text-left
            "
            >
              DESIGN BY{" "}
              <span className="font-bold text-[#ffbd00]">FAEZEH TOHIDI</span>
            </p>

            <p
              className="
              text-center
              text-[12px]
              font-medium
              text-[#b0c2be]
              sm:text-right
            "
            >
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
