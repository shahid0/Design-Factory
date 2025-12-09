
import React, { useId, useState } from 'react';
import { StylePreviewConfig } from '../lib/styles/types';
import { Activity, Bell, Settings, Wifi, Battery, Menu, ChevronRight, Shield, Zap, Database, Check } from 'lucide-react';

interface StyleMannequinProps {
  config: StylePreviewConfig;
}

export const StyleMannequin: React.FC<StyleMannequinProps> = ({ config }) => {
  const uniqueId = useId().replace(/:/g, '');
  const scopeId = `preview-${uniqueId}`;

  // INTERACTIVITY STATE (The "Juice")
  const [activeTab, setActiveTab] = useState('Core');
  const [toggles, setToggles] = useState({ notifications: true, autoSave: false });
  const [inputValue, setInputValue] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Operative');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cssVariables = Object.entries(config.theme)
    .map(([key, val]) => `${key}: ${val};`)
    .join(' ');

  // Scope the injected CSS to this specific mannequin instance
  const scopedCustomCss = config.injectCss 
    ? config.injectCss.replace(/(\.ds-[\w-]+)/g, `#${scopeId} $1`).replace(/(body|html)/g, `#${scopeId}`)
    : '';

  return (
    <div 
      id={scopeId} 
      className={`w-full h-full overflow-y-auto custom-scrollbar relative ${config.elementClasses?.stage || 'bg-kaolin-50'}`}
    >
      <style>{`
        #${scopeId} {
          ${cssVariables}
        }
        
        /* Universal Polish - The "No-Break" Rules */
        #${scopeId} * {
          box-sizing: border-box;
        }
        
        /* Universal Juice - Smooth Transitions by Default */
        #${scopeId} .ds-btn-primary,
        #${scopeId} .ds-btn-secondary,
        #${scopeId} .ds-card,
        #${scopeId} .ds-panel,
        #${scopeId} .ds-input,
        #${scopeId} .mannequin-toggle-track,
        #${scopeId} .mannequin-toggle-thumb {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* Cartridge Specific CSS */
        ${scopedCustomCss}
        
        /* Universal Mannequin Overrides */
        #${scopeId} .mannequin-progress-track {
          background: var(--text-secondary);
          opacity: 0.15;
        }
        #${scopeId} .mannequin-progress-fill {
          background: var(--accent-color);
        }
        #${scopeId} .mannequin-toggle-track {
          background: var(--text-secondary);
          opacity: 0.2;
        }
        #${scopeId} .mannequin-toggle-track.active {
          background: var(--accent-color);
          opacity: 1;
        }
        #${scopeId} .mannequin-toggle-thumb {
          background: var(--bg-layer-1);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        #${scopeId} .mannequin-icon-soft {
          color: var(--text-secondary);
          background: var(--bg-layer-1);
        }
        
        /* Utility for Selected State in Pricing */
        #${scopeId} .ds-card.selected {
          border-color: var(--accent-color);
          transform: translateY(-4px);
        }
      `}</style>

      {/* FULL PAGE ANATOMY */}
      <div className="ds-page-root min-h-full flex flex-col relative z-10 font-[family-name:var(--font-display)] pb-20">
        
        {/* 1. Navigation */}
        <nav className={`ds-navbar w-full px-6 py-4 md:px-8 md:py-6 flex justify-between items-center border-b border-transparent ${config.elementClasses?.navbar || ''}`}>
           <div className="ds-logo text-xl md:text-2xl font-black tracking-tighter text-[var(--text-primary)] flex items-center gap-2 select-none cursor-pointer">
              <div className="w-8 h-8 rounded-[var(--border-radius)] bg-[var(--accent-color)] flex items-center justify-center text-[var(--bg-layer-1)]">
                <span className="font-bold text-lg">M</span>
              </div>
              <span>MOLD<span className="text-[var(--accent-color)]">.</span>SYS</span>
           </div>
           
           {/* Desktop Nav */}
           <div className="ds-nav-links hidden md:flex gap-6 lg:gap-8 text-[var(--text-secondary)] font-bold text-xs uppercase tracking-widest items-center">
              {['Core', 'Modules', 'API'].map((link) => (
                <span 
                  key={link}
                  onClick={() => setActiveTab(link)}
                  className={`cursor-pointer transition-colors flex items-center gap-1 ${activeTab === link ? 'text-[var(--accent-color)] opacity-100' : 'hover:text-[var(--text-primary)] opacity-70 hover:opacity-100'}`}
                >
                   {link}
                </span>
              ))}
           </div>

           <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-3 text-[var(--text-secondary)] opacity-60">
                 <Wifi className="w-4 h-4" />
                 <Battery className="w-4 h-4" />
              </div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`ds-btn-secondary px-5 py-2 rounded-[var(--border-radius)] text-[var(--text-primary)] font-bold text-xs border border-[var(--text-primary)] cursor-pointer hover:bg-[var(--text-primary)] hover:text-[var(--bg-layer-1)] transition-all flex items-center gap-2 ${config.elementClasses?.buttonSecondary || ''}`}
              >
                  <Menu className="w-3 h-3 md:hidden" />
                  <span className="hidden md:inline">CONNECT</span>
              </button>
           </div>
        </nav>

        {/* 2. Hero Section */}
        <header className="ds-hero w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col items-start justify-center relative">
           <div className={`ds-badge px-3 py-1 mb-6 bg-[var(--accent-color)] text-[var(--bg-layer-1)] text-[10px] font-black uppercase tracking-widest rounded-[var(--border-radius)] flex items-center gap-2 ${config.elementClasses?.badge || ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              SYSTEM_V4.1_ONLINE
           </div>
           <h1 className="ds-hero-title text-5xl md:text-7xl lg:text-8xl font-black text-[var(--text-primary)] leading-[0.9] mb-8 max-w-4xl tracking-tighter">
              DESIGN <br/> WITHOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--text-secondary)]">LIMITS</span>.
           </h1>
           <p className="ds-hero-text text-base md:text-xl text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed opacity-80">
             Deploy scalable design infrastructures instantly. No legacy code. No latency. Pure aesthetic rendering.
           </p>
           <div className="flex flex-wrap gap-4">
              <button className={`ds-btn-primary px-8 py-4 rounded-[var(--border-radius)] text-[var(--bg-layer-1)] font-bold text-xs md:text-sm bg-[var(--text-primary)] relative overflow-hidden group transition-transform active:scale-95 flex items-center gap-2 ${config.elementClasses?.buttonPrimary || ''}`}>
                <span>INITIALIZE</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className={`ds-btn-ghost px-8 py-4 rounded-[var(--border-radius)] text-[var(--text-secondary)] font-bold text-xs md:text-sm border border-[var(--text-secondary)]/30 hover:border-[var(--text-secondary)] transition-all ${config.elementClasses?.buttonSecondary || ''}`}>
                DOCUMENTATION
              </button>
           </div>
        </header>

        {/* 3. Control Deck (Interactive) */}
        <section className="ds-controls w-full max-w-7xl mx-auto px-6 md:px-8 py-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Control Panel 1: Toggles & Status */}
              <div className={`ds-panel p-6 rounded-[var(--border-radius)] bg-[var(--bg-layer-2)] border border-[var(--text-secondary)]/20 ${config.elementClasses?.container || ''}`}>
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                       <Activity className="w-4 h-4 text-[var(--accent-color)]" />
                       System Status
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse"></div>
                 </div>
                 
                 <div className="space-y-6">
                    {/* Progress Bar */}
                    <div className="w-full">
                       <div className="flex justify-between text-[10px] font-bold text-[var(--text-secondary)] mb-2 uppercase tracking-wide">
                          <span>CPU Load</span>
                          <span>{toggles.notifications ? '86%' : '12%'}</span>
                       </div>
                       <div className="w-full h-1.5 rounded-full mannequin-progress-track overflow-hidden relative">
                          <div 
                            className="h-full mannequin-progress-fill absolute top-0 left-0 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: toggles.notifications ? '86%' : '12%' }}
                          ></div>
                       </div>
                    </div>

                    {/* Interactive Toggles */}
                    <div 
                      className="flex items-center justify-between cursor-pointer group"
                      onClick={() => setToggles(p => ({ ...p, notifications: !p.notifications }))}
                    >
                       <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">Notifications</span>
                       <div className={`w-10 h-6 rounded-full mannequin-toggle-track relative transition-colors ${toggles.notifications ? 'active' : ''}`}>
                          <div className={`absolute top-1 w-4 h-4 mannequin-toggle-thumb rounded-full transition-all ${toggles.notifications ? 'left-[calc(100%-1.25rem)]' : 'left-1'}`}></div>
                       </div>
                    </div>
                    
                    <div 
                      className="flex items-center justify-between cursor-pointer group"
                      onClick={() => setToggles(p => ({ ...p, autoSave: !p.autoSave }))}
                    >
                       <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">Auto-Save</span>
                       <div className={`w-10 h-6 rounded-full mannequin-toggle-track relative transition-colors ${toggles.autoSave ? 'active' : ''}`}>
                          <div className={`absolute top-1 w-4 h-4 mannequin-toggle-thumb rounded-full transition-all ${toggles.autoSave ? 'left-[calc(100%-1.25rem)]' : 'left-1'}`}></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Control Panel 2: Inputs */}
              <div className={`ds-panel p-6 rounded-[var(--border-radius)] bg-[var(--bg-layer-2)] border border-[var(--text-secondary)]/20 ${config.elementClasses?.container || ''}`}>
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                       <Shield className="w-4 h-4 text-[var(--accent-color)]" />
                       Security
                    </h3>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="relative">
                      <label className="ds-label block text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-70">
                         Access Key
                      </label>
                      <div className="relative group">
                          <input 
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className={`ds-input w-full px-4 py-3 bg-[var(--bg-layer-1)] text-[var(--text-primary)] rounded-[var(--border-radius)] text-sm font-medium border border-transparent focus:outline-none placeholder-[var(--text-secondary)]/30 transition-all ${config.elementClasses?.input || ''}`}
                            placeholder="Enter Key..."
                          />
                          <div className={`ds-input-decorator absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all ${inputValue.length > 5 ? 'bg-glaze-500 scale-125' : 'bg-[var(--accent-color)] opacity-50'}`}></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                       <button className={`ds-btn-secondary flex-1 py-2 text-xs font-bold border border-[var(--text-secondary)]/20 rounded-[var(--border-radius)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-layer-1)] transition-colors ${config.elementClasses?.buttonSecondary || ''}`}>
                          Clear
                       </button>
                       <button className={`ds-btn-primary flex-1 py-2 text-xs font-bold bg-[var(--text-primary)] text-[var(--bg-layer-1)] rounded-[var(--border-radius)] hover:brightness-110 transition-all ${config.elementClasses?.buttonPrimary || ''}`}>
                          Verify
                       </button>
                    </div>
                 </div>
              </div>

              {/* Control Panel 3: Notifications */}
              <div className={`ds-panel p-6 rounded-[var(--border-radius)] bg-[var(--bg-layer-2)] border border-[var(--text-secondary)]/20 flex flex-col justify-between ${config.elementClasses?.container || ''}`}>
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                       <Bell className="w-4 h-4 text-[var(--accent-color)]" />
                       Feed
                    </h3>
                    <span className="text-[10px] font-bold text-[var(--text-secondary)] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      LIVE
                    </span>
                 </div>
                 
                 <div className="space-y-3">
                    {[1, 2].map((i) => (
                       <div key={i} className="flex items-start gap-3 p-3 rounded-[var(--border-radius)] bg-[var(--bg-layer-1)]/50 border border-[var(--text-secondary)]/10 hover:border-[var(--accent-color)] transition-all cursor-pointer group hover:-translate-x-1">
                          <div className="w-8 h-8 rounded-[var(--border-radius)] flex-shrink-0 mannequin-icon-soft flex items-center justify-center group-hover:text-[var(--accent-color)] transition-colors">
                             {i === 1 ? <Zap className="w-4 h-4" /> : <Database className="w-4 h-4" />}
                          </div>
                          <div>
                             <p className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">System Update {i}.0</p>
                             <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 opacity-80">Patch notes deployed to main.</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </section>

        {/* 4. Data Stream (Table) */}
        <section className="ds-data w-full max-w-7xl mx-auto px-6 md:px-8 pb-16">
            <div className={`ds-table-container w-full overflow-hidden rounded-[var(--border-radius)] border border-[var(--text-secondary)]/20 bg-[var(--bg-layer-2)] ${config.elementClasses?.container || ''}`}>
                <div className="grid grid-cols-12 gap-2 md:gap-4 p-4 border-b border-[var(--text-secondary)]/10 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] opacity-60">
                    <div className="col-span-2">ID</div>
                    <div className="col-span-6">Protocol</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Latency</div>
                </div>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 md:gap-4 p-4 border-b border-[var(--text-secondary)]/5 items-center hover:bg-[var(--text-secondary)]/5 transition-all group cursor-default hover:pl-6">
                        <div className="col-span-2 font-mono text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">#884-0{i}</div>
                        <div className="col-span-6 text-xs md:text-sm font-bold text-[var(--text-primary)]">Inbound Vector Stream</div>
                        <div className="col-span-2">
                             <span className="px-2 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-[10px] font-bold uppercase border border-[var(--accent-color)]/20 flex w-fit items-center gap-1">
                               <Check className="w-3 h-3" />
                               Active
                             </span>
                        </div>
                        <div className="col-span-2 text-right font-mono text-xs text-[var(--text-secondary)]">0.0{i}ms</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. Access Levels (Pricing) */}
        <section className="ds-pricing w-full max-w-7xl mx-auto px-6 md:px-8 pb-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Scout', 'Operative', 'Architect'].map((plan, i) => (
                    <div 
                      key={plan} 
                      onClick={() => setSelectedPlan(plan)}
                      className={`ds-card cursor-pointer p-8 rounded-[var(--border-radius)] border bg-[var(--bg-layer-1)] flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 group
                      ${selectedPlan === plan ? 'border-[var(--accent-color)] shadow-[0_0_30px_-10px_var(--accent-color)] selected' : 'border-[var(--text-secondary)]/20'}`}
                    >
                        {selectedPlan === plan && (
                           <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--accent-color)] text-[var(--bg-layer-1)] text-[10px] font-black uppercase tracking-wider">
                              Selected
                           </div>
                        )}
                        <h3 className="ds-card-title text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">{plan}</h3>
                        <div className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-6 font-[family-name:var(--font-display)]">
                            <span className="text-lg align-top opacity-50">$</span>{19 * (i + 1)}
                        </div>
                        <ul className="flex-1 space-y-3 mb-8">
                            {[1, 2, 3].map((f) => (
                                <li key={f} className="flex items-center gap-3 text-xs font-bold text-[var(--text-secondary)]">
                                    <div className={`w-1.5 h-1.5 rounded-full ${selectedPlan === plan ? 'bg-[var(--accent-color)]' : 'bg-[var(--text-primary)]'}`}></div>
                                    Feature Access Level {f}
                                </li>
                            ))}
                        </ul>
                        <button className={`ds-card-btn w-full py-3 rounded-[var(--border-radius)] text-xs font-black uppercase tracking-widest transition-all ${selectedPlan === plan ? 'bg-[var(--accent-color)] text-[var(--bg-layer-1)] hover:brightness-110' : 'bg-[var(--bg-layer-2)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-layer-1)]'}`}>
                            {selectedPlan === plan ? 'Current Plan' : 'Select Plan'}
                        </button>
                    </div>
                ))}
             </div>
        </section>

        {/* 6. Footer */}
        <footer className="ds-footer w-full bg-[var(--bg-layer-2)] border-t border-[var(--text-secondary)]/20 py-12 px-6 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-xs">
                    <div className="ds-logo text-xl font-black tracking-tighter text-[var(--text-primary)] mb-4">
                        MOLD<span className="text-[var(--accent-color)]">.</span>SYS
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed opacity-60">
                        Constructed for the next generation of digital interfaces. Immutability guaranteed.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {[1, 2].map((col) => (
                        <div key={col} className="flex flex-col gap-3">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Sector {col}</h4>
                            <span className="text-xs text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent-color)] transition-colors">Documentation</span>
                            <span className="text-xs text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent-color)] transition-colors">Support</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[var(--text-secondary)]/10 flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-mono opacity-50">
                <span>© 2077 MOLD SYSTEMS INC.</span>
                <span>STATUS: STABLE</span>
            </div>
        </footer>

      </div>
      
      {/* Decorative background layer */}
      <div className="ds-deco-layer fixed inset-0 z-0 pointer-events-none"></div>
    </div>
  );
};
