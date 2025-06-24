import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Hero component for the home page
 * Features: Parallax background, animated text, CTA button
 * Props: showCTA (boolean) - whether to show the call-to-action button
 */
const Hero = ({ showCTA = true }) => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: heroY }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1639475234964-40e685025708" 
          alt="Luxury Event Venue"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Main Headline with animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6 work-sans-bold"
        >
          Create <span className="text-accent">Unforgettable</span> Moments
        </motion.h1>
        
        {/* Subtitle with animation */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300 inter-regular"
        >
          Transform your special occasions into extraordinary experiences with our premium event services and luxury venues.
        </motion.p>
        
        {/* CTA Button - conditionally rendered */}
        {showCTA && (
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-accent text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 inter-bold"
          >
            Explore Our Services
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Hero;