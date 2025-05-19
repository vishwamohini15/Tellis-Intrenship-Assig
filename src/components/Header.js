import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Mortgage Calculator', href: '/calculator' },
    { label: 'StartPage', href: '/start' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location, setLocation] = useState('');
    const headerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLocation(window.location.pathname);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

        const isHomePage = location === '/';
    return (
        <header
            ref={headerRef}
             className={`header ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}
        >
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <a href="/" className="logo-link">Better</a>
                </div>

                {/* Desktop Navigation */}
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

                {/* Contact and Sign In */}
                <div className="contact-signin">
                    <div className="contact-info">
                        <span>📞</span>
                        <span>+123 456 7890</span>
                    </div>
                    <a href="/" className="signin-link">Sign In</a>
                    <a href="/">
                        <button className="continue-button">Continue</button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="mobile-menu-button"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMobileMenuOpen ? '✖' : '🎹'}
                </button>
            </div>

            {/* Side Sliding Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className="mobile-nav-link"
                            onClick={toggleMobileMenu}
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
                    <a href="/" className="mobile-signin-link">Sign In</a>
                    <button className="mobile-continue-button">Continue</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
