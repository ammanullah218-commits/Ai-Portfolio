import React from 'react';
import { motion } from 'framer-motion';
import ProgramCard from '../components/ui/ProgramCard';

const Programs = () => {
  const programs = [
    {
      title: "AI in Hands",
      description: "Master practical AI implementation with hands-on projects and real-world applications",
      status: "active",
      icon: "🤖",
      features: [
        "12 weeks program",
        "5 real-world projects",
        "1-on-1 mentorship",
        "Career support"
      ]
    },
    {
      title: "Be A Founder",
      description: "Learn to build and scale AI startups from industry veterans",
      status: "upcoming",
      badge: "Coming Soon",
      icon: "🚀",
      features: [
        "Startup fundamentals",
        "Funding strategies",
        "Product development",
        "Investor networking"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Transform your career with our comprehensive AI education programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;