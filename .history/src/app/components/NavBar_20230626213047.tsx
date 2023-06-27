import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-blue-500 text-white">
      <div>
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">Echo</span>
          
      </div>
      <div>
        <Link href="/features">
          <span className="mx-2 cursor-pointer">Features</span>
        </Link>
        <Link href="/pricing">
          <span className="mx-2 cursor-pointer">Pricing</span>
        </Link>
        <Link href="/contact">
          <span className="mx-2 cursor-pointer">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
