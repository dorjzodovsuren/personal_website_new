
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen, MapPin, Database, Brain, Rocket } from 'lucide-react';

const SkillCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

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

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">B</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              DORJZODOVSUREN <span className="font-normal text-stone-500 ml-1 text-sm tracking-normal">DATA SCIENTIST</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#expertise" onClick={scrollToSection('expertise')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Expertise</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impact</a>
            <a href="#connect" onClick={scrollToSection('connect')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Connect</a>
            <a 
              href="#connect" 
              onClick={scrollToSection('connect')}
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
            <a href="#expertise" onClick={scrollToSection('expertise')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Expertise</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Impact</a>
            <a href="#connect" onClick={scrollToSection('connect')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Connect</a>
            <a 
              href="#connect" 
              onClick={scrollToSection('connect')}
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
            <span className="italic font-normal text-stone-600 text-3xl md:text-4xl block mt-4">Bridging Data & Strategy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Experienced Data Scientist specializing in Machine Learning, Algorithmic Optimization, and Advanced Analytics.
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
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Biography</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">8+ Years in Japan</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">W</span>ith over eight years of professional experience in Japan, I have cultivated a deep understanding of both advanced data science methodologies and the nuances of the Japanese tech landscape.
              </p>
              <p>
                My work focuses on translating complex datasets into actionable strategic insights. Whether it's optimizing large-scale networks, deploying production-grade machine learning models, or analyzing customer behavior, I bring a rigorous, analytical approach to solving business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise: Graph/Network */}
        <section id="expertise" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Database size={14}/> CORE COMPETENCY
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Network Analysis</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Understanding the relationships between data points is crucial. I specialize in Graph Theory and Network Analysis to uncover hidden structures within complex systems.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            By identifying key nodes and anomaly patterns—represented here by the interactive visualization—I help organizations detect fraud, optimize logistics, and improve system resilience.
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
                            <Brain size={14} /> MACHINE LEARNING
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Deep Learning Architectures</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            From Recurrent Neural Networks to modern Transformers, I design and deploy architectures that handle sequential data and natural language with high precision.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            My expertise includes building pipelines that ingest raw data (features), process them through multi-layer attention mechanisms, and output predictive insights with quantified confidence levels.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Results / Optimization */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Measurable Performance</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Data Science is ultimately about results. I consistently deliver optimization models that outperform standard industry baselines, reducing error rates and increasing efficiency across varied domains.
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
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Data-Driven Decisions</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        I believe that the most powerful algorithms are those that solve concrete human problems. Living and working in Tokyo's dynamic environment has taught me the value of precision, context, and long-term thinking.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        My approach combines rigorous statistical analysis with modern AI to build systems that are not just theoretically sound, but robust enough for real-world deployment.
                    </p>
                    
                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-serif italic text-xl text-stone-800 mb-4">
                            "The goal is to turn data into information, and information into insight."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Carly Fiorina</span>
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
                        name="Python & SQL" 
                        role="Core Stack" 
                        delay="0s" 
                    />
                    <SkillCard 
                        name="TensorFlow / PyTorch" 
                        role="Deep Learning" 
                        delay="0.1s" 
                    />
                    <SkillCard 
                        name="Cloud Infrastructure" 
                        role="AWS / GCP" 
                        delay="0.2s" 
                    />
                    <SkillCard 
                        name="Data Visualization" 
                        role="Tableau / D3.js" 
                        delay="0.3s" 
                    />
                </div>
                
                <div className="text-center mt-20">
                     <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full text-lg font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
                <p className="text-sm">Data Scientist • Tokyo, Japan</p>
            </div>
            <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-nobel-gold transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-nobel-gold transition-colors">GitHub</a>
                <a href="#" className="hover:text-nobel-gold transition-colors">ResearchGate</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            &copy; 2024 B. Dorjzodovsuren. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
