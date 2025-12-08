import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { GenerationPhase } from '../types';

interface GenerationLoaderProps {
  phase: GenerationPhase;
}

const SPEC_STEPS = [
  "Firing up the kiln...",
  "Mixing raw aesthetic materials...",
  "Molding semantic tokens...",
  "Sculpting component architecture...",
  "Polishing the Master Spec..."
];

const ARTIFACT_STEPS = [
  "Reading Master Spec...",
  "Preparing HTML canvas...",
  "Glazing UI components...",
  "Applying responsive layout...",
  "Cooling and solidifying artifact..."
];

const REFINE_STEPS = [
  "Analyzing Director instructions...",
  "Remolding the clay...",
  "Adjusting token glaze...",
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
    title = "Molding Specification";
  } else if (phase === 'artifact') {
    steps = ARTIFACT_STEPS;
    title = "Manifesting Artifact";
  } else if (phase === 'refining') {
    steps = REFINE_STEPS;
    title = "Refining Clay";
  }

  const currentStep = steps[Math.min(stepIndex, steps.length - 1)];
  const progress = Math.min(((stepIndex + 1) / steps.length) * 100, 100);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-kaolin-50/80 backdrop-blur-md">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-clay-float flex flex-col items-center text-center border border-kaolin-100">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-resin-200 blur-xl opacity-50 animate-pulse rounded-full"></div>
          <Loader2 className="w-14 h-14 text-resin-500 animate-spin relative z-10" />
        </div>

        <h3 className="text-2xl font-extrabold text-kaolin-900 mb-3 tracking-tight">{title}</h3>
        
        <div className="h-6 overflow-hidden relative w-full mb-8">
           <p className="text-kaolin-500 text-sm font-medium animate-pulse transition-all duration-500">
             {currentStep}
           </p>
        </div>

        {/* Tactile Progress Bar */}
        <div className="w-full h-3 bg-kaolin-100 rounded-full overflow-hidden shadow-inner border border-kaolin-200">
          <div 
            className="h-full bg-gradient-to-r from-resin-400 to-resin-600 transition-all duration-500 ease-out rounded-full shadow-sm"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>
    </div>
  );
};