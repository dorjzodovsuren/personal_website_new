
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, MapPin, Database, Brain, Rocket, Briefcase, Award, CheckCircle, TrendingUp } from 'lucide-react';

const SkillCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const ExperienceCard = ({ company, role, period, desc, delay }: { company: string, role: string, period: string, desc: string, delay: number }) => (
    <div className="relative pl-8 md:pl-0 group" style={{ transitionDelay: `${delay}ms` }}>
        <div className="hidden md:block absolute left-1/2 -ml-[9px] w-4 h-4 rounded-full bg-white border-4 border-stone-200 group-hover:border-nobel-gold transition-colors z-10 mt-1.5"></div>
        <div className={`md:flex items-start justify-between md:gap-12 ${delay % 200 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-[45%] mb-2 md:mb-0 md:text-right group-hover:text-stone-900 transition-colors">
                 <div className="inline-block px-3 py-1 bg-stone-100 rounded-full text-xs font-bold text-stone-500 mb-2">{period}</div>
            </div>
            <div className="md:w-[45%] bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all border-l-4 border-l-stone-300 group-hover:border-l-nobel-gold">
                <h3 className="font-serif text-xl text-stone-900 mb-1">{company}</h3>
                <div className="text-sm font-bold text-nobel-gold uppercase tracking-wider mb-3">{role}</div>
                <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header offset
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const certifications = [
      "Google Professional Cloud Architect",
      "Google Professional Data Engineer",
      "Google Professional ML Engineer",
      "Google Data Analytics Professional",
      "JLPT N2 (Japanese Fluent)",
      "Tableau Desktop Specialist"
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">B</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              DORJZODOVSUREN <span className="font-normal text-stone-500 ml-1 text-sm tracking-normal">MANAGER, DATA & AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Journey</a>
            <a href="#expertise" onClick={scrollToSection('expertise')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Expertise</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impact</a>
            <a 
              href="mailto:ibdzs.db@gmail.com" 
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Journey</a>
            <a href="#expertise" onClick={scrollToSection('expertise')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Expertise</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impact</a>
            <a 
              href="mailto:ibdzs.db@gmail.com"
              className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer"
            >
              Contact Me
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/50">
            <MapPin size={12} /> Tokyo, Japan • Since 2016
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[1.1] mb-6 text-stone-900 drop-shadow-sm">
            B. Dorjzodovsuren <br/>
            <span className="italic font-normal text-stone-600 text-3xl md:text-4xl block mt-4">Manager, Data & AI</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Google Certified Cloud Architect & Machine Learning Engineer.<br/>
            Bridging advanced AI strategy with production-grade engineering at Capgemini.
          </p>
          
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>VIEW PROFILE</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* About / Introduction */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
                <div className="md:col-span-4">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Biography</div>
                <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Experience Meets Innovation</h2>
                <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
                </div>
                <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
                <p>
                    <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">W</span>ith over 8 years of experience in Japan's dynamic tech landscape, I have evolved from a MEXT Scholar at Tokyo Institute of Technology to a Manager leading Data & AI initiatives at Capgemini.
                </p>
                <p>
                    My career is built on a foundation of rigorous engineering and strategic leadership. I specialize in transforming prototypes into robust production systems, having driven significant revenue growth and efficiency gains for companies like Reazon Holdings and Rakuten Mobile. I hold the "Triple Crown" of Google Cloud Professional certifications, validating my expertise across Architecture, Data, and Machine Learning.
                </p>
                </div>
            </div>

            {/* Certifications Bar */}
            <div className="bg-[#F9F8F4] rounded-2xl p-8 border border-stone-200">
                <h3 className="flex items-center gap-2 font-serif text-xl text-stone-900 mb-6">
                    <Award className="text-nobel-gold" /> Professional Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-stone-100 shadow-sm">
                            <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-stone-700">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 bg-[#F5F4F0] relative overflow-hidden">
             <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                     <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Career Path</div>
                     <h2 className="font-serif text-4xl text-stone-900">Professional Journey</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 md:-ml-[0.5px]"></div>

                    <ExperienceCard 
                        company="Capgemini"
                        role="Manager, Data & AI"
                        period="Current"
                        desc="Leading enterprise-scale Data & AI projects. Responsible for cloud architecture strategy, team leadership, and delivering digital transformation solutions for major clients."
                        delay={0}
                    />
                    <ExperienceCard 
                        company="Reazon Holdings INC."
                        role="Data Science Lead"
                        period="Jun 2023 - Present"
                        desc="Spearheaded recommendation model optimization increasing revenue by 3M yen/month. Deployed Stable Diffusion pipelines reducing asset creation time by 91% (12h to 1h)."
                        delay={100}
                    />
                    <ExperienceCard 
                        company="Rakuten Mobile INC."
                        role="Machine Learning Engineer"
                        period="Apr 2021 - May 2023"
                        desc="Developed social listening frameworks and AutoML pipelines. Improved prediction accuracy by 50% while halving computation time through architectural optimization."
                        delay={200}
                    />
                    <ExperienceCard 
                        company="Data Artist INC."
                        role="Data Analyst & ML Engineer"
                        period="Feb 2019 - Mar 2021"
                        desc="Designed the Tokyo2020 official website recommendation system, analyzing 107,000+ web tags to deliver personalized content to global users."
                        delay={300}
                    />
                </div>
             </div>
        </section>

        {/* Expertise: Graph/Network */}
        <section id="expertise" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Database size={14}/> Recommendation Systems
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Graph Network Analysis</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           At Data Artist, I managed the recommendation engine for the <strong>Tokyo2020 official website</strong>. This required analyzing complex relationships between 107,000 distinct web tags and user behaviors.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            The visualization demonstrates how I approach graph topology to identify key nodes and clusters, enabling highly accurate content prediction and anomaly detection in large-scale interaction data.
                        </p>
                    </div>
                    <div>
                        <SurfaceCodeDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Expertise: AI/ML */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                {/* Decorative background pattern */}
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <TransformerDecoderDiagram />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            <Brain size={14} /> GENERATIVE AI
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">LLMs & Diffusion Models</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            I developed <strong>Mongolian-Llama3</strong>, an open-source instruction-tuned model bridging the language gap for the Mongolian community. 
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            At Reazon Holdings, I implemented <strong>Stable Diffusion pipelines</strong> for game character creation, reducing production time by 91%. The diagram illustrates the transformer architecture core to these generative breakthroughs.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Results / Optimization */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                        <TrendingUp size={14}/> Business Impact
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Algorithmic Optimization</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        I don't just build models; I optimize them for revenue. By introducing a deep learning two-tower architecture, I improved search CVR and metrics leading to a <strong>3M yen monthly revenue increase</strong>.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <PerformanceMetricDiagram />
                </div>
            </div>
        </section>

        {/* Impact */}
        <section id="impact" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                        <QuantumComputerScene />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Modeling complex environments</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">PHILOSOPHY</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Strategic Data Leadership</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        As a Manager, I focus on the intersection of technical excellence and business value. My experience leading teams at Reazon Holdings and Capgemini has honed my ability to translate complex data insights into executive-level strategy.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                         I champion A/B testing frameworks and AutoML not just as tools, but as essential components of a data-driven culture that prioritizes speed, accuracy, and operational efficiency.
                    </p>
                    
                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-serif italic text-xl text-stone-800 mb-4">
                            "Data is the new oil. It’s valuable, but if unrefined it cannot really be used."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Clive Humby</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Connect / Skills */}
        <section id="connect" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">GET IN TOUCH</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Technical Arsenal</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Leveraging a comprehensive stack to deliver end-to-end data solutions.</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                    <SkillCard 
                        name="Google Cloud Platform" 
                        role="Architecture & Data" 
                        delay="0s" 
                    />
                    <SkillCard 
                        name="Python & SQL" 
                        role="Core Stack" 
                        delay="0.1s" 
                    />
                    <SkillCard 
                        name="TensorFlow / PyTorch" 
                        role="Deep Learning" 
                        delay="0.2s" 
                    />
                    <SkillCard 
                        name="Tableau" 
                        role="Visualization" 
                        delay="0.3s" 
                    />
                </div>
                
                <div className="text-center mt-20">
                     <a href="mailto:ibdzs.db@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full text-lg font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <Rocket size={20} /> Let's Collaborate
                     </a>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">B. Dorjzodovsuren</div>
                <p className="text-sm">Manager, Data & AI • Tokyo, Japan</p>
            </div>
            <div className="flex gap-6 text-sm">
                <a href="https://dorjzodovsuren.com" className="hover:text-nobel-gold transition-colors">Website</a>
                <a href="mailto:ibdzs.db@gmail.com" className="hover:text-nobel-gold transition-colors">Email</a>
                <span className="text-stone-600">JST {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            &copy; {new Date().getFullYear()} B. Dorjzodovsuren. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
