import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Import local images from the assets folder.
import studentImage from "../assets/images/student.webp";
import teacherImage from "../assets/images/teacher.webp";

export default function LearningOffer() {
  return (
    <section
      id="learning"
      className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* LEFT: Overlapping images and floating badge */}
        <div className="relative mx-auto w-full max-w-[460px] pb-10 sm:pb-14">
          {/* Main image: positioned on the right */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative ml-auto mr-1 w-[62%] overflow-hidden rounded-sm shadow-[0_22px_45px_rgba(15,35,38,0.18)] sm:mr-2"
          >
            <img
              src={teacherImage}
              alt="Student studying with headphones"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>

          {/* Secondary image: overlaps the main image more */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="absolute bottom-0 left-0 z-10 w-[58%] overflow-hidden rounded-sm shadow-[0_22px_45px_rgba(15,35,38,0.22)]"
          >
            <img
              src={studentImage}
              alt="Student learning online with a laptop"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          {/* Floating course badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute left-[5%] top-[7%] z-20 flex items-center gap-2 rounded-sm bg-[#10282c] px-3 py-3 text-white shadow-xl sm:left-[7%] sm:px-4"
          >
            <span className="text-2xl font-bold tracking-tight text-amber-400 sm:text-3xl">
              50+
            </span>

            <span className="max-w-[95px] text-[10px] font-medium leading-4 text-white sm:text-xs">
              <Sparkles size={13} className="mb-0.5 inline text-amber-400" />{" "}
              Free courses listed online
            </span>
          </motion.div>
        </div>

        {/* RIGHT: Learning offer content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          {/* Small section label */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#10282c]">
            What we offer
          </p>

          {/* Main heading: larger and easier to read */}
          <h2 className="max-w-lg text-3xl font-bold leading-[1.15] tracking-tight text-[#152a2e] sm:text-4xl lg:text-[42px]">
            Personalized learning for your ambitions
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-[15px]">
            Discover a learning experience designed around your goals. Build
            practical skills, earn valuable certifications, and take the next
            step toward your future.
          </p>

          {/* Two-column feature list */}
          <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-3 text-xs font-semibold text-[#152a2e] sm:grid-cols-2 sm:text-[13px]">
            <li>• Skill-based instruction</li>
            <li>• Analytics and insights</li>
            <li>• Global certification</li>
            <li>• Customizable courses</li>
          </ul>

          {/* Call-to-action panel */}
          <div className="mt-8 grid grid-cols-1 items-center gap-5 rounded-sm bg-[#eff6f7] p-5 sm:grid-cols-[1fr_auto] sm:p-6">
            <div>
              <h3 className="text-sm font-bold text-[#152a2e]">
                Still have questions?
              </h3>

              <p className="mt-3 max-w-[270px] text-xs leading-6 text-gray-600 sm:text-[13px]">
                Let us help you find the right learning path for your goals.
              </p>
            </div>

            {/* Button with explicitly white text */}
            <motion.a
              href="#courses"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#10282c] px-6 py-3 text-sm font-semibold !text-white shadow-sm transition-colors hover:bg-[#24534f] sm:w-auto"
            >
              <span className="!text-white">Get Started</span>
              <ArrowUpRight size={16} strokeWidth={2} className="text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
