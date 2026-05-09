import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-gray-800 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold inline-block mb-4">
              <span className="gradient-text">AI</span>
              <span className="text-light"> Portfolio</span>
            </Link>
            <p className="text-light/60 text-sm mb-4">
              Empowering the next generation of AI professionals through practical education and real-world projects.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.72-11.97c0-.213-.005-.426-.015-.637A10.012 10.012 0 0023.953 4.57z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links - Working */}
          <div>
            <h3 className="font-semibold text-light mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light/60 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link to="/programs" className="text-light/60 hover:text-primary text-sm transition-colors">Programs</Link></li>
              <li><Link to="/mission" className="text-light/60 hover:text-primary text-sm transition-colors">Mission</Link></li>
              <li><Link to="/ai-tools" className="text-light/60 hover:text-primary text-sm transition-colors">AI Tools</Link></li>
              <li><Link to="/testimonials" className="text-light/60 hover:text-primary text-sm transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Resources - Simplified (No broken links) */}
          <div>
            <h3 className="font-semibold text-light mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Blog (Coming Soon)</a></li>
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Guides (Coming Soon)</a></li>
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company - Simplified */}
          <div>
            <h3 className="font-semibold text-light mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal - External links (no routes needed) */}
          <div>
            <h3 className="font-semibold text-light mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-light/60 hover:text-primary text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light/60 text-sm">
              © {currentYear} AI Portfolio. All rights reserved.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="px-4 py-2 bg-dark/50 rounded-lg text-sm text-light placeholder-light/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-dark rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;