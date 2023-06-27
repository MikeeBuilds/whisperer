import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-blue-500 text-white">
      <div>Echo</div>
      <div>
        <Link href="/components/Features">
          <span className="mx-2 cursor-pointer">Features</span>
        </Link>
        <Link href="/components/pricing">
          <span className="mx-2 cursor-pointer">Pricing</span>
        </Link>
        <Link href="/components/contact">
          <span className="mx-2 cursor-pointer">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
