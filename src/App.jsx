import React, { useState } from 'react';
import Header from './components/Header';
import ExecutiveSummary from './components/ExecutiveSummary';
import ModelProfiles from './components/ModelProfiles';
import PerformanceData from './components/PerformanceData';
import InteractiveSelector from './components/InteractiveSelector';
import ModelManagement from './components/ModelManagement';

const initialModels = [
  {
    id: 'kimi',
    name: 'Kimi K2.5',
    title: 'The Context King',
    icon: '📚',
    colorTheme: 'blue',
    hexColor: '#3b82f6',
    textHexColor: 'text-[#3b82f6]',
    description: 'Designed with an ultra-long context window. It excels at ingesting entire codebases, documentation, and logs simultaneously.',
    useCaseDesc: 'For tasks requiring knowledge of hundreds of interlinked files, Kimi K2.5 is unmatched. Its massive context window allows you to upload entire codebases, enabling the model to understand global dependencies rather than just local syntax.',
    bestFor: ['Repository-wide refactoring', 'Debugging massive error logs', 'Legacy code comprehension'],
    bullets: ['Millions of tokens of context window', 'Maintains high recall over long inputs', 'Excellent at spotting variable shadowing across modules'],
    radarData: [98, 70, 80, 85, 82],
    barData: [82, 94, 91, 78]
  },
  {
    id: 'minimax',
    name: 'MiniMax2.5',
    title: 'The Agile Sprinter',
    icon: '⚡',
    colorTheme: 'emerald',
    hexColor: '#10b981',
    textHexColor: 'text-[#10b981]',
    description: 'A highly optimized MoE architecture that delivers incredibly fast response times with high accuracy for standard frameworks.',
    useCaseDesc: 'When building frontends, speed and adherence to common frameworks (React, Vue, Tailwind) are key. MiniMax2.5 utilizes an efficient MoE architecture to spit out boilerplate and UI components almost instantly.',
    bestFor: ['Real-time IDE autocomplete', 'Frontend/UI component generation', 'Rapid prototyping & scripting'],
    bullets: ['Lowest Time-To-First-Token (TTFT)', 'Highly trained on modern frontend frameworks', 'Perfect for real-time IDE copilot integration'],
    radarData: [75, 95, 78, 88, 85],
    barData: [91, 79, 82, 76]
  },
  {
    id: 'glm',
    name: 'GLM-5',
    title: 'The Algorithmist',
    icon: '🧠',
    colorTheme: 'purple',
    hexColor: '#a855f7',
    textHexColor: 'text-[#a855f7]',
    description: 'Built with a strong foundation in complex mathematical and algorithmic reasoning. It writes highly optimized, logically sound code.',
    useCaseDesc: 'If you are optimizing a C++ physics engine or writing complex data transformations, GLM-5 is your best bet. It has been rigorously trained on deep algorithmic logic and mathematical problem-solving.',
    bestFor: ['Complex algorithmic challenges', 'Data science & ML pipelines', 'C++ & low-level optimization'],
    bullets: ['Superior logical reasoning capabilities', 'Produces highly optimized, low-time-complexity code', 'Strongest performance in C, C++, and Python data science'],
    radarData: [82, 75, 96, 92, 80],
    barData: [88, 85, 87, 95]
  },
  {
    id: 'qwen',
    name: 'Qwen3.5:397b',
    title: 'The Enterprise Heavyweight',
    icon: '🌍',
    colorTheme: 'orange',
    hexColor: '#f97316',
    textHexColor: 'text-[#f97316]',
    description: 'A massive open-weights model providing near-AGI capabilities in coding across dozens of languages and enterprise frameworks.',
    useCaseDesc: 'For heavy enterprise lifting—like transitioning a monolithic Java backend to Go microservices—you need raw brainpower. Qwen3.5:397b provides near-AGI coding comprehension across a vast array of programming languages.',
    bestFor: ['Enterprise architecture design', 'Multi-language microservices', 'Autonomous coding agents'],
    bullets: ['Massive 397 billion parameter knowledge base', 'Fluent in almost all enterprise languages (Java, C#, Go)', 'Highly reliable for autonomous agent frameworks'],
    radarData: [88, 65, 92, 95, 98],
    barData: [95, 88, 90, 92]
  }
];

function App() {
  const [models, setModels] = useState(initialModels);

  const handleAddModel = (newModel) => {
    setModels(prev => [...prev, newModel]);
  };

  const handleUpdateModel = (id, updatedData) => {
    setModels(prev => prev.map(m => m.id === id ? { ...m, ...updatedData } : m));
  };

  const handleDeleteModel = (id) => {
    setModels(prev => prev.filter(m => m.id !== id));
  };

  const handleRunBenchmark = () => {
    // Simulate automated benchmark adding randomness to scores
    setModels(prev => prev.map(model => ({
      ...model,
      radarData: model.radarData.map(val => Math.min(100, Math.max(50, val + Math.floor(Math.random() * 11) - 5))),
      barData: model.barData.map(val => Math.min(100, Math.max(60, val + Math.floor(Math.random() * 11) - 5)))
    })));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      <Header />
      <main>
        <ExecutiveSummary />
        <ModelProfiles models={models} />
        <PerformanceData models={models} />
        <InteractiveSelector models={models} />
        <ModelManagement
            models={models}
            onAddModel={handleAddModel}
            onUpdateModel={handleUpdateModel}
            onDeleteModel={handleDeleteModel}
            onRunBenchmark={handleRunBenchmark}
        />
      </main>
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        <p>Interactive Coding Model Comparison Report | React Based Application</p>
        <p className="mt-2">Note: Data represents aggregated proxies based on architectural capabilities.</p>
      </footer>
    </div>
  );
}

export default App;
