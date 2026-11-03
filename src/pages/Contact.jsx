import { useState } from "react";

// Images
import contactHero from "../assets/images/courses/14.webp";
import faqIllustration from "../assets/images/c.svg";
import Footer from "../components/Footer";

// ========================================
// FAQ DATA
// ========================================

const faqs = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "What are the technical requirements for online learning?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "What if I encounter technical difficulties?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Are there live classes, or can I learn at my own pace?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
];

// ========================================
// HERO SECTION
// Navbar is already created separately.
// ========================================

function ContactHero() {
  return (
    <section className="relative h-[340px] w-full overflow-hidden sm:h-[390px] lg:h-[430px]">
      {/* Background Image */}
      <img
        src={contactHero}
        alt="Contact background"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Heading */}
      <div className="relative mx-auto flex h-full max-w-[1100px] items-center px-5 pt-10 lg:px-0">
        <h1 className="animate-[contactFadeUp_0.8s_ease] font-['Manrope',sans-serif] text-[38px] font-bold tracking-tight text-white sm:text-[46px] lg:text-[52px]">
          Contact us
        </h1>
      </div>
    </section>
  );
}

// ========================================
// CONTACT FORM
// ========================================

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    e.target.reset();
  };

  return (
    <div className="relative z-10 w-full rounded-md bg-white px-5 py-7 shadow-[0_25px_50px_rgba(0,0,0,0.09)] sm:px-7 sm:py-8">
      <h2 className="mb-2 font-['Manrope',sans-serif] text-[23px] font-bold text-[#142a2f] sm:text-[26px]">
        Fill out for contact
      </h2>

      <p className="mb-6 text-[13px] leading-6 text-[#85898a]">
        Lorem ipsum dolor sit amet consectetur libero donec.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          required
          className="mb-4 h-[45px] w-full rounded-[3px] border border-[#c5cbcc] px-4 text-[13px] text-[#142a2f] outline-none transition focus:border-[#142a2f]"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your email*"
          required
          className="mb-4 h-[45px] w-full rounded-[3px] border border-[#c5cbcc] px-4 text-[13px] text-[#142a2f] outline-none transition focus:border-[#142a2f]"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="mb-4 h-[45px] w-full rounded-[3px] border border-[#c5cbcc] px-4 text-[13px] text-[#142a2f] outline-none transition focus:border-[#142a2f]"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your message*"
          required
          className="mb-3 h-[125px] w-full resize-y rounded-[3px] border border-[#c5cbcc] p-4 text-[13px] text-[#142a2f] outline-none transition focus:border-[#142a2f]"
        />

        {/* Save Information */}
        <label className="flex cursor-pointer items-center gap-2 text-[12px] leading-5 text-[#777c7d] sm:text-[13px]">
          <input
            type="checkbox"
            name="saveInfo"
            className="h-[14px] w-[14px] accent-[#142a2f]"
          />
          Save information for the next time comment.
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 h-[43px] min-w-[155px] rounded-[3px] bg-[#10272c] px-6 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#31545b]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

// ========================================
// CONTACT INTRO SECTION
// ========================================

function ContactIntro() {
  return (
    <section className="relative mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-10 px-5 pt-12 sm:gap-12 sm:pt-16 lg:grid-cols-[1fr_420px] lg:gap-[75px] lg:px-0">
      {/* Left Content */}
      <div className="animate-[contactFadeUp_0.8s_ease]">
        <span className="text-[12px] font-bold tracking-wide text-[#142a2f]">
          CONTACT US
        </span>

        <h2 className="mb-4 mt-4 max-w-[530px] font-['Manrope',sans-serif] text-[30px] font-bold leading-[1.2] tracking-tight text-[#142a2f] sm:text-[35px] lg:text-[39px]">
          Are you interested in online learning? Contact us
        </h2>

        <p className="max-w-[510px] text-[13px] leading-[1.9] text-[#7b8081] sm:text-[14px]">
          Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
          nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique
          nullam risus semper habitant urna nisl nam elit at.
        </p>

        {/* Director Signature */}
        <div className="mb-2 mt-8 font-serif text-[30px] italic tracking-tight text-[#343b3c] sm:text-[34px]">
          Brayden Beckham
        </div>

        <h4 className="mt-3 text-[14px] font-bold text-[#142a2f]">
          Brayden Beckham
        </h4>

        <span className="mt-1 block text-[11px] font-medium tracking-wide text-[#85898a]">
          DIRECTOR
        </span>
      </div>

      {/* Right Form */}
      <div className="animate-[contactFadeUp_0.9s_ease] lg:-mt-[125px]">
        <ContactForm />
      </div>
    </section>
  );
}

// ========================================
// CONTACT DETAILS
// ========================================

function ContactDetails() {
  return (
    <section className="mx-auto mt-16 max-w-[1100px] px-5 sm:mt-20 lg:px-0">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <span className="text-[12px] font-bold tracking-wide text-[#142a2f]">
          CONTACT DETAILS
        </span>

        <h2 className="mb-2 mt-3 font-['Manrope',sans-serif] text-[32px] font-bold tracking-tight text-[#142a2f] sm:text-[38px] lg:text-[42px]">
          Find our location
        </h2>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
        {/* Location */}
        <div className="flex items-start gap-4 sm:pr-6">
          <span className="text-[38px] leading-none text-[#263d42]">⌂</span>

          <div>
            <h3 className="mb-3 text-[15px] font-bold text-[#142a2f] sm:text-[16px]">
              Area location
            </h3>

            <p className="text-[13px] leading-[1.9] text-[#85898a] sm:text-[14px]">
              410 Sandtown, California
              <br />
              94001, USA
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex items-start gap-4 border-[#e0e4e4] sm:border-l sm:px-6">
          <span className="text-[34px] leading-none text-[#263d42]">▤</span>

          <div>
            <h3 className="mb-3 text-[15px] font-bold text-[#142a2f] sm:text-[16px]">
              Contact details
            </h3>

            <p className="text-[13px] leading-[1.9] text-[#85898a] sm:text-[14px]">
              888-123-4567
              <br />
              info@example.com
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-4 border-[#e0e4e4] sm:border-l sm:pl-6">
          <span className="text-[37px] leading-none text-[#263d42]">◷</span>

          <div>
            <h3 className="mb-3 text-[15px] font-bold text-[#142a2f] sm:text-[16px]">
              Opening hours
            </h3>

            <p className="text-[13px] leading-[1.9] text-[#85898a] sm:text-[14px]">
              Monday-Friday
              <br />
              10:30a.m-7:00p.m
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// FAQ SECTION
// ========================================

function FAQSection() {
  // Only one question opens at a time.
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section className="mx-auto mb-16 mt-16 max-w-[1100px] rounded-md bg-gradient-to-br from-[#eef5f7] via-[#f6fafb] to-white px-5 py-10 sm:mt-20 sm:px-10 sm:py-12 lg:px-[75px] lg:py-[65px]">
      {/* FAQ Top Section */}
      <div className="mb-8 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:mb-12 lg:gap-14">
        {/* FAQ Illustration */}
        <div className="flex min-h-[220px] items-center justify-center sm:min-h-[260px] lg:min-h-[320px]">
          <img
            src={faqIllustration}
            alt="Frequently asked questions"
            loading="lazy"
            className="h-[220px] w-full max-w-[300px] object-contain transition-all duration-500 hover:-translate-y-2 hover:rotate-2 sm:h-[260px] sm:max-w-[340px] lg:h-[320px] lg:max-w-[390px]"
          />
        </div>

        {/* FAQ Title */}
        <div className="text-center sm:text-left">
          <span className="text-[12px] font-bold tracking-wide text-[#142a2f]">
            CONTACT US
          </span>

          <h2 className="mt-3 font-['Manrope',sans-serif] text-[31px] font-bold leading-[1.2] tracking-tight text-[#142a2f] sm:text-[36px] lg:text-[42px]">
            Frequently asked questions
          </h2>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={index} className="border-b border-[#dce3e5]">
              {/* Question */}
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left text-[13px] font-bold text-[#142a2f] transition-colors duration-300 hover:text-[#71888d] sm:px-5 sm:py-[18px] sm:text-[14px] lg:text-[15px]"
              >
                <span>{faq.question}</span>

                {/* Plus / Minus */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#cbd7d9] text-[21px] font-normal transition-all duration-300">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Animated Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-3 pb-5 text-[12px] leading-[1.9] text-[#7b8385] sm:px-5 sm:text-[13px] lg:text-[14px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// ========================================
// MAIN CONTACT PAGE
// Navbar is NOT included here.
// ========================================

export default function Contact() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#142a2f]">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Contact Introduction + Form */}
      <ContactIntro />

      {/* 3. Contact Details */}
      <ContactDetails />

      {/* 4. Frequently Asked Questions */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Animation */}
      <style>{`
        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
