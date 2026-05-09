import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import Marquee from '../components/ui/Marquee';
import ProgramCard from '../components/ui/ProgramCard';
import ResourceCard from '../components/ui/ResourceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import BlogCard from '../components/ui/BlogCard';
import CountUp from '../components/animations/CountUp';
import { programsData, resourcesData, testimonialsData, blogsData } from '../data';

const Home = () => {
  const programImages = [
    { image: '/images/ai-icon.png', name: 'AI' },
    { image: '/images/ml-icon.png', name: 'ML' },
    { image: '/images/dl-icon.png', name: 'Deep Learning' },
  ];

  // Blog images data - with local images
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2026",
      description: "Explore the latest trends and breakthroughs in AI technology that will shape our future.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      date: "April 15, 2026",
      readTime: "5 min read",
      category: "AI Trends"
    },
    {
      id: 2,
      title: "Machine Learning: A Beginner's Guide",
      description: "Learn the fundamentals of machine learning and how to start your journey.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
      date: "April 10, 2026",
      readTime: "7 min read",
      category: "ML Basics"
    },
    {
      id: 3,
      title: "Deep Learning vs Neural Networks",
      description: "Understanding the key differences and applications of deep learning.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      date: "April 5, 2026",
      readTime: "6 min read",
      category: "Deep Learning"
    },
    {
      id: 4,
      title: "Top 10 AI Tools for Developers",
      description: "Discover the best AI tools that can boost your productivity in 2026.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop",
      date: "March 28, 2026",
      readTime: "4 min read",
      category: "AI Tools"
    },
    {
      id: 5,
      title: "Ethics in Artificial Intelligence",
      description: "Important considerations for responsible AI development and deployment.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      date: "March 20, 2026",
      readTime: "8 min read",
      category: "AI Ethics"
    },
    {
      id: 6,
      title: "Career Paths in AI Industry",
      description: "Guide to building a successful career in artificial intelligence.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      date: "March 15, 2026",
      readTime: "6 min read",
      category: "Career"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Section 1: Full Screen Hero */}
      <HeroSection />

      {/* Section 2: Trusted by Industry Leaders - BOXES ALWAYS VISIBLE + HALKHA MOVE */}
      <section className="py-20 bg-secondary/20 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="animation-badge-marquee text-lg px-6 py-2">
              🎯 Trusted by Industry Leaders
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-6 mb-4">
              Powered by <span className="gradient-text">Cutting-Edge</span>
              <br />
              Artificial Intelligence
            </h2>
            <p className="text-light/70 text-xl max-w-3xl mx-auto">
              Join 10,000+ companies building the future with our AI solutions
            </p>
          </div>

          {/* 6 Cards Grid - HALKHA MOVE (kabhi gaib nahi honge) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mt-12">
            {['AI', 'ML', 'Deep Learning', 'Computer Vision', 'NLP', 'Robotics'].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 0 }}
                animate={{ 
                  x: [0, 5, 0, -5, 0],
                  y: [0, -3, 0, 3, 0],
                }}
                transition={{
                  delay: i * 0.15,
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 
                              backdrop-blur-xl rounded-3xl p-8 md:p-10 text-center 
                              border border-primary/30 shadow-2xl hover:shadow-primary/30 
                              transition-all duration-500 min-w-[160px] md:min-w-[200px]">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    {i === 0 && '🧠'}
                    {i === 1 && '🤖'}
                    {i === 2 && '⚡'}
                    {i === 3 && '👁️'}
                    {i === 4 && '💬'}
                    {i === 5 && '🦾'}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                    {tech}
                  </h3>
                  <p className="text-light/50 text-sm mt-2 group-hover:text-light/70">
                    {i === 0 && 'Advanced Analytics'}
                    {i === 1 && 'Smart Automation'}
                    {i === 2 && 'Neural Networks'}
                    {i === 3 && 'Visual Recognition'}
                    {i === 4 && 'Language Understanding'}
                    {i === 5 && 'Autonomous Systems'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Counters - SLOW COUNTING ANIMATION */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[150px]">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  <CountUp end={500} suffix="+" duration={3} />
                </div>
                <p className="text-light/60 mt-2">Enterprise Clients</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[150px]">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  <CountUp end={10} suffix="M+" duration={3} />
                </div>
                <p className="text-light/60 mt-2">AI Models Trained</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[150px]">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  <CountUp end={98} suffix="%" duration={3} />
                </div>
                <p className="text-light/60 mt-2">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Program Cards */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              Choose from our comprehensive AI programs designed for your success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programsData.slice(0, 2).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Free Resources Grid - ZYADA CARDS (8 cards) */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-primary text-sm mb-4">
              🎓 What We Give
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Resources <span className="gradient-text">We Give</span>
            </h2>
            <p className="text-light/70 text-xl max-w-2xl mx-auto">
              Start learning with our curated free content
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 to 8 - Same as before */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">📘</div>
              <h3 className="text-xl font-bold text-primary mb-2">AI Fundamentals Guide</h3>
              <p className="text-light/60 text-sm mb-4">Free PDF guide covering AI basics</p>
              <div className="text-xs text-light/50 mb-4">📂 5,000+ downloads</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Get Resource →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-primary mb-2">ML Crash Course</h3>
              <p className="text-light/60 text-sm mb-4">Video series on machine learning</p>
              <div className="text-xs text-light/50 mb-4">🕒 2 hours of content</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Watch Now →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-primary mb-2">Deep Learning E-Book</h3>
              <p className="text-light/60 text-sm mb-4">Complete neural networks guide</p>
              <div className="text-xs text-light/50 mb-4">📄 200+ pages</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Read Free →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-primary mb-2">AI Tools Directory</h3>
              <p className="text-light/60 text-sm mb-4">Curated list of best AI tools</p>
              <div className="text-xs text-light/50 mb-4">🔧 100+ tools</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Explore →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-primary mb-2">Prompt Engineering Guide</h3>
              <p className="text-light/60 text-sm mb-4">Master AI prompt crafting</p>
              <div className="text-xs text-light/50 mb-4">✨ Best practices</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Learn →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🐍</div>
              <h3 className="text-xl font-bold text-primary mb-2">Python for AI</h3>
              <p className="text-light/60 text-sm mb-4">Complete Python course</p>
              <div className="text-xs text-light/50 mb-4">💻 50+ exercises</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Start →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-primary mb-2">Data Science Toolkit</h3>
              <p className="text-light/60 text-sm mb-4">Essential data science resources</p>
              <div className="text-xs text-light/50 mb-4">📈 30+ templates</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Download →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-2">ChatGPT Masterclass</h3>
              <p className="text-light/60 text-sm mb-4">Advanced ChatGPT techniques</p>
              <div className="text-xs text-light/50 mb-4">⚡ Pro tips</div>
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all">Enroll Free →</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials Preview - ZYADA CARDS (6 cards) */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-primary text-sm mb-4">
              ⭐ Real Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Student <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-light/70 text-xl max-w-2xl mx-auto">
              Hear from our amazing community
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial cards - Same as before */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">👨‍🎓</div>
                <div>
                  <h4 className="font-bold text-primary">Sarah Johnson</h4>
                  <p className="text-xs text-light/50">AI Engineer at Google</p>
                </div>
              </div>
              <p className="text-light/70 text-sm">"This program completely transformed my career. The hands-on projects and mentorship were invaluable!"</p>
              <div className="flex mt-4 text-yellow-500">★★★★★</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">👩‍💻</div>
                <div>
                  <h4 className="font-bold text-primary">Michael Chen</h4>
                  <p className="text-xs text-light/50">ML Researcher</p>
                </div>
              </div>
              <p className="text-light/70 text-sm">"The best AI education platform I've ever used. The curriculum is up-to-date and industry-relevant."</p>
              <div className="flex mt-4 text-yellow-500">★★★★★</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">👨‍💻</div>
                <div>
                  <h4 className="font-bold text-primary">Emily Rodriguez</h4>
                  <p className="text-xs text-light/50">Data Scientist</p>
                </div>
              </div>
              <p className="text-light/70 text-sm">"From beginner to professional in 6 months. The support system and community are amazing!"</p>
              <div className="flex mt-4 text-yellow-500">★★★★★</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">👩‍🎓</div>
                <div>
                  <h4 className="font-bold text-primary">David Kim</h4>
                  <p className="text-xs text-light/50">AI Startup Founder</p>
                </div>
              </div>
              <p className="text-light/70 text-sm">"The practical knowledge I gained helped me launch my own AI startup. Highly recommended!"</p>
              <div className="flex mt-4 text-yellow-500">★★★★★</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">👨‍🎓</div>
                <div>
                  <h4 className="font-bold text-primary">Lisa Wang</h4>
                  <p className="text-xs text-light/50">Product Manager</p>
                </div>
              </div>
              <p className="text-light/70 text-sm">"Excellent curriculum and instructors. I got promoted within 3 months of completing the course."</p>
              <div className="flex mt-4 text-yellow-500">★★★★★</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">👩‍💻</div>
                <div>
                  <h4 className="font-bold text-primary">James Wilson</h4>
                  <p className="text-xs text-light/50">Software Engineer</p>
                </div>
              </div>
              <p className="text-light/70 text-sm">"The projects were challenging but rewarding. I built a portfolio that impressed recruiters."</p>
              <div className="flex mt-4 text-yellow-500">★★★★★</div>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <CountUp end={5000} suffix="+" className="text-3xl font-bold text-primary" />
            <p className="text-light/60">Happy Students Worldwide</p>
          </div>
        </div>
      </section>

      {/* Section 6: Blog Category Section - AB 6 BLOGS (ZYADA) */}
      <section className="py-20 bg-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-primary text-sm mb-4">
              📝 Latest Articles
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Latest from <span className="gradient-text">Blog</span>
            </h2>
            <p className="text-light/70 text-xl max-w-2xl mx-auto">
              Insights and tutorials from AI experts
            </p>
          </motion.div>
          
          {/* 6 Cards Grid - Zyada blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-light/50 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-white transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-light/60 text-sm mb-4">
                    {blog.description}
                  </p>
                  <button className="text-primary text-sm font-semibold group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;