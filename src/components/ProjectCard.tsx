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
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // organic smooth easing
            viewport={{ once: true }}
            className="relative min-w-[280px] md:min-w-[320px] lg:min-w-[350px] group cursor-pointer h-full rounded-[1.5rem] overflow-hidden shadow-2xl"
            onClick={handleProjectClick}
        >
            {/* Full Image Background */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#050505]">
                {/* Underlay Color to prevent flicker */}
                <div className="absolute inset-0 bg-primary/10" />

                {/* Main Image */}
                <motion.img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out 
                               group-hover:scale-105"
                />

                {/* Tag badge - top left */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wide bg-white/10 backdrop-blur-md text-white/90 border border-white/15">
                        {tag.split("—")[1]?.trim() || tag}
                    </span>
                </div>

                {/* Glassmorphism bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10">
                    {/* Gradient fade into glass */}
                    <div className="h-16 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Glass panel */}
                    <div className="bg-black/50 backdrop-blur-xl border-t border-white/10 p-5 md:p-6">
                        {/* Orange dot */}
                        <div className="w-2 h-2 rounded-full bg-orange-500 mb-3" />

                        <h3 className="text-base md:text-lg font-black text-white uppercase tracking-wider leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-[0.15em]">
                            {tag}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
