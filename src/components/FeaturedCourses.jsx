import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Users, ArrowUpRight } from "lucide-react";

// Import course images
import image1 from "../assets/images/courses/1.webp";
import image2 from "../assets/images/courses/2.webp";
import image3 from "../assets/images/courses/3.webp";
import image4 from "../assets/images/courses/4.webp";
import image5 from "../assets/images/courses/5.webp";
import image6 from "../assets/images/courses/6.webp";
import image7 from "../assets/images/courses/7.webp";
import image8 from "../assets/images/courses/8.webp";
import image9 from "../assets/images/courses/9.webp";
import image10 from "../assets/images/courses/10.webp";

// Course information
const courses = [
  {
    id: 1,
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    image: image1,
    rating: "4.88",
    reviews: "210",
    lessons: 6,
    students: "8k",
    price: "Free",
    details: "/crisis-management-and-problem-solving-strategies/course-details",
    enroll: "",
  },
  {
    id: 2,
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    image: image2,
    rating: "5.00",
    reviews: "1.2K",
    lessons: 8,
    students: "25k",
    price: "Free",
    details: "/advanced-photoshop-techniques-for-designers/course-details",
    enroll: "",
  },
  {
    id: 3,
    category: "Finance",
    title: "Operations management and process improvement",
    image: image3,
    rating: "5.00",
    reviews: "812",
    lessons: 12,
    students: "23k",
    price: "Free",
    details: "/operations-management-and-process-improvement/course-details",
    enroll: "",
  },
  {
    id: 4,
    category: "Development",
    title: "Database integration with MongoDB",
    image: image4,
    rating: "4.49",
    reviews: "756",
    lessons: 10,
    students: "7k",
    price: "$59",
    details: "/database-integration-with-mongodb/course-details",
    enroll: "/product/database-integration-with-mongodb",
  },
  {
    id: 5,
    category: "Management",
    title: "Risk management and business continuity",
    image: image5,
    rating: "4.88",
    reviews: "210",
    lessons: 3,
    students: "8k",
    price: "$49",
    details: "/risk-management-and-business-continuity/course-details",
    enroll: "/product/risk-management-and-business-continuity",
  },
  {
    id: 6,
    category: "Development",
    title: "Full-stack development with the MERN stack",
    image: image6,
    rating: "5.00",
    reviews: "985",
    lessons: 12,
    students: "22k",
    price: "$72",
    details: "/full-stack-development-with-the-mern-stack/course-details",
    enroll: "/product/full-stack-development-with-the-mern-stack",
  },
  {
    id: 7,
    category: "Design",
    title: "Design systems and pattern libraries",
    image: image7,
    rating: "5.00",
    reviews: "1.2K",
    lessons: 8,
    students: "25k",
    price: "$99",
    details: "/design-systems-and-pattern-libraries/course-details",
    enroll: "/product/design-systems-and-pattern-libraries",
  },
  {
    id: 8,
    category: "Design",
    title: "Learn interactive Web Design by building real projects",
    image: image8,
    rating: "4.49",
    reviews: "756",
    lessons: 12,
    students: "23k",
    price: "$79",
    details:
      "/learn-interactive-web-design-by-building-real-projects/course-details",
    enroll: "/product/learn-interactive-web-design-by-building-real-projects",
  },
  {
    id: 9,
    category: "Development",
    title: "Building single page applications with Angular",
    image: image9,
    rating: "5.00",
    reviews: "328",
    lessons: 6,
    students: "12k",
    price: "Free",
    details: "/building-single-page-applications-with-angular/course-details",
    enroll: "",
  },
  {
    id: 10,
    category: "Finance",
    title: "The complete guide to personal and business finance",
    image: image10,
    rating: "4.88",
    reviews: "210",
    lessons: 10,
    students: "8k",
    price: "$99",
    details:
      "/the-complete-guide-to-personal-and-business-finance/course-details",
    enroll: "/product/the-complete-guide-to-personal-and-business-finance",
  },
];

const categories = [
  "All courses",
  "Design",
  "Development",
  "Management",
  "Finance",
];

