import { useState } from 'react';

const projects = [
  {
    title: "IoT object recognition using Machine Learning",
    description: "A modern Iot project that uses machine learning to recognize objects",
    image: "IoT.png",
    tags: ["Python", "OpenCV", "Arduino IDE"],
  },
  {
    title: "Web Development for Company Website", 
    description: "A dynamic website for a company that showcases their services and products",
    image: "web port.png",
    tags: ["Tailwind CSS", "React"],
  },
  {
    title: "User Interface Design for Mobile Apps and Web Apps",
    description: "Interactive and user-friendly designs for mobile and web applications",
    image: "UI port.png",
    tags: ["Figma", "Canva"],
  }
];

const Works = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="works" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal-text">Featured Works</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="reveal-slide group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-500 ${
                  hoveredProject === index ? 'translate-y-0' : 'translate-y-20'
                }`}>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Dot indicator - Positioned to the right on mobile */}
              <div className="absolute bottom-2 right-2 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-white/50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
