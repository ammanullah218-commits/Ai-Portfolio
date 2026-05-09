import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Mission = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.2 });

  const missionPoints = [
    {
      title: "The Problem",
      description: "AI education is either too theoretical or too expensive. Most courses leave students without practical skills needed in the industry. We're changing that.",
      icon: "⚠️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "What We're Building",
      description: "A comprehensive, project-based learning platform that bridges the gap between theory and real-world AI applications. Students build actual products.",
      icon: "🏗️",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Our Vision",
      description: "To democratize AI education and create the next generation of AI leaders who will shape our technological future. AI for everyone, everywhere.",
      icon: "👁️",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Our Name",
      description: "AI Portfolio represents your journey from learner to practitioner, building a portfolio of real projects that showcase your skills to employers.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const founderJourney = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a small community of AI enthusiasts sharing knowledge",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    },
    {
      year: "2022",
      title: "First Cohort",
      description: "Launched first program with 50 students who wanted hands-on experience",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded to 10,000+ students across 30 countries worldwide",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
    },
    {
      year: "2026",
      title: "The Future",
      description: "Continuing to innovate and make AI education accessible to all",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop" 
            alt="AI Mission"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm mb-6"
            >
              🎯 Our Mission
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Democratizing <span className="gradient-text">AI Education</span>
              <br />
              For Everyone
            </h1>
            <p className="text-xl text-light/70 max-w-2xl mx-auto">
              We believe that the future belongs to those who can harness the power of AI, 
              and we're on a mission to make that future accessible to all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Journey Section - Lamba aur Detailed */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Founder's Journey</span>
            </h2>
            <p className="text-light/70 text-lg max-w-2xl mx-auto">
              From a small idea to a global movement in AI education
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {founderJourney.map((item, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : ref4}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView1 || inView2 || inView3 || inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mb-16`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl group"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary/80 text-dark text-sm font-bold rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-light/70 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Photo & Story - Detailed */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop" 
                  alt="Founder - Amman"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Meet Our <span className="gradient-text">Founder</span>
              </h2>
              <p className="text-light/70 text-lg mb-4 leading-relaxed">
                After years of working in AI and seeing the gap between academic knowledge 
                and industry needs, our founder decided to create a solution that would 
                truly prepare students for real-world challenges.
              </p>
              <p className="text-light/70 text-lg mb-6 leading-relaxed">
                What started as a small community of AI enthusiasts has grown into a 
                movement that's training the next generation of AI professionals across 
                30+ countries worldwide.
              </p>
              <div className="flex gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-light/50 text-sm">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-light/50 text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-light/50 text-sm">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Points - One by One Animated */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Core Mission</span>
            </h2>
            <p className="text-light/70 text-lg max-w-2xl mx-auto">
              Guided by principles that put students first
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : ref4}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 || inView2 || inView3 || inView4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-gradient-to-br ${point.color} rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img 
                      src={point.image} 
                      alt={point.title}
                      className="w-full h-56 object-cover"
                    />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="text-5xl mb-4">{point.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{point.title}</h3>
                  <p className="text-light/70 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section with Images */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              The <span className="gradient-text">Transformation</span>
            </h2>
            <p className="text-light/70 text-lg max-w-2xl mx-auto">
              See how we're changing AI education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before Card */}
            <motion.div
              ref={ref5}
              initial={{ opacity: 0, x: -50 }}
              animate={inView5 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl overflow-hidden border border-red-500/30 hover:border-red-500/60 transition-all duration-300"
            >
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop" 
                alt="Before"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <div className="text-5xl mb-3">📚</div>
                <h3 className="text-2xl font-bold text-red-400 mb-3">Traditional Education</h3>
                <p className="text-light/70">Theoretical knowledge with no practical application. Students graduate without real-world skills.</p>
              </div>
            </motion.div>

            {/* After Card */}
            <motion.div
              ref={ref6}
              initial={{ opacity: 0, x: 50 }}
              animate={inView6 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl overflow-hidden border border-green-500/30 hover:border-green-500/60 transition-all duration-300"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=300&fit=crop" 
                alt="After"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <div className="text-5xl mb-3">🚀</div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">AI Portfolio Approach</h3>
                <p className="text-light/70">Project-based learning with real-world applications. Students graduate job-ready.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-light/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our programs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-full text-lg"
            >
              Explore Programs →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;