import { motion } from "motion/react";
import { CalendarDays, Clock3, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";

// ==========================================
// IMAGE IMPORTS
// ==========================================

import heroImage from "../assets/images/events/h.jpeg";

import eventOne from "../assets/images/events/1.webp";
import eventTwo from "../assets/images/events/2.webp";
import eventThree from "../assets/images/events/3.webp";
import eventFour from "../assets/images/events/4.webp";
import eventFive from "../assets/images/events/5.webp";
import eventSix from "../assets/images/events/6.webp";

// ==========================================
// EVENTS DATA
// ==========================================

const events = [
  {
    id: 1,
    image: eventOne,
    date: "12",
    month: "JUNE",
    category: "Education",
    title: "The Future of Online Education",
    description:
      "Discover new opportunities and modern approaches to online learning.",
    time: "10:00 AM - 02:00 PM",
  },
  {
    id: 2,
    image: eventTwo,
    date: "15",
    month: "JUNE",
    category: "Networking",
    title: "Professional Networking Event",
    description: "Connect with professionals, educators and industry experts.",
    time: "09:00 AM - 01:00 PM",
  },
  {
    id: 3,
    image: eventThree,
    date: "20",
    month: "JUNE",
    category: "Technology",
    title: "Navigating the Future of Online Education",
    description:
      "Explore the latest innovations in digital education and technology.",
    time: "11:00 AM - 03:00 PM",
  },
  {
    id: 4,
    image: eventFour,
    date: "24",
    month: "JUNE",
    category: "Workshop",
    title: "Creative Learning Workshop",
    description:
      "Learn practical skills through collaboration and creative activities.",
    time: "10:00 AM - 12:00 PM",
  },
  {
    id: 5,
    image: eventFive,
    date: "28",
    month: "JUNE",
    category: "Wellness",
    title: "Mindfulness and Student Wellness",
    description:
      "A special event focused on personal growth and student wellbeing.",
    time: "08:00 AM - 11:00 AM",
  },
  {
    id: 6,
    image: eventSix,
    date: "05",
    month: "JULY",
    category: "Technology",
    title: "Technology and Innovation Summit",
    description:
      "Experience new ideas, innovation and the future of technology.",
    time: "09:00 AM - 04:00 PM",
  },
];

// ==========================================
// EVENTS PAGE
// ==========================================

export default function Events() {
  return (
    <main className="w-full overflow-hidden bg-white font-sans">
      {/* ======================================
          1. HERO SECTION
      ====================================== */}

      <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#10272b] sm:min-h-[440px] lg:min-h-[500px] xl:min-h-[520px]">
        <img
          src={heroImage}
          alt="Online learning events"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-[#071619]/65" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071619]/80 via-[#071619]/45 to-[#071619]/15" />

        <div className="mx-auto w-full max-w-[1280px] px-5 pt-12 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[650px]"
          >
            <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[2.5px] text-[#ffbd00] sm:text-xs">
              Explore Events
            </span>

            <h1 className="max-w-[620px] text-[36px] font-semibold leading-[1.15] tracking-[-1.5px] text-white sm:text-[48px] lg:text-[60px] xl:text-[64px]">
              Great upcoming events for our institute
            </h1>

            <p className="mt-6 max-w-[490px] text-[14px] leading-7 text-white/75 sm:text-[16px] sm:leading-8">
              Discover inspiring events, connect with our community and explore
              exciting learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          2. EVENTS SECTION
      ====================================== */}

      <section
        id="events"
        className="bg-[#f8faf9] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          {/* SECTION HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-[650px] text-center sm:mb-16 lg:mb-20"
          >
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[2px] text-[#e6a900]">
              Our Events
            </span>

            <h2 className="text-[30px] font-semibold leading-tight tracking-[-1px] text-[#152e32] sm:text-[38px] lg:text-[44px]">
              Professional online events
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-7 text-[#899395] sm:text-[15px]">
              Join our upcoming events and discover new opportunities to learn,
              connect and grow with our community.
            </p>
          </motion.div>

          {/* EVENTS GRID */}

          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.09,
                }}
                whileHover={{ y: -7 }}
                className="group min-w-0 cursor-pointer"
              >
                {/* IMAGE */}

                <div className="relative aspect-[1.22/1] w-full overflow-hidden bg-[#e8eeee]">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-[#102b2e]/0 transition-colors duration-500 group-hover:bg-[#102b2e]/15" />

                  {/* DATE BADGE */}

                  <div className="absolute right-0 top-0 flex h-[78px] w-[72px] translate-y-[-12px] flex-col items-center justify-center bg-[#ffbd00] text-[#152e32] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[28px] font-bold leading-none">
                      {event.date}
                    </span>

                    <span className="mt-1.5 text-[10px] font-bold tracking-[1.5px]">
                      {event.month}
                    </span>
                  </div>

                  {/* CATEGORY */}

                  <div className="absolute bottom-5 left-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[1.2px] text-[#152e32]">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* WHITE INFORMATION CARD */}

                <div className="relative z-10 mx-3 -mt-1 bg-white px-5 pb-6 pt-6 shadow-[0_5px_25px_rgba(20,45,48,0.045)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_18px_45px_rgba(20,45,48,0.12)] sm:mx-4 sm:px-6 sm:pb-7">
                  {/* YELLOW TOP LINE */}

                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#ffbd00] transition-all duration-500 group-hover:w-full" />

                  {/* CATEGORY + DATE */}

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c39726]">
                      {event.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#a0a9aa]">
                      <CalendarDays size={13} />
                      {event.date} {event.month}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-4 min-h-[54px] text-[18px] font-bold leading-[1.4] text-[#183337] transition-colors duration-300 group-hover:text-[#dba600] sm:text-[19px]">
                    {event.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 line-clamp-2 text-[13px] leading-[1.9] text-[#899395] sm:text-[14px]">
                    {event.description}
                  </p>

                  {/* BOTTOM DETAILS */}

                  <div className="mt-5 flex items-center justify-between border-t border-[#edf0ef] pt-4">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-[#929c9d]">
                      <Clock3 size={15} className="text-[#d7a500]" />
                      {event.time}
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e9eeee] text-[#183337] transition-all duration-300 group-hover:border-[#ffbd00] group-hover:bg-[#ffbd00]">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          3. MAIN FOOTER
      ====================================== */}

      <Footer />
    </main>
  );
}
