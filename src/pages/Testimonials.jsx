import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/ui/TestimonialCard';

const Testimonials = () => {
  // Sample testimonials data - expand to 10 items
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "AI Engineer at Google",
      quote: "This program transformed my career completely. Within 6 months, I went from knowing basic Python to landing my dream AI job.",
      image: "/images/testimonials/sarah.jpg",
      socialLink: "https://linkedin.com/in/sarah",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "ML Researcher",
      quote: "The practical approach and real-world projects made all the difference. I finally understood how to apply AI concepts in business contexts.",
      image: "/images/testimonials/michael.jpg",
      socialLink: "https://twitter.com/michael",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Startup Founder",
      quote: "The mentorship and community support are unparalleled. I launched my AI startup during the program and secured funding!",
      image: "/images/testimonials/priya.jpg",
      socialLink: "https://linkedin.com/in/priya",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      quote: "Best investment in my education ever. The curriculum is up-to-date and industry-relevant.",
      image: "/images/testimonials/david.jpg",
      socialLink: "https://twitter.com/david",
      rating: 5
    },
    {
      name: "Emma Watson",
      role: "Product Manager",
      quote: "Even as a non-technical professional, I gained enough AI knowledge to lead ML teams effectively.",
      image: "/images/testimonials/emma.jpg",
      socialLink: "https://linkedin.com/in/emma",
      rating: 5
    },
    {
      name: "Alex Rivera",
      role: "AI Consultant",
      quote: "The network I built through this program is invaluable. I collaborate with alumni on amazing projects.",
      image: "/images/testimonials/alex.jpg",
      socialLink: "https://twitter.com/alex",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Tech Lead",
      quote: "Finally, an AI program that focuses on practical implementation rather than just theory!",
      image: "/images/testimonials/lisa.jpg",
      socialLink: "https://linkedin.com/in/lisa",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "AI Entrepreneur",
      quote: "The business focus alongside technical skills prepared me for real-world challenges.",
      image: "/images/testimonials/james.jpg",
      socialLink: "https://twitter.com/james",
      rating: 5
    },
    {
      name: "Nina Gupta",
      role: "Research Assistant",
      quote: "The instructors are industry experts who share their real experiences and insights.",
      image: "/images/testimonials/nina.jpg",
      socialLink: "https://linkedin.com/in/nina",
      rating: 5
    },
    {
      name: "Tom Harris",
      role: "Software Engineer",
      quote: "I got promoted within 3 months of completing this program. Worth every penny!",
      image: "/images/testimonials/tom.jpg",
      socialLink: "https://twitter.com/tom",
      rating: 5
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
            Student <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Hear what our amazing community has to say about their journey with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;