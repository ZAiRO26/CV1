import { NavLink } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Navbar() {
  const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Portfolio' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-black/10 bg-[rgb(var(--bg))]">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between h-14">
        {/* Left side navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          {items.slice(0, 3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer hover:text-accent ${isActive ? 'text-accent font-medium' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        
        {/* Center name - clickable to home */}
        <NavLink to="/" className="font-semibold text-lg hover:text-accent cursor-pointer">
          RAVI SAXENA
        </NavLink>
        
        {/* Right side navigation */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          {items.slice(3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer hover:text-accent ${isActive ? 'text-accent font-medium' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}