import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-blue-500 text-white">
      <div>Echo</div>
      <div>
        <Link href="/features">
          <a className="mx-2">Features</a>
        </Link>
        <Link href="/pricing">
          <a className="mx-2">Pricing</a>
        </Link>
        <Link href="/contact">
          <a className="mx-2">Contact</a>
        </Link>
      </div>
    </nav>
  );
}
