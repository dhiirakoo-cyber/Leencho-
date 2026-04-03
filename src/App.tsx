import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Video, 
  Bot, 
  Laptop, 
  Brain, 
  Mail, 
  Phone,
  Music2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mana', href: '#home' },
    { name: "Waa'ee Koo", href: '#about' },
    { name: 'Tajaajila', href: '#services' },
    { name: 'Hojiilee', href: '#portfolio' },
    { name: 'Quunnamti', href: '#contact' },
  ];

  const services = [
    {
      icon: <Video className="w-12 h-12 text-[#00a8ff]" />,
      title: "Video Editing",
      desc: "Videoffii dubbachiisaa, short film, YouTube content, fi social media videos qulqullinaan."
    },
    {
      icon: <Bot className="w-12 h-12 text-[#00a8ff]" />,
      title: "Prompt Engineering",
      desc: "AI tools (ChatGPT, Midjourney, RunwayML) fayyadamuun prompt qulqulluu fi bu’aalee gaarii argachuuf."
    },
    {
      icon: <Laptop className="w-12 h-12 text-[#00a8ff]" />,
      title: "EdTech Consultant",
      desc: "Gorsa fi leenjii Computer Science & Education Technology irratti."
    },
    {
      icon: <Brain className="w-12 h-12 text-[#00a8ff]" />,
      title: "AI Studio Content",
      desc: "AI fayyadamuun visual effects, animation, fi kontentii haaraa uumuu."
    }
  ];

  const portfolioItems = [
    {
      img: "https://picsum.photos/seed/video/400/250",
      title: "Social Media Videos",
      desc: "YouTube fi Instagram fayyadamuuf videoffii qophaa'e."
    },
    {
      img: "https://picsum.photos/seed/prompt/400/250",
      title: "AI Prompts Collection",
      desc: "100+ prompts for AI content creation and automation."
    },
    {
      img: "https://picsum.photos/seed/edtech/400/250",
      title: "Computer EdTech Course",
      desc: "Barumsa teknoolojii education keessatti fayyadamu irratti."
    },
    {
      img: "https://picsum.photos/seed/aistudio/400/250",
      title: "AI Studio Projects",
      desc: "AI fayyadamuun visual effects fi animations uumame."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00a8ff]/30">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 px-[5%] py-4 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/98 border-b border-white/10' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tight">
            Leencho<span className="text-[#00a8ff]">Dessu</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium hover:text-[#00a8ff] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 md:hidden"
            >
              <ul className="flex flex-col p-6 gap-4 list-none">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-lg font-medium block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Leencho Dessu
          </h1>
          <p className="text-[#00a8ff] text-lg md:text-xl font-medium mb-10">
            Video Editor | Prompt Engineer | AI Studio Specialist | EdTech Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-[#00a8ff] hover:bg-[#0088cc] text-white font-semibold rounded-lg transition-all hover:-translate-y-1"
            >
              Hojiilee Koo
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-[#00a8ff] text-white font-semibold rounded-lg hover:bg-[#00a8ff] transition-all hover:-translate-y-1"
            >
              Quunnami
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-12 flex gap-6">
          {[
            { icon: <Instagram />, href: "#" },
            { icon: <Youtube />, href: "#" },
            { icon: <Linkedin />, href: "#" },
            { icon: <Music2 />, href: "#" },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="text-white/70 hover:text-[#00a8ff] transition-all hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 relative inline-block">
            Waa'ee Koo
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00a8ff]"></div>
          </h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Ani Leencho Dessu, <strong className="text-white">Video Editor, Prompt Engineer, fi AI Studio Specialist</strong>. 
              <strong className="text-white"> Education Technology</strong> fi <strong className="text-white">Computer Science</strong> keessatti kufaatii qaba. 
              Daandii digitaalaa keessatti walitti dhufeenya fi ogummaa fayyadamuun kontentii qulqullina qabu uumuu jaaladha.
            </p>
            <p>
              Barumsi koo fi muuxannoon koo <strong className="text-white">prompt engineering, AI content creation, fi video editing</strong> irratti ijaarame. 
              Yeroo ammaa, <strong className="text-white">AI Studio</strong> fayyadamuun kontentii dubbachiisaa fi gorsa teeknoolojii kennan nan hojjedha.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold relative inline-block">
              Tajaajila Kennaa
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00a8ff]"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-[#00a8ff]/50 transition-all text-center"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold relative inline-block">
              Hojiilee Koo
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00a8ff]"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-medium">View Project</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 relative inline-block">
            Quunnamti
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00a8ff]"></div>
          </h2>
          <p className="text-white/70 mb-12 text-lg">
            Hojiirraa walii wajjin hojjechuu barbaade? Na quunnami.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:jafeedassu@gmail.com" 
              className="flex items-center gap-3 text-white/80 hover:text-[#00a8ff] transition-colors"
            >
              <Mail className="w-5 h-5" /> jafeedassu@gmail.com
            </a>
            <a 
              href="tel:+251967145146" 
              className="flex items-center gap-3 text-white/80 hover:text-[#00a8ff] transition-colors"
            >
              <Phone className="w-5 h-5" /> 0967145146
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 text-white/80 hover:text-[#00a8ff] transition-colors"
            >
              <Instagram className="w-5 h-5" /> @leencho_dessu
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 text-white/80 hover:text-[#00a8ff] transition-colors"
            >
              <Youtube className="w-5 h-5" /> Leencho Dessu TV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/40 text-sm">
        <p>&copy; 2026 Leencho Dessu. All rights reserved.</p>
      </footer>
    </div>
  );
}
