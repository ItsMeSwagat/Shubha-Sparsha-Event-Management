import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/shubha_sparsha_high_quality.png" alt="Shubha Sparsha" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm mb-4">
              Creating unforgettable experiences through exceptional event
              planning and execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-gold-light transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-gold-light transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-gold-light transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-gold-light transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-brand-gold-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-gold-light transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold-light transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-gold-light transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brand-gold-light transition-colors">
                  Wedding Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold-light transition-colors">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold-light transition-colors">
                  Private Parties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold-light transition-colors">
                  Event Decoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold-light transition-colors">
                  Venue Management
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for event tips and exclusive offers.
            </p>
            <form className="space-y-2">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-brand-gold focus:outline-none text-white" />
              <button type="submit" className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-brand-gold-light" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-5 h-5 text-brand-gold-light" />
              <span>info@shubhasparsha.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-brand-gold-light" />
              <span>123 Event Plaza, New York, NY 10001</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shubha Sparsha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}