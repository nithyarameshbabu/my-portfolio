import { GraduationCap, Award, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Resume Title with Download Icon */}
        <div className="flex items-center space-x-4 mb-16 reveal-text">
          <h2 className="text-4xl md:text-6xl font-bold">Resume</h2>
          <a 
            href="NithyaR_resume.pdf" // Ensure this path is correct
            download="Nithya_Resume.pdf"
            className="text-white hover:text-gray-400 transition-all flex items-center"
            title="Download Resume"
          >
            <Download size={32} />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12 reveal-slide">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <GraduationCap className="text-green-500" size={32} />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8">
                {[{
                  year: "2022 - Present",
                  title: "UG in B.Tech AI & DS",
                  school: "PSNACET"
                }, {
                  year: "2021 - 2022",
                  title: "Higher Secondary Education",
                  school: "S.B.O.A. Mat. Hr. Sec. School"
                }, {
                  year: "2019 - 2020",
                  title: "Secondary Education",
                  school: "S.B.O.A. Mat. Hr. Sec. School"
                }].map((edu, index) => (
                  <div key={index} className="card p-6 bg-gray-800 rounded-xl">
                    <span className="text-green-500">{edu.year}</span>
                    <h4 className="text-xl font-bold mt-2">{edu.title}</h4>
                    <p className="text-gray-400 mt-2">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal-slide-delayed">
            <div className="flex items-center space-x-4 mb-8">
              <Award className="text-yellow-500" size={32} />
              <h3 className="text-3xl font-bold">Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[{
                name: "React",
                percent: 60,
                color: "blue"
              }, {
                name: "Java",
                percent: 80,
                color: "green"
              }, {
                name: "SQL",
                percent: 80,
                color: "purple"
              }, {
                name: "UI/UX Design",
                percent: 85,
                color: "pink"
              }, {
                name: "Python",
                percent: 70,
                color: "yellow"
              }, {
                name: "Machine Learning",
                percent: 60,
                color: "red"
              }, {
                name: "Arduino C++",
                percent: 50,
                color: "red"
              }].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">{skill.name}</span>
                    <span className={`text-${skill.color}-500`}>{skill.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-${skill.color}-500 rounded-full`} style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 mt-12 mb-8">
              <Award className="text-yellow-500" size={32} />
              <h3 className="text-3xl font-bold">Soft Skills</h3>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {["Communication", "Teamwork", "Problem-Solving", "Adaptability", "Leadership"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
