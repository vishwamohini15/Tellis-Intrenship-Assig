import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Dummy data for navigation items
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Mortgage Calculator', href: '/calculator' },
    { label: 'StartPage', href: '/start' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location, setLocation] = useState(''); // Initialize with empty string
    const headerRef = useRef(null);

     useEffect(() => {
        if (typeof window !== 'undefined') {
            setLocation(window.location.pathname);
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Function to handle click outside of mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen &&
                headerRef.current &&
                !(headerRef.current.contains(event.target))
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen, headerRef]); // Added headerRef as a dependency

    const isHomePage = location === '/';

    return (
        <header
            ref={headerRef}
            className={`header ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}
        >
            <div className="container">
                {/* Logo (Left) */}
                <div className="logo">
                    <a href="/" className="logo-link">
                        Better
                    </a>
                </div>

                {/* Desktop Navigation (Center) */}
                <nav className="nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={`nav-link ${location === item.href ? 'active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                   
                </nav>

                {/* Contact and Sign In (Right) */}
                <div className="contact-signin">
                    <div className="contact-info">
                        <span>📞</span>
                        <span>+123 456 7890</span>
                    </div>
                    <a href="/signin" className="signin-link">
                        Sign In
                    </a>
                    <button className="continue-button">
                        Continue
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="mobile-menu-button"
                        aria-label="Toggle Mobile Menu"
                    >
                        {isMobileMenuOpen ? (
                            <span className="mobile-menu-icon">✖</span>
                        ) : (
                            <span className="mobile-menu-icon">☰</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Full-Screen Overlay) */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-header">
                        <button
                            onClick={toggleMobileMenu}
                            className="mobile-menu-close-button"
                            aria-label="Close Mobile Menu"
                        >
                            <span className="mobile-menu-close-icon">✖</span>
                        </button>
                    </div>
                    <nav className="mobile-nav">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="mobile-nav-link"
                                onClick={toggleMobileMenu} // Close menu on item click
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="mobile-contact-signin">
                        <div className="mobile-contact-info">
                            <span>📞</span>
                            <span>+123 456 7890</span>
                        </div>
                        <a
                            href="/signin"
                            className="mobile-signin-link"
                        >
                            Sign In
                        </a>
                        <button className="mobile-continue-button">
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

