import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Marcantonio Bianco</h3>
            <p className="text-white/60 text-sm">Creative Director & AI Specialist</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/i_am_biancantonio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#E85731] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcantoniobianco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#E85731] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/marcantoniobiancow-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#E85731] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Marcantonio Bianco. All rights reserved.
            </p>
          </div>
        </div>

        {/* Privacy Link */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <a
            href="/privacy-policy"
            className="text-white/40 hover:text-white/60 text-sm transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
