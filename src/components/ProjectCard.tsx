import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    tag: string;
    image: string;
    logo?: string;
    onClick?: () => void;
}

const ProjectCard = ({ title, tag, image, onClick }: ProjectCardProps) => {
    const navigate = useNavigate();

    const handleProjectClick = () => {
        if (onClick) {
            onClick();
        } else {
            const slug = title.toLowerCase().replace(/\s+/g, '-');
            navigate(`/project/${slug}`);
        }
    };

    const category = tag.split("—")[1]?.trim() || tag;
    const count = tag.split("—")[0]?.trim();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-[280px] md:w-[320px] lg:w-[350px] group cursor-pointer rounded-2xl overflow-hidden shadow-2xl shrink-0"
            onClick={handleProjectClick}
        >
            {/* Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-primary/5" />

                <motion.img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Category badge — top left */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/40 backdrop-blur-md text-white/80 border border-white/10">
                        {category}
                    </span>
                </div>

                {/* Arrow icon — top right, appears on hover */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Gradient fade into panel */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

                {/* Bottom info panel */}
                <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5 pt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mb-2.5" />
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wide leading-tight mb-1.5 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em]">
                        {count}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
