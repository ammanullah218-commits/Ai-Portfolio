export const resourcesData = [
  {
    id: 1,
    title: "AI Fundamentals Handbook",
    description: "Complete guide to AI basics, including key concepts, algorithms, and applications.",
    type: "PDF",
    downloads: 15234,
    pages: 245,
    language: "English",
    level: "Beginner",
    link: "/resources/ai-fundamentals.pdf",
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning Crash Course",
    description: "Video series covering ML essentials with practical examples and exercises.",
    type: "Video",
    duration: "4.5 hours",
    videos: 12,
    level: "Beginner to Intermediate",
    link: "/resources/ml-crash-course",
    featured: true
  },
  {
    id: 3,
    title: "Python for Data Science",
    description: "Interactive notebook collection for learning Python data science libraries.",
    type: "Notebook",
    downloads: 8765,
    files: 15,
    level: "Beginner",
    link: "/resources/python-data-science",
    featured: false
  },
  {
    id: 4,
    title: "Deep Learning Cheatsheet",
    description: "Quick reference guide for neural networks, architectures, and optimization.",
    type: "PDF",
    downloads: 12456,
    pages: 12,
    level: "Intermediate",
    link: "/resources/dl-cheatsheet.pdf",
    featured: true
  },
  {
    id: 5,
    title: "NLP Toolkit",
    description: "Collection of resources, libraries, and guides for Natural Language Processing.",
    type: "Resource Pack",
    downloads: 5432,
    items: 25,
    level: "Intermediate to Advanced",
    link: "/resources/nlp-toolkit",
    featured: false
  },
  {
    id: 6,
    title: "Computer Vision Workshop",
    description: "Hands-on workshop materials for image processing and CV applications.",
    type: "Workshop",
    duration: "3 hours",
    projects: 5,
    level: "Intermediate",
    link: "/resources/cv-workshop",
    featured: false
  },
  {
    id: 7,
    title: "AI Interview Preparation Guide",
    description: "Common interview questions, answers, and tips for AI/ML roles.",
    type: "PDF",
    downloads: 9876,
    pages: 89,
    level: "All Levels",
    link: "/resources/interview-guide.pdf",
    featured: true
  },
  {
    id: 8,
    title: "Research Papers Library",
    description: "Curated collection of influential AI research papers with summaries.",
    type: "Library",
    downloads: 4321,
    papers: 50,
    level: "Advanced",
    link: "/resources/research-papers",
    featured: false
  }
];

export const resourceTypes = ["All", "PDF", "Video", "Notebook", "Workshop", "Library", "Resource Pack"];

export const getFeaturedResources = () => {
  return resourcesData.filter(resource => resource.featured);
};

export const getResourcesByType = (type) => {
  if (type === "All") return resourcesData;
  return resourcesData.filter(resource => resource.type === type);
};