export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "AI Engineer at Google",
    quote: "This program transformed my career completely. Within 6 months, I went from knowing basic Python to landing my dream AI job at Google. The hands-on projects and mentorship were invaluable.",
    image: "/images/testimonials/sarah.jpg",
    rating: 5,
    socialLink: "https://linkedin.com/in/sarahjohnson",
    socialPlatform: "linkedin",
    program: "AI in Hands",
    before: "Marketing Manager",
    after: "AI Engineer at Google",
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "ML Researcher at OpenAI",
    quote: "The practical approach and real-world projects made all the difference. I finally understood how to apply AI concepts in research contexts. Highly recommend this to anyone serious about AI.",
    image: "/images/testimonials/michael.jpg",
    rating: 5,
    socialLink: "https://twitter.com/michaelchen",
    socialPlatform: "twitter",
    program: "AI in Hands",
    before: "Physics PhD Student",
    after: "ML Researcher at OpenAI",
    featured: true
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Startup Founder",
    quote: "The mentorship and community support are unparalleled. I launched my AI startup during the program and secured $500k in funding! The Be A Founder program is life-changing.",
    image: "/images/testimonials/priya.jpg",
    rating: 5,
    socialLink: "https://linkedin.com/in/priyapatel",
    socialPlatform: "linkedin",
    program: "Be A Founder",
    before: "Software Engineer",
    after: "Founder of AI Analytics Startup",
    featured: true
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Data Scientist",
    quote: "Best investment in my education ever. The curriculum is up-to-date, industry-relevant, and the projects are exactly what employers are looking for.",
    image: "/images/testimonials/david.jpg",
    rating: 5,
    socialLink: "https://twitter.com/davidkim",
    socialPlatform: "twitter",
    program: "AI in Hands",
    before: "Data Analyst",
    after: "Lead Data Scientist",
    featured: false
  },
  {
    id: 5,
    name: "Emma Watson",
    role: "Product Manager at Microsoft",
    quote: "Even as a non-technical professional, I gained enough AI knowledge to lead ML teams effectively. The program made complex concepts accessible and practical.",
    image: "/images/testimonials/emma.jpg",
    rating: 5,
    socialLink: "https://linkedin.com/in/emmawatson",
    socialPlatform: "linkedin",
    program: "AI Mastery Week",
    before: "Product Manager",
    after: "AI Product Lead at Microsoft",
    featured: false
  },
  {
    id: 6,
    name: "Alex Rivera",
    role: "AI Consultant",
    quote: "The network I built through this program is invaluable. I collaborate with alumni on amazing projects and have tripled my consulting rates since completing the course.",
    image: "/images/testimonials/alex.jpg",
    rating: 5,
    socialLink: "https://twitter.com/alexrivera",
    socialPlatform: "twitter",
    program: "AI in Hands",
    before: "Freelance Developer",
    after: "AI Strategy Consultant",
    featured: false
  },
  {
    id: 7,
    name: "Lisa Thompson",
    role: "Tech Lead at Amazon",
    quote: "Finally, an AI program that focuses on practical implementation rather than just theory! I was able to apply what I learned immediately to my work at Amazon.",
    image: "/images/testimonials/lisa.jpg",
    rating: 5,
    socialLink: "https://linkedin.com/in/lisathompson",
    socialPlatform: "linkedin",
    program: "AI in Hands",
    before: "Software Engineer",
    after: "Tech Lead at Amazon",
    featured: true
  },
  {
    id: 8,
    name: "James Wilson",
    role: "AI Entrepreneur",
    quote: "The business focus alongside technical skills prepared me for real-world challenges. My startup was accepted into Y Combinator right after finishing the program!",
    image: "/images/testimonials/james.jpg",
    rating: 5,
    socialLink: "https://twitter.com/jameswilson",
    socialPlatform: "twitter",
    program: "Be A Founder",
    before: "ML Engineer",
    after: "YC-backed Founder",
    featured: false
  },
  {
    id: 9,
    name: "Nina Gupta",
    role: "Research Assistant at Stanford",
    quote: "The instructors are industry experts who share their real experiences and insights. This program gave me the edge I needed for my research career.",
    image: "/images/testimonials/nina.jpg",
    rating: 5,
    socialLink: "https://linkedin.com/in/ninagupta",
    socialPlatform: "linkedin",
    program: "AI in Hands",
    before: "Undergraduate Student",
    after: "Research Assistant at Stanford",
    featured: false
  },
  {
    id: 10,
    name: "Tom Harris",
    role: "Senior ML Engineer",
    quote: "I got promoted within 3 months of completing this program. Worth every penny! The project portfolio I built was the key differentiator.",
    image: "/images/testimonials/tom.jpg",
    rating: 5,
    socialLink: "https://twitter.com/tomharris",
    socialPlatform: "twitter",
    program: "AI in Hands",
    before: "Junior Developer",
    after: "Senior ML Engineer",
    featured: true
  }
];

export const getFeaturedTestimonials = () => {
  return testimonialsData.filter(testimonial => testimonial.featured);
};

export const getTestimonialsByProgram = (programName) => {
  if (programName === "All") return testimonialsData;
  return testimonialsData.filter(testimonial => testimonial.program === programName);
};