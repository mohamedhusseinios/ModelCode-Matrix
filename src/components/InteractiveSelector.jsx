import React, { useState } from 'react';

const tasks = [
    { id: 'massive-repo', label: '🔍 Analyzing a Massive Repo', modelId: 'kimi' },
    { id: 'fast-ui', label: '🎨 Generating React UI Fast', modelId: 'minimax' },
    { id: 'complex-algo', label: '🧮 Writing Complex Algorithms', modelId: 'glm' },
    { id: 'enterprise-backend', label: '🏗️ Enterprise Microservices', modelId: 'qwen' }
];

const InteractiveSelector = ({ models }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleSelectTask = (task) => {
        setSelectedTask(task);
    };

    const getRecommendedModel = () => {
        if (!selectedTask) return null;
        return models.find(m => m.id === selectedTask.modelId) || models[0];
    };

    const recModel = getRecommendedModel();

    return (
        <section id="use-cases" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-slate-800 rounded-2xl shadow-lg p-8 text-white">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Interactive Matchmaker</h2>
                    <p className="text-slate-300">Select your primary coding task to see which model is recommended and why.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 flex flex-col gap-3">
                        {tasks.map(task => {
                            const isSelected = selectedTask && selectedTask.id === task.id;
                            return (
                                <button
                                    key={task.id}
                                    onClick={() => handleSelectTask(task)}
                                    className={`text-left px-4 py-3 rounded-lg font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-blue-500
                                        ${isSelected ? 'bg-blue-600 border-blue-400' : 'bg-slate-700 hover:bg-blue-600 border-slate-600'}`}
                                >
                                    {task.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="w-full md:w-2/3 bg-slate-900 rounded-xl p-6 border border-slate-700 relative overflow-hidden min-h-[300px]">
                        {!selectedTask ? (
                            <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500">
                                <span className="text-4xl mb-2">👈</span>
                                <p>Select a task from the left</p>
                            </div>
                        ) : (
                            recModel && (
                                <div className="h-full flex flex-col justify-center">
                                    <div className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-1">Recommended Model</div>
                                    <h3 className={`text-3xl font-bold mb-4 ${recModel.textHexColor ? `text-[${recModel.textHexColor}]` : 'text-blue-400'}`} style={{ color: recModel.hexColor }}>
                                        {recModel.name}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {recModel.useCaseDesc}
                                    </p>
                                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                        <h4 className="text-sm font-semibold text-white mb-2">Key Advantages:</h4>
                                        <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                                            {recModel.bullets.map((bullet, idx) => (
                                                <li key={idx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveSelector;
