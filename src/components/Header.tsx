import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Cosmo A', href: '/cosmo-a' },
    { label: 'Cosmo B', href: '/cosmo-b' },
    { label: 'Cosmo C', href: '/cosmo-c' },
    { label: 'Cosmo D', href: '/cosmo-d' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    } ${isMenuOpen ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent' }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/"><span className={`text-xl font-bold transition-colors duration-300  ${
              isMenuOpen || isScrolled ? 'text-gray-900' : 'text-white'
            } `}>
              Quasar Mobiles
            </span></Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
              <NavLink key={item.label} to={item.href}>
                <li
                key={item.label}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </li>
              </NavLink>
            ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled || isMenuOpen
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2">
            <ul>
            {navItems.map((item) => (
             <NavLink to={item.href} key={item.label}>
              <li
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </li>
              </NavLink>
            ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;