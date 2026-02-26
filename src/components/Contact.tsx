import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Send } from "lucide-react";

// Custom icons for WhatsApp and Telegram since they aren't in Lucide standard
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.173 1.597 5.987L0 24l6.166-1.617a11.823 11.823 0 005.88 1.562h.005c6.604 0 11.967-5.361 11.97-11.97 0-3.201-1.244-6.21-3.504-8.471z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.441-.168.575-.532 1.151-1.026 1.151-.494 0-.858-.576-1.151-.858-.458-.444-1.921-1.246-2.583-1.745-.168-.124-.43-.347-.116-.615.424-.366 2.454-2.28 3.583-3.321.144-.132.284-.33.099-.444-.185-.114-.41-.033-.585.084-.347.234-5.319 3.498-6.113 4.02-.314.204-.616.303-.906.297-.321-.006-.826-.186-1.121-.297-.458-.168-.826-.254-.799-.54.014-.15.228-.303.642-.459 2.52-1.096 4.201-1.83 5.043-2.2 2.396-.943 2.893-1.107 3.218-1.113.072 0 .232.018.335.097.086.066.115.155.123.238.008.084.004.168-.01.252z" />
  </svg>
);

const Contact = () => {
  return (
    <footer id="contacts" className="relative py-20 md:py-32 bg-[#050505] border-t border-white/10">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-bold text-sm mb-6 uppercase tracking-[0.3em]">Collaborate</p>
            <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-10 text-white leading-tight tracking-tighter">
              READY TO<br />START?
            </h2>
            <p className="text-white text-base md:text-xl font-medium max-w-md mb-10 md:mb-16 leading-relaxed">
              Let's create something extraordinary. Whether it's a new brand, a Shopify store, or an AI-driven digital product.
            </p>

            <div className="space-y-10">
              <a href="mailto:info@marcantoniobianco.com" className="flex items-center gap-6 group w-fit">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors italic tracking-tight break-all md:break-normal">info@marcantoniobianco.com</span>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 text-white flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-base md:text-xl font-bold text-white tracking-tight italic">Caserta, Italy — Available Worldwide</span>
              </div>
            </div>

            {/* Social Logos Section */}
            <div className="mt-20 flex flex-wrap gap-4 text-white">
              {[
                { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
                { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "#" },
                { icon: <WhatsAppIcon />, name: "WhatsApp", url: "#" },
                { icon: <TelegramIcon />, name: "Telegram", url: "#" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-black text-black mb-8 md:mb-10 tracking-tight">TELL ME ABOUT YOUR PROJECT</h3>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Company name*</label>
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="your@mail.com"
                  className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Your message</label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-primary resize-none transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-black transition-all duration-500 group shadow-xl">
                SEND MESSAGE
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <span className="text-white text-xs font-black tracking-[0.3em]">© 2024 MARCANTONIO BIANCO</span>
            <span className="text-white text-xs font-black tracking-[0.3em] uppercase">Visual Designer & AI Expert</span>
          </div>
          <div className="flex gap-10 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
