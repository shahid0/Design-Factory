
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { GenerationPhase } from '../types';

interface GenerationLoaderProps {
  phase: GenerationPhase;
}

const SPEC_STEPS = [
  "Analyzing aesthetics & context...",
  "Defining semantic tokens...",
  "Constructing component architecture...",
  "Writing documentation...",
  "Finalizing Master Spec..."
];

const ARTIFACT_STEPS = [
  "Reading Master Spec...",
  "Compiling Tailwind config...",
  "Building Hero components...",
  "Generating responsive layout...",
  "Polishing visual interactions..."
];

const REFINE_STEPS = [
  "Reading Director instructions...",
  "Applying delta changes...",
  "Updating tokens...",
  "Regenerating Spec..."
];

export const GenerationLoader: React.FC<GenerationLoaderProps> = ({ phase }) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (phase === 'idle') {
      setStepIndex(0);
      return;
    }

    setStepIndex(0); // Reset on phase change
    const interval = setInterval(() => {
      setStepIndex((prev) => prev + 1);
    }, 1500); 

    return () => clearInterval(interval);
  }, [phase]);

  if (phase === 'idle') return null;

  let steps: string[] = [];
  let title = "";

  if (phase === 'spec') {
    steps = SPEC_STEPS;
    title = "Architecting Spec";
  } else if (phase === 'artifact') {
    steps = ARTIFACT_STEPS;
    title = "Building Artifact";
  } else if (phase === 'refining') {
    steps = REFINE_STEPS;
    title = "Refining Design";
  }

  const currentStep = steps[Math.min(stepIndex, steps.length - 1)];
  const progress = Math.min(((stepIndex + 1) / steps.length) * 100, 100);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col items-center text-center">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin relative z-10" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="h-6 overflow-hidden relative w-full">
           <p className="text-zinc-400 text-sm animate-pulse transition-all duration-500">
             {currentStep}
           </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-zinc-800 mt-6 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>
    </div>
  );
};
