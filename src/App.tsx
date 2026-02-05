import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Target, BarChart3, Search, Lightbulb, CheckCircle2, Map, Layout, Zap, Smartphone, MousePointerClick, Gauge } from 'lucide-react';
import akyLogo from './assets/AKY-X.png';
import blitzLogo from './assets/blitz.svg';
import solutionVideo from './assets/490_1080x60_shots_so.mp4';
import heroBg from './assets/prezentareblitz.png';

// Research Screenshots
import res1 from './assets/Screenshot 2026-02-05 at 20.19.46.png';
import res2 from './assets/Screenshot 2026-02-05 at 20.20.21.png';
import res3 from './assets/Screenshot 2026-02-05 at 20.20.43.png';
import res4 from './assets/Screenshot 2026-02-05 at 20.21.41.png';

// Benchmark Screenshots
import bench1 from './assets/Screenshot 2026-02-05 at 22.27.52.png';
import bench2 from './assets/Screenshot 2026-02-05 at 22.26.44.png';
import bench3 from './assets/Screenshot 2026-02-05 at 22.26.11.png';
import bench4 from './assets/Screenshot 2026-02-05 at 22.20.02.png';

// Types
interface SlideData {
  id: number;
  type: 'hero' | 'bullets' | 'comparison' | 'roadmap' | 'impact' | 'grid' | 'video' | 'strategic' | 'diamond' | 'gallery' | 'heatmap' | 'summary';
  title: string;
  subtitle?: string;
  video?: string;
  bgImage?: string;
  image?: string;
  images?: string[];
  items?: string[];
  quote?: string;
  gridItems?: { title: string; description: string; icon: ReactNode }[];
  strategicSections?: { label: string; text: string; accent: string }[];
  diamondSteps?: { phase: string; title: string; description: string }[];
  points?: { label: string; value: string }[];
  warning?: string;
  icon?: ReactNode;
}

