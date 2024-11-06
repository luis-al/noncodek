import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Bot,
  Moon,
  Sun,
  ChevronRight,
  MessageSquare,
  Zap,
  Shield,
} from 'lucide-react';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import BrandCarousel from './components/BrandCarousel';
import HeroAnimation from './components/HeroAnimation';
import SinglePost from './components/SinglePost';

function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                <a href="#index">NonCodek</a>
              </span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Custom Chatbots',
      description: 'Tailored AI solutions for your specific business needs',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Integration',
      description: 'Seamless implementation with your existing systems',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-16 relative dot-pattern overflow-hidden"
        id="index"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Transform Your Business with AI-Powered Conversations
            </h1>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 mb-8 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Create intelligent, engaging chatbots that understand your
              customers and drive results
            </p>
            <a href="#contacto">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-12">
            Trusted by Industry Leaders
          </h2>
          <BrandCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 dot-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/10 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />

      {/* Contact Section */}
      <section className="py-24 bg-secondary/50" id="contacto">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Bot className="w-8 h-8" />
            <span className="text-xl font-bold">NonCodek</span>
          </div>
          <p className="text-center text-white/80">
            © {new Date().getFullYear()} NonCodek. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
