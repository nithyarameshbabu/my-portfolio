import { GraduationCap, Award, Download } from 'lucide-react';

const Resume = () => {
  function handleDownload(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = '${import.meta.env.BASE_URL}Nithya R - Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  }

  return (
    <section id="resume" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 reveal-text">Resume</h2>

        {/* Download Button for Desktop */}
        <div className="hidden md:flex justify-start mb-8">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </button>
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
                color: "bg-blue-500"
              }, {
                name: "Java",
                percent: 80,
                color: "bg-green-500"
              }, {
                name: "SQL",
                percent: 80,
                color: "bg-purple-500"
              }, {
                name: "UI/UX Design",
                percent: 85,
                color: "bg-pink-500"
              },{
                name: "Arduino C++",
                percent: 50,
                color: "bg-orange-500"
              }].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-gray-400">{skill.percent}%</span> {/* Set colorless percentage */}
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full`} 
                      style={{ width: `${skill.percent}%` }}
                    ></div>
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

        {/* Download Button for Mobile */}
        <div className="md:hidden flex justify-center mt-12">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
