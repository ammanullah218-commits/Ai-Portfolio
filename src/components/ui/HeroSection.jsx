import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-secondary/20" />
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <span className="animation-badge-scroll">
              ✨ Welcome to the Future
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Master <span className="gradient-text">Artificial Intelligence</span>
            <br />
            Shape Tomorrow's World
          </h1>
          
          <p className="text-xl text-light/70 max-w-2xl mx-auto mb-8">
            Join the leading AI education platform that transforms beginners into industry-ready AI professionals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-dark font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Start Learning Now
            </button>
            <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;