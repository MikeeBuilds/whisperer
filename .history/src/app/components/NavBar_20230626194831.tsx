import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-blue-500 text-white">
      <div>Echo</div>
      <div>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
