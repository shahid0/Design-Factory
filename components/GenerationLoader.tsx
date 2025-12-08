import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface GenerationLoaderProps {
  isVisible: boolean;
}

const STEPS = [
  "Analyzing style aesthetics...",
  "Defining design tokens & variables...",
  "Constructing component architecture...",
  "Compiling HTML artifact...",
  "Finalizing physics & interactions..."
];

export const GenerationLoader: React.FC<GenerationLoaderProps> = ({ isVisible }) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setStepIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 2500); // Change step every 2.5 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col items-center text-center">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin relative z-10" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Gemini is Dreaming</h3>
        
        <div className="h-6 overflow-hidden relative w-full">
           <p className="text-zinc-400 text-sm animate-pulse transition-all duration-500">
             {STEPS[stepIndex]}
           </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-zinc-800 mt-6 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          ></div>
        </div>

      </div>
    </div>
  );
};