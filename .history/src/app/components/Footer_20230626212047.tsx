import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-10 px-5 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">About</h3>
          <p>A transcription service that converts audio to text.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <p>Email: info@echo.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          
          <a
            href="https://twitter.com/algocodes_eth"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/AlgoHussle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© {new Date().getFullYear()} Echo</p>
      </div>
    </footer>
  );
}
