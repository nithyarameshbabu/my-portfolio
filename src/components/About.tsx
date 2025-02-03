import { Code, Briefcase, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal-text">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 reveal-slide">
            <p className="text-xl text-gray-300 leading-relaxed">
            I am passionate about designing innovative and user-centric solutions that address real-world challenges. With a solid foundation in Al, data science, and creative problem-solving. I aim to merge technology and design to craft impactful experiences that inspire and innovate.

My journey the tech has been driven by curiosity and a constant desire to learn. I specialize in designing models, web development, creating intuitive solutions, and excelling in team management.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="card p-6 bg-gray-900 rounded-xl">
                <Code className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-400">Web development with modern technologies</p>
              </div>
              
              <div className="card p-6 bg-gray-900 rounded-xl">
                <User className="text-green-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-400">Creating intuitive and beautiful user experiences</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-slide-delayed">
            <div className="relative">
              <img 
                src="https://wallpaperaccess.com/full/3239444.jpg"
                alt="About Me"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-green-500 p-6 rounded-xl">
                <Briefcase size={32} />
                <p className="text-2xl font-bold mt-2">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;