import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import footerPattern from "../assets/images/footer.png";
import logo from "../assets/images/L.svg";

const footerColumns = [
  {
    title: "Quick links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Events", href: "#events" },
      { label: "Career", href: "#career" },
      { label: "Instructor", href: "#instructor" },
    ],
  },
  {
    title: "Popular courses",
    links: [
      { label: "Finance", href: "#finance" },
      { label: "Management", href: "#management" },
      { label: "Design", href: "#design" },
      {
        label: "Web development",
        href: "#web-development",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Courses", href: "#courses" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
      { label: "License", href: "#license" },
      { label: "Pricing", href: "#pricing" },
      { label: "404", href: "#not-found" },
    ],
  },
  {
    title: "CMS",
    links: [
      {
        label: "Course details",
        href: "#course-details",
      },
      {
        label: "Instructor details",
        href: "#instructor-details",
      },
      {
        label: "Blog details",
        href: "#blog-details",
      },
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Footer() {
  return (
    <footer className="relative isolate w-full bg-[#f1f7f8] text-[#102b2d]">
      {/* YELLOW CTA CARD */}

      <div className="relative z-10 mx-auto mb-[-70px] w-full max-w-[1280px] px-5 sm:mb-[-78px] sm:px-8 lg:mb-[-85px]">
        <motion.div
          className="flex flex-col items-start justify-between gap-5 rounded-[5px] bg-[#ffb900] px-6 py-6 sm:px-8 lg:min-h-[155px] lg:flex-row lg:items-center lg:gap-6 lg:px-12 lg:py-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="min-w-0 flex-1">
            <span className="mb-2 inline-block text-[10px] font-bold tracking-[1.8px] text-[#092a2c]/65">
              YOUR NEXT CHAPTER
            </span>

            <h2 className="m-0 text-[25px] font-semibold leading-tight tracking-[-0.6px] text-[#092a2c] sm:text-[29px] lg:text-[32px]">
              Are you ready to start
              <br className="hidden sm:block" /> your journey?
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <motion.a
              href="#courses"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[4px] border border-[#092a2c] bg-[#092a2c] px-5 text-sm font-medium !text-white !no-underline transition-colors duration-300 hover:!border-[#174447] hover:!bg-[#174447] hover:!text-white sm:min-w-[175px]"
            >
              <span className="!text-white">Browse Courses</span>
              <ArrowRight size={16} className="!text-white" />
            </motion.a>

            <motion.a
              href="#become-a-teacher"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[4px] border border-[#092a2c] bg-transparent px-5 text-sm font-medium !text-[#092a2c] !no-underline transition-colors duration-300 hover:!bg-[#092a2c] hover:!text-white sm:min-w-[195px]"
            >
              Become A Teacher
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* MAIN FOOTER */}

      <div
        className="relative overflow-hidden bg-[#092426] pt-[115px] text-white sm:pt-[130px] lg:pt-[160px]"
        style={{
          backgroundColor: "#092426",
          backgroundImage: `
            linear-gradient(
              rgba(5, 29, 31, 0.68),
              rgba(5, 29, 31, 0.76)
            ),
            url("${footerPattern}")
          `,
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, repeat",
          backgroundSize: "cover, 820px auto",
        }}
      >
        {/* SUBTLE GREEN LIGHT */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(42,112,104,0.14),transparent_40%),radial-gradient(ellipse_at_85%_75%,rgba(35,99,92,0.12),transparent_38%)]"
        />

        <div className="relative z-[1] mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <motion.div
            className="grid grid-cols-2 gap-x-6 gap-y-10 pb-10 sm:gap-x-9 sm:gap-y-12 sm:pb-12 lg:grid-cols-[1.45fr_0.85fr_1fr_0.75fr_0.95fr] lg:gap-10 lg:pb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* ORIGINAL LOGO */}

            <motion.div
              className="col-span-2 min-w-0 sm:col-span-1"
              variants={fadeUp}
            >
              <a
                href="#home"
                aria-label="Elearna home"
                className="mb-5 inline-flex items-center !no-underline"
              >
                <img
                  src={logo}
                  alt="Elearna"
                  className="h-auto w-[145px] max-w-full object-contain object-left sm:w-[155px]"
                />
              </a>

              <p className="m-0 max-w-[280px] text-[13px] font-normal leading-[1.9] text-[#9eaeae]">
                Learn new skills, explore new possibilities, and take the next
                step toward your future with us.
              </p>
            </motion.div>

            {/* FOOTER COLUMNS */}

            {footerColumns.map((column) => (
              <motion.div
                key={column.title}
                className="min-w-0"
                variants={fadeUp}
              >
                <h3 className="mb-5 mt-[3px] text-[15px] font-bold leading-[1.5] text-white sm:mb-6 sm:text-base">
                  {column.title}
                </h3>

                <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex max-w-full items-center gap-[5px] !text-[12px] !font-normal leading-[1.8] !text-[#9eaeae] !no-underline transition-colors duration-300 hover:!text-[#ffbf24] sm:!text-[13px]"
                      >
                        <span className="transition-colors duration-300 group-hover:text-[#ffbf24]">
                          {link.label}
                        </span>

                        <ArrowUpRight
                          size={13}
                          className="shrink-0 -translate-x-1 translate-y-1 text-[#ffbf24] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM CREDITS */}

        <div className="relative z-[1] border-t border-white/[0.14]">
          <div className="mx-auto flex min-h-[58px] w-full max-w-[1280px] flex-col items-start justify-center gap-2 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p className="m-0 text-[11px] font-normal tracking-[0.3px] text-[#9eaeae]">
              Design by{" "}
              <span className="font-medium text-white">Faezeh Tohidi</span>
            </p>

            <p className="m-0 text-[11px] font-normal tracking-[0.3px] text-[#9eaeae]">
              Developer{" "}
              <span className="font-medium text-white">Faezeh Tohidi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
