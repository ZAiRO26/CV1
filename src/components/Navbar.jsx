import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'WORK' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between h-24 py-2">
        {/* Left side navigation - Desktop */}
        <div className="hidden md:flex gap-12 text-base font-medium tracking-wide items-center justify-center flex-1">
          {items.slice(0, 3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer hover:text-amber-600 transition-all duration-300 relative group py-2 ${
                  isActive ? 'text-amber-600' : 'text-gray-700'
                } ${isActive ? '[&>span]:w-full' : ''}`
              }
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
        
        {/* Center name - clickable to home with enhanced styling */}
        <NavLink 
          to="/" 
          className="font-bold text-3xl tracking-wider cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
        >
          RAVI SAXENA
        </NavLink>
        
        {/* Right side navigation - Desktop */}
        <div className="hidden md:flex gap-12 text-base font-medium tracking-wide items-center justify-center flex-1">
          {items.slice(3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer hover:text-amber-600 transition-all duration-300 relative group py-2 ${
                  isActive ? 'text-amber-600' : 'text-gray-700'
                } ${isActive ? '[&>span]:w-full' : ''}`
              }
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile menu placeholder for spacing */}
        <div className="md:hidden w-12"></div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute inset-x-0 top-24 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg z-50">
          <div className="container mx-auto px-6 py-8">
            <div className="grid gap-2">
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-4 px-6 rounded-xl hover:bg-amber-50 transition-all duration-200 text-base font-medium tracking-wide touch-manipulation ${
                      isActive ? 'text-amber-600 bg-amber-50' : 'text-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}