function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("All courses");

  // Show six courses by default; category filters show matching courses.
  const filteredCourses =
    activeCategory === "All courses"
      ? courses.slice(0, 6)
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section id="featured-courses" className="bg-[#edf6f8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading and filters */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#102b30]">
              Online Learning
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#102b30] sm:text-4xl">
              Top online courses
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`text-sm transition-colors duration-200 ${
                  activeCategory === category
                    ? "font-semibold text-[#102b30]"
                    : "text-gray-500 hover:text-[#102b30]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: (index % 3) * 0.08,
              }}
              className="
                group relative min-w-0 overflow-hidden
                rounded-xl border border-[#dce7e9]
                bg-white transition-shadow duration-300
                hover:shadow-lg
              "
            >
              {/* Image and price */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.03]
                  "
                />

                <span
                  className="
                    absolute bottom-3 right-4 z-10
                    flex h-11 min-w-11 items-center justify-center
                    rounded-full bg-[#2850e8] px-3
                    text-sm font-medium text-white
                  "
                >
                  {course.price}
                </span>
              </div>

              {/* Course details */}
              <div className="p-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-[#102b30]">
                  {course.category}
                </p>

                <h3 className="mb-3 min-h-[3.5rem] text-lg font-semibold leading-6 text-[#102b30]">
                  {course.title}
                </h3>

                {/* Rating */}
                <div className="mb-5 flex items-center gap-1.5">
                  <span className="text-sm tracking-[-2px] text-[#f5a000]">
                    ★★★★★
                  </span>

                  <span className="text-[10px] text-gray-500">
                    {course.rating} ({course.reviews})
                  </span>
                </div>

                {/* Bottom area: details normally, buttons on hover */}
                <div className="relative min-h-[42px] border-t border-gray-200 pt-4">
                  {/* Lessons and enrolled students */}
                  <div
                    className="
                      grid grid-cols-2
                      transition-opacity duration-200
                      group-hover:opacity-0
                      group-focus-within:opacity-0
                    "
                  >
                    <div className="flex items-center justify-center gap-2 border-r border-gray-200 pr-2 text-xs text-[#102b30]">
                      <BookOpen size={14} />
                      <span>{course.lessons} Lessons</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 pl-2 text-xs text-[#102b30]">
                      <Users size={14} />
                      <span>{course.students} Enrolled</span>
                    </div>
                  </div>

                  {/* Buttons occupy the same area as Lessons and Enrolled */}
                  <div
                    className="
                      absolute inset-x-0 top-0
                      flex items-center gap-2
                      opacity-0 translate-y-2 pointer-events-none
                      transition-all duration-200
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      group-hover:pointer-events-auto
                      group-focus-within:translate-y-0
                      group-focus-within:opacity-100
                      group-focus-within:pointer-events-auto
                    "
                  >
                    {/* Course Details */}
                    <a
                      href={`https://elearna.webflow.io${course.details}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        flex min-w-0 items-center justify-center gap-1
                        rounded-md border border-[#ffbd00]
                        bg-[#ffbd00] px-2 py-2.5
                        text-center text-xs font-semibold
                        !text-[#102b30]
                        transition-colors duration-200
                        hover:bg-[#ffbd00] hover:!text-[#102b30]
                        ${course.enroll ? "flex-1" : "w-full"}
                      `}
                      style={{ color: "#102b30" }}
                    >
                      <span>Course Details</span>
                      <ArrowUpRight size={14} />
                    </a>

                    {/* Enroll appears only for paid courses */}
                    {course.enroll && (
                      <a
                        href={`https://elearna.webflow.io${course.enroll}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex min-w-0 flex-1 items-center justify-center gap-1
                          rounded-md border border-[#102b30]
                          bg-[#102b30] px-2 py-2.5
                          text-center text-xs font-semibold
                          !text-white
                          transition-colors duration-200
                          hover:bg-[#102b30] hover:!text-white
                        "
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#102b30",
                        }}
                      >
                        <span style={{ color: "#ffffff" }}>Enroll</span>
                        <ArrowUpRight
                          size={14}
                          color="#ffffff"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Browse all courses */}
        <div className="mx-auto mt-10 max-w-2xl rounded-full bg-[#102b30] px-5 py-4 text-center text-xs leading-5 text-white">
          We assist you in finding the ideal tutor at no cost.{" "}
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All courses");
              document
                .getElementById("featured-courses")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="underline underline-offset-4 hover:text-[#ffbd00]"
          >
            Browse All Available Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
