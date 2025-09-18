import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure touch scrolling works properly
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close menu on click

    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const yOffset = -70; // Offset for fixed navbar
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold text-white">Nithya</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, "#home")}>HOME</a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, "#about")}>ABOUT</a>
            <a href="#milestones" className="nav-link" onClick={(e) => handleNavClick(e, "#milestones")}>MILESTONES</a>
            <a href="#works" className="nav-link" onClick={(e) => handleNavClick(e, "#works")}>WORKS</a>
            <a href="#resume" className="nav-link" onClick={(e) => handleNavClick(e, "#resume")}>RESUME</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, "#contact")}>CONTACT</a>
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
