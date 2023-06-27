export default function Navbar() {
    return (
      <nav className="flex justify-between p-5 bg-blue-500 text-white">
        <div>Echo</div>
        <div>
          <a href="#features" className="mx-2">Features</a>
          <a href="/" className="mx-2">Pricing</a>
          <a href="#contact" className="mx-2">Contact</a>
        </div>
      </nav>
    );
  }
  