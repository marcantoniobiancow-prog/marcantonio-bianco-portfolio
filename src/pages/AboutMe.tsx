import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { ArrowRight, Download } from "lucide-react";

const AboutMe = () => {
    return (
        <main className="relative z-10 min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 section-spacing">
                <div className="container-main">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
                                <img
                                    src="/images/about_portrait.jpg"
                                    alt="Marcantonio Bianco"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 border-[20px] border-primary/20 pointer-events-none" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="label-overline text-sm mb-4">About Me</p>
                            <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-tight">
                                DESIGNING <br />
                                <span className="text-gradient">THROUGH PURPOSE.</span>
                            </h1>
                            <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 font-light">
                                Marcantonio Bianco is a visual designer based in Italy, specializing in creating bold visual identities and digital experiences for forward-thinking brands.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-8 md:mb-12 font-light">
                                With a deep focus on Art Direction and a background in Brand Strategy, I bridge the gap between aesthetics and functionality. I believe that design is not just about looking good—it's about telling a story that resonates with people.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <button className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#666666] transition-all duration-300">
                                    Download CV <Download className="w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 glass rounded-full font-bold flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-500 text-black">
                                    Services <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32 section-spacing">
                <div className="container-main">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-3xl font-black mb-6 uppercase text-primary tracking-tighter">01 / CONCEPT</h3>
                            <p className="text-muted-foreground leading-relaxed font-light">Starting with a deep dive into your brand's core values and target audience to build a solid foundation.</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black mb-6 uppercase text-primary tracking-tighter">02 / CRAFT</h3>
                            <p className="text-muted-foreground leading-relaxed font-light">Meticulously refining every pixel and line to ensure a high-end visual result that stands the test of time.</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black mb-6 uppercase text-primary tracking-tighter">03 / LAUNCH</h3>
                            <p className="text-muted-foreground leading-relaxed font-light">Delivering a comprehensive visual ecosystem that empowers your brand to express itself confidently.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default AboutMe;
