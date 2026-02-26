import { motion } from "framer-motion";
import { Lightbulb, Puzzle, Target, Zap } from "lucide-react";

const pillars = [
  { title: "Creative Thinking", description: "Turning abstract ideas into tangible realities through concept development and Art Direction.", icon: <Lightbulb className="w-6 h-6" /> },
  { title: "Problem Solving", description: "Applying Design Thinking methodology to solve complex challenges, with a focus on user experience.", icon: <Puzzle className="w-6 h-6" /> },
  { title: "Strategy Lover", description: "Creativity without purpose is just art. Working with a KPI-driven approach and brand strategy.", icon: <Target className="w-6 h-6" /> },
  { title: "Advanced Skills", description: "Digital innovation, high-fidelity prototyping, interaction design, and AI integration in creative workflows.", icon: <Zap className="w-6 h-6" /> },
];

const Skills = () => (
  <section id="about-me" className="relative overflow-hidden section-spacing">
    <div className="absolute top-1/2 right-0 gradient-blur opacity-20" />

    <div className="container-main relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-left md:text-center"
      >
        <p className="label-overline text-sm mb-3">Expertise</p>
        <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">SOLUTIONS FOR <br /><span className="text-primary tracking-tighter italic">MODERN BRANDS.</span></h2>
      </motion.div>
    </div>

    {/* Mobile: Horizontal Carousel / Desktop: Grid */}
    <div className="md:hidden overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex gap-4 px-3 pb-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 min-w-[280px] max-w-[300px] shrink-0 group shadow-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-6 shadow-xl">
              {p.icon}
            </div>
            <h3 className="text-xl font-black mb-4 text-white">{p.title}</h3>
            <p className="text-white text-sm leading-relaxed font-medium">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="container-main relative z-10 hidden md:block">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-10 hover:bg-primary transition-all duration-700 group shadow-2xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-xl">
              {p.icon}
            </div>
            <h3 className="text-2xl font-black mb-6 text-white group-hover:text-black transition-colors">{p.title}</h3>
            <p className="text-white text-base leading-relaxed font-medium group-hover:text-black transition-colors">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
