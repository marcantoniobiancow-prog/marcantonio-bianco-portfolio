import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Download, ArrowUpRight } from "lucide-react";

const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "60+", label: "Projects Delivered" },
    { value: "30+", label: "Brands Shaped" },
];

const AboutMe = () => {
    return (
        <main className="relative z-10 min-h-screen bg-black text-white">
            <Navbar />

            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="pt-36 md:pt-48 pb-24 md:pb-32">
                <div className="container-main">

                    {/* Overline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="label-overline text-xs mb-8 md:mb-12"
                    >
                        About
                    </motion.p>

                    {/* Two-column layout */}
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

                        {/* Left — Photo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative"
                        >
                            {/* Photo container — tall portrait */}
                            <div className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-[1.5rem]">
                                <img
                                    src="/images/marcantonio_portrait_v2.jpg"
                                    alt="Marcantonio Bianco"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Subtle vignette bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating name card */}
                            <div className="absolute bottom-6 left-6 right-6 hidden md:block">
                                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">
                                    <p className="text-white font-black text-sm tracking-widest uppercase">Marcantonio Bianco</p>
                                    <p className="text-white/40 text-xs mt-1 tracking-wider uppercase">Visual Designer — Italy</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="flex flex-col justify-between h-full pt-0 md:pt-8"
                        >
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-10 md:mb-14">
                                    DESIGNING<br />
                                    <span className="text-primary italic">THROUGH<br />PURPOSE.</span>
                                </h1>

                                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 font-light max-w-md">
                                    Visual designer based in Italy, specializing in bold visual identities and digital experiences for forward-thinking brands.
                                </p>

                                <p className="text-white/40 text-sm md:text-base leading-relaxed mb-12 font-light max-w-md">
                                    With a deep focus on Art Direction and Brand Strategy, I bridge the gap between aesthetics and functionality. Design is not just about looking good — it's about telling a story that resonates.
                                </p>

                                {/* Stats */}
                                <div className="flex gap-10 mb-12 border-t border-white/10 pt-10">
                                    {stats.map((s) => (
                                        <div key={s.label}>
                                            <p className="text-3xl md:text-4xl font-black text-white">{s.value}</p>
                                            <p className="text-white/30 text-xs uppercase tracking-widest mt-1">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#"
                                        className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all duration-500"
                                    >
                                        Download CV
                                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                    </a>
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-500"
                                    >
                                        Let's Talk
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Process ───────────────────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="container-main">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="label-overline text-xs mb-16"
                    >
                        Process
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {[
                            { num: "01", title: "Concept", text: "Deep dive into your brand's core values and target audience to build a solid foundation." },
                            { num: "02", title: "Craft", text: "Meticulously refining every pixel and line to ensure a high-end visual result that stands the test of time." },
                            { num: "03", title: "Launch", text: "Delivering a comprehensive visual ecosystem that empowers your brand to express itself confidently." },
                        ].map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <p className="text-white/20 font-black text-xs tracking-widest mb-6">{step.num}</p>
                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default AboutMe;
