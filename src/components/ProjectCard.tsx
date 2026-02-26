import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 min-w-[320px] md:min-w-[450px] group cursor-pointer h-full"
            onClick={handleProjectClick}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#050505]">
                {/* Underlay Color to prevent flicker */}
                <div className="absolute inset-0 bg-primary/20" />

                {/* Main Image with Filter Effects */}
                <motion.img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out 
                               grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                />

                {/* Hero-style Orange Overlay (Idle Only) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-primary/40 to-primary/60 mix-blend-overlay opacity-80 group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,87,49,0.3),transparent_70%)] opacity-100 group-hover:opacity-0 transition-opacity duration-700" />

                {/* Bottom dark vignette for text readability during transition */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content Below Image */}
            <div className="flex flex-col items-center text-center px-4">
                <h3 className="text-base md:text-lg font-black text-white uppercase tracking-[0.25em] mb-3 leading-none transition-colors group-hover:text-primary">
                    {title}
                </h3>
                <p className="text-[10px] md:text-sm font-black text-primary uppercase tracking-[0.15em] border-t border-white/10 pt-3">
                    {tag}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
