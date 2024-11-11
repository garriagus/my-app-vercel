import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>
        <Link href="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/about">
          <h1>About</h1>
        </Link>
        <Link href="/projects">
          <h1>Projects</h1>
        </Link>
        <Link href="/contact">
          <h1>Contact</h1>
        </Link>
      </div>
    </nav>
  );
}