const slides: SlideData[] = [
  {
    id: 0,
    type: 'hero',
    title: "Blitz.ro: UX Strategy",
    subtitle: "De la Interfață la Canal de Absorbție a Lead-urilor",
    bgImage: heroBg,
  },
  {
    id: 1,
    type: 'strategic',
    title: "Psihologia Utilizatorului Blitz",
    subtitle: "Marketplace vs. Lead-Gen",
    strategicSections: [
      { 
        label: "Provocarea", 
        text: "Reducerea încărcării cognitive pe ecrane mici.", 
        accent: "Fricțiune Minimală" 
      },
      { 
        label: "Soluția", 
        text: "Trecerea de la „browsing pasiv” la „descoperire ghidată”.", 
        accent: "Guided Discovery" 
      },
      { 
        label: "Viziunea 2026", 
        text: "Interfața anticipează nevoia utilizatorului.", 
        accent: "Model Predictiv" 
      }
    ]
  },
  {
    id: 2,
    type: 'diamond',
    title: "Procesul Double Diamond",
    subtitle: "Metodologia UX pentru Dominarea Pieței",
    quote: "Am aplicat metodologia Double Diamond pentru a elimina orice risc subiectiv.",
    diamondSteps: [
      {
        phase: "Descoperire",
        title: "Cercetare & Audit",
        description: "Competitor mapping, UX audit focusat pe lead gen și review la top international websites."
      },
      {
        phase: "Definire",
        title: "Strategie & Focus",
        description: "Filtrarea ipotezelor din audit și stabilirea obiectivelor de conversie (1%)."
      },
      {
        phase: "Dezvoltare",
        title: "Design & Prototip",
        description: "Crearea celor 6 direcții Hero și testarea fluxurilor de mobile."
      },
      {
        phase: "Livrare",
        title: "Implementare & QA",
        description: "Lansarea soluției recomandate și validarea prin Hotjar/Clarity."
      }
    ]
  },
  {
    id: 3,
    type: 'gallery',
    title: "Cercetare și Audit",
    subtitle: "Evidence-Based Design Process",
    quote: "Folosește mouse-ul (hover) pentru detalii sau click pentru a face ZOOM complet.",
    images: [res1, res2, res3, res4]
  },
  {
    id: 4,
    type: 'grid',
    title: "Probleme Identificate (Current Site)",
    gridItems: [
      {
        title: "1) UVP neclar + “Rule of One” lipsă",
        description: "Above the fold nu livrează rapid: cine e Blitz + ce obții + următorul pas. Prea multe direcții / opțiuni → diluare intenție.",
        icon: <Target size={40} className="text-red-500" />
      },
      {
        title: "2) Fricțiune în primele 3 secunde",
        description: "Pe mobile, userul trebuie să intre în flow instant. Acum există micro-fricțiuni (input-uri / decizii prea devreme) care cresc Time to Action.",
        icon: <Zap size={40} className="text-red-500" />
      },
      {
        title: "3) Conversion Scent slab în Hero",
        description: "Copy + label-uri nu amplifică intentul. CTA-ul este mai mult funcțional decât benefit-led, fără un traseu logic clar.",
        icon: <MousePointerClick size={40} className="text-red-500" />
      },
      {
        title: "4) Proof Above The Fold insuficient",
        description: "Lipsesc semnale rapide de autoritate (volum, calitate, social proof). Fără proof, userul intră în modul browse, nu decizie.",
        icon: <CheckCircle2 size={40} className="text-red-500" />
      },
      {
        title: "5) Carduri vs. Rapid Scanning",
        description: "Cardurile prioritizează imaginea, nu decizia. Lipsesc decision tags (zonă, mp, facilități), crescând cognitive load.",
        icon: <Layout size={40} className="text-red-500" />
      },
      {
        title: "6) Leakage: Lipsă Soft Conversion",
        description: "Fără salvare / alerte / favorite, pierdem utilizatorii cu intent mediu. Scade return rate-ul și remarketing-ul organic.",
        icon: <X size={40} className="text-red-500" />
      },
      {
        title: "7) Performance: Fricțiune Invizibilă",
        description: "LCP mare pe mobile → pierdem atenția înainte să înceapă conversia (hero greu + asset-uri neoptimizate).",
        icon: <Gauge size={40} className="text-red-500" />
      }
    ],
    quote: "Direcția: Un singur next-step clar + proof rapid above the fold + fricțiune minimă → apoi validare prin heatmaps + recordings (Hotjar/Clarity) și iterăm."
  },
  {
    id: 5,
    type: 'grid',
    title: "Cum masuram succesul (KPIs)",
    gridItems: [
      {
        title: "Time to Action (TTA)",
        description: "Țintă: utilizatorul ajunge la o acțiune (căutare / filtru / click pe listare) în < 5 sec pe mobile.",
        icon: <Gauge size={24} />
      },
      {
        title: "Search Engagement Rate",
        description: "Țintă: creștere semnificativă față de varianta curentă după simplificarea hero-ului + preset-uri.",
        icon: <Search size={24} />
      },
      {
        title: "Click-through către listări",
        description: "Țintă: utilizatorii intră în listări mai repede, fără “scroll fatigue”.",
        icon: <MousePointerClick size={24} />
      },
      {
        title: "Lead Intent Events",
        description: "Măsurăm: Contact / WhatsApp / “Trimite ofertă”. Țintă: creștere prin CTA-uri mai clare.",
        icon: <Target size={24} />
      },
      {
        title: "Performance (mobile)",
        description: "Țintă: LCP < 2.5s. Rezolvăm baseline-ul critic de 19.2s prin optimizarea asset-urilor din Hero.",
        icon: <Zap size={24} />
      },
      {
        title: "Conversion Quality",
        description: "Măsurăm: lead-uri care ajung la agent / call. Țintă: mai puține lead-uri „junk”, mai multe „high intent”.",
        icon: <CheckCircle2 size={24} />
      }
    ],
    quote: "După go-live: rulăm 7–14 zile de date + heatmaps și facem 1–2 iterații rapide de optimizare."
  },
  {
    id: 6,
    type: 'gallery',
    title: "De ce liderii mondiali domină piața?",
    subtitle: "Aplicarea tiparelor de succes în Blitz 2026",
    quote: "Analizăm arhitectura conversiei: Credibilitate, Mesaj Emoțional și CTA-uri bazate pe beneficii.",
    images: [bench1, bench2, bench3, bench4]
  },
  {
    id: 7,
    type: 'summary',
    title: "Sinteză Strategică: Ce Construim",
    subtitle: "Pilonii fundamentali ai noului ecosistem Blitz",
    gridItems: [
      {
        title: "Reducerea Încărcării Cognitive",
        description: "Bazându-ne pe Legea lui Hick: cu cât oferim mai puține opțiuni în Hero, cu atât utilizatorul alege mai rapid să devină lead.",
        icon: <Lightbulb size={24} />
      },
      {
        title: "Obiectiv: 1% Rata de Conversie",
        description: "Eliminarea punctelor de fricțiune identificate în audit pentru o creștere directă a eficienței traficului.",
        icon: <BarChart3 size={24} />
      },
      {
        title: "Implementarea „Conversion Scent”",
        description: "Flux neîntrerupt între promisiunea de brand și interacțiune, folosind cele 4.000+ listări ca ancoră de încredere (putem adăuga și alți trust factors).",
        icon: <Zap size={24} />
      },
      {
        title: "The Rule of One",
        description: "Arhitectura homepage-ului urmează o singură acțiune principală pe ecran (Primary CTA), eliminând zgomotul vizual.",
        icon: <Target size={24} />
      },
      {
        title: "Ierarhia Persuasiunii",
        description: "Trecem de la un site funcțional la unul persuasiv: Siguranță -> Autoritate -> Acțiune.",
        icon: <CheckCircle2 size={24} />
      },
      {
        title: "Optimizare pentru Micro-Moments",
        description: "Design calibrat pentru sesiuni mobile scurte, unde lead-ul trebuie captat în primele 3 secunde.",
        icon: <Smartphone size={24} />
      }
    ]
  },
  {
    id: 8,
    type: 'video',
    title: "Direcția recomandată (mobile-first)",
    video: solutionVideo,
    warning: "copywriting din video va fi adaptat, reprezinta doar un exemplu pt stil vizual"
  },
  {
    id: 9,
    type: 'grid',
    title: "Homepage Flow",
    subtitle: "De la browsing pasiv → guided discovery (fricțiune minimă, intent capturat rapid).",
    gridItems: [
      {
        title: "1) Guided Discovery (Airbnb-style)",
        description: "„Ce te interesează acum?” (Locuință, Investiție, Mutare rapidă). Reduce cognitive load și aplică filtre conversațional.",
        icon: <Map size={24} />
      },
      {
        title: "2) Curated Listings: „Selecția Blitz”",
        description: "8–12 proprietăți „best fit” cu tag-uri de decizie (zonă, mp, facilități). Relevanță în loc de random recommended.",
        icon: <Layout size={24} />
      },
      {
        title: "3) Proof & Trust",
        description: "Review-uri, testimoniale și trust factors (15.000+ listări). Scade anxietatea deciziei și crește încrederea.",
        icon: <CheckCircle2 size={24} />
      },
      {
        title: "4) Browse by City (Coverage / SEO)",
        description: "Orașe și zone populare în grid simplu. Suportă explorarea și SEO fără să strice flow-ul principal.",
        icon: <Search size={24} />
      },
      {
        title: "5) Soft Conversion (Lead Magnet)",
        description: "Ghiduri, alerte sau email capture. Monetizezi intentul mediu și re-activezi userii indeciși (nurturing).",
        icon: <Zap size={24} />
      }
    ],
    warning: "pattern similar se va folosi si in cadrul paginilor locale adaptate de la browser cookies"
  },
  {
    id: 10,
    type: 'bullets',
    title: "Validarea prin Date",
    subtitle: "Nicio decizie fără confirmare în realitate",
    items: [
      "Hotjar / Microsoft Clarity: Monitorizare post-lansare",
      "Heatmaps: Identificarea zonelor de interes",
      "Recordings: Înțelegerea blocajelor reale ale utilizatorilor"
    ],
    icon: <BarChart3 className="text-blitz-green" size={48} />
  },
  {
    id: 11,
    type: 'grid',
    title: "Next Steps",
    gridItems: [
      {
        title: "Design final (mobile-first)",
        description: "Homepage + Listing (SRP) + Explore. Include componente + states (filters, cards, sort, CTA).",
        icon: <Layout size={24} />
      },
      {
        title: "Front-end implementation",
        description: "Build responsive pentru cele 3 pagini. Integrare search/filtre + optimizare performance (mobile).",
        icon: <Zap size={24} />
      },
      {
        title: "QA + Go-live",
        description: "Testare device-uri reale + bugfix. Deploy-ul soluției validate.",
        icon: <CheckCircle2 size={24} />
      },
      {
        title: "Tracking + Iterații (7–14 zile)",
        description: "Monitorizare Clarity/Hotjar + GA4. 1–2 optimizări rapide bazate pe datele reale.",
        icon: <BarChart3 size={24} />
      }
    ]
  }
];

