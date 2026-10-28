import { motion, useReducedMotion } from "motion/react";
import {
  Palette,
  Wallet,
  Code2,
  Megaphone,
  Monitor,
  FileText,
  ArrowUpRight,
  Plus,
  Mic,
  Video,
  Phone,
} from "lucide-react";

import logo1 from "../assets/images/logos/1.svg";
import logo2 from "../assets/images/logos/2.svg";
import logo3 from "../assets/images/logos/3.svg";
import logo4 from "../assets/images/logos/4.svg";
import logo5 from "../assets/images/logos/5.svg";
import logo6 from "../assets/images/logos/6.svg";

import learningVideo from "../assets/images/learning.mp4";
import teacherImage from "../assets/images/online-teacher.png";

// Partner logos
const partnerLogos = [
  { name: "Partner One", image: logo1 },
  { name: "Partner Two", image: logo2 },
  { name: "Partner Three", image: logo3 },
  { name: "Partner Four", image: logo4 },
  { name: "Partner Five", image: logo5 },
  { name: "Partner Six", image: logo6 },
];

// Top categories
const categories = [
  { title: "Creative web design", courses: 8, Icon: Palette },
  { title: "Finance accounting", courses: 10, Icon: Wallet },
  { title: "IT and software", courses: 5, Icon: Code2 },
  { title: "Digital marketing", courses: 4, Icon: Megaphone },
  { title: "Web development", courses: 8, Icon: Monitor },
  { title: "Content writing", courses: 3, Icon: FileText },
];

// Reusable animation for sections entering the viewport
const revealUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// Partner logos section
function PartnerLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Learning partners"
      className="bg-[#eff6f8] py-8 sm:py-10"
    >
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 px-4 text-center text-xs font-medium text-[#183035]"
      >
        Learn from 350+ leading universities and companies with us
      </motion.p>

      <div className="logo-mask overflow-hidden">
        <div
          className={`logo-marquee flex w-max ${
            reduceMotion ? "" : "animate-logo-marquee"
          }`}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="logo-group flex shrink-0 items-center gap-8 pr-8 sm:gap-10"
            >
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-10 w-24 shrink-0 items-center justify-center sm:w-28"
                >
                  <img
                    src={partner.image}
                    alt={group === 0 ? partner.name : ""}
                    className="max-h-9 max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Category card
function CategoryCard({ title, courses, Icon, index, reduceMotion }) {
  return (
    <motion.a
      href="#courses"
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.07,
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className="
        group flex min-h-[148px] flex-col items-center justify-center
        rounded-sm border border-[#e5e9eb] bg-white
        px-3 py-5 text-center
        transition-colors duration-300 ease-out
        hover:border-[#b6dce7]
        hover:bg-[#fcfeff]
        hover:shadow-[0_4px_16px_rgba(75,130,150,0.12)]
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[#b6dce7]
        sm:min-h-[158px]
      "
    >
      <motion.div
        animate={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
        whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
        className="
          mb-3 flex h-11 w-11 items-center justify-center
          rounded-full bg-[#eff6f8] text-[#52676b]
          transition-colors duration-300
          group-hover:bg-[#dcecf1]
          group-hover:text-[#173f50]
        "
      >
        <Icon size={23} strokeWidth={1.4} />
      </motion.div>

      <h3 className="max-w-32 text-xs font-semibold leading-snug text-[#172d32]">
        {title}
      </h3>

      <p className="mt-2 text-[11px] text-[#85898c]">{courses} Courses</p>
    </motion.a>
  );
}

// Promotional cards
function PromoCard({
  title,
  buttonText,
  href,
  mediaType,
  media,
  imageAlt = "",
  index,
  reduceMotion,
}) {
  const isVideo = mediaType === "video";

  return (
    <motion.article
      variants={revealUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: reduceMotion ? 0 : index * 0.12,
      }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className={`
        group flex min-h-[210px] items-center gap-3
        overflow-hidden rounded-sm border border-transparent
        p-4 transition-shadow duration-300
        hover:border-[#e5e9eb]
        hover:shadow-[0_5px_18px_rgba(40,70,80,0.07)]
        sm:min-h-[220px] sm:gap-4 sm:p-6
        ${isVideo ? "bg-[#f1f1e9]" : "bg-[#edf6f8]"}
      `}
    >
      <div className="min-w-0 flex-[0.9]">
        <h3 className="text-sm font-semibold leading-snug text-[#173035] sm:text-base">
          {title}
        </h3>

        <motion.a
          href={href}
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          className={`
            mt-5 inline-flex min-h-[36px] min-w-[105px]
            items-center justify-center gap-2 rounded-sm
            px-4 py-2.5 text-[10px] font-medium
            transition-colors duration-300 ease-out
            focus-visible:outline-2 focus-visible:outline-offset-2
            ${
              isVideo
                ? "bg-[#142d31] !text-white hover:bg-[#25474c] focus-visible:outline-[#142d31]"
                : "bg-[#ffb900] text-[#172d32] hover:bg-[#e9a800] focus-visible:outline-[#e9a800]"
            }
          `}
        >
          {buttonText}
          {isVideo && <ArrowUpRight size={13} />}
        </motion.a>
      </div>

      <div className="relative ml-auto aspect-[4/3] min-w-0 flex-[1.1] overflow-hidden rounded-[5px] bg-[#dfe9eb]">
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Online learning video"
            className={`
              absolute inset-0 h-full w-full object-cover
              ${reduceMotion ? "" : "transition-transform duration-700 group-hover:scale-[1.03]"}
            `}
          >
            <source src={media} type="video/mp4" />
          </video>
        ) : (
          <img
            src={media}
            alt={imageAlt}
            loading="lazy"
            className={`
              absolute inset-0 h-full w-full object-cover object-[center_30%]
              ${reduceMotion ? "" : "transition-transform duration-700 group-hover:scale-[1.03]"}
            `}
          />
        )}

        {isVideo && (
          <div
            aria-hidden="true"
            className="
              absolute bottom-2 left-1/2 z-10
              flex -translate-x-1/2 items-center gap-1
              rounded-full bg-white/90 p-1 shadow-sm
            "
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Plus size={12} />
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-gray-600">
              <Mic size={11} />
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-gray-600">
              <Video size={11} />
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-white">
              <Phone size={11} />
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

// Main section
export default function LearningCategories() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-white">
      <PartnerLogos />

      <section className="bg-white px-5 pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-[1100px]">
          {/* Section heading */}
          <motion.div
            variants={revealUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[#183035]">
              Top Categories
            </p>

            <h2 className="mx-auto max-w-[420px] text-xl font-semibold leading-snug tracking-tight text-[#172d32] sm:text-[22px]">
              Discover leading categories to elevate your journey
            </h2>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                {...category}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* Promotional cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            <PromoCard
              title="Quick access to the popular courses"
              buttonText="View Courses"
              href="#courses"
              mediaType="image"
              media={teacherImage}
              imageAlt="Student learning online"
              index={0}
              reduceMotion={reduceMotion}
            />

            <PromoCard
              title="Develop your skills online!"
              buttonText="Apply Now"
              href="#apply"
              mediaType="video"
              media={learningVideo}
              index={1}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
