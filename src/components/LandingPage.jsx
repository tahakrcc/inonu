import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaTwitch, FaUser, FaSearch, FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppPopup = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                width: '320px',
                background: 'rgba(10, 5, 15, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '1.5rem',
                border: '1px solid rgba(139, 0, 255, 0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(139, 0, 255, 0.1)'
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                }}
            >
                <FaTimes />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    fontSize: '2rem',
                    color: '#fff',
                    boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)'
                }}>
                    <FaWhatsapp />
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', fontFamily: "'Rajdhani', sans-serif" }}>
                    TOPLULUĞUMUZA KATILIN
                </h3>
                <p style={{ color: '#b3b3b3', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                    Sohbet etmek ve haberlerden anında haberdar olmak için gruplarımıza katıl!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                    <motion.a
                        href="https://chat.whatsapp.com/BeRZU8uHydeGdbOGsx4KO5"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, background: '#1da851' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '0.8rem',
                            background: '#25D366',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}
                    >
                        DUYURU GRUBU <FaWhatsapp />
                    </motion.a>

                    <motion.a
                        href="https://chat.whatsapp.com/F4oSbpRHYgEEH0udtIXuj0"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '0.8rem',
                            background: 'rgba(255,255,255,0.05)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        SOHBET GRUBU <FaWhatsapp />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const GameCard = ({ game }) => {
    return (
        <motion.a
            href={game.url || `#${game.slug}`}
            target={game.url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="glass-panel game-card"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                textDecoration: 'none',
                height: '320px',
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to top, ${game.color}CC 0%, transparent 60%)`,
                opacity: 0.1,
                zIndex: 0
            }} />

            <div style={{
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                background: 'rgba(0,0,0,0.3)',
                padding: '1.5rem'
            }}>
                <motion.img
                    src={game.logo}
                    alt={game.name}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '120px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                    }}
                    whileHover={{ scale: 1.1, filter: `drop-shadow(0 0 20px ${game.color})` }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}
                />
                <h3 style={{
                    display: 'none',
                    fontSize: '2rem',
                    color: '#fff',
                    fontFamily: "'Rajdhani', sans-serif"
                }}>
                    {game.shortName || game.name}
                </h3>
            </div>

            <div style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 1
            }}>
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        marginBottom: '0.4rem'
                    }}>
                        {game.name}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{
                            fontSize: '0.7rem',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: 'rgba(255,255,255,0.1)',
                            color: '#b3b3b3'
                        }}>
                            {game.genre}
                        </span>
                        {game.hot && (
                            <span style={{
                                fontSize: '0.7rem',
                                padding: '3px 8px',
                                borderRadius: '4px',
                                background: 'rgba(255, 70, 85, 0.2)',
                                color: '#ff4655',
                                border: '1px solid rgba(255, 70, 85, 0.4)'
                            }}>
                                🔥 HOT
                            </span>
                        )}
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '1rem'
                }}>
                    <span style={{ fontSize: '0.85rem', color: game.color, fontWeight: '700', letterSpacing: '1px' }}>FORUMA GİT</span>
                    <motion.div
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff'
                        }}
                        whileHover={{ x: 5, background: game.color }}
                    >
                        →
                    </motion.div>
                </div>
            </div>
        </motion.a>
    );
};

const games = [
    {
        id: 1,
        name: 'League of Legends',
        shortName: 'LoL',
        slug: 'lol',
        logo: '/games/lol.png',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfjFK39zT2HHFIY1RnStuXlM6UIHEUfp3rvdYzuUxJQ0vczhw/viewform?usp=publish-editor',
        color: '#c9a03c',
        genre: 'MOBA',
        hot: true
    },
    {
        id: 2,
        name: 'Valorant',
        slug: 'valorant',
        logo: '/games/valorant.png',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSehkv3aCRKSDd2SfKlHuZGLtNk_bZDpwYz9nJtLr7cDEJhcnQ/viewform?usp=publish-editor',
        color: '#ff4655',
        genre: 'FPS',
        hot: true
    },
    {
        id: 3,
        name: 'Counter-Strike 2',
        shortName: 'CS2',
        slug: 'cs2',
        logo: '/games/cs2.png',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd3aWjHLGrXkd9foGI06sefQHZvl-phI8Aucgqj9x_udAgTwA/viewform?usp=publish-editor',
        color: '#de9b35',
        genre: 'FPS',
        hot: true,
        scale: 1.3
    },
    {
        id: 4,
        name: 'Wild Rift',
        slug: 'wild-rift',
        logo: '/games/wildrift.png',
        url: 'https://docs.google.com/forms/d/18x7dpUqzvaShKR8HXJMlJDIps8XeW7aY9Daz4vmM1e8/viewform',
        color: '#00a0ea',
        genre: 'Mobile MOBA'
    },
    {
        id: 5,
        name: 'PUBG Mobile',
        slug: 'pubg-mobile',
        logo: '/games/pubg.png',
        url: 'https://docs.google.com/forms/d/1hQBN8_CXCXqqjz_0glilmzhCbfgpnRtEcGeygB-A2Zw/viewform',
        color: '#f2a900',
        genre: 'Battle Royale'
    },
    {
        id: 6,
        name: 'Mobile Legends',
        shortName: 'MLBB',
        slug: 'mobile-legends',
        logo: '/games/mobilelegends.png',
        url: 'https://docs.google.com/forms/d/19yyicIKJoodGy3Gm4htf6lujL9IOptuQc3R0GlmW_Go/viewform',
        color: '#ceba96',
        genre: 'Mobile MOBA'
    },
    {
        id: 7,
        name: 'Brawl Stars',
        slug: 'brawl-stars',
        logo: '/games/brawlstars.png',
        url: 'https://docs.google.com/forms/d/1aT3y5tHPyld3MRNI_x2hgDKw5foIz-PdVAIoeXqkBq4/viewform',
        color: '#ffc700',
        genre: 'Action'
    },
];

const LandingPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
            setHasBeenShown(true);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence>
                {showPopup && <WhatsAppPopup onClose={() => setShowPopup(false)} />}
            </AnimatePresence>

            {/* Floating WhatsApp Button (shown when popup is closed) */}
            <AnimatePresence>
                {!showPopup && hasBeenShown && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowPopup(true)}
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            right: '30px',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: '#25D366',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.8rem',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                        }}
                    >
                        <FaWhatsapp />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Navbar */}
            <motion.nav
                className="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src="/logoo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Rajdhani', sans-serif", color: '#fff' }}>
                        İnönü <span style={{ color: '#8b00ff' }}>E-Spor</span>
                    </span>
                </div>

                <div className="nav-links">
                    <a href="#" style={{ fontSize: '1rem', color: '#fff', fontWeight: '700', letterSpacing: '1px' }} className="glow-hover">
                        FORUM
                    </a>
                </div>

                <div style={{ width: '40px' }} /> {/* Spacer to keep layout balanced */}
            </motion.nav>

            {/* Hero Section */}
            {/* Game Grid Section */}
            <section style={{ padding: '8rem 1.5rem 6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to bottom, transparent, rgba(139,0,255,0.05))' }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>POPÜLER FORUMLAR</h2>
                            <div style={{ height: '4px', width: '80px', background: 'linear-gradient(90deg, #8b00ff, #00f3ff)', borderRadius: '2px' }} />
                        </div>
                        <a href="#" style={{ color: '#b3b3b3', fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }} className="glow-hover">TÜMÜNE GÖZ AT →</a>
                    </motion.div>

                    <div className="game-grid">
                        {games.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '4rem 2rem', textAlign: 'center', color: 'rgba(255,255,255,0.25)', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#030007' }}>
                <p style={{ fontSize: '0.95rem', letterSpacing: '1px' }}>© 2024 İnönü E-Spor Topluluğu. <br /> <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.8rem' }}>Design by AntiGravity</span></p>
            </footer>
        </div>
    );
};

export default LandingPage;
