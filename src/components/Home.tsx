import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from 'typed.js';

const images = [
  "nithya.jpg",
  "nithya1.jpg",
  "nithya2.jpg"
];

const Home = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          'Through innovative design and strategic thinking',
          'we create brands that spark connections',
          'inspire loyalty, and elevate your message.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span ref={typedRef} className="text-xl md:text-2xl text-gray-300"></span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              CREATING<br />
              BRANDS THAT<br />
              CONNECT AND<br />
              INSPIRE
            </h1>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-4">
              <a href="mailto:nithyarameshbabu04@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-3xl text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://github.com/nithyarameshbabu" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/nithya-r-30b600265/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-white hover:text-gray-400 transition duration-300" />
              </a>
            </div>

            <a href="#contact" className="cta-button px-8 py-3 rounded-full text-black font-semibold inline-block">
              LET'S CONTACT
            </a>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="relative w-full flex justify-center items-center">
            <div className="image-gallery rounded-lg overflow-hidden shadow-2xl w-[400px] h-[500px] flex items-center justify-center">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          dotIndex === currentImage ? 'bg-white' : 'bg-white/50'
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
