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
        <Link href="/features" passHref>
          <a className="mx-2 cursor-pointer">Features</a>
        </Link>
        <Link href="/pricing" passHref>
          <a className="mx-2 cursor-pointer">Pricing</a>
        </Link>
        <Link href="/contact" passHref>
          <a className="mx-2 cursor-pointer">Contact</a>
        </Link>
      </div>
    </nav>
  );
}
