import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">© 2024 Marcantonio Bianco. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/i_am_biancantonio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E85731] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/marcantoniobianco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E85731] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/marcantoniobiancow-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E85731] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}