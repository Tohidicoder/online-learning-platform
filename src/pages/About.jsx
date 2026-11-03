import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

// Images and video
import learnerImage from "../assets/images/girl.webp";
import learningVideo from "../assets/images/learning.mp4";

// ========================================
// BENEFITS DATA
// ========================================

const benefits = [
  {
    number: "01",
    title: "Flexibility and convenience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    number: "02",
    title: "Course accessibility",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    number: "03",
    title: "Cost-effectiveness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    number: "04",
    title: "Personalized learning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
];

const features = [
  "Skill-based instruction",
  "Analytics and insights",
  "Global certification",
  "Customizable courses",
];

// ========================================
// BENEFIT CARD
// ========================================

function BenefitCard({ benefit, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className="
        group relative z-0
        flex min-h-[320px]
        flex-col items-start
        self-stretch overflow-hidden
        bg-white
        px-7 py-8
        shadow-[0_8px_25px_rgba(16,40,44,0.07)]
        transition-shadow duration-300
        hover:z-20
        hover:shadow-[0_20px_45px_rgba(16,40,44,0.15)]
        max-md:min-h-[290px]
        lg:min-h-[340px]
        lg:px-8 lg:py-9
      "
    >
      {/* NUMBER */}
      <span
        className="
          mb-8 text-[30px] font-bold leading-none
          text-[#2454ff]
          transition-transform duration-300
          group-hover:translate-x-2
        "
      >
        {benefit.number}
      </span>

      {/* TITLE */}
      <h3
        className="
          mb-5 text-[19px] font-bold
          leading-snug text-[#10282c]
          lg:text-[21px]
        "
      >
        {benefit.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[14px] leading-[1.9] text-[#777e80] lg:text-[15px]">
        {benefit.description}
      </p>

      {/* GET STARTED */}
      <div
        className="
          mt-auto overflow-hidden pt-6
          max-md:max-h-20
          md:max-h-0 md:pt-0
          md:translate-y-4 md:opacity-0
          md:transition-all md:duration-500
          md:group-hover:max-h-20
          md:group-hover:translate-y-0
          md:group-hover:pt-6
          md:group-hover:opacity-100
          md:group-focus-within:max-h-20
          md:group-focus-within:translate-y-0
          md:group-focus-within:pt-6
          md:group-focus-within:opacity-100
        "
      >
        <a
          href="https://elearna.webflow.io/contact-one"
          className="
            inline-flex items-center justify-center gap-3
            rounded-sm bg-black px-6 py-3
            text-[13px] font-semibold text-white
            transition-colors duration-300
            hover:bg-[#24464b]
          "
        >
          <span className="text-white">Get Started</span>

          <ArrowRight
            size={16}
            className="text-white transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.article>
  );
}

// ========================================
// LEARNING VISUAL
// ========================================

function LearningVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="
        relative mx-auto min-h-[550px]
        w-full max-w-[680px]
        sm:min-h-[600px]
        lg:min-h-[650px]
      "
    >
      {/* YELLOW CIRCLE */}
      <div
        className="
          absolute left-[24%] top-2 z-0
          h-[145px] w-[145px]
          rounded-full bg-[#ffb600]
          sm:h-[175px] sm:w-[175px]
        "
      />

      {/* BACKGROUND CIRCLE */}
      <div
        className="
          absolute bottom-0 left-[5%]
          h-[370px] w-[370px]
          rounded-full border-2 border-[#e8edef]
          sm:h-[440px] sm:w-[440px]
        "
      />

      {/* VIDEO LEFT */}
      <motion.div
        whileHover={{ scale: 1.04, y: -5 }}
        transition={{ duration: 0.35 }}
        className="
          absolute left-0 top-[155px] z-10
          h-[250px] w-[38%]
          overflow-hidden
          rounded-[8px]
          bg-[#e7efeb]
          shadow-[0_20px_45px_rgba(16,40,44,0.17)]
          sm:top-[165px]
          sm:h-[300px]
        "
      >
        <video
          src={learningVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* IMAGE RIGHT */}
      <motion.div
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ duration: 0.35 }}
        className="
          absolute right-0 top-[65px] z-20
          h-[370px] w-[58%]
          overflow-hidden
          rounded-[12px]
          bg-[#e8eeee]
          shadow-[0_22px_50px_rgba(16,40,44,0.18)]
          sm:top-[75px]
          sm:h-[440px]
        "
      >
        <img
          src={learnerImage}
          alt="Student learning"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

// ========================================
// ABOUT SECTION
// ========================================

export default function About() {
  return (
    <div className="overflow-hidden bg-white text-[#10282c]">
      {/* BENEFITS SECTION */}
      <section className="pt-5 sm:pt-8">
        {/* HEADING */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto min-h-[230px]
            px-5 pb-12 pt-8
            text-center
            lg:min-h-[260px]
          "
        >
          <span className="mb-5 inline-block text-[12px] font-bold tracking-[2px]">
            WHY WE ARE
          </span>

          {/* UPDATED HEADING - THREE CENTERED LINES */}
          <h2
            className="
              mx-auto max-w-[950px]
              text-center
              text-[29px] font-bold
              leading-[1.3] tracking-[-0.045em]
              max-sm:text-[23px]
              sm:text-[34px]
              lg:text-[39px]
            "
          >
            <span className="block">
              We believe in our good education and development
            </span>

            <span className="block">
              system and we know how to work together to reach
            </span>

            <span className="block">greater success</span>
          </h2>
        </motion.header>

        {/* FOUR BENEFIT CARDS */}
        <div
          className="
            mx-auto grid w-full max-w-[1500px]
            grid-cols-1 items-stretch
            gap-0 bg-[#f8fafb]
            px-0 py-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:py-6
          "
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.number} benefit={benefit} index={index} />
          ))}
        </div>
      </section>

      {/* LEARNING SECTION */}
      <section
        id="learning"
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center
          gap-12 px-5 py-20
          sm:px-8 sm:py-24
          lg:grid-cols-2 lg:gap-16
          lg:px-12 lg:py-28
        "
      >
        {/* IMAGES AND VIDEO */}
        <LearningVisual />

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-[570px]"
        >
          <span className="mb-4 inline-block text-[12px] font-bold tracking-[2px]">
            WHAT WE OFFER
          </span>

          <h2
            className="
              mb-5 text-[36px] font-bold
              leading-[1.15] tracking-[-0.045em]
              max-sm:text-[29px]
              sm:text-[40px]
              lg:text-[45px]
            "
          >
            Personalized learning for
            <br className="hidden sm:block" />
            your ambitions
          </h2>

          <p className="mb-7 max-w-[500px] text-[14px] leading-[2] text-[#777e80] sm:text-[15px]">
            Discover a learning experience built around your goals. Develop
            useful skills, explore new ideas, and take your next step with
            confidence.
          </p>

          {/* FEATURES */}
          <ul
            className="
              mb-9 grid grid-cols-1
              gap-x-6 gap-y-5
              text-[13px] font-semibold
              sm:grid-cols-2
              sm:text-[14px]
            "
          >
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 text-[#10282c]"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CONTACT CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              flex flex-col items-start
              justify-between gap-6
              rounded-[2px]
              bg-[#eef6f7]
              p-7
              sm:flex-row sm:items-center sm:p-8
            "
          >
            <div>
              <h3 className="mb-3 text-[16px] font-bold">
                Still have questions?
              </h3>

              <p className="max-w-[280px] text-[13px] leading-[1.9] text-[#777e80]">
                We are here to help you choose the right learning path.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex min-h-[44px]
                shrink-0 items-center justify-center
                gap-3 bg-black px-7 py-3
                text-[13px] font-semibold text-white
                transition-colors duration-300
                hover:bg-[#24464b]
              "
            >
              <span className="text-white">Get Started</span>
              <ArrowRight size={16} className="text-white" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
