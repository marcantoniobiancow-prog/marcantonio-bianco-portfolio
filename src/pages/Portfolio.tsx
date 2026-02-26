import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";

const portfolioProjects = [
    {
        title: "Tranquillo",
        category: "Branding — Chill CBD Oil",
        image: "/images/projects/tranquillo_hero.png",
    },
    {
        title: "Formularity",
        category: "Web Design — Original complex",
        image: "/images/projects/formularity_banner.jpg",
    },
    {
        title: "Everart Studio",
        category: "Creative — Masters of Madness",
        image: "/images/projects/chthulu.jpg",
    },
    {
        title: "Clariot",
        category: "Branding — Energy made simple!",
        image: "/images/projects/everart_screenshot.png",
    },
    {
        title: "Bio Vimea",
        category: "Illustration — Live Your Beauty",
        image: "/images/projects/model.jpg",
    },
    {
        title: "Mind Mercatis",
        category: "Web Design — Illustrations",
        image: "/images/projects/mm_portal.png",
    },
    {
        title: "Opacity",
        category: "Creative — Dry Like Creativity",
        image: "/images/projects/hero_home.jpg",
    },
    {
        title: "Aspritz",
        category: "Branding — Neapolitan Character",
        image: "/images/projects/behance_cover.jpg",
    }
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = React.useState("All");

    const filteredProjects = activeFilter === "All"
        ? portfolioProjects
        : portfolioProjects.filter(p => p.category.includes(activeFilter) || p.title.includes(activeFilter)); // Simple fallback filtering

    return (
        <main className="relative z-10 min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 section-spacing">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <p className="label-overline text-sm mb-4">Portfolio</p>
                        <h1 className="text-4xl md:text-8xl font-black mb-8 leading-none">
                            SELECTED <br />
                            <span className="text-gradient">WORKS.</span>
                        </h1>

                        <div className="flex flex-nowrap md:flex-wrap gap-3 md:gap-4 mt-12 overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {["All", "Branding", "Creative", "Web", "Illustration"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-5 md:px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium whitespace-nowrap shrink-0 ${activeFilter === filter
                                        ? "bg-primary text-black border-primary"
                                        : "border-white/10 text-white/60 hover:border-primary hover:text-primary"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        layout
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, i) => (
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    tag={project.category}
                                    image={project.image}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default Portfolio;
