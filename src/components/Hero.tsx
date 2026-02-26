import { motion } from "framer-motion";

const services = [
  { id: "#01", name: "AI-Powered Design" },
  { id: "#02", name: "Shopify / E-commerce" },
  { id: "#03", name: "Brand Identity" },
  { id: "#04", name: "Product Development" },
];

const brands = ["Shopify Expert", "AI Enthusiast", "Creative Director", "UI/UX Master"];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] overflow-hidden bg-black flex flex-col">
      {/* Full Width Hero Container - Edge to Edge */}
      <div className="relative w-full flex-grow overflow-hidden bg-[#000000] flex items-center justify-center">

        {/* Background Gradient / Image Overlay - Figma Orange Theme */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-primary/30 to-primary/80 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,87,49,0.5),transparent_70%)]" />
          <img
            src="/images/hero_chrome.jpg"
            alt="Chrome Liquid Portrait"
            className="w-full h-full object-cover object-center mix-blend-screen opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Hero Content Overlay - Constrained by container-main */}
        <div className="container-main relative z-10 w-full pt-32 md:pt-20 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-16">

            <div className="max-w-5xl">
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[4rem] leading-[0.85] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] font-black text-white tracking-tighter"
              >
                Visual<br />Designer
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-[420px]"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 md:mb-8 leading-[1.1]">
                Design meets Intelligence.
              </h2>
              <p className="text-white text-base md:text-xl leading-relaxed font-normal">
                Expert in crafting high-end digital experiences using premium AI tools and traditional design mastery. From Shopify stores to complete Brand Identities.
              </p>
            </motion.div>

          </div>

          {/* Service Indicators */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-16 md:gap-y-8 mt-8 md:mt-32">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-primary font-extrabold text-sm">{s.id}</span>
                <span className="text-white font-bold text-sm uppercase tracking-[0.2em]">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
