import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        setHidden(latest > previous && latest > 150);
        setScrolled(latest > 40);
    });

    return (
        <motion.nav
            variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: '-120%', opacity: 0 } }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 w-full z-50 flex justify-center py-5 px-4 pointer-events-none"
        >
            <div className="pointer-events-auto glass-nav rounded-full px-8 py-3.5 flex items-center gap-8 transition-all duration-300">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                        {link.name}
                        {/* hover underline dot */}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gemini-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
