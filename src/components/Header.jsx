import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-blue-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          KN
        </Link>
        <div className="space-x-8">
          {location.pathname === '/' ? (
            <>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </>
          ) : (
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          )}
          <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
        </div>
      </nav>
    </header>
  );
} 