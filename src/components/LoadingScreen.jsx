import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#05000a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(139,0,255,0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <img src="/logoo.png" alt="Logo" style={{ height: '100px', width: 'auto', filter: 'drop-shadow(0 0 20px rgba(139, 0, 255, 0.4))' }} />
        </motion.div>
        <motion.h1
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 4rem)',
            fontWeight: '900',
            fontFamily: "'Rajdhani', sans-serif",
            letterSpacing: '10px',
            color: '#fff',
            textShadow: '0 0 30px rgba(139,0,255,0.8)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: '1.2'
          }}
          animate={{
            textShadow: [
              "0 0 30px rgba(139,0,255,0.8)",
              "0 0 50px rgba(0,243,255,0.8)",
              "0 0 30px rgba(139,0,255,0.8)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>İNÖNÜ</span>
          <span style={{ color: '#8b00ff', fontSize: '0.8em' }}>E-SPOR</span>
        </motion.h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '10px'
        }}>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, #8b00ff)' }} />
          <motion.span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.2rem',
              color: '#b3b3b3',
              letterSpacing: '5px',
              textTransform: 'uppercase'
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            E-SPOR MERKEZİ
          </motion.span>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, #8b00ff, transparent)' }} />
        </div>
      </motion.div>

      {/* Loading Bar */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        width: '300px',
        height: '2px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '1px',
        overflow: 'hidden'
      }}>
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #8b00ff, #00f3ff)',
            boxShadow: '0 0 10px #00f3ff'
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
