import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Users,
  Star,
} from "lucide-react";

import angularImage from "../assets/images/courses/10.webp";
import mongodbImage from "../assets/images/courses/4.webp";
import managementImage from "../assets/images/courses/5.webp";
import mernImage from "../assets/images/courses/6.webp";

// --------------------------------------------------
// 1. Courses Data
// --------------------------------------------------

const courses = [
  {
    id: 1,
    category: "Development",
    title: "Building single page applications with Angular",
    price: "Free",
    rating: "5.00",
    reviews: "328",
    lessons: "6 Lessons",
    students: "12k Enrolled",
    image: angularImage,
    description:
      "Learn modern web development and build interactive applications with practical examples.",
    features: [
      "Practical learning experience",
      "Learn at your own pace",
      "Build valuable new skills",
    ],
  },
  {
    id: 2,
    category: "Development",
    title: "Database integration with MongoDB",
    price: "$59",
    rating: "4.49",
    reviews: "756",
    lessons: "10 Lessons",
    students: "7k Enrolled",
    image: mongodbImage,
    description:
      "Discover database design, data management, and MongoDB integration for modern applications.",
    features: [
      "Practical learning experience",
      "Learn at your own pace",
      "Build valuable new skills",
    ],
  },
  {
    id: 3,
    category: "Management",
    title: "Risk management and business continuity",
    price: "$49",
    rating: "4.88",
    reviews: "210",
    lessons: "3 Lessons",
    students: "8k Enrolled",
    image: managementImage,
    description:
      "Develop practical strategies for managing business risks and maintaining business continuity.",
    features: [
      "Understand business risks",
      "Learn risk management strategies",
      "Develop problem-solving skills",
    ],
  },
  {
    id: 4,
    category: "Development",
    title: "Full-stack development with the MERN stack",
    price: "$72",
    rating: "5.00",
    reviews: "985",
    lessons: "12 Lessons",
    students: "22k Enrolled",
    image: mernImage,
    description:
      "Build modern applications using MongoDB, Express, React, and Node.js.",
    features: [
      "Learn the MERN stack",
      "Build modern web applications",
      "Practice development workflows",
    ],
  },
];

// --------------------------------------------------
// 2. Animations
// --------------------------------------------------

const reveal = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// --------------------------------------------------
// 3. Benefits Data
// --------------------------------------------------

const benefits = [
  {
    title: "Learn anything",
    description:
      "Explore new subjects and develop useful skills at your own pace.",
    image:
      "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bee2a8ef26987f800_Books%20Icons.svg",
  },
  {
    title: "Save money",
    description:
      "Discover affordable courses that make quality learning accessible.",
    image:
      "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bdf096206b7f4e62e_Money%20Bag%20ICon.svg",
  },
  {
    title: "Flexible courses",
    description:
      "Learn anytime and anywhere with courses designed around your life.",
    image:
      "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d5e_Course%20Icon.svg",
  },
  {
    title: "Unlimited certificate",
    description: "Celebrate your progress and showcase the skills you develop.",
    image:
      "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b98a2dc7066c69460_Verified%20Icon.svg",
  },
];

// --------------------------------------------------
// 4. Five-Star Rating
// --------------------------------------------------

function CourseRating({ rating, reviews, light = false }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <div
        className="flex items-center gap-[2px]"
        aria-label={`Rating ${rating} out of 5`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            strokeWidth={1.3}
            fill="#E8B34C"
            color="#E8B34C"
          />
        ))}
      </div>

      <span
        className={`text-[11px] font-medium ${
          light ? "text-white" : "text-[#555b64]"
        }`}
      >
        {rating}
      </span>

      {reviews && (
        <span
          className={`text-[11px] ${
            light ? "text-white/75" : "text-[#858b94]"
          }`}
        >
          ({reviews})
        </span>
      )}
    </div>
  );
}

// --------------------------------------------------
// 5. Trending Courses Section
// --------------------------------------------------

