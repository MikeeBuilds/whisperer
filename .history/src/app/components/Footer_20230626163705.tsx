import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-10 px-5 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">About</h3>
          <p>Echo is a transcription service that converts audio files to text.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <p>Email: info@echo.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Social</h3>
          <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" className="mr-3">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">
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
