import React from 'react';

const ExecutiveSummary = () => (
    <section id="summary" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Executive Summary</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
                The landscape of LLM-assisted coding has specialized. While earlier models aimed for general proficiency, the latest iterations exhibit distinct architectural biases that make them exceptionally suited for specific development tasks.
            </p>
            <p className="text-slate-600 leading-relaxed">
                Use our interactive tools to explore what each model is best for, view comprehensive quantitative performance metrics, and even manage the models directly via the interactive management panel to suit your custom use-cases and workflows.
            </p>
        </div>
    </section>
);

export default ExecutiveSummary;
