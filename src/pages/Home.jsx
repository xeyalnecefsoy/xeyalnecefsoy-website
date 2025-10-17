export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with React and Node.js",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Data visualization and analytics platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Mobile App Design",
      description: "Fitness tracking app UI/UX design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop"
    }
  ];

  return (
    <main>
      {/* Hero Section with Background */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/95 to-black"></div>
        </div>
        <div className="text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Khayal Najafsoy
          </h2>
          <div className="text-xl md:text-2xl text-blue-200 mb-8 space-y-2">
            <p>Creative Specialist</p>
            <p>Full-stack Developer</p>
            <p>Designer</p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/30">
              View Work
            </button>
            <button className="px-8 py-3 border border-blue-400 rounded-full hover:bg-blue-400/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2340&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-blue-200">
                I'm a creative specialist with expertise in full-stack development and design. 
                With a passion for creating beautiful and functional digital experiences, 
                I bring ideas to life through clean code and stunning visuals.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'UI/UX', 'Figma', 'AWS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-blue-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Background */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=2340&auto=format&fit=crop" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h3 className="text-3xl font-bold mb-12">Let's Work Together</h3>
          <p className="text-blue-200 mb-8">
            I'm always open to new projects and collaborations.
          </p>
          <a href="mailto:contact@example.com" 
             className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/30">
            Get in Touch
          </a>
          <div className="mt-12 flex justify-center gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
              <a key={platform} href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 