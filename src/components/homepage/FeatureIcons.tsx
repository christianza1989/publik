// src/components/homepage/FeatureIcons.tsx
import { Zap, Search, CheckCircle, BarChart, Trophy, Clock, BrainCircuit } from 'lucide-react';
import React from 'react';

export const ProcessIcons = {
  Idea: () => <Zap className="h-8 w-8 text-indigo-500" />,
  Search: () => <Search className="h-8 w-8 text-indigo-500" />,
  Publish: () => <CheckCircle className="h-8 w-8 text-indigo-500" />,
};

export const SeoIcons = {
  Network: () => <BarChart className="h-8 w-8 text-green-500" />,
  Quality: () => <Trophy className="h-8 w-8 text-green-500" />,
  Speed: () => <Clock className="h-8 w-8 text-green-500" />,
};

// Pavyzdinė SVG iliustracija DI Asistentui
export const AiAssistantIllustration = () => (
  <div className="flex items-center justify-center h-full w-full">
     <BrainCircuit className="h-32 w-32 text-purple-400 opacity-80" />
  </div>
);

// Pavyzdinė SVG iliustracija procesui
export const ProcessIllustration = () => (
  <div className="flex items-center justify-center h-full w-full p-8">
    <svg width="100%" height="100%" viewBox="0 0 300 100">
        <circle cx="50" cy="50" r="15" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
        <path d="M 65 50 Q 125 20, 150 50" stroke="#a5b4fc" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
        <circle cx="150" cy="50" r="15" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
        <path d="M 165 50 Q 225 80, 250 50" stroke="#a5b4fc" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
        <circle cx="250" cy="50" r="15" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
    </svg>
  </div>
);
