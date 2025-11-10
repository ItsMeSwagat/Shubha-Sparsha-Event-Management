import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Testimonials',
    path: '/testimonials'
  }, {
    name: 'Blog',
    path: '/blog'
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/shubha_sparsha_high_quality.png" alt="Shubha Sparsha" className=" h-40 w-max" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-brand-gold' : isScrolled ? 'text-gray-700 hover:text-brand-gold' : 'text-white hover:text-brand-gold-light'}`}>
                {link.name}
              </Link>)}
            <Link to="/contact" className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 px-4 rounded-lg font-medium transition-colors ${location.pathname === link.path ? 'bg-brand-cream text-brand-gold' : 'text-gray-700 hover:bg-gray-50'}`}>
                {link.name}
              </Link>)}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block mt-2 bg-gradient-to-r from-brand-gold to-brand-gold-light text-white px-4 py-3 rounded-lg font-semibold text-center">
              Contact Us
            </Link>
          </div>}
      </div>
    </nav>;
}