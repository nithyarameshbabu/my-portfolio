import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault(); // Prevent default link behavior
    setIsMenuOpen(false); 

    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Adding slight delay
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold text-white">Nithya</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#milestones" className="nav-link">MILESTONES</a>
            <a href="#works" className="nav-link">WORKS</a>
            <a href="#resume" className="nav-link">RESUME</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block nav-link" onClick={(e) => handleNavClick(e, "#home")}>HOME</a>
            <a href="#about" className="block nav-link" onClick={(e) => handleNavClick(e, "#about")}>ABOUT</a>
            <a href="#milestones" className="block nav-link" onClick={(e) => handleNavClick(e, "#milestones")}>MILESTONES</a>
            <a href="#works" className="block nav-link" onClick={(e) => handleNavClick(e, "#works")}>WORKS</a>
            <a href="#resume" className="block nav-link" onClick={(e) => handleNavClick(e, "#resume")}>RESUME</a>
            <a href="#contact" className="block nav-link" onClick={(e) => handleNavClick(e, "#contact")}>CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
