import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", target: "/" },
  { name: "About", target: "/about" },
  { name: "Projects", target: "/portfolio" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-background/90 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 md:px-12">
        <Link
          to="/"
          className="group flex items-center text-xl font-bold tracking-tight text-white cursor-pointer"
          aria-label="Home"
        >
          {/* I → I' */}
          <span className="flex">
            <span>I</span>
            <span className="inline-block max-w-0 group-hover:max-w-[1ch] overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">'</span>
          </span>
          {/* M → MARCANTONIO */}
          <span className="flex ml-[0.3em]">
            <span>M</span>
            <span className="inline-block max-w-0 group-hover:max-w-[10ch] overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">ARCANTONIO</span>
          </span>
          {/* B → BIANCO */}
          <span className="flex ml-[0.3em]">
            <span>B</span>
            <span className="inline-block max-w-0 group-hover:max-w-[5ch] overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">IANCO</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.target}
                className={`text-[13px] transition-colors duration-300 uppercase tracking-wider ${location.pathname === link.target ? "text-primary font-bold" : "text-white hover:text-primary font-medium"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                const footer = document.querySelector("#contacts");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
                else navigate("/#contacts");
              }}
              className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full hover:bg-primary transition-all duration-500 font-bold text-[13px] group outline-none"
            >
              Get in touch
              <div className="bg-black text-white p-1 rounded-full group-hover:bg-black transition-colors">
                <ArrowUpRight className="w-3.2 h-4" />
              </div>
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-white p-2 focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.target}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold text-white hover:text-primary transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-black px-10 py-5 rounded-full font-bold text-lg"
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