const SlideContent = ({ slide, onImageClick }: { slide: SlideData; onImageClick: (img: string) => void }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-start md:justify-center w-full max-w-6xl relative px-4 py-8 md:py-0 min-h-full md:min-h-0"
    >
      {slide.icon && (
        <motion.div variants={item} className="mb-6 md:mb-8 p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl">
          {slide.icon}
        </motion.div>
      )}
      
      <motion.h1 
        variants={item}
        className={`${slide.type === 'hero' ? 'text-[84px] md:text-[84px] text-[48px]' : 'text-[36px] md:text-[64px]'} font-extrabold mb-4 leading-[1.1] text-center tracking-tight px-4`}
      >
        {slide.title}
      </motion.h1>

      {slide.subtitle && (
        <motion.p 
          variants={item}
          className="text-[16px] md:text-[24px] text-blitz-green font-semibold mb-8 md:mb-12 text-center max-w-4xl uppercase tracking-[0.05em] md:tracking-[0.1em] px-4"
        >
          {slide.subtitle}
        </motion.p>
      )}

      {slide.type === 'heatmap' && slide.image && (
        <motion.div
          variants={item}
          onClick={() => onImageClick(slide.image!)}
          className="relative w-full max-w-5xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-6 md:mb-8 group cursor-zoom-in"
        >
          <img
            src={slide.image}
            alt="Heatmap Example"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blitz-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-left opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
            <p className="text-white font-bold text-base md:text-xl">Exemplu de monitorizare Hotjar</p>
            <p className="text-white/60 text-sm md:text-lg">Zonele de interes (hotspots) ne vor arăta unde să optimizăm în faza a 2-a.</p>
          </div>
        </motion.div>
      )}

      {slide.type === 'gallery' && slide.images && (
        <div className="relative w-full h-auto mt-4 md:mt-8 flex items-center justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl">
            {slide.images.map((img, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ 
                  scale: 1.02, 
                  zIndex: 50,
                  transition: { duration: 0.2 } 
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick(img);
                }}
                className="relative group aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in bg-white/[0.02]"
              >
                <img src={img} alt="" className="w-full h-full object-cover group-hover:object-contain transition-all duration-500" />
                <div className="absolute inset-0 bg-blitz-dark/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blitz-green/30 transition-colors rounded-xl md:rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {slide.type === 'video' && slide.video && (
        <>
          <motion.div
            variants={item}
            className={`relative w-full max-w-5xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${slide.points ? 'mb-8 md:mb-12' : ''}`}
          >
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-blitz-dark/40 to-transparent pointer-events-none" />
          </motion.div>
          {slide.warning && (
            <motion.p
              variants={item}
              className="mt-4 md:mt-6 text-red-400/80 text-xs md:text-sm font-bold uppercase tracking-widest px-4 md:px-6 py-1.5 md:py-2 border border-red-400/20 bg-red-400/5 rounded-full"
            >
              ⚠️ {slide.warning}
            </motion.p>
          )}
        </>
      )}

      {slide.type === 'diamond' && slide.diamondSteps && (
        <div className="relative w-full max-w-7xl mt-8 md:mt-16 px-4 md:px-12 pb-12 md:pb-24">
          {/* Main horizontal line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-0">
            {slide.diamondSteps.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                className="relative flex flex-col items-center group flex-1 w-full md:w-auto"
              >
                {/* Diamond Shape - Smaller on Mobile */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-12 transition-transform duration-500 group-hover:scale-105">
                  <motion.div
                    animate={{ rotate: 45 }}
                    className={`absolute inset-0 border-2 transition-all duration-500 rounded-xl md:rounded-2xl shadow-2xl ${
                      i < 2
                        ? 'bg-white/[0.03] border-white/10 group-hover:border-blitz-green/40 group-hover:bg-blitz-green/5' 
                        : 'bg-blitz-green/[0.05] border-blitz-green/20 group-hover:border-blitz-green group-hover:bg-blitz-green/10'
                    }`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10">
                    <span className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] text-blitz-green font-bold mb-2 md:mb-4 opacity-70">
                      {s.phase}
                    </span>
                    <h3 className="text-lg md:text-2xl font-black leading-tight tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Description - Mobile Optimized */}
                <div className="text-center px-4 md:px-6 min-h-[60px] md:min-h-[80px]">
                  <p className="text-sm md:text-lg text-white/40 leading-relaxed max-w-[200px] md:max-w-[240px] mx-auto group-hover:text-white transition-colors duration-300">
                    {s.description}
                  </p>
                </div>

                {/* Phase separation labels - Hidden on mobile */}
                {i === 0 && (
                  <div className="hidden md:flex absolute -bottom-24 left-0 w-full justify-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">
                    Divergent (Discover)
                  </div>
                )}
                {i === 1 && (
                  <div className="hidden md:flex absolute -bottom-24 left-0 w-full justify-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">
                    Convergent (Define)
                  </div>
                )}
                {i === 2 && (
                  <div className="hidden md:flex absolute -bottom-24 left-0 w-full justify-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">
                    Divergent (Develop)
                  </div>
                )}
                {i === 3 && (
                  <div className="hidden md:flex absolute -bottom-24 left-0 w-full justify-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">
                    Convergent (Deliver)
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Section labels - Hidden on mobile */}
          <div className="hidden md:flex absolute -top-16 left-0 right-0 px-12">
            <div className="flex-1 text-center border-l border-r border-white/10 py-2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-black">Problem Space</span>
            </div>
            <div className="flex-1 text-center border-r border-white/10 py-2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-blitz-green/40 font-black">Solution Space</span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'strategic' && slide.strategicSections && (
        <div className="flex flex-col gap-6 md:gap-6 w-full max-w-6xl mt-6 md:mt-10 px-4">
          {slide.strategicSections.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-6 md:p-10 rounded-2xl md:rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blitz-green/20 transition-all duration-500"
            >
              <div className="flex-1">
                <span className="text-blitz-green text-[11px] md:text-[13px] font-bold uppercase tracking-widest mb-2 md:mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
                  {s.label}
                </span>
                <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {s.text}
                </p>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white/10" />
              
              <div className="w-full md:w-64 shrink-0">
                <span className="text-white/30 text-[10px] md:text-[11px] uppercase font-bold block mb-2">Focus Strategic</span>
                <span className="text-xl md:text-2xl font-black text-white group-hover:text-blitz-green transition-colors uppercase">
                  {s.accent}
                </span>
              </div>

              {/* Decorative accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-blitz-green group-hover:h-3/4 transition-all duration-500 rounded-r-full shadow-[0_0_20px_rgba(0,210,133,0.4)]" />
            </motion.div>
          ))}
        </div>
      )}

      {slide.type === 'summary' && slide.gridItems && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-20 gap-y-8 md:gap-y-12 w-full max-w-6xl mt-6 md:mt-10 px-4">
          {slide.gridItems.map((g, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex gap-4 md:gap-8 items-start group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blitz-green/10 flex items-center justify-center border border-blitz-green/20 group-hover:bg-blitz-green group-hover:border-blitz-green transition-all duration-500 shadow-lg shadow-blitz-green/5">
                  <div className="text-blitz-green group-hover:text-blitz-dark transition-colors duration-500">
                    <div className="scale-90 md:scale-110">{g.icon}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-3 group-hover:text-blitz-green transition-colors duration-300 tracking-tight">
                  {g.title}
                </h3>
                <p className="text-[14px] md:text-[17px] text-white/50 leading-relaxed max-w-md font-medium">
                  {g.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {slide.type === 'grid' && slide.gridItems && (
        <div className="w-full max-w-7xl mt-2">
          {(slide.id === 4 || slide.id === 5 || slide.id === 9 || slide.id === 11) ? (
            /* Strategic Report Grid Layout for Slide 5, 6, 10 & 12 - Mobile Scrollable */
            <div className="w-full max-w-7xl mt-8 md:mt-16 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-10 text-left">
                {slide.gridItems.map((g, i) => (
                  <motion.div 
                    key={i} 
                    variants={item}
                    className={`flex flex-col border-t border-white/10 pt-4 md:pt-6 group hover:border-blitz-green/40 transition-colors ${
                      (slide.id === 4 && i === 6) || (slide.id === 9 && i === 4 && slide.gridItems!.length === 5) ? 'md:col-start-2 lg:col-start-2' : 
                      (slide.id === 11 && slide.gridItems!.length === 4 && i >= 2) ? '' : '' 
                    }`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <span className={`${slide.id === 4 ? 'text-red-500 bg-red-500/10' : 'text-blitz-green bg-blitz-green/10'} text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] px-2 py-0.5 rounded`}>
                        {slide.id === 4 ? 'Issue' : slide.id === 11 ? 'Step' : slide.id === 9 ? 'Section' : 'Target'} 0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight tracking-tight group-hover:text-blitz-green transition-colors">
                      {g.title.replace(/^\d+\)\s*/, '')}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-white/40 leading-relaxed font-medium">
                      {g.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : slide.gridItems.length <= 8 ? (
            /* Static balanced grid for up to 8 items */
            <div className={`grid gap-4 auto-rows-fr justify-center ${
              slide.gridItems.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : 
              slide.gridItems.length <= 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
              'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}>
              {slide.gridItems.map((g, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`relative group rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden transition-all hover:bg-white/[0.06] hover:border-blitz-green/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col h-full ${
                    slide.gridItems!.length > 4 ? 'p-5' : slide.gridItems!.length > 3 ? 'p-6' : 'p-12'
                  } ${i >= 4 && slide.gridItems!.length === 7 ? 'lg:translate-x-[50%]' : ''}`}
                >
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-blitz-green/5 blur-[80px] group-hover:bg-blitz-green/15 transition-all duration-700" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`${slide.gridItems!.length > 4 ? 'mb-3 w-12 h-12' : slide.gridItems!.length > 3 ? 'mb-4 w-14 h-14' : 'mb-10 w-20 h-20'} rounded-[16px] bg-blitz-green/10 flex items-center justify-center border border-blitz-green/20 group-hover:bg-blitz-green/20 group-hover:border-blitz-green/40 transition-all duration-500 shadow-inner`}>
                      <div className={slide.gridItems!.length > 4 ? 'scale-90' : slide.gridItems!.length > 3 ? 'scale-110' : 'scale-150'}>{g.icon}</div>
                    </div>
                    <h3 className={`${slide.gridItems!.length > 4 ? 'text-lg' : slide.gridItems!.length > 3 ? 'text-xl' : 'text-3xl'} font-extrabold mb-2 text-white tracking-tight group-hover:text-blitz-green transition-colors duration-300 leading-tight`}>
                      {g.title}
                    </h3>
                    <p className={`${slide.gridItems!.length > 4 ? 'text-[14px]' : slide.gridItems!.length > 3 ? 'text-[16px]' : 'text-[20px]'} text-white/50 leading-relaxed font-medium`}>
                      {g.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Automatic Scrolling for more than 8 items */
            <div className="w-full max-w-[98vw] -mx-[4vw] overflow-hidden relative">
              <motion.div 
                className="flex gap-6 py-6 px-[10vw]"
                animate={{
                  x: [0, -360 * (slide.gridItems.length - 2)],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              >
                {slide.gridItems.map((g, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                    className="relative group p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden transition-all hover:bg-white/[0.06] hover:border-blitz-green/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col shrink-0 w-[380px] h-[320px]"
                  >
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blitz-green/5 blur-[80px] group-hover:bg-blitz-green/10 transition-all duration-700" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-5 w-14 h-14 rounded-[18px] bg-blitz-green/10 flex items-center justify-center border border-blitz-green/20 group-hover:bg-blitz-green/20 transition-all duration-500">
                        {g.icon}
                      </div>
                      <h3 className="text-xl font-extrabold mb-3 text-white tracking-tight group-hover:text-blitz-green transition-colors duration-300 leading-tight">
                        {g.title}
                      </h3>
                      <p className="text-[15px] text-white/50 leading-relaxed font-medium line-clamp-4">
                        {g.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-blitz-dark via-blitz-dark/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-blitz-dark via-blitz-dark/50 to-transparent z-10 pointer-events-none" />
            </div>
          )}
          {slide.warning && slide.type === 'grid' && (
            <motion.p
              variants={item}
              className="mt-8 md:mt-12 text-blitz-green/60 text-xs md:text-sm font-bold uppercase tracking-widest px-4 md:px-6 py-1.5 md:py-2 border border-blitz-green/20 bg-blitz-green/5 rounded-full"
            >
              ℹ️ {slide.warning}
            </motion.p>
          )}
        </div>
      )}

      {slide.items && slide.type !== 'grid' && (
        <div className="grid gap-4 md:gap-6 text-left w-full max-w-3xl px-4">
          {slide.items.map((text, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="mt-1.5 md:mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blitz-green shrink-0" />
              <p className="text-base md:text-[22px] leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      )}

      {slide.points && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-8 px-4">
          {slide.points.map((p, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="flex flex-col items-center p-6 md:p-8 bg-white/5 rounded-xl md:rounded-2xl min-w-[180px] md:min-w-[240px] border border-white/5"
            >
              <span className="text-white/50 text-base md:text-lg mb-2">{p.label}</span>
              <span className="text-3xl md:text-4xl font-bold text-blitz-green">{p.value}</span>
            </motion.div>
          ))}
        </div>
      )}

      {slide.points && (
        <div className="flex gap-12 mt-8">
          {slide.points.map((p, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="flex flex-col items-center p-8 bg-white/5 rounded-2xl min-w-[240px] border border-white/5"
            >
              <span className="text-white/50 text-lg mb-2">{p.label}</span>
              <span className="text-4xl font-bold text-blitz-green">{p.value}</span>
            </motion.div>
          ))}
        </div>
      )}

      {slide.quote && (
        <motion.div
          variants={item}
          className="mt-6 md:mt-8 w-full max-w-4xl text-center px-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-8 md:w-12 h-[1px] bg-blitz-green/30 mb-3 md:mb-4" />
            <p className="text-base md:text-xl italic text-white/40 font-medium leading-relaxed">
              "{slide.quote}"
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isOverview, setIsOverview] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setSelectedImage(null);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      setSelectedImage(null);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsOverview(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'Enter':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          prevSlide();
          break;
        case 'Escape':
          setIsOverview((prev) => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(10px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(10px)'
    })
  };

  return (
    <div className="relative w-full h-full bg-blitz-dark overflow-hidden md:overflow-hidden font-sans text-white select-none">
      {/* Global Background Layer for Images */}
      <AnimatePresence mode="wait">
        {slides[currentSlide].bgImage && (
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img 
              src={slides[currentSlide].bgImage} 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* Deep Vignette & Brand Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blitz-dark via-transparent to-blitz-dark opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-blitz-dark via-transparent to-blitz-dark opacity-90" />
            <div className="absolute inset-0 bg-radial-[at_center] from-blitz-green/40 via-transparent to-transparent opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overview Mode - Mobile Optimized */}
      <AnimatePresence>
        {isOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-blitz-dark p-4 md:p-16 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 md:mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-blitz-green mb-1 md:mb-2">Prezentare Blitz</h2>
                <p className="text-sm md:text-base text-white/40">Selectează un slide pentru a naviga</p>
              </div>
              <button 
                onClick={() => setIsOverview(false)}
                className="p-2 md:p-4 hover:bg-white/10 rounded-full transition-colors group"
              >
                <X size={32} className="md:w-12 md:h-12 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => goToSlide(index)}
                  className={`aspect-video p-4 md:p-8 border-2 rounded-xl md:rounded-2xl cursor-pointer transition-all flex flex-col justify-between ${
                    currentSlide === index 
                      ? 'border-blitz-green bg-blitz-green/10 shadow-[0_0_30px_rgba(0,210,133,0.2)]' 
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <span className={`text-xs md:text-sm font-bold ${currentSlide === index ? 'text-blitz-green' : 'text-white/30'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm md:text-xl font-bold leading-tight">{slide.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation UI */}
      {!isOverview && (
        <>
          {/* Subtle Side Navigation - Hidden on Mobile, Touch-friendly Zones */}
          <div 
            onClick={prevSlide}
            className={`hidden md:flex absolute left-0 top-0 bottom-0 w-32 z-20 cursor-pointer items-center justify-start pl-8 group ${currentSlide === 0 ? 'hidden' : ''}`}
          >
            <div className="p-4 rounded-full bg-white/0 group-hover:bg-white/5 transition-all">
              <ChevronLeft size={48} className="opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>
          
          <div 
            onClick={nextSlide}
            className={`hidden md:flex absolute right-0 top-0 bottom-0 w-32 z-20 cursor-pointer items-center justify-end pr-8 group ${currentSlide === slides.length - 1 ? 'hidden' : ''}`}
          >
            <div className="p-4 rounded-full bg-white/0 group-hover:bg-white/5 transition-all">
              <ChevronRight size={48} className="opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>

          {/* Mobile Navigation Buttons - Fixed at Bottom for Easy Thumb Access */}
          <div className="md:hidden fixed bottom-20 left-4 right-4 z-30 flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex-1 py-3 px-6 rounded-2xl border transition-all ${
                currentSlide === 0 
                  ? 'border-white/5 bg-white/5 text-white/20' 
                  : 'border-white/20 bg-white/10 backdrop-blur-xl text-white active:bg-white/20'
              }`}
            >
              <ChevronLeft size={24} className="mx-auto" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex-1 py-3 px-6 rounded-2xl border transition-all ${
                currentSlide === slides.length - 1 
                  ? 'border-white/5 bg-white/5 text-white/20' 
                  : 'border-blitz-green/30 bg-blitz-green/10 backdrop-blur-xl text-white active:bg-blitz-green/20'
              }`}
            >
              <ChevronRight size={24} className="mx-auto" />
            </button>
          </div>

          {/* Progress Indicator - Mobile Sticky, Desktop Absolute */}
          <div className="fixed md:absolute bottom-4 md:bottom-12 left-4 md:left-12 right-4 md:right-12 z-30 flex items-center gap-4 md:gap-12 bg-blitz-dark/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-3 md:p-0 rounded-full md:rounded-none border md:border-0 border-white/10">
            <div className="text-xs md:text-sm font-mono text-white/30">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
            <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                className="absolute top-0 left-0 h-full bg-blitz-green"
              />
            </div>
            <div className="hidden md:flex gap-1 md:gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blitz-green scale-150' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Branding - Mobile Optimized */}
          <div className="absolute top-6 md:top-10 left-4 md:left-10 z-20 flex items-center gap-4 md:gap-8">
            <img src={blitzLogo} alt="Blitz Logo" className="h-6 md:h-10 w-auto object-contain" />
            <div className="h-8 md:h-12 w-[1px] bg-white/10" />
            <img src={akyLogo} alt="AKY Logo" className="h-8 md:h-12 w-auto object-contain" />
          </div>

          <div className="absolute top-8 md:top-12 right-4 md:right-12 z-20">
            <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">
                UX Strategy 2026
              </span>
            </div>
          </div>
        </>
      )}

      {/* Main Content Area - Mobile Scrollable, Desktop Full-Screen */}
      <main className="relative w-full h-full flex items-start md:items-center justify-center overflow-y-auto md:overflow-hidden pt-20 md:pt-16 pb-24 md:pb-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 40 },
              opacity: { duration: 0.3 },
              filter: { duration: 0.3 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                nextSlide();
              } else if (swipe > 10000) {
                prevSlide();
              }
            }}
            className="w-full flex items-center justify-center p-4 md:p-16 md:cursor-grab md:active:cursor-grabbing"
          >
            <SlideContent slide={slides[currentSlide]} onImageClick={setSelectedImage} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Lightbox / Zoom View - Mobile Optimized */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="absolute inset-0 z-[100] bg-blitz-dark/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img 
                src={selectedImage} 
                alt="Zoomed Evidence" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 p-2 md:p-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={32} className="md:w-12 md:h-12" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
