import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Massimo D'Ambrosio",
    role: "CEO, Formularity",
    quote: "A turning point for our brand's look. The work is clean, modern, and exudes reliability."
  },
  {
    name: "Keyvan Taheri",
    role: "CEO, Trads",
    quote: "Outstanding graphic support for our Amazon listings. Conversions improved significantly."
  },
];

const Testimonials = () => (
  <section className="relative section-spacing py-32">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-left md:text-center"
      >
        <p className="label-overline text-sm mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl">CLIENT <span className="text-secondary">VOICES.</span></h2>
      </motion.div>
    </div>

    {/* Mobile: Horizontal Carousel */}
    <div className="md:hidden overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex gap-4 px-3 pb-4">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-[2rem] p-8 relative group min-w-[300px] max-w-[320px] shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <Quote className="w-4 h-4" />
            </div>
            <p className="text-foreground text-lg leading-relaxed mb-6 italic font-light">
              "{t.quote}"
            </p>
            <footer className="flex items-center gap-4 border-t border-white/5 pt-6">
              <div>
                <p className="font-bold text-base">{t.name}</p>
                <p className="text-secondary text-xs uppercase tracking-widest font-medium">{t.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>

    {/* Desktop: Grid */}
    <div className="container-main hidden md:block">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-[2.5rem] p-10 relative group"
          >
            <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <Quote className="w-5 h-5" />
            </div>
            <p className="text-foreground text-xl leading-relaxed mb-8 italic font-light">
              "{t.quote}"
            </p>
            <footer className="flex items-center gap-4 border-t border-white/5 pt-8">
              <div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-secondary text-sm uppercase tracking-widest font-medium">{t.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
