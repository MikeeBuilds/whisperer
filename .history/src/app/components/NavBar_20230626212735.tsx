import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-blue-500 text-white">
      <div>
        <Link href="/">
          <a className="cursor-pointer">Echo</a>
        </Link>
      </div>
      <div>
        <Link href="/features">
          <button className="mx-2 cursor-pointer">Features</button>
        </Link>
        <Link href="/pricing">
          <button className="mx-2 cursor-pointer">Pricing</button>
        </Link>
        <Link href="/contact">
          <button className="mx-2 cursor-pointer">Contact</button>
        </Link>
      </div>
    </nav>
  );
}
