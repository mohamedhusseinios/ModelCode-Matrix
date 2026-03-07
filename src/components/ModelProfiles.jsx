import React from 'react';

const ModelProfiles = ({ models }) => (
    <section id="best-for" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Model Profiles: What They Are Best For</h2>
            <p className="text-slate-600 mt-2">Explore the core strengths and ideal use-cases for each model based on their architectural advantages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
                <div key={model.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 card-hover transition-all flex flex-col">
                    <div className="text-4xl mb-4">{model.icon || '🤖'}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{model.name}</h3>
                    <div className={`text-sm font-semibold mb-3 inline-block px-2 py-1 rounded bg-${model.colorTheme}-50 text-${model.colorTheme}-600`}>
                        {model.title}
                    </div>
                    <p className="text-slate-600 text-sm mb-4 flex-grow">
                        {model.description}
                    </p>
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                        <strong className="text-slate-800 text-sm block mb-1">BEST FOR:</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-4 space-y-1">
                            {model.bestFor.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default ModelProfiles;
