import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/**
 * Wraps any SVG icon with:
 *  - Spring scale + rotate on hover
 *  - Animated glare sweep on scroll-enter AND hover
 *  - Static baked-in highlight dot (top-left)
 */
const GlareWrapper = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-30px' });
    const [sweepKey, setSweepKey] = useState(0);

    useEffect(() => {
        if (isInView) {
            const t = setTimeout(() => setSweepKey(k => k + 1), delay);
            return () => clearTimeout(t);
        }
    }, [isInView, delay]);

    return (
        <motion.div
            ref={ref}
            className="relative overflow-hidden rounded-2xl mb-4 cursor-default select-none"
            style={{ width: 56, height: 56, flexShrink: 0 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            onHoverStart={() => setSweepKey(k => k + 1)}
            transition={{ type: 'spring', stiffness: 320, damping: 14 }}
        >
            {children}

            {/* Animated glare sweep */}
            <motion.div
                key={sweepKey}
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                    background:
                        'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.62) 50%, transparent 80%)',
                }}
                initial={{ x: '-120%' }}
                animate={{ x: '220%' }}
                transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            {/* Static micro glare dot — top-left corner */}
            <div
                className="absolute top-1.5 left-2.5 w-5 h-3 pointer-events-none z-10 rounded-full"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, transparent 70%)',
                }}
            />
        </motion.div>
    );
};

/* ─────────────────────────────────────────
   DATA INFRASTRUCTURE — 3-layer crystal discs (purple)
───────────────────────────────────────── */
export const DataInfraIcon = ({ delay = 0 }) => (
    <GlareWrapper delay={delay}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="di_bg" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b0d8a" />
                    <stop offset="1" stopColor="#12054a" />
                </linearGradient>
                <linearGradient id="di_top" x1="10" y1="13" x2="46" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f0abfc" />
                    <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="di_mid" x1="10" y1="22" x2="46" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="di_bot" x1="10" y1="31" x2="46" y2="39" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#3b0764" />
                </linearGradient>
                <linearGradient id="di_side_t" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
                <radialGradient id="di_glare" cx="0.32" cy="0.28" r="0.45">
                    <stop stopColor="white" stopOpacity="0.72" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Dark rounded background */}
            <rect width="56" height="56" rx="14" fill="url(#di_bg)" />

            {/* ── Bottom layer ── */}
            {/* Side walls */}
            <path d="M11 34 L11 38.5 C11 40.5 18 43.5 28 43.5 C38 43.5 45 40.5 45 38.5 L45 34 C45 36 38 39 28 39 C18 39 11 36 11 34Z" fill="url(#di_bot)" />
            {/* Top face */}
            <ellipse cx="28" cy="34" rx="17" ry="5" fill="url(#di_bot)" />

            {/* ── Middle layer ── */}
            <path d="M11 25.5 L11 30 C11 32 18 35 28 35 C38 35 45 32 45 30 L45 25.5 C45 27.5 38 30.5 28 30.5 C18 30.5 11 27.5 11 25.5Z" fill="url(#di_mid)" />
            <ellipse cx="28" cy="25.5" rx="17" ry="5" fill="url(#di_mid)" />

            {/* ── Top layer ── */}
            <path d="M11 17 L11 21.5 C11 23.5 18 26.5 28 26.5 C38 26.5 45 23.5 45 21.5 L45 17 C45 19 38 22 28 22 C18 22 11 19 11 17Z" fill="url(#di_top)" />
            <ellipse cx="28" cy="17" rx="17" ry="5" fill="url(#di_top)" />

            {/* Highlight stripe across top disc rim */}
            <ellipse cx="28" cy="17" rx="17" ry="5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

            {/* Baked-in glare on top disc surface */}
            <ellipse cx="21" cy="15.5" rx="7.5" ry="2.8" fill="url(#di_glare)" />
        </svg>
    </GlareWrapper>
);

