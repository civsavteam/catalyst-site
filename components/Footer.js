import Link from 'next/link';

/**
 * Site footer component
 *
 * The footer replicates the content and structure of the existing Catalyst
 * Communications Network site. It provides quick links to key site
 * sections, contact details and social icons. Feel free to customise
 * or pull these values from Sanity when your CMS is configured.
 */
export default function Footer() {
  return (
    <footer className="bg-neutral-light border-t border-neutral-light py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo and contact info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-primary">Catalyst</span>
          </div>
          <p>400 Interstate North Parkway SE, Suite 560,<br />Atlanta, GA 30339</p>
          <p className="mt-2">(515) 955-1600</p>
          <p className="mt-2">
            <a href="mailto:info@catcomnet.com" className="hover:underline">info@catcomnet.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Simple social icons using inline SVGs */}
            <a href="#" aria-label="Facebook" className="text-primary hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-primary hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.75h3.96V21H3V8.75ZM8.67 8.75H12.5v1.67h.05a4.06 4.06 0 0 1 3.65-2c3.9 0 4.62 2.56 4.62 5.88V21h-3.95v-5.96c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.29 1.54-2.29 3.14V21H8.67V8.75Z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Brands */}
        <div>
          <h3 className="font-semibold mb-3">Brands</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-primary">Farmers Hot Line</Link></li>
            <li><Link href="#" className="hover:text-primary">AcreageLife</Link></li>
            <li><Link href="#" className="hover:text-primary">Chicken Whisperer Magazine</Link></li>
            <li><Link href="#" className="hover:text-primary">Contractors Hot Line</Link></li>
            <li><Link href="#" className="hover:text-primary">Crane Hot Line</Link></li>
            <li><Link href="#" className="hover:text-primary">Lift &amp; Access</Link></li>
            <li><Link href="#" className="hover:text-primary">Industrial Machine Trader</Link></li>
          </ul>
        </div>
        {/* Markets */}
        <div>
          <h3 className="font-semibold mb-3">Markets</h3>
          <ul className="space-y-2">
            <li><Link href="/markets#agriculture" className="hover:text-primary">Agriculture</Link></li>
            <li><Link href="/markets#construction" className="hover:text-primary">Construction</Link></li>
            <li><Link href="/markets#industrial" className="hover:text-primary">Industrial</Link></li>
          </ul>
        </div>
        {/* Press and Contact */}
        <div>
          <h3 className="font-semibold mb-3">Press</h3>
          <ul className="space-y-2 mb-6">
            <li><Link href="/insights" className="hover:text-primary">Blog</Link></li>
          </ul>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-primary">Get in Touch</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-neutral-dark/50">
        © {new Date().getFullYear()} Catalyst Communications Network
      </div>
    </footer>
  );
}