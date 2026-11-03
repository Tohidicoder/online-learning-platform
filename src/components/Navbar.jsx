import { useEffect, useRef, useState } from "react";

import {
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  ArrowRight,
  GraduationCap,
  BookOpen,
  BriefcaseBusiness,
  Palette,
  ChartNoAxesCombined,
  Code2,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

import logo from "../assets/images/L.svg";

// ========================================
// COURSES DATA
// ========================================

const courseColumns = [
  {
    title: "FINANCE",
    description: "Learn finance and investment skills.",
    icon: ChartNoAxesCombined,
    links: [
      { label: "Financial Planning", href: "/courses/finance" },
      { label: "Investment Basics", href: "/courses/investment" },
    ],
  },
  {
    title: "MANAGEMENT",
    description: "Build leadership and business skills.",
    icon: BriefcaseBusiness,
    links: [
      { label: "Business Management", href: "/courses/management" },
      { label: "Leadership Skills", href: "/courses/leadership" },
    ],
  },
  {
    title: "DESIGN",
    description: "Explore creative design skills.",
    icon: Palette,
    links: [
      { label: "Graphic Design", href: "/courses/design" },
      { label: "UI/UX Design", href: "/courses/ui-ux" },
    ],
  },
  {
    title: "DEVELOPMENT",
    description: "Build websites and applications.",
    icon: Code2,
    links: [
      { label: "Web Development", href: "/courses/development" },
      { label: "Programming", href: "/courses/programming" },
    ],
  },
];

// ========================================
// NAVIGATION DATA
// ========================================

const navItems = [
  {
    name: "Home",
    href: "/",
    links: [{ label: "Home One", href: "/" }],
  },
  {
    name: "Courses",
    href: "/courses",
    megaMenu: true,
  },
  {
    name: "Pages",
    href: "/about",
    links: [
      { label: "About One", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Career", href: "/career" },
      { label: "Events", href: "/events" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    links: [{ label: "Blog One", href: "/blog" }],
  },
  {
    name: "Contact",
    href: "/contact",
    links: [{ label: "Contact One", href: "/contact" }],
  },
];

// ========================================
// ANIMATION
// ========================================

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 5,
  },
};

const dropdownTransition = {
  duration: 0.2,
};

// ========================================
// DROPDOWN LINK
// ========================================

function DropdownLink({ link, onNavigate }) {
  return (
    <a
      href={link.href}
      onClick={onNavigate}
      className="group relative block rounded-sm px-3 py-2.5 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-amber-50 hover:text-[#ffb900]"
    >
      {link.label}

      {/* Yellow underline on hover */}
      <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#ffb900] transition-transform duration-200 group-hover:scale-x-100" />
    </a>
  );
}

// ========================================
// COURSES MEGA MENU
// ========================================

function CoursesMegaMenu({ onNavigate }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={dropdownTransition}
      className="absolute left-1/2 top-full z-[60] mt-3 w-[min(680px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-lg border border-gray-100 border-b-[3px] border-b-[#ffb900] bg-white text-gray-800 shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-[165px_1fr]">
        {/* LEFT QUICK LINKS */}

        <div className="border-b border-gray-100 bg-gray-50 p-4 md:border-b-0 md:border-r">
          <a
            href="/courses/free"
            onClick={onNavigate}
            className="group mb-3 block rounded-md border border-transparent p-3 transition hover:border-amber-200 hover:bg-white"
          >
            <div className="flex items-center gap-2 text-[13px] font-bold text-gray-800 group-hover:text-[#ffb900]">
              <BookOpen size={17} className="text-[#c79700]" />
              Free Courses
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Start learning for free.
            </p>
          </a>

          <a
            href="/courses/paid"
            onClick={onNavigate}
            className="group block rounded-md border border-transparent p-3 transition hover:border-amber-200 hover:bg-white"
          >
            <div className="flex items-center gap-2 text-[13px] font-bold text-gray-800 group-hover:text-[#ffb900]">
              <GraduationCap size={18} className="text-[#c79700]" />
              Paid Courses
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Explore premium courses.
            </p>
          </a>

          <a
            href="/courses"
            onClick={onNavigate}
            className="mt-3 flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#a47a00] transition hover:text-[#ffb900]"
          >
            All Courses
            <ArrowRight size={14} />
          </a>
        </div>

        {/* COURSE CATEGORIES */}

        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
          {courseColumns.map((column) => {
            const Icon = column.icon;

            return (
              <div
                key={column.title}
                className="group rounded-md border border-gray-100 p-3 transition-all duration-200 hover:border-amber-300 hover:bg-amber-50/40"
              >
                <a
                  href={column.links[0].href}
                  onClick={onNavigate}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-50 text-[#b98a00] transition group-hover:bg-amber-100">
                    <Icon size={17} />
                  </span>

                  <span className="text-[11px] font-extrabold tracking-wide text-gray-800 transition group-hover:text-[#ffb900]">
                    {column.title}
                  </span>
                </a>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  {column.description}
                </p>

                <div className="mt-2 space-y-1">
                  {column.links.map((link) => (
                    <DropdownLink
                      key={link.label}
                      link={link}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM BANNER */}

      <div className="flex flex-col gap-3 border-t border-gray-100 bg-[#faf9f5] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
            <GraduationCap size={20} />
          </span>

          <div>
            <p className="text-[13px] font-bold text-gray-800">
              Grow your skills and career
            </p>

            <p className="mt-1 text-[11px] text-gray-500">
              Discover new learning opportunities.
            </p>
          </div>
        </div>

        <a
          href="/career"
          onClick={onNavigate}
          className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-[#ffb900] px-4 py-2.5 text-xs font-bold text-[#08272b] transition hover:bg-[#f2ca58] sm:self-center"
        >
          Explore Career
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

// ========================================
// NAVBAR COMPONENT
// ========================================

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  // CLOSE MENUS

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  // TOGGLE DROPDOWN

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  // SCROLL EFFECT

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLICK OUTSIDE + ESCAPE

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenus();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // CLOSE MOBILE MENU ON DESKTOP

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ========================================
  // JSX
  // ========================================

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled ? "bg-[#082a2e] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* NAVIGATION BAR */}

      <nav
        aria-label="Main navigation"
        className={`mx-auto flex ${
          scrolled ? "min-h-[65px]" : "min-h-[78px]"
        } max-w-[1600px] items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 lg:px-12 xl:px-16`}
      >
        {/* LOGO */}

        <a
          href="/"
          onClick={closeMenus}
          aria-label="Elearna home"
          className="relative z-10 shrink-0"
        >
          <img
            src={logo}
            alt="Elearna"
            className="block h-8 w-auto max-w-[145px] object-contain"
          />
        </a>

        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center">
                <a
                  href={item.href}
                  onClick={(event) => {
                    if (item.megaMenu) {
                      event.preventDefault();
                      toggleDropdown(item.name);
                    } else {
                      closeMenus();
                    }
                  }}
                  aria-haspopup={item.links || item.megaMenu ? true : undefined}
                  aria-expanded={
                    item.links || item.megaMenu
                      ? activeDropdown === item.name
                      : undefined
                  }
                  className={`whitespace-nowrap py-3 text-[14px] font-bold tracking-[0.1px] transition-colors duration-200 xl:text-[15px] ${
                    activeDropdown === item.name
                      ? "text-[#ffb900]"
                      : "text-white hover:text-[#ffb900]"
                  }`}
                >
                  {item.name}
                </a>

                {(item.links || item.megaMenu) && (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.name)}
                    aria-label={`Toggle ${item.name} menu`}
                    aria-expanded={activeDropdown === item.name}
                    className="ml-1 rounded p-1 text-white transition-colors hover:text-[#ffb900]"
                  >
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* DROPDOWN MENUS */}

              <AnimatePresence>
                {activeDropdown === item.name && item.megaMenu && (
                  <CoursesMegaMenu key="courses-menu" onNavigate={closeMenus} />
                )}

                {activeDropdown === item.name && item.links && (
                  <motion.div
                    key={`${item.name}-dropdown`}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={dropdownTransition}
                    className="absolute left-0 top-full z-[60] mt-3 w-52 overflow-hidden rounded-md border border-gray-100 border-b-[3px] border-b-[#ffb900] bg-white p-2 text-gray-800 shadow-xl"
                  >
                    {item.links.map((link) => (
                      <DropdownLink
                        key={link.label}
                        link={link}
                        onNavigate={closeMenus}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CART + LOGIN + REGISTER */}

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href="/cart"
            aria-label="Shopping cart"
            className="relative transition-colors hover:text-[#ffb900]"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ffb900] px-1 text-[9px] font-bold text-[#08272b]">
              0
            </span>
          </a>

          <div className="flex items-center gap-2 whitespace-nowrap text-[14px] font-semibold">
            <a href="/login" className="transition-colors hover:text-[#ffb900]">
              Login
            </a>

            <span className="text-white/40">|</span>

            <a
              href="/register"
              className="transition-colors hover:text-[#ffb900]"
            >
              Register
            </a>
          </div>
        </div>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          onClick={() => {
            setMobileOpen((open) => !open);
            setActiveDropdown(null);
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="rounded-md border border-white/20 p-2 transition-colors hover:border-[#ffb900] hover:text-[#ffb900] lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ========================================
          MOBILE NAVIGATION
      ======================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#082a2e] shadow-xl lg:hidden"
          >
            <div className="max-h-[calc(100vh-65px)] space-y-1 overflow-y-auto px-5 py-4 sm:px-8">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-white/10">
                  {/* MOBILE MAIN TITLE */}

                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={item.href}
                      onClick={(event) => {
                        if (item.megaMenu) {
                          event.preventDefault();
                          toggleDropdown(item.name);
                        } else {
                          closeMenus();
                        }
                      }}
                      className="py-3 text-[14px] font-bold transition-colors hover:text-[#ffb900]"
                    >
                      {item.name}
                    </a>

                    {(item.links || item.megaMenu) && (
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.name)}
                        aria-label={`Toggle ${item.name} menu`}
                        aria-expanded={activeDropdown === item.name}
                        className="rounded p-2 transition-colors hover:text-[#ffb900]"
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={2.5}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* MOBILE DROPDOWN */}

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        key={`${item.name}-mobile`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pb-3"
                      >
                        {item.megaMenu ? (
                          <div className="space-y-3 border-b-[3px] border-[#ffb900] pb-3 pl-2">
                            <a
                              href="/courses"
                              onClick={closeMenus}
                              className="block rounded-lg border border-white/10 bg-white/5 p-3 text-sm transition hover:border-amber-400/50 hover:bg-white/10"
                            >
                              <span className="font-bold text-[#ffb900]">
                                All Courses
                              </span>
                              <p className="mt-1 text-xs leading-5 text-white/60">
                                Explore all available courses.
                              </p>
                            </a>

                            <a
                              href="/courses/free"
                              onClick={closeMenus}
                              className="block rounded-lg bg-white/5 p-3 text-sm transition hover:bg-white/10"
                            >
                              <span className="font-bold text-[#ffb900]">
                                Free Courses
                              </span>
                              <p className="mt-1 text-xs leading-5 text-white/60">
                                Free resources to develop your skills.
                              </p>
                            </a>

                            <a
                              href="/courses/paid"
                              onClick={closeMenus}
                              className="block rounded-lg bg-white/5 p-3 text-sm transition hover:bg-white/10"
                            >
                              <span className="font-bold text-[#ffb900]">
                                Paid Courses
                              </span>
                              <p className="mt-1 text-xs leading-5 text-white/60">
                                Explore premium learning opportunities.
                              </p>
                            </a>

                            {courseColumns.map((column) => {
                              const Icon = column.icon;

                              return (
                                <div
                                  key={column.title}
                                  className="rounded-md border border-white/10 p-3"
                                >
                                  <div className="mb-2 flex items-center gap-2">
                                    <Icon
                                      size={16}
                                      className="text-[#ffb900]"
                                    />
                                    <p className="text-xs font-bold tracking-wide text-white/80">
                                      {column.title}
                                    </p>
                                  </div>

                                  {column.links.map((link) => (
                                    <a
                                      key={link.label}
                                      href={link.href}
                                      onClick={closeMenus}
                                      className="block rounded px-2 py-2 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-[#ffb900]"
                                    >
                                      {link.label}
                                    </a>
                                  ))}
                                </div>
                              );
                            })}

                            <a
                              href="/career"
                              onClick={closeMenus}
                              className="flex items-center justify-between rounded-md bg-[#ffb900] px-4 py-3 text-sm font-bold text-[#08272b] transition-colors hover:bg-[#f2ca58]"
                            >
                              Explore Career
                              <ArrowRight size={16} />
                            </a>
                          </div>
                        ) : (
                          <div className="overflow-hidden rounded-md border border-gray-100 border-b-[3px] border-b-[#ffb900] bg-white p-2">
                            {item.links?.map((link) => (
                              <DropdownLink
                                key={link.label}
                                link={link}
                                onNavigate={closeMenus}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* MOBILE ACCOUNT LINKS */}

              <div className="flex flex-wrap items-center gap-5 pt-4 text-[14px] font-semibold">
                <a
                  href="/cart"
                  onClick={closeMenus}
                  className="flex items-center gap-2 transition-colors hover:text-[#ffb900]"
                >
                  <ShoppingBag size={18} />
                  Cart
                </a>

                <a
                  href="/login"
                  onClick={closeMenus}
                  className="transition-colors hover:text-[#ffb900]"
                >
                  Login
                </a>

                <a
                  href="/register"
                  onClick={closeMenus}
                  className="rounded-md bg-[#ffb900] px-4 py-2 font-bold text-[#08272b] transition-colors hover:bg-[#f2ca58]"
                >
                  Register
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
