import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Your message sent successfully!");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "f3c9ad0d-dec8-4514-9540-dc2aed0c176a"); 
    formData.append("redirect", "false");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data: { success: boolean; message: string } = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.error("Error:", data);
      setResult("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal-text">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 reveal-slide">
            <h3 className="text-2xl font-bold">Let's Talk About Your Project</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, color: "blue-500", label: "Mail Me", value: "nithyarameshbabu04@gmail.com" },
                { icon: Phone, color: "green-500", label: "Call Me", value: "9385411013" },
                { icon: MapPin, color: "purple-500", label: "Location", value: "Tamil Nadu, India" },
              ].map(({ icon: Icon, color, label, value }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${color}/20 rounded-full flex items-center justify-center`}>
                    <Icon className={`text-${color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold">{label}</h4>
                    <p className="text-gray-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="space-y-6 reveal-slide-delayed">
            {/* Hidden field for recipient email */}
            <input type="hidden" name="recipient" value="nithyarameshbabu04@gmail.com" />

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Name", type: "text", name: "name", placeholder: "Your Name" },
                { label: "Email", type: "email", name: "email", placeholder: "Your Email" },
              ].map(({ label, type, name, placeholder }, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium mb-2">{label}</label>
                  <input
                    type={type}
                    name={name}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder={placeholder}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none h-32"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>

            {/* Form submission status message */}
            {result && (
              <p className="text-center mt-4 text-gray-300">{result}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
