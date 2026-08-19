import Link from 'next/link';

/**
 * Navbar Component
 * 
 * Global sticky navigation bar.
 * 
 * @returns {JSX.Element}
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#eef1f3]/90 backdrop-blur-md" id="nav">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-xl tracking-wide font-bold text-ink-950">
          <span className="flex items-center justify-center text-[#28A745]" aria-hidden="true">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
            </svg>
          </span>
          <span className="leading-tight">MINIT<br />CHARGER</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-900 lg:flex" aria-label="Primary">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/categories" className="hover:text-black transition">Categories</Link>
          <Link href="/products" className="hover:text-black transition">Products</Link>
          <Link href="/industries" className="hover:text-black transition">Industries</Link>
          <Link href="/blog" className="hover:text-black transition">Blog</Link>
          <Link href="/about" className="hover:text-black transition">About Us</Link>
        </nav>
        
        <div className="hidden items-center gap-4 sm:flex">
          <Link href="/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-bold shadow-sm transition hover:bg-gray-50">
            Contact
          </Link>
          <Link href="/products" className="rounded-full bg-[#4b3c99] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#362b80]">
            Find a Charger
          </Link>
        </div>

        <button className="flex flex-col gap-1.5 lg:hidden" id="navToggle" aria-label="Open menu" aria-expanded="false" type="button">
          <span className="block h-0.5 w-5 rounded bg-ink-900"></span>
          <span className="block h-0.5 w-5 rounded bg-ink-900"></span>
          <span className="block h-0.5 w-5 rounded bg-ink-900"></span>
        </button>
      </div>
    </header>
  );
}