/* ─────────────────────────────────────────
   BACKGROUND — Metallic shield with star (gold)
───────────────────────────────────────── */
export const BackgroundIcon = ({ delay = 0 }) => (
    <GlareWrapper delay={delay}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg_bg" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#431407" />
                    <stop offset="1" stopColor="#150500" />
                </linearGradient>
                <linearGradient id="bg_shield" x1="12" y1="6" x2="44" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fef08a" />
                    <stop offset="0.4" stopColor="#fbbf24" />
                    <stop offset="0.75" stopColor="#d97706" />
                    <stop offset="1" stopColor="#78350f" />
                </linearGradient>
                <linearGradient id="bg_bevel" x1="16" y1="10" x2="40" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fde68a" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#92400e" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="bg_glare" cx="0.3" cy="0.2" r="0.4">
                    <stop stopColor="white" stopOpacity="0.78" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="56" height="56" rx="14" fill="url(#bg_bg)" />

            {/* Shield body */}
            <path d="M28 7 L46 13.5 L46 31 C46 41 28 50 28 50 C28 50 10 41 10 31 L10 13.5 Z" fill="url(#bg_shield)" />

            {/* Inner bevel highlight — diagonal split look */}
            <path d="M28 11 L43 16.8 L43 31 C43 39 28 47 28 47 C28 47 13 39 13 31 L13 16.8 Z" fill="url(#bg_bevel)" />

            {/* Thin edge highlight on left side */}
            <path d="M10 13.5 L10 31 C10 38 16 43.5 22 47" fill="none" stroke="rgba(254,240,138,0.35)" strokeWidth="1.2" strokeLinecap="round" />

            {/* 5-point star */}
            <path
                d="M28 19 L30.2 25.2 L36.8 25.2 L31.5 29.1 L33.7 35.3 L28 31.4 L22.3 35.3 L24.5 29.1 L19.2 25.2 L25.8 25.2 Z"
                fill="white"
                opacity="0.94"
            />

            {/* Baked glare top-left of shield */}
            <ellipse cx="19.5" cy="11.5" rx="6.5" ry="2.8" fill="url(#bg_glare)" />
        </svg>
    </GlareWrapper>
);

/* ─────────────────────────────────────────
   AI & ML — Hexagonal neural node (pink)
───────────────────────────────────────── */
export const AIMLIcon = ({ delay = 0 }) => (
    <GlareWrapper delay={delay}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ai_bg" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4a0521" />
                    <stop offset="1" stopColor="#160210" />
                </linearGradient>
                <linearGradient id="ai_hex" x1="6" y1="6" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f9a8d4" />
                    <stop offset="0.5" stopColor="#ec4899" />
                    <stop offset="1" stopColor="#881337" />
                </linearGradient>
                <radialGradient id="ai_center_grad" cx="0.5" cy="0.5" r="0.5">
                    <stop stopColor="#fce7f3" />
                    <stop offset="0.55" stopColor="#fbcfe8" />
                    <stop offset="1" stopColor="#ec4899" />
                </radialGradient>
                <radialGradient id="ai_glare" cx="0.28" cy="0.22" r="0.42">
                    <stop stopColor="white" stopOpacity="0.75" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="56" height="56" rx="14" fill="url(#ai_bg)" />

            {/* Outer hexagon */}
            <path d="M28 7 L44.5 16.5 L44.5 35.5 L28 45 L11.5 35.5 L11.5 16.5 Z" fill="url(#ai_hex)" />

            {/* Inner hexagon ring */}
            <path d="M28 12 L41 19.5 L41 32.5 L28 40 L15 32.5 L15 19.5 Z"
                fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />

            {/* Connection spokes from center → 6 corner nodes */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const cx = 28, cy = 26;
                const r = 10;
                return (
                    <line
                        key={i}
                        x1={cx} y1={cy}
                        x2={cx + r * Math.sin(rad)}
                        y2={cy - r * Math.cos(rad)}
                        stroke="rgba(255,255,255,0.38)"
                        strokeWidth="1"
                    />
                );
            })}

            {/* 6 outer nodes */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const cx = 28, cy = 26;
                const r = 10;
                return (
                    <circle
                        key={i}
                        cx={cx + r * Math.sin(rad)}
                        cy={cy - r * Math.cos(rad)}
                        r="2.2"
                        fill="white"
                        opacity={i === 0 || i === 3 ? 0.9 : 0.68}
                    />
                );
            })}

            {/* Center node glow ring */}
            <circle cx="28" cy="26" r="7" fill="url(#ai_center_grad)" opacity="0.35" />
            {/* Center node */}
            <circle cx="28" cy="26" r="5" fill="url(#ai_center_grad)" />
            {/* Center bright core */}
            <circle cx="28" cy="26" r="2.2" fill="white" opacity="0.97" />

            {/* Baked glare — top-left of hex */}
            <ellipse cx="18.5" cy="11" rx="7.5" ry="3" fill="url(#ai_glare)" />
        </svg>
    </GlareWrapper>
);
