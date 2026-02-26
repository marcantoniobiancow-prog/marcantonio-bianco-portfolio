import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import ReactPlayerPkg from "react-player";
const ReactPlayer = ReactPlayerPkg as any;

const EverartStudioPage = () => {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsTrailerPlaying(true);
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleStopVideo = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsTrailerPlaying(false);
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
    };

    return (
        <main className="relative z-10 min-h-screen bg-black text-white selection:bg-primary uppercase overflow-hidden">
            <Navbar />

            {/* Project Hero Section with Video Background */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* YouTube Video Background Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/40 z-[1]" />
                    <div className="absolute inset-0 w-full h-full scale-125 md:scale-110">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=yZqi0aXcLi4"
                            playing={true}
                            muted={true}
                            loop={true}
                            playsinline={true}
                            width="100%"
                            height="100%"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[150vh] md:w-[120vw] md:h-[120vh] aspect-video grayscale opacity-50 contrast-125"
                            style={{ pointerEvents: 'none' }}
                            config={{
                                youtube: {
                                    playerVars: {
                                        showinfo: 0,
                                        controls: 0,
                                        modestbranding: 1,
                                        rel: 0,
                                        playsinline: 1,
                                        autoplay: 1,
                                        mute: 1,
                                        origin: window.location.origin
                                    } as any
                                }
                            } as any}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[2]" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-[2]" />
                </div>

                <div className="container-main relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                    >
                        {/* Brand Logo Overlay */}
                        <img
                            src="/images/everart/mom_logo.png"
                            alt="Masters of Madness Logo"
                            className="w-full max-w-4xl mx-auto mb-12 brightness-200"
                        />
                        <p className="text-primary font-black text-xs md:text-sm tracking-[1em] mb-4">
                            CREATIVE DIRECTION — VISUAL IDENTITY
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter hidden">
                            EVERART STUDIO
                        </h1>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                    <span className="text-[10px] font-black tracking-[0.5em]">DISCOVER</span>
                    <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 48] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-4 bg-primary"
                        />
                    </div>
                </div>
            </section>

            {/* Client / Service / Overview Section */}
            <section className="py-16 md:py-32 border-b border-white/5">
                <div className="container-main">
                    <div className="grid md:grid-cols-3 gap-12 md:gap-20">
                        <div>
                            <h3 className="text-primary font-black text-xs tracking-[0.4em] mb-6">CLIENT</h3>
                            <p className="text-2xl font-black">EVERART STUDIO</p>
                        </div>
                        <div>
                            <h3 className="text-primary font-black text-xs tracking-[0.4em] mb-6">SERVICE</h3>
                            <p className="text-2xl font-black leading-tight">
                                CREATIVE DIRECTION<br />VISUAL IDENTITY<br />SOCIAL MEDIA / ADV
                            </p>
                        </div>
                        <div>
                            <h3 className="text-primary font-black text-xs tracking-[0.4em] mb-6">PROJECT OVERVIEW</h3>
                            <p className="text-lg font-medium opacity-80 leading-relaxed normal-case">
                                The client set out to launch a limited-edition 30% CBD oil product, aiming to position it as a premium item in a competitive market. The brief required the development of a distinctive brand identity and packaging design in a very short time to-market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Method: Timeline Section */}
            <section className="relative py-20 md:py-40 bg-[#0A0A0A] text-[#F4F4F4] overflow-hidden">
                {/* Top Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

                <div className="container-main relative z-20">
                    <p className="text-primary font-black text-xs tracking-[0.4em] mb-16 text-left md:text-center">MY APPROACH</p>
                </div>

                {/* Mobile/Tablet: Carousel */}
                <div className="md:hidden overflow-x-auto scrollbar-hide relative z-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <div className="flex gap-4 px-3 pb-4">
                        {[
                            { step: "01", title: "CONCEPT", desc: "Creative thinking, research, and conceptual visioning to define the project's soul." },
                            { step: "02", title: "DEVELOPMENT", desc: "3D sculpting, AI-assisted asset generation, and high-fidelity visual prototyping." },
                            { step: "03", title: "OUTPUT", desc: "Final brand ecosystem, e-commerce launch, and immersive narrative delivery." }
                        ].map((phase, i) => (
                            <motion.div
                                key={phase.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#121212] p-8 min-w-[280px] max-w-[300px] shrink-0 rounded-2xl flex flex-col justify-between"
                            >
                                <div className="text-5xl font-black tracking-tighter mb-8 text-primary">
                                    {phase.step}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-black tracking-widest text-[#F4F4F4]">
                                        {phase.title}
                                    </h3>
                                    <p className="text-base text-[#F4F4F4]/60 leading-relaxed font-medium">
                                        {phase.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Desktop: Grid */}
                <div className="container-main relative z-20 hidden md:block">
                    <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-[#121212]/10 rounded-xl overflow-hidden shadow-2xl">
                        {[
                            { step: "01", title: "CONCEPT", desc: "Creative thinking, research, and conceptual visioning to define the project's soul." },
                            { step: "02", title: "DEVELOPMENT", desc: "3D sculpting, AI-assisted asset generation, and high-fidelity visual prototyping." },
                            { step: "03", title: "OUTPUT", desc: "Final brand ecosystem, e-commerce launch, and immersive narrative delivery." }
                        ].map((phase, i) => (
                            <motion.div
                                key={phase.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#121212] p-12 h-full flex flex-col justify-between group hover:bg-[#1C1C1C] transition-all duration-700 ease-in-out"
                            >
                                <div className="text-6xl font-black tracking-tighter mb-12 text-primary transition-colors duration-500">
                                    {phase.step}
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black tracking-widest text-[#F4F4F4] transition-colors duration-500">
                                        {phase.title}
                                    </h3>
                                    <p className="text-lg text-[#F4F4F4]/60 leading-relaxed font-medium transition-colors duration-500">
                                        {phase.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Statue Trailer Section: Full-bleed Background */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black group cursor-pointer" onClick={handlePlayVideo}>
                {/* Full-bleed Background Thumbnail */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://img.youtube.com/vi/ammdbZ6RvgM/maxresdefault.jpg"
                        alt="The Statue Trailer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] from-0% via-[#121212]/50 via-50% to-[#121212]/50 to-100% group-hover:from-[#121212]/80 group-hover:via-[#121212]/30 group-hover:to-[#121212]/30 transition-all duration-1000" />
                </div>

                {/* Ambient Blurred Background (Active only when playing) */}
                <AnimatePresence>
                    {isTrailerPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
                        >
                            <img
                                src="https://img.youtube.com/vi/ammdbZ6RvgM/maxresdefault.jpg"
                                alt=""
                                className="w-full h-full object-cover blur-[100px] scale-150 opacity-40"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Text Overlay Content */}
                <div className="container-main relative z-10 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center flex flex-col items-center"
                    >
                        <p className="text-primary font-black text-xs tracking-[0.4em] mb-8">AI CINEMATIC TRAILER</p>
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-black leading-none tracking-tighter mb-16">
                            WATCH<br />NOW
                        </h2>
                        <button
                            onClick={handlePlayVideo}
                            className="flex items-center gap-6 group/btn"
                        >
                            <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-md group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-500 group-hover/btn:scale-110 active:scale-95">
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover/btn:border-l-black transition-colors"
                                />
                            </div>
                            <span className="text-sm font-black tracking-[0.3em] text-white/60 group-hover/btn:text-primary transition-colors">
                                PLAY VIDEO
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Cinema Mode Overlay Player */}
                <AnimatePresence>
                    {isTrailerPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-20 bg-black/60 backdrop-blur-3xl"
                        >
                            <div className="relative w-full max-w-6xl aspect-video shadow-2xl rounded-xl overflow-hidden">
                                <iframe
                                    src={isTrailerPlaying ? "https://www.youtube.com/embed/ammdbZ6RvgM?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=1" : ""}
                                    title="The Statue Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                />

                                <button
                                    onClick={(e) => handleStopVideo(e)}
                                    className="absolute top-6 right-6 text-white hover:text-primary flex items-center gap-2 group transition-colors z-[80]"
                                >
                                    <span className="text-[10px] font-black tracking-[0.5em] hidden md:block">CLOSE PLAYER</span>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-black bg-black/40 backdrop-blur-md">
                                        <span className="text-xl leading-none">×</span>
                                    </div>
                                </button>
                            </div>

                            {/* Backdrop click to close */}
                            <div className="absolute inset-0 z-[-1]" onClick={() => handleStopVideo()} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Narrative Section: The Challenge */}
            <section className="py-20 md:py-40">
                <div className="container-main">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-950"
                        >
                            <img
                                src="/images/projects/chthulu.jpg"
                                alt="Cthulhu Visual"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
                        </motion.div>

                        <div>
                            <p className="text-primary font-black text-xs tracking-[0.4em] mb-8">01. CHALLENGE</p>
                            <h2 className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 md:mb-12">
                                BEYOND THE<br /><span className="text-zinc-800">CONVENTIONAL.</span>
                            </h2>
                            <p className="text-base md:text-xl opacity-60 leading-relaxed mb-8 normal-case">
                                The communication strategy had to be clear and compliant, ensuring strong message delivery without triggering platform restrictions or advertising bans on social media. We created FOMO, built anticipation, and engaged a target audience through content drops and teasers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Bottom Project Navigation */}
            <section className="py-20 md:py-40 bg-zinc-950">
                <div className="container-main text-center">
                    <div className="max-w-2xl mx-auto mb-32">
                        <p className="text-primary font-black text-xs tracking-[0.4em] mb-8">EXPLORE THE PROJECT</p>
                        <p className="text-xl md:text-2xl font-medium mb-10 opacity-60 normal-case">
                            Curious to see the full vision in action? Explore the live digital experience.
                        </p>
                        <a
                            href="https://studioeverart.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl"
                        >
                            VISIT STUDIOEVERART.COM
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="pt-24 border-t border-white/5">
                        <p className="text-white/40 font-black text-xs tracking-[0.4em] mb-12">NEXT PROJECT</p>
                        <button
                            onClick={() => navigate('/portfolio')}
                            className="group inline-block"
                        >
                            <h2 className="text-[2.5rem] md:text-[8rem] font-black tracking-tighter hover:text-primary transition-colors leading-none mb-8 md:mb-12">
                                VIEW ARCHIVE
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500">
                                    <ArrowUpRight className="w-10 h-10" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default EverartStudioPage;
