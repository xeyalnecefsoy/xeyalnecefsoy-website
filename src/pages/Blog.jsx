export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to WebAssembly and Edge Computing.",
      date: "March 15, 2024",
      category: "Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2340&auto=format&fit=crop",
      authorName: "Khayal Najafsoy"
    },
    {
      id: 2,
      title: "Mastering UI/UX Design",
      excerpt: "Essential principles and practices for creating exceptional user experiences. Deep dive into modern design systems and accessibility.",
      date: "March 10, 2024",
      category: "Design",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2340&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2340&auto=format&fit=crop",
      authorName: "Khayal Najafsoy"
    },
    {
      id: 3,
      title: "Creative Process Unveiled",
      excerpt: "A deep dive into my creative process and how I approach new projects, from ideation to final delivery and client satisfaction.",
      date: "March 5, 2024",
      category: "Creativity",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2340&auto=format&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2340&auto=format&fit=crop",
      authorName: "Khayal Najafsoy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop" 
            alt="Blog Header" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/95 to-black"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-blue-200 text-lg">
              Thoughts, learnings, and perspectives on development, design, and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-blue-900/20 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">
                    {post.category}
                  </span>
                  <span className="text-sm text-blue-300">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-blue-100 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-blue-200 mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-blue-800">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.authorName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-blue-300">{post.authorName}</span>
                  </div>
                  <span className="text-sm text-blue-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <div className="relative p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop" 
                alt="Newsletter Background" 
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-blue-900/50"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
              <p className="text-blue-200 mb-6">Get the latest articles and insights directly in your inbox.</p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-800 focus:border-blue-400 focus:outline-none text-blue-100"
                />
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/30">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 