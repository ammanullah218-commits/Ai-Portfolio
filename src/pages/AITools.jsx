import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AIToolCard from '../components/ui/AIToolCard';

const AITools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 18 AI Tools Data
  const aiToolsData = [
    { id: 1, name: "ChatGPT", description: "Advanced conversational AI for text generation and assistance. Perfect for content creation, coding help, and brainstorming ideas.", category: "Chat", icon: "💬", rating: 4.9 },
    { id: 2, name: "Midjourney", description: "AI art generator creating stunning images from text prompts. Ideal for digital artists and designers.", category: "Image", icon: "🎨", rating: 4.8 },
    { id: 3, name: "DALL-E 3", description: "OpenAI's image generation model with high accuracy and detail. Best for photorealistic images.", category: "Image", icon: "🖼️", rating: 4.8 },
    { id: 4, name: "Claude 3", description: "Anthropic's AI assistant for complex tasks with large context window. Great for analysis.", category: "Chat", icon: "🤖", rating: 4.7 },
    { id: 5, name: "GitHub Copilot", description: "AI pair programmer for code completion and suggestions. Supports multiple languages.", category: "Development", icon: "👨‍💻", rating: 4.9 },
    { id: 6, name: "Perplexity AI", description: "AI-powered search engine with citations and real-time information. Research assistant.", category: "Search", icon: "🔍", rating: 4.7 },
    { id: 7, name: "Runway ML", description: "AI video editing and generation tools for creators. Advanced ML capabilities.", category: "Video", icon: "🎥", rating: 4.6 },
    { id: 8, name: "Stable Diffusion", description: "Open-source text-to-image generation model. Customizable and community-driven.", category: "Image", icon: "🖌️", rating: 4.7 },
    { id: 9, name: "Bard AI", description: "Google's conversational AI assistant powered by Gemini. Real-time information access.", category: "Chat", icon: "🗣️", rating: 4.5 },
    { id: 10, name: "Adobe Firefly", description: "Creative AI for design and photography. Seamless integration with Adobe suite.", category: "Design", icon: "🎭", rating: 4.6 },
    { id: 11, name: "Synthesia", description: "AI video generation with digital avatars. Create professional videos without cameras.", category: "Video", icon: "📹", rating: 4.7 },
    { id: 12, name: "Copy.ai", description: "AI content writing and copy generation for marketing. Multiple templates available.", category: "Writing", icon: "✍️", rating: 4.5 },
    { id: 13, name: "Jasper AI", description: "AI content creation for marketing and business. SEO-optimized content generation.", category: "Writing", icon: "📝", rating: 4.6 },
    { id: 14, name: "Otter.ai", description: "AI meeting transcription and notes. Real-time collaboration features.", category: "Productivity", icon: "📋", rating: 4.5 },
    { id: 15, name: "Grammarly", description: "AI-powered writing assistant for grammar and style. Professional communication.", category: "Writing", icon: "📖", rating: 4.8 },
    { id: 16, name: "Lensa AI", description: "AI photo editing and avatar creation. Magic avatars and photo enhancement.", category: "Image", icon: "📸", rating: 4.4 },
    { id: 17, name: "Descript", description: "AI video and podcast editing like a doc. Overdub and screen recording.", category: "Video", icon: "🎙️", rating: 4.6 },
    { id: 18, name: "Hugging Face", description: "AI model hub and machine learning platform. Thousands of pre-trained models.", category: "Development", icon: "🤗", rating: 4.8 }
  ];

  const toolCategories = ['All', 'Chat', 'Image', 'Video', 'Writing', 'Development', 'Design', 'Search', 'Productivity'];

  const filteredTools = useMemo(() => {
    let tools = aiToolsData;
    
    if (selectedCategory !== 'All') {
      tools = tools.filter(tool => tool.category === selectedCategory);
    }
    
    if (searchTerm) {
      tools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return tools;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            AI Tools <span className="gradient-text">Directory</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Discover 18+ curated AI tools across 9+ categories to supercharge your workflow
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <input
            type="text"
            placeholder="🔍 Search AI tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-secondary/30 rounded-full text-light placeholder-light/50 focus:outline-none focus:ring-2 focus:ring-primary border border-white/10"
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {toolCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-dark font-semibold'
                  : 'bg-secondary/30 text-light/70 hover:bg-secondary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid - 3x6 = 18 boxes (LAMBAA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 18) * 0.03 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                {/* Icon and Rating */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-5xl">{tool.icon}</div>
                  <div className="flex items-center gap-1 bg-primary/20 px-2.5 py-1.5 rounded-full">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-light text-sm font-semibold">{tool.rating}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors duration-300">
                  {tool.name}
                </h3>
                
                {/* Description - Longer */}
                <p className="text-light/60 text-sm mb-4 leading-relaxed flex-grow">
                  {tool.description}
                </p>
                
                {/* Category Badge and Button */}
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
                    {tool.category}
                  </span>
                  <button className="text-primary hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                    Learn More <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Count */}
        {filteredTools.length > 0 && (
          <div className="text-center text-light/60 mb-8">
            Showing {filteredTools.length} of {aiToolsData.length} tools
          </div>
        )}

        {/* No Results Message */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-light mb-2">No tools found</h3>
            <p className="text-light/60">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Want to get your tool listed?
          </h2>
          <p className="text-light/70 mb-6 max-w-2xl mx-auto">
            Join our directory and reach thousands of AI enthusiasts and professionals
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            Submit Your Tool →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AITools;