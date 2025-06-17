import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone,
  Server,
  Database,
  Globe,
  ChevronDown,
  User,
  Briefcase,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Frontend Development', icon: Code, level: 99 },
    { name: 'Tailwind', icon: Palette, level: 99 },
    { name: 'React-js.', icon: Code, level: 99 },
    { name: 'Next-js.', icon: Code, level: 99 },
    { name: 'Mobile Responsiveness', icon: Smartphone, level: 99 },
    { name: 'Backend Development', icon: Server, level: 50 },
    { name: 'Database Management', icon: Database, level: 70 },
     { name: 'Git & Github', icon: Database, level: 95 },
      { name: 'CMS', icon: Database, level: 80 },
    { name: 'Web Technologies', icon: Globe, level: 95 }
  ];


  const projects = [
    {
      title: 'Movie Search App',
      description: 'A full-stack movie app with React, Node.js, and MongoDB that helps you to search, view, and save favorite movies.',
      image: 'https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg?t=st=1750169551~exp=1750173151~hmac=1f0395ff3f29b3ce8d70a40789ef5c100ccf8c9c53ee313a5e51e038aeb47d64&w=826',
      technologies: ['React', 'Tailwind', 'MongoDB', 'APIs'],
      liveUrl: 'https://movie-site-pied-ten.vercel.app/',
      githubUrl: 'https://github.com/jglobal1/Movie-Site-'
    },
    
    {
      title: 'Bright Side Resturant',
      description: 'A responsive website for a restaurant to showcase its menu, allow customers to place orders via WhatsApp, and provide information about the restaurant’s offerings and ambiance.',
      image: 'https://afess.ng/wp-content/uploads/2024/08/A-Guide-on-How-To-Start-A-Successful-Restaurant-Business-In-Nigeria.webp',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://brightsidebite.com/',
      
    },

    {
      title: 'UAE Business Launch Pad',
      description: 'A digital solution to attract and assist UAE entrepreneurs and investors.',
      image: 'https://www.travejar.com/assets/front/images/visa-ad.png',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      liveUrl: 'https://dina-aidarkhan.netlify.app/',
      
    },

    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'MongoDb'],
      liveUrl: 'https://event-management-dashboard-ghtc.vercel.app/',
      githubUrl: 'https://github.com/jglobal1/Event-Management-Dashboard'
    },

    {
      title: 'Zion Store',
      description: 'A digital storefront combining style and functionality for fashion retail.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDZffYK6pkP8cBPwTA30gChZ68JtftrGBew&s',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'MongoDb'],
      liveUrl: 'https://zionclothingstore.vercel.app/',
      githubUrl: 'https://github.com/jglobal1/zion_clothing_store'
    },

     {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      liveUrl: 'https://weather-app-one-iota-67.vercel.app/',
      githubUrl: 'https://github.com/jglobal1/weather-app'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md capitalize font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mt-[70px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
               <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHbFLh72aMjiA/profile-displayphoto-shrink_200_200/B4EZbr5VMJHcAY-/0/1747714398537?e=1755734400&v=beta&t=oR2wgaGORiH19HhRkcZo2rDezaZ9XW6jK9WB0aE9PSs" // Update this path to match your image filename
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                  sizes={64}
                />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800">
                Johnson Adedokun
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                Software Developer
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
               I Build Guaranteed Systems and Optimized Websites that bring Sales for Founders and Business Owners using || Next.js || React.js ||
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Briefcase size={20} />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 md:mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer with 2+ years of experience creating digital solutions
            </p>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I'm a passionate Software developer with a strong background in creating 
                user-centered digital experiences. My journey began with a curiosity for 
                how things work, which led me to explore the fascinating world of web development.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Over the year, I've worked with startups and established company, 
                helping them bring their digital visions to life. I specialize in React, 
                Next.js, and modern web technologies, always staying up-to-date with 
                the latest industry trends and best practices.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-sm md:text-base text-slate-800 mb-1 md:mb-2">Experience</h3>
                  <p className="text-blue-600 text-sm md:text-base font-medium">2+ Years</p>
                </div>
                <div className="p-3 md:p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-sm md:text-base text-slate-800 mb-1 md:mb-2">Projects</h3>
                  <p className="text-green-600 text-sm md:text-base font-medium">12+ Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8 rounded-xl md:rounded-2xl mb-6 md:mb-0">
              <div className="w-full h-48 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center text-white overflow-hidden">
                <img 
                  src="johnson.jpg" 
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-800">{skill.name}</h3>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{skill.level}% Proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:johnsonoluwafemi200@gmail.com"
              className="p-6 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors group"
            >
              <Mail size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">Let's Discuss</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/johnson-adedokun/"
              className="p-6 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors group"
            >
              <Linkedin size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/jglobal1"
              className="p-6 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors group"
            >
              <Github size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">View my code</p>
            </a>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-gray-400">
              &copy; 2025 Johnson Adedokun. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
