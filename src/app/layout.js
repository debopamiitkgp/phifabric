import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'PhiFabric — The Physics of What Is',
  description: 'Exploring theoretical physics, cosmology, and the nature of reality through the analytical lens of a theoretical physicist.',
  openGraph: {
    title: 'PhiFabric — The Physics of What Is',
    description: 'Where computation meets thermodynamics. Where consciousness meets information theory.',
    siteName: 'PhiFabric',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <span>Φ</span>Fabric
            </Link>
            <ul className="nav-links">
              <li><Link href="/article">Explorations</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/subscribe">Subscribe</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <p style={{ marginBottom: 8 }}>
              Part of the Fabric family &middot;{' '}
              <a href="https://fifabric.com" className="fabric-link">FiFabric</a> &middot;{' '}
              <a href="https://phifabric.com" className="fabric-link">PhiFabric</a>
            </p>
            <p>&copy; 2026 PhiFabric. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
