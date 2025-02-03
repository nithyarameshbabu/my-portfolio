import { Award } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'MAD AI 24hrs HACKATHON RUNNER UP',
    description: 'Developed a model for detecting and storing discarded coconut shells for future use',
    icon: Award
  },
  {
    year: '2024',
    title: '3 IDIOTS COMPETITION FINALIST',
    description: 'Developed idea for IoT machine to collect objects for recycling products',
    icon: Award
  },
  {
    year: '2023',
    title: 'YAVARUM KELIR IDEATHON WINNER',
    description: 'Showcased innovative problem-solving idea and teamwork skills',
    icon: Award
  }
];

const Milestones = () => {
  return (
    <section id="milestones" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal-text">Milestones</h2>

        <div className="relative">
          {/* Timeline Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>
          
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } reveal-slide`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="relative card p-8 bg-gray-800 rounded-xl">
                    <milestone.icon className="text-blue-500 mb-4" size={32} />
                    <span className="text-blue-500 font-bold">{milestone.year}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>

                    {/* Small Dot in Bottom-Right for Mobile ONLY */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-black md:hidden"></div>
                  </div>
                </div>

                {/* Keep the Original Big Dot in Desktop Layout */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-black mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
