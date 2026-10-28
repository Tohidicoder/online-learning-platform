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
      { label: "Course Details", href: "/course-details" },
      { label: "FAQ", href: "/faq" },
      { label: "Pricing", href: "/pricing" },
      { label: "Career", href: "/career" },
      { label: "Events", href: "/events" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    links: [
      { label: "Blog One", href: "/blog" },
      { label: "Latest Articles", href: "/blog/latest" },
      { label: "Learning Tips", href: "/blog/learning-tips" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    links: [
      { label: "Contact One", href: "/contact" },
      { label: "Get Support", href: "/contact/support" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 7 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};

const dropdownTransition = { duration: 0.18 };

function DropdownLink({ link, onNavigate }) {
  return (
    <a
      href={link.href}
      onClick={onNavigate}
      className="group relative block rounded-sm px-3 py-2.5 text-[13px] font-medium text-gray-700 transition-colors duration-200 hover:bg-amber-50 hover:text-[#b98a00]"
    >
      {link.label}

      {/* Yellow underline appears only inside the dropdown card. */}
      <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#ffb900] transition-transform duration-200 group-hover:scale-x-100" />
    </a>
  );
}

function CoursesMegaMenu({ onNavigate }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={dropdownTransition}
      className="absolute left-1/2 top-full z-[60] mt-2 w-[min(650px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-lg border border-gray-100 bg-white text-gray-800 shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr]">
        {/* Compact quick links */}
        <div className="border-b border-gray-100 bg-gray-50 p-3 md:border-b-0 md:border-r">
          <a
            href="/courses/free"
            onClick={onNavigate}
            className="group mb-2 block rounded-md border border-transparent p-2.5 transition hover:border-amber-200 hover:bg-white"
          >
            <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-800 group-hover:text-[#b98a00]">
              <BookOpen size={16} className="shrink-0 text-[#c79700]" />
              Free Courses
            </div>
            <p className="mt-1.5 text-xs leading-4 text-gray-500">
              Start learning for free.
            </p>
          </a>

          <a
            href="/courses/paid"
            onClick={onNavigate}
            className="group block rounded-md border border-transparent p-2.5 transition hover:border-amber-200 hover:bg-white"
          >
            <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-800 group-hover:text-[#b98a00]">
              <GraduationCap size={17} className="shrink-0 text-[#c79700]" />
              Paid Courses
            </div>
            <p className="mt-1.5 text-xs leading-4 text-gray-500">
              Explore premium courses.
            </p>
          </a>

          <a
            href="/courses"
            onClick={onNavigate}
            className="mt-2 flex items-center gap-1 px-2.5 py-2 text-xs font-semibold text-[#a47a00] hover:text-[#d69b00]"
          >
            All Courses <ArrowRight size={13} />
          </a>
        </div>

        {/* Small, aligned course category cards */}
        <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 sm:p-3">
          {courseColumns.map((column) => {
            const Icon = column.icon;

            return (
              <div
                key={column.title}
                className="group rounded-md border border-gray-100 p-2.5 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-50/40"
              >
                <a
                  href={column.links[0].href}
                  onClick={onNavigate}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-50 text-[#b98a00] transition-colors group-hover:bg-amber-100">
                    <Icon size={15} />
                  </span>

                  <span className="text-[10px] font-bold tracking-wide text-gray-800 transition-colors group-hover:text-[#b98a00]">
                    {column.title}
                  </span>
                </a>

                <p className="mt-1.5 text-[11px] leading-4 text-gray-500">
                  {column.description}
                </p>

                <div className="mt-1.5 space-y-0.5">
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

      {/* Compact promotional banner */}
      <div className="flex flex-col gap-3 border-t border-gray-100 bg-[#faf9f5] px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700">
            <GraduationCap size={18} />
          </span>

          <div>
            <p className="text-xs font-semibold text-gray-800">
              Grow your skills and career
            </p>
            <p className="mt-0.5 text-[11px] text-gray-500">
              Discover new learning opportunities.
            </p>
          </div>
        </div>

        <a
          href="/career"
          onClick={onNavigate}
          className="inline-flex items-center justify-center gap-1.5 self-start rounded-md bg-[#ffb900] px-3 py-2 text-xs font-semibold text-[#08272b] transition-colors hover:bg-[#f2ca58] sm:self-center"
        >
          Explore Career <ArrowRight size={13} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  // Shrink the navbar and change its background while scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus when clicking outside or pressing Escape.
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

  // Close the mobile menu when switching to desktop.
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

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        scrolled ? "bg-[#082a2e] shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex ${
          scrolled ? "min-h-[62px]" : "min-h-[76px]"
        } max-w-[1600px] items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 lg:px-12 xl:px-16`}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenus}
          aria-label="Elearna home"
          className="relative z-10 shrink-0"
        >
          <img
            src={logo}
            alt="Elearna"
            className="block h-7 w-auto max-w-[140px] object-contain"
          />
        </a>

        {/* Desktop navigation */}
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
                  className={`whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-200 xl:text-sm ${
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
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Main titles have NO yellow underline. */}
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
                    className="absolute left-0 top-full z-[60] mt-2 w-48 overflow-hidden rounded-md border border-gray-100 bg-white p-2 text-gray-800 shadow-xl"
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

        {/* Cart and account links */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href="/cart"
            aria-label="Shopping cart"
            className="relative transition-colors hover:text-[#ffb900]"
          >
            <ShoppingBag size={19} strokeWidth={1.6} />
            <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ffb900] px-1 text-[9px] font-bold text-[#08272b]">
              0
            </span>
          </a>

          <div className="flex items-center gap-2 whitespace-nowrap text-[13px] xl:text-sm">
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

        {/* Mobile menu button */}
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
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-white/10 bg-[#082a2e] shadow-xl lg:hidden"
          >
            <div className="max-h-[calc(100vh-62px)] space-y-1 overflow-y-auto px-5 py-4 sm:px-8">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-white/10">
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
                      className="py-3 text-sm font-medium transition-colors hover:text-[#ffb900]"
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
                          size={17}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

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
                          <div className="space-y-3 pb-2 pl-2">
                            <a
                              href="/courses"
                              onClick={closeMenus}
                              className="block rounded-lg border border-white/10 bg-white/5 p-3 text-sm transition hover:border-amber-400/50 hover:bg-white/10"
                            >
                              <span className="font-semibold text-[#ffb900]">
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
                              <span className="font-semibold text-[#ffb900]">
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
                              <span className="font-semibold text-[#ffb900]">
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
                                      size={15}
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
                                      className="block rounded px-2 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#ffb900]"
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
                              className="flex items-center justify-between rounded-md bg-[#ffb900] px-4 py-3 text-sm font-semibold text-[#08272b] transition-colors hover:bg-[#f2ca58]"
                            >
                              Explore Career <ArrowRight size={16} />
                            </a>
                          </div>
                        ) : (
                          <div className="overflow-hidden rounded-md border border-gray-100 bg-white p-2">
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

              {/* Mobile account links */}
              <div className="flex flex-wrap items-center gap-5 pt-4 text-sm">
                <a
                  href="/cart"
                  onClick={closeMenus}
                  className="flex items-center gap-2 transition-colors hover:text-[#ffb900]"
                >
                  <ShoppingBag size={17} />
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
                  className="rounded-md bg-[#ffb900] px-4 py-2 font-semibold text-[#08272b] transition-colors hover:bg-[#f2ca58]"
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
