export const programsData = [
  {
    id: 1,
    title: "AI in Hands",
    description: "Master practical AI implementation with hands-on projects and real-world applications. Learn by building actual AI solutions.",
    status: "active",
    badge: "Enrolling Now",
    icon: "🤖",
    duration: "12 weeks",
    level: "Intermediate",
    price: "$999",
    features: [
      "12 weeks intensive program",
      "5 real-world projects",
      "1-on-1 mentorship",
      "Career support & placement",
      "Industry-recognized certificate",
      "Lifetime access to materials",
      "Weekly live sessions",
      "Project portfolio building"
    ],
    curriculum: [
      "Week 1-2: Python for AI",
      "Week 3-4: Machine Learning Basics",
      "Week 5-6: Deep Learning Fundamentals",
      "Week 7-8: Computer Vision",
      "Week 9-10: NLP and Transformers",
      "Week 11-12: Capstone Project"
    ],
    startDate: "March 15, 2024",
    seatsLeft: 45
  },
  {
    id: 2,
    title: "Be A Founder",
    description: "Learn to build and scale AI startups from industry veterans and successful founders. Turn your AI ideas into profitable businesses.",
    status: "upcoming",
    badge: "Coming Soon",
    icon: "🚀",
    duration: "16 weeks",
    level: "Advanced",
    price: "$1499",
    features: [
      "Startup fundamentals",
      "Funding strategies & pitching",
      "Product development lifecycle",
      "Investor networking opportunities",
      "Legal & IP guidance",
      "Marketing & growth strategies",
      "Founder mentorship",
      "Demo day presentation"
    ],
    curriculum: [
      "Week 1-2: Ideation & Validation",
      "Week 3-4: Business Modeling",
      "Week 5-6: Product Development",
      "Week 7-8: Fundraising Basics",
      "Week 9-10: Marketing & Sales",
      "Week 11-12: Team Building",
      "Week 13-14: Scaling Operations",
      "Week 15-16: Pitch Perfect"
    ],
    startDate: "May 1, 2024",
    seatsLeft: 0,
    waitlistOpen: true
  },
  {
    id: 3,
    title: "AI Mastery Week",
    description: "Intensive one-week bootcamp covering essential AI concepts and practical applications.",
    status: "active",
    badge: "Limited Seats",
    icon: "⚡",
    duration: "1 week",
    level: "Beginner",
    price: "$499",
    features: [
      "5-day intensive training",
      "Daily hands-on labs",
      "Expert instructors",
      "Certificate of completion",
      "Community access"
    ],
    startDate: "March 1, 2024",
    seatsLeft: 20
  }
];

export const getProgramById = (id) => {
  return programsData.find(program => program.id === id);
};

export const getActivePrograms = () => {
  return programsData.filter(program => program.status === 'active');
};