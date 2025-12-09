
import React, { useId } from 'react';
import { StylePreviewConfig } from '../lib/styles/types';

interface StyleMannequinProps {
  config: StylePreviewConfig;
}

export const StyleMannequin: React.FC<StyleMannequinProps> = ({ config }) => {
  // Generate a safe, unique ID for CSS scoping
  const uniqueId = useId().replace(/:/g, '');
  const scopeId = `preview-${uniqueId}`;

  // 1. Serialize CSS Variables
  const cssVariables = Object.entries(config.theme)
    .map(([key, val]) => `${key}: ${val};`)
    .join(' ');

  // 2. Scope the Custom CSS
  // We prepend the scope ID to every selector to ensure isolation
  const scopedCustomCss = config.injectCss 
    ? config.injectCss.replace(/(\.ds-[\w-]+)/g, `#${scopeId} $1`) 
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
        ${scopedCustomCss}
      `}</style>

      {/* FULL PAGE ANATOMY */}
      <div className="ds-page-root min-h-full flex flex-col relative z-10 font-[family-name:var(--font-display)]">
        
        {/* 1. Navigation */}
        <nav className={`ds-navbar w-full px-8 py-6 flex justify-between items-center border-b border-transparent ${config.elementClasses?.navbar || ''}`}>
           <div className="ds-logo text-2xl font-black tracking-tighter text-[var(--text-primary)]">
              MOLD<span className="text-[var(--accent-color)]">.</span>SYS
           </div>
           <div className="ds-nav-links hidden md:flex gap-8 text-[var(--text-secondary)] font-bold text-xs uppercase tracking-widest">
              <span className="cursor-pointer hover:text-[var(--text-primary)] transition-colors opacity-70 hover:opacity-100">Modules</span>
              <span className="cursor-pointer hover:text-[var(--text-primary)] transition-colors opacity-70 hover:opacity-100">Network</span>
              <span className="cursor-pointer hover:text-[var(--text-primary)] transition-colors opacity-70 hover:opacity-100">Protocol</span>
           </div>
           <div className={`ds-btn-secondary px-6 py-2 rounded-[var(--border-radius)] text-[var(--text-primary)] font-bold text-xs border border-[var(--text-primary)] cursor-pointer hover:bg-[var(--text-primary)] hover:text-[var(--bg-layer-1)] transition-all ${config.elementClasses?.buttonSecondary || ''}`}>
              CONNECT
           </div>
        </nav>

        {/* 2. Hero Section */}
        <header className="ds-hero w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-start justify-center relative">
           <div className={`ds-badge px-3 py-1 mb-8 bg-[var(--accent-color)] text-[var(--bg-layer-1)] text-[10px] font-black uppercase tracking-widest rounded-[var(--border-radius)] ${config.elementClasses?.badge || ''}`}>
              // SYSTEM_OVERRIDE_ACTIVE
           </div>
           <h1 className="ds-hero-title text-6xl md:text-8xl font-black text-[var(--text-primary)] leading-[0.85] mb-8 max-w-5xl tracking-tighter">
              ARCHITECT <br/> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--text-secondary)]">FUTURE</span>.
           </h1>
           <p className="ds-hero-text text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mb-12 leading-relaxed opacity-80">
             Deploy scalable design infrastructures instantly. No legacy code. No latency. Pure aesthetic rendering.
           </p>
           <div className="flex flex-wrap gap-4">
              <button className={`ds-btn-primary px-10 py-4 rounded-[var(--border-radius)] text-[var(--bg-layer-1)] font-bold text-sm bg-[var(--text-primary)] relative overflow-hidden group transition-transform active:scale-95 ${config.elementClasses?.buttonPrimary || ''}`}>
                <span className="relative z-10">INITIALIZE SEQUENCE</span>
              </button>
              <button className={`ds-btn-ghost px-10 py-4 rounded-[var(--border-radius)] text-[var(--text-secondary)] font-bold text-sm border border-[var(--text-secondary)]/30 hover:border-[var(--text-secondary)] transition-all ${config.elementClasses?.buttonSecondary || ''}`}>
                VIEW SCHEMATICS
              </button>
           </div>
        </header>

        {/* 3. Stats Row */}
        <section className="ds-stats w-full border-y border-[var(--text-secondary)]/10 bg-[var(--bg-layer-2)]/50 backdrop-blur-sm">
           <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Latency', val: '12ms' },
                { label: 'Uptime', val: '99.9%' },
                { label: 'Nodes', val: '8,402' },
                { label: 'Security', val: 'Lvl 5' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] opacity-60 mb-1">{stat.label}</span>
                   <span className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">{stat.val}</span>
                </div>
              ))}
           </div>
        </section>

        {/* 4. Feature Grid */}
        <section className="ds-grid w-full max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Card 1 */}
           <div className={`ds-panel p-8 rounded-[var(--border-radius)] bg-[var(--bg-layer-2)] border border-[var(--text-secondary)]/20 relative group ${config.elementClasses?.container || ''}`}>
              <div className="w-12 h-12 mb-6 bg-[var(--bg-layer-1)] rounded-[var(--border-radius)] flex items-center justify-center text-[var(--accent-color)] border border-[var(--text-secondary)]/10 group-hover:border-[var(--accent-color)] transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Hyper-Speed</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed opacity-80">
                 Optimized for high-performance visual output with zero latency rendering pipelines.
              </p>
           </div>
           
           {/* Card 2 */}
           <div className={`ds-panel p-8 rounded-[var(--border-radius)] bg-[var(--bg-layer-2)] border border-[var(--text-secondary)]/20 relative group ${config.elementClasses?.container || ''}`}>
              <div className="w-12 h-12 mb-6 bg-[var(--bg-layer-1)] rounded-[var(--border-radius)] flex items-center justify-center text-[var(--accent-color)] border border-[var(--text-secondary)]/10 group-hover:border-[var(--accent-color)] transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Secure Core</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed opacity-80">
                 Encrypted semantic tokens ensure your design system remains immutable.
              </p>
           </div>

           {/* Card 3 (Input Example) */}
           <div className={`ds-panel p-8 rounded-[var(--border-radius)] bg-[var(--bg-layer-2)] border border-[var(--text-secondary)]/20 relative group ${config.elementClasses?.container || ''}`}>
              <div className="w-12 h-12 mb-6 bg-[var(--bg-layer-1)] rounded-[var(--border-radius)] flex items-center justify-center text-[var(--accent-color)] border border-[var(--text-secondary)]/10 group-hover:border-[var(--accent-color)] transition-colors">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 14l-1 1-1 1H6v-1l-4-4 4-4h1l1-1 1-1h1.757a6 6 0 115.824 5.257A2 2 0 0115 7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Access Control</h3>
              <div className="relative">
                <label className="ds-label block text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-70">
                   Auth Token
                </label>
                <div className="relative">
                    <input 
                    className={`ds-input w-full px-4 py-3 bg-[var(--bg-layer-1)] text-[var(--text-primary)] rounded-[var(--border-radius)] text-sm font-medium border border-transparent focus:outline-none placeholder-[var(--text-secondary)]/30 ${config.elementClasses?.input || ''}`}
                    placeholder="Enter Key..."
                    readOnly
                    value="XJ9-PROTO-ACCESS"
                    />
                    <div className="ds-input-decorator absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent-color)] opacity-50 animate-pulse"></div>
                </div>
              </div>
           </div>
        </section>

        {/* 5. Data Stream (Table) */}
        <section className="ds-data w-full max-w-7xl mx-auto px-8 pb-24">
            <div className="ds-section-header flex items-end justify-between mb-8 border-b border-[var(--text-secondary)]/20 pb-4">
                <h2 className="ds-section-title text-3xl font-black text-[var(--text-primary)]">NETWORK LOGS</h2>
                <span className="text-xs font-mono text-[var(--accent-color)] animate-pulse">LIVE STREAM ACTIVE ●</span>
            </div>
            
            <div className={`ds-table-container w-full overflow-hidden rounded-[var(--border-radius)] border border-[var(--text-secondary)]/20 bg-[var(--bg-layer-2)] ${config.elementClasses?.container || ''}`}>
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-[var(--text-secondary)]/10 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] opacity-60">
                    <div className="col-span-2">ID</div>
                    <div className="col-span-6">Protocol</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Latency</div>
                </div>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-[var(--text-secondary)]/5 items-center hover:bg-[var(--text-secondary)]/5 transition-colors">
                        <div className="col-span-2 font-mono text-xs text-[var(--text-secondary)]">#884-0{i}</div>
                        <div className="col-span-6 text-sm font-bold text-[var(--text-primary)]">Inbound Vector Stream</div>
                        <div className="col-span-2">
                             <span className="px-2 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-[10px] font-bold uppercase">Active</span>
                        </div>
                        <div className="col-span-2 text-right font-mono text-xs text-[var(--text-secondary)]">0.0{i}ms</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. Access Levels (Pricing) */}
        <section className="ds-pricing w-full max-w-7xl mx-auto px-8 pb-32">
             <div className="text-center mb-12">
                <h2 className="ds-section-title text-3xl font-black text-[var(--text-primary)] mb-4">ACCESS LEVELS</h2>
                <p className="ds-section-subtitle text-[var(--text-secondary)] text-sm max-w-md mx-auto">Select your required bandwidth and processing power.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Scout', 'Operative', 'Architect'].map((plan, i) => (
                    <div key={plan} className={`ds-card p-8 rounded-[var(--border-radius)] border bg-[var(--bg-layer-1)] flex flex-col relative overflow-hidden ${i === 1 ? 'border-[var(--accent-color)] shadow-[0_0_30px_rgba(0,0,0,0.2)]' : 'border-[var(--text-secondary)]/20'}`}>
                        {i === 1 && <div className="absolute top-0 right-0 px-4 py-1 bg-[var(--accent-color)] text-[var(--bg-layer-1)] text-[10px] font-bold uppercase">Popular</div>}
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{plan}</h3>
                        <div className="text-4xl font-black text-[var(--text-primary)] mb-6 font-[family-name:var(--font-display)]">
                            <span className="text-lg align-top opacity-50">$</span>{19 * (i + 1)}<span className="text-sm align-baseline opacity-50">/mo</span>
                        </div>
                        <ul className="flex-1 space-y-4 mb-8">
                            {[1, 2, 3].map((f) => (
                                <li key={f} className="flex items-center gap-3 text-xs font-bold text-[var(--text-secondary)]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></div>
                                    Feature Access Level {f}
                                </li>
                            ))}
                        </ul>
                        <button className={`ds-card-btn w-full py-3 rounded-[var(--border-radius)] text-xs font-black uppercase tracking-widest transition-all ${i === 1 ? 'bg-[var(--accent-color)] text-[var(--bg-layer-1)] hover:brightness-110' : 'bg-[var(--bg-layer-2)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-layer-1)]'}`}>
                            Select Plan
                        </button>
                    </div>
                ))}
             </div>
        </section>

        {/* 7. Footer */}
        <footer className="ds-footer w-full bg-[var(--bg-layer-2)] border-t border-[var(--text-secondary)]/20 py-16 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-xs">
                    <div className="ds-logo text-xl font-black tracking-tighter text-[var(--text-primary)] mb-4">
                        MOLD<span className="text-[var(--accent-color)]">.</span>SYS
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed opacity-60">
                        Constructed for the next generation of digital interfaces. Immutability guaranteed.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    {[1, 2, 3].map((col) => (
                        <div key={col} className="flex flex-col gap-3">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Column {col}</h4>
                            <span className="text-xs text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent-color)] transition-colors">Documentation</span>
                            <span className="text-xs text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent-color)] transition-colors">API Reference</span>
                            <span className="text-xs text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent-color)] transition-colors">Support</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--text-secondary)]/10 flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-mono">
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
