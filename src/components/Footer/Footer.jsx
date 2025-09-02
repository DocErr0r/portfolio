import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
      <footer className="bg-[#bbe6fc] dark:bg-[#0f0b1b] py-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Connect with me on social media</p>
              <div className="flex justify-center space-x-6">
                  <a href="https://github.com/docerr0r" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      <AiOutlineGithub size={30} />
                  </a>
                  <a href="https://linkedin.com/in/nitin-k0" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      <AiOutlineLinkedin size={30} />
                  </a>
              </div>
              <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm">© {new Date().getFullYear()} Nitin. All rights reserved.</p>
          </div>
      </footer>
  );
};

export default Footer;
