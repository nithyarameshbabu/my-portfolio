import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Milestones from './components/Milestones';
import Works from './components/Works';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Milestones />
      <Works />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;