/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { 
  Wrench, 
  GraduationCap, 
  Lightbulb, 
  Globe, 
  BookOpen, 
  LineChart, 
  Bot, 
  Search, 
  Star, 
  ArrowUpRight, 
  CheckCircle2,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Clock,
  Award,
  Circle,
  Zap,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SECTIONS } from "./constants";
import { Resource, Section } from "./types";

const iconMap: Record<string, React.ComponentType<any>> = {
  Wrench,
  GraduationCap,
  Lightbulb,
  Globe,
  BookOpen,
  LineChart,
  Bot
};

function StrategicAlert({ text, variant = "default" }: { text: string, variant?: "default" | "minimal" }) {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden group ${variant === "default" ? "bg-[#276EF1] text-white p-6 shadow-2xl" : "bg-black p-4"}`}
    >
      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
        <Zap className="w-24 h-24 -mr-8 -mt-8" />
      </div>
      <div className="flex items-center gap-6 relative z-10">
        <div className={`p-3 rounded-full flex-shrink-0 animate-pulse ${variant === "default" ? "bg-white/20" : "bg-[#276EF1]/20"}`}>
          <Zap className={`w-5 h-5 ${variant === "default" ? "text-white" : "text-[#276EF1]"}`} />
        </div>
        <div className="flex flex-col">
          <span className={`text-[9px] font-black uppercase tracking-[0.4em] mb-1 opacity-70 ${variant === "default" ? "text-white" : "text-[#276EF1]"}`}>
            {t('alert_protocol')}
          </span>
          <p className="text-sm font-black uppercase tracking-tight leading-tight">
            {text}
          </p>
        </div>
      </div>
      {variant === "default" && (
        <div className="mt-4 flex gap-1 h-0.5 w-full bg-white/10">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-white/40 h-full"
          />
        </div>
      )}
    </motion.div>
  );
}

interface ResourceCardProps {
  resource: Resource;
  isCompleted: boolean;
  onToggle: () => void;
  onLinkClick?: () => void;
  key?: React.Key;
}

import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedResources, setCompletedResources] = useState<number[]>([]);
  const [motivation, setMotivation] = useState<{ text: string, visible: boolean }>({ text: "", visible: false });

  const currentLang = i18n.language.split('-')[0] as 'en' | 'es';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const toggleResource = (id: number) => {
    setCompletedResources(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const showMotivation = () => {
    const messages = currentLang === 'es' 
      ? [
          '¡Tú tienes el poder de cambiar el mundo!', 
          '¡El futuro pertenece a quienes se atreven a construirlo!', 
          '¡Tu visión es el motor del cambio global!', 
          '¡Acelera tu impacto, el mundo espera tu innovación!', 
          '¡Cada acción cuenta para transformar la realidad!',
          '¡Eres el arquitecto de la nueva era digital!'
        ]
      : [
          'You have the power to change the world!', 
          'The future belongs to those who dare to build it!', 
          'Your vision is the engine of global change!', 
          'Accelerate your impact, the world awaits your innovation!', 
          'Every action counts to transform reality!',
          'You are the architect of the new digital era!'
        ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMotivation({ text: randomMsg, visible: true });
    
    setTimeout(() => {
      setMotivation(prev => ({ ...prev, visible: false }));
    }, 4000);
  };

  const filteredResources = useMemo(() => {
    return SECTIONS.map(section => ({
      ...section,
      resources: section.resources.filter(r => {
        const whatIsIt = r.whatIsIt[currentLang] || r.whatIsIt.es;
        return r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               whatIsIt.toLowerCase().includes(searchTerm.toLowerCase());
      })
    })).filter(s => s.resources.length > 0);
  }, [searchTerm, currentLang]);

  const totalResources = SECTIONS.reduce((acc, curr) => acc + curr.resources.length, 0);
  const progress = (completedResources.length / totalResources) * 100;

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#276EF1] selection:text-white relative uber-grid overflow-x-hidden">
      {/* High-Impact Background Imagery Layers */}
      <div className="fixed inset-0 pointer-events-none -z-10 no-print overflow-hidden">
        {/* Progress: Modern Architectural Growth */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Progress Architecture"
          className="bg-image-layer top-0 right-0 w-[70%] h-auto opacity-[0.12]"
          referrerPolicy="no-referrer"
        />
        
        {/* Development: Team / Enterprise */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
          alt="Enterprise Team"
          className="bg-image-layer top-[35%] left-[-15%] w-[60%] h-auto opacity-[0.1]"
          referrerPolicy="no-referrer"
        />

        {/* Skills: Technology / Learning */}
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
          alt="Skills Tech"
          className="bg-image-layer bottom-0 right-[-10%] w-[55%] h-auto opacity-[0.12] rotate-2"
          referrerPolicy="no-referrer"
        />

        {/* Floating Concept Images for 'Literal' feel */}
        <div className="absolute top-[15%] left-[5%] w-64 h-80 opacity-[0.25] border border-black/10 rounded-sm overflow-hidden rotate-[-5deg]">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600" alt="Executive" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute top-[60%] right-[10%] w-72 h-48 opacity-[0.2] border border-black/10 rounded-sm overflow-hidden rotate-[8deg]">
          <img src="https://images.unsplash.com/photo-1454165833767-0275084927b9?auto=format&fit=crop&q=80&w=600" alt="Strategy" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>

        {/* Dynamic Blue Blurs to provide depth */}
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-[#276EF1]/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-[5%] left-[-15%] w-[40%] h-[40%] bg-[#276EF1]/15 blur-[150px] rounded-full" />
      </div>
      {/* Navigation */}
      <nav className="border-b border-black sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#276EF1] animate-pulse" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-display font-black text-2xl tracking-tighter uppercase text-black">{t('branding')}</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-[#276EF1]" />
                <span className="text-[8px] font-black tracking-widest text-[#276EF1] uppercase">System Live</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-4 bg-black/[0.03] px-4 py-2 border border-black/5 ml-8 group">
              <div className="w-1.5 h-1.5 bg-[#276EF1] animate-pulse rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40 group-hover:text-[#276EF1] transition-colors">
                {t('stat_growth')}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-black/60">
            <button onClick={toggleLanguage} className="relative z-10 hover:text-[#276EF1] transition-colors flex items-center gap-2 group">
               <Globe className={`w-4 h-4 ${currentLang === 'en' ? 'text-[#276EF1]' : ''}`} />
               <span>{currentLang === 'es' ? 'English' : 'Español'}</span>
            </button>
            <div className="h-4 w-px bg-black/10" />
            <a href="#repository" className="relative z-10 hover:text-[#276EF1] transition-colors">{t('sidebar_all')}</a>
            <div className="relative z-10 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 group-focus-within:text-[#276EF1] transition-colors" />
              <input 
                type="text" 
                placeholder={t('search_placeholder')}
                className="pl-10 pr-4 py-2 bg-black/5 border border-transparent focus:border-[#276EF1]/20 focus:bg-white rounded-none outline-none transition-all w-40 text-[10px] tracking-widest font-bold text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <button 
            className="md:hidden p-2 text-black/60 relative z-10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Motivational Toast */}
      <AnimatePresence>
        {motivation.visible && (
          <motion.div 
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 100, opacity: 0, x: "-50%" }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] px-10 py-6 bg-black text-white border-l-4 border-[#276EF1] shadow-2xl flex items-center gap-6 no-print min-w-[320px]"
          >
            <TrendingUp className="w-6 h-6 text-[#276EF1]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#276EF1] mb-1">{t('motivation_label')}</span>
              <span className="text-sm font-bold uppercase tracking-tight leading-tight">{motivation.text}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="pdf-content" className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Header/Hero Section */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 relative py-20">
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] opacity-[0.18] pointer-events-none no-print rotate-12 transition-all duration-700 hover:scale-105">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bbdac8a28a80?auto=format&fit=crop&q=80&w=1200" 
               alt="Growth Data Charts" 
               className="w-full h-full object-cover rounded-3xl shadow-2xl"
               referrerPolicy="no-referrer"
             />
          </div>          <motion.div 
            className="lg:col-span-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#276EF1]" />
              <span className="text-[#276EF1] micro-label !mb-0">{t('hero_span')}</span>
            </div>
            <h1 className="text-[72px] md:text-[130px] font-display font-black leading-[0.82] uppercase tracking-tighter mb-12 text-black">
              {t('hero_h1_1')}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#276EF1] to-black">{t('hero_h1_2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed font-light mb-16 border-l-2 border-black pl-8">
              {t('hero_p')}
            </p>
            <div className="flex flex-col gap-6 relative z-20">
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('repository')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-12 py-6 bg-black text-white text-lg font-black uppercase tracking-tighter hover:bg-[#276EF1] transition-all flex items-center gap-4 group shadow-xl active:scale-95 relative z-10"
                >
                  {t('cta_main')} <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col justify-end border-l border-black pl-12 py-8 bg-black/5 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#276EF1]/30" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#276EF1]/30" />
            <div className="space-y-20 relative z-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="text-7xl font-black mb-3 tabular-nums text-black group-hover:text-[#276EF1] transition-colors">{totalResources}</div>
                <div className="micro-label !text-black/40">{t('stats_resources')}</div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="text-7xl font-black mb-3 tabular-nums text-[#276EF1]">{Math.round(progress)}%</div>
                <div className="micro-label !text-black/40">{t('stats_mastery')}</div>
                <div className="mt-8 w-full h-[8px] bg-black/10 relative">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-[#276EF1] shadow-[0_0_15px_rgba(39,110,241,0.5)]"
                  />
                  <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
                </div>
              </motion.div>

              <div className="pt-16 flex gap-6 italic">
                <div className="w-[2px] h-16 bg-[#276EF1]" />
                <div className="flex-1">
                  <p className="text-[9px] text-black/50 leading-relaxed uppercase font-black tracking-[0.3em]">
                    {t('stat_updated')}
                  </p>
                  <div className="mt-6">
                    <StrategicAlert text={t('stat_growth')} />
                  </div>
                  <p className="text-[11px] font-mono font-bold text-black mt-8">
                    SYS_LOAD: OPTIMAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repository Section Alert */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <StrategicAlert text={t('stat_growth')} />
        </div>

        {/* Section List / Repository */}
        <div id="repository" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-t-4 border-black pt-20 gap-8 mb-20">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#276EF1]" />
                <span className="text-[#276EF1] micro-label !mb-0">{t('index_label')}</span>
              </div>
              <h2 className="text-6xl font-black uppercase tracking-tighter text-black">{t('index_h2')}</h2>
              <div className="mt-4">
                <StrategicAlert text={t('stat_growth')} variant="minimal" />
              </div>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar relative z-20">
              <button 
                onClick={() => setActiveSection(null)}
                className={`px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-black border transition-all relative z-10 ${!activeSection ? 'bg-black text-white border-black' : 'bg-transparent text-black/40 border-black/10 hover:border-black/30'}`}
              >
                {t('filter_all')}
              </button>
              {SECTIONS.map(s => (
                <button 
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-black border transition-all relative z-10 whitespace-nowrap ${activeSection === s.id ? 'bg-black text-white border-black' : 'bg-transparent text-black/40 border-black/10 hover:border-black/30'}`}
                >
                  {s.title[currentLang] || s.title.es}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-48 pb-32">
            {filteredResources
              .filter(s => !activeSection || s.id === activeSection)
              .map((section, sIdx) => {
                const Icon = iconMap[section.icon] || Circle;
                return (
                  <motion.section 
                    key={section.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="grid lg:grid-cols-12 gap-12 mb-16 items-baseline relative">
                       <div className="lg:col-span-8 flex items-center gap-8 group">
                         <div className="relative">
                            <div className="absolute -inset-2 bg-[#276EF1]/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
                            <Icon className="w-10 h-10 text-black z-10 relative group-hover:text-[#276EF1] transition-colors" />
                         </div>
                         <div className="space-y-1">
                            <h3 className="text-7xl font-display font-black uppercase tracking-tighter text-black">{section.title[currentLang]}</h3>
                            <div className="flex items-center gap-2">
                               <div className="w-12 h-[2px] bg-[#276EF1]" />
                               <span className="micro-label !text-[8px] !tracking-[0.6em]">System Protocol 00{sIdx + 1}</span>
                            </div>
                         </div>
                       </div>
                       <div className="lg:col-span-4 text-right flex flex-col items-end pt-4">
                          <span className="font-mono text-6xl opacity-5 text-black font-black leading-none">{String(sIdx + 1).padStart(2, '0')}</span>
                       </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-0 border-y border-black/5 bg-white">
                      {section.resources.map((resource) => (
                        <div key={resource.id} className="lg:col-span-4 border-r border-black/5 last:border-r-0 group">
                          <ResourceCard 
                            resource={resource} 
                            isCompleted={completedResources.includes(resource.id)}
                            onToggle={() => toggleResource(resource.id)}
                            onLinkClick={showMotivation}
                            currentLang={currentLang}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.section>
                );
              })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-40 flex flex-col md:flex-row justify-between items-start md:items-end border-t-2 border-black pt-24 pb-32 gap-16">
          <div className="flex flex-wrap gap-24">
            <div className="space-y-6">
              <div className="micro-label !text-black/30">{t('footer_mastery')}</div>
              <div className="text-2xl font-black text-black leading-tight max-w-[280px]">{t('footer_mastery_val')}</div>
            </div>
            <div className="space-y-6">
              <div className="micro-label !text-black/30">{t('footer_format')}</div>
              <div className="text-2xl font-black text-black leading-tight max-w-[280px]">{t('footer_format_val')}</div>
            </div>
          </div>
          
          <div className="text-left md:text-right space-y-10 group/footer">
            <div className="micro-label !text-black/40 italic">{t('footer_limited')}</div>
            <div className="micro-label !text-[#276EF1] font-black uppercase tracking-[0.2em] mt-4">{t('footer_experts')}</div>
            <div className="mt-4">
              <StrategicAlert text={t('stat_growth')} variant="minimal" />
            </div>
            <div className="micro-label !text-black/20 mt-8 font-mono">{new Date().getFullYear()} ©</div>
          </div>
        </footer>
      </main>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/90 z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-full bg-white z-[70] p-12 flex flex-col justify-center"
            >
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-12 right-12 text-black/40 hover:text-black"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="space-y-8 text-center relative z-20">
                <button onClick={toggleLanguage} className="block w-full text-2xl font-black uppercase tracking-tighter text-[#276EF1] mb-12 relative z-10">
                   {currentLang === 'es' ? 'SWITCH TO ENGLISH' : 'CAMBIAR A ESPAÑOL'}
                </button>
                {SECTIONS.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setIsSidebarOpen(false); }}
                    className="block w-full text-4xl font-black uppercase tracking-tighter hover:text-[#276EF1] transition-colors text-black relative z-10"
                  >
                    {s.title[currentLang]}
                  </button>
                ))}
                <button 
                  onClick={() => { setActiveSection(null); setIsSidebarOpen(false); }}
                  className="block w-full text-4xl font-black uppercase tracking-tighter text-black/20 relative z-10"
                >
                  {t('sidebar_all')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResourceCard({ resource, isCompleted, onToggle, onLinkClick, currentLang }: ResourceCardProps & { currentLang: 'en' | 'es' }) {
  const { t } = useTranslation();
  
  return (
    <div className={`p-10 h-full flex flex-col space-y-10 transition-all card-hover relative group/card-wrapper ${isCompleted ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
      {/* Invisible full-card link */}
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute inset-0 z-10"
        aria-label={resource.title}
        onClick={() => onLinkClick?.()}
      />

      <div className="flex justify-between items-start relative z-20">
         <div className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-6 ${i < Math.floor(resource.utility) ? 'bg-[#276EF1]' : 'bg-black/10'}`} 
            />
          ))}
        </div>
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggle(); }}
          className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-tighter border transition-all pointer-events-auto ${isCompleted ? 'bg-black border-black text-white shadow-lg' : 'bg-white border-black/10 text-black/40 hover:border-black'}`}
        >
          {isCompleted ? t('status_complete') : t('status_mark')}
        </button>
      </div>

      <div className="space-y-4 relative z-20 pointer-events-none">
        <h4 className="text-3xl font-display font-black uppercase leading-[0.9] tracking-tighter group-hover/card-wrapper:text-[#276EF1] transition-colors text-black">
          {resource.title}
        </h4>
        <div className="flex items-center gap-3">
           <span className="micro-label !text-black/30 group-hover/card-wrapper:!text-[#276EF1] transition-colors uppercase tracking-widest text-[9px]">
             {resource.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}
           </span>
           {resource.extraLabel && <span className="bg-[#276EF1] text-white micro-label !text-white px-2 py-0.5 tracking-tighter">{resource.extraLabel[currentLang]}</span>}
        </div>
      </div>

      <div className="space-y-8 flex-1 relative z-20 pointer-events-none">
        <p className="text-black/60 text-lg leading-relaxed font-light">
          {resource.whatIsIt[currentLang]}
        </p>

        {resource.duration && (
          <div className="flex items-center gap-8 pt-6 border-t border-black/5">
            <div className="space-y-1.5">
              <div className="micro-label !text-black/20">{t('card_duration')}</div>
              <div className="text-[11px] font-black text-black uppercase tracking-tighter">{resource.duration[currentLang]}</div>
            </div>
            {resource.certified && (
              <div className="space-y-1.5">
                <div className="micro-label !text-[#276EF1] opacity-100">{t('card_status')}</div>
                <div className="text-[11px] font-black uppercase text-black tracking-tighter">{resource.certified[currentLang]}</div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-3 border-l-4 border-[#276EF1] pl-8 py-4 bg-black/[0.02] relative">
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#276EF1]/20 group-hover/card-wrapper:border-[#276EF1]/50 transition-colors" />
          <div className="micro-label !text-[#276EF1] !text-[8px]">{t('card_strategy')}</div>
          <p className="text-xs text-black/80 leading-relaxed font-bold uppercase tracking-widest">
            {resource.useCase[currentLang]}
          </p>
        </div>
      </div>

      <div className="pt-10 relative z-20">
        <div className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-tighter text-[#276EF1] group-hover/card-wrapper:text-black transition-colors border-b-2 border-[#276EF1]/20 group-hover/card-wrapper:border-black pb-1">
          {currentLang === 'en' ? 'LAUNCH RESOURCE' : 'LANZAR RECURSO'} <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