function TrendingCoursesSection() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <section
      id="trending-courses"
      className="relative overflow-visible bg-[#f2f8fd] py-14 text-[#252b38] sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 text-left sm:mb-11"
        >
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#858b94] sm:text-xs">
            Trending courses
          </p>

          <h2 className="text-2xl font-medium leading-tight tracking-tight text-[#292d35] sm:text-3xl lg:text-[36px]">
            Explore our top programs
          </h2>
        </motion.div>

        {/* Course Grid */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          onMouseLeave={() => setActiveCourse(null)}
          className="grid grid-cols-1 items-stretch gap-x-5 gap-y-8 overflow-visible sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5"
        >
          {courses.map((course, index) => {
            const isActive = activeCourse === course.id;

            const panelPosition =
              index < 2 ? { left: "28%" } : { right: "28%" };

            return (
              <motion.article
                key={course.id}
                variants={reveal}
                onMouseEnter={() => setActiveCourse(course.id)}
                onMouseLeave={() => setActiveCourse(null)}
                onFocus={() => setActiveCourse(course.id)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActiveCourse(null);
                  }
                }}
                className={`group relative min-w-0 cursor-pointer bg-white transition-shadow duration-300 ${
                  isActive
                    ? "z-50 shadow-[0_12px_35px_rgba(35,55,80,0.12)]"
                    : "z-0 shadow-[0_2px_12px_rgba(35,55,80,0.04)]"
                }`}
              >
                {/* Original Card */}

                <div className="relative min-h-[310px]">
                  {/* Normal image */}

                  <div className="relative aspect-[1.18/1] overflow-hidden bg-[#e7edf3]">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Price */}

                    <span className="absolute right-3 top-3 z-10 rounded-full bg-[#3159d8] px-3 py-2 text-xs font-medium text-white">
                      {course.price}
                    </span>
                  </div>

                  {/* Normal title and rating */}

                  <div className="min-h-[145px] bg-white px-4 pb-5 pt-4">
                    <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.1em] text-[#858b94]">
                      {course.category}
                    </p>

                    <h3 className="text-[14px] font-medium leading-[1.5] text-[#292d35]">
                      {course.title}
                    </h3>

                    {/* Five stars under the title */}

                    <CourseRating
                      rating={course.rating}
                      reviews={course.reviews}
                    />
                  </div>
                </div>

                {/* 
                  Active Image Overlay:
                  When hovering, the image expands to cover the
                  complete original card. The title and stars appear
                  on top of the image instead of disappearing.
                */}

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key={`image-overlay-${course.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-[#172a32]"
                    >
                      <img
                        src={course.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* Dark gradient so title and stars are readable */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20" />

                      {/* Price remains visible */}

                      <span className="absolute right-3 top-3 rounded-full bg-[#3159d8] px-3 py-2 text-xs font-medium text-white">
                        {course.price}
                      </span>

                      {/* Title and stars over the image */}

                      <div className="absolute inset-x-0 bottom-0 p-4 pb-5">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/80">
                          {course.category}
                        </p>

                        <h3 className="text-[15px] font-medium leading-[1.5] text-white">
                          {course.title}
                        </h3>

                        <CourseRating rating={course.rating} light />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Details Panel */}

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key={`details-${course.id}`}
                      initial={{
                        opacity: 0,
                        scale: 0.98,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                        y: -5,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      style={panelPosition}
                      className="
                        absolute
                        top-[3%]
                        z-[60]
                        w-[300px]
                        max-w-[calc(100vw-40px)]
                        bg-white
                        p-5
                        text-left
                        shadow-[0_12px_35px_rgba(35,55,80,0.18)]
                        ring-1
                        ring-black/[0.04]
                        sm:p-6
                      "
                    >
                      <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.1em] text-[#858b94]">
                        {course.category}
                      </p>

                      <h4 className="text-[15px] font-medium leading-snug text-[#292d35]">
                        {course.title}
                      </h4>

                      {/* Course Information */}

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-normal text-[#777c84]">
                        <span className="inline-flex items-center gap-1">
                          <Clock3 size={12} strokeWidth={1.5} />
                          {course.lessons}
                        </span>

                        <span className="inline-flex items-center gap-1">
                          <Users size={12} strokeWidth={1.5} />
                          {course.students}
                        </span>
                      </div>

                      {/* Description */}

                      <p className="mt-4 text-[11px] font-normal leading-[1.75] text-[#777c84]">
                        {course.description}
                      </p>

                      {/* Features */}

                      <ul className="mt-3 space-y-2">
                        {course.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-[10px] font-normal leading-relaxed text-[#777c84]"
                          >
                            <Check
                              size={12}
                              strokeWidth={1.5}
                              className="mt-0.5 shrink-0 text-[#81878c]"
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Buttons */}

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <a
                          href="#all-courses"
                          onClick={(event) => event.stopPropagation()}
                          className="flex min-h-10 items-center justify-center gap-1 bg-[#e9b13f] px-2 text-center text-[10px] font-medium text-[#292d35] transition-colors hover:bg-[#f1bd50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                          <span>Course Details</span>
                          <ArrowUpRight size={13} />
                        </a>

                        <a
                          href="#all-courses"
                          onClick={(event) => event.stopPropagation()}
                          style={{ color: "#ffffff" }}
                          className="flex min-h-10 items-center justify-center gap-1 bg-[#292d35] px-2 text-center text-[10px] font-medium !text-white transition-colors hover:bg-[#24574e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                          <span style={{ color: "#ffffff" }}>Enroll</span>

                          <ArrowRight
                            size={13}
                            className="shrink-0 text-white"
                          />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// 6. Why We Are Section
// --------------------------------------------------

function WhyWeAreSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-white/70 bg-[#f2f8fd] py-14 text-[#292d35] sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#858b94] sm:text-xs">
            Why we are
          </p>

          <h2 className="text-2xl font-medium leading-tight tracking-tight text-[#292d35] sm:text-3xl lg:text-[36px]">
            Elevate your professional journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm font-normal leading-7 text-[#777c84]">
            Discover a better way to learn, grow your skills, and move
            confidently toward your professional goals.
          </p>
        </motion.div>

        {/* Benefits */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={reveal}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center">
                <img
                  src={benefit.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="text-sm font-medium text-[#292d35] sm:text-[15px]">
                {benefit.title}
              </h3>

              <p className="mt-3 max-w-[250px] text-xs font-normal leading-6 text-[#777c84]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// 7. Export
// --------------------------------------------------

export default function TrendingCourses() {
  return (
    <>
      <TrendingCoursesSection />
      <WhyWeAreSection />
    </>
  );
}
