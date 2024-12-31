import Link from 'next/link';
import React from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

const Header = () => {
    return (
        <header>
            <h1>
                <Link href='/'>logo</Link>
            </h1>

            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
