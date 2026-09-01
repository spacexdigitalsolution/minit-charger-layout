import Link from 'next/link';

/**
 * Footer Component
 * 
 * Global footer with navigation links, contact info, and copyright.
 * 
 * @returns {JSX.Element}
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-[#EEF5F0]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5 font-display">
            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-ink-800 text-volt" aria-hidden="true">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
              </svg>
            </span>
            <span>MINIT<span className="font-bold text-volt">CHARGER</span></span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            25 years of industrial fast charging — smart chargers and AssetPro 360 for equipment that has to stay online.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist transition hover:border-volt hover:text-volt" aria-label="LinkedIn">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 8.5H3.5V20h3V8.5ZM5 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5 3Zm15.5 7.3c0-2.4-1.6-4-4.1-4-1.6 0-2.6.7-3.2 1.6h-.1V8.5h-2.9c0 .8 0 11.5 0 11.5h3v-6.4c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20h3v-6.7Z" />
              </svg>
            </a>
            <a href="mailto:info@minitcharger.com" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist transition hover:border-volt hover:text-volt" aria-label="Email">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><Link href="/products" className="hover:text-volt transition">Products</Link></li>

            <li><Link href="/industries" className="hover:text-volt transition">Industries</Link></li>
            <li><Link href="/blog" className="hover:text-volt transition">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><Link href="/about" className="hover:text-volt transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-volt transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-volt transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-volt transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-mist/70 sm:flex-row lg:px-8">
          <p>© {currentYear} Minit Charger. All rights reserved.</p>
          <p>Industrial battery chargers · Fleet charging management · Chandler, AZ</p>
        </div>
      </div>
    </footer>
  );
}
