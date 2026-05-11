import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const portfolioProjects = [
  {
    title: "Everart Studio",
    tag: "15 IMAGES — Branding & Creative",
    image: "/images/projects/chthulu.jpg",
  },
  {
    title: "Tranquillo",
    tag: "12 IMAGES — Branding",
    image: "/images/projects/tranquillo_hero.png",
  },
  {
    title: "Formularity",
    tag: "08 IMAGES — Web Design",
    image: "/images/projects/formularity_banner.jpg",
  },
  {
    title: "Clariot",
    tag: "20 IMAGES — Branding",
    image: "/images/projects/everart_screenshot.png",
  },
  {
    title: "Bio Vimea",
    tag: "06 IMAGES — Illustration",
    image: "/images/projects/model.jpg",
  },
  {
    title: "Mind Mercatis",
    tag: "10 IMAGES — Web Design",
    image: "/images/projects/mm_portal.png",
  },
  {
    title: "Opacity",
    tag: "12 IMAGES — Creative",
    image: "/images/projects/hero_home.jpg",
  },
  {
    title: "Aspritz",
    tag: "08 IMAGES — Branding",
    image: "/images/projects/behance_cover.jpg",
  },
];

const FeaturedWorks = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 358; // w-[350px] + gap-8 (32px) ≈ 382, step by one card
      const target = direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="relative pt-24 pb-28 overflow-hidden bg-black">

      {/* Title — inside container-main to set the left margin */}
      <div className="container-main mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div className="max-w-4xl">
            <p className="text-primary font-bold text-sm mb-4 uppercase tracking-[0.4em]">Visual Archive</p>
            <h2 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white">
              SELECTED<br />WORKS
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1 pb-2">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Scroll to explore</p>
            <p className="text-white/25 text-xs font-bold uppercase tracking-[0.3em]">01 — 08 Projects</p>
          </div>
        </motion.div>
      </div>

      {/* Carousel — carousel-indent aligns first card with the title on every viewport */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide carousel-indent pb-12 pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* The flex row starts right at the safe-area padding, matching the title */}
        <div className="flex gap-6 md:gap-8 w-max">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="shrink-0">
              <ProjectCard
                title={project.title}
                tag={project.tag}
                image={project.image}
              />
            </div>
          ))}
          {/* Trailing spacer */}
          <div className="shrink-0 w-16" />
        </div>
      </div>

      {/* Navigation & Bottom Row */}
      <div className="container-main mt-10 md:mt-14 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-16">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 hover:border-white shadow-2xl group focus:outline-none"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 hover:border-white shadow-2xl group focus:outline-none"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
          <span className="hidden md:block w-32 h-[1px] bg-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-start md:items-end gap-6"
        >
          <p className="text-white/60 text-sm font-bold tracking-widest uppercase text-center md:text-right">
            Curating digital beauty through AI and precision.
          </p>
          <a
            href="/portfolio"
            className="group flex justify-center md:justify-end items-center gap-4 text-white font-black text-xs uppercase tracking-[0.4em] hover:text-primary transition-all duration-300 w-full md:w-auto"
          >
            FULL PORTFOLIO
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
