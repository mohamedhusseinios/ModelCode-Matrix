import React from 'react';

const Header = () => (
  <>
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0 flex items-center font-bold text-xl text-blue-700">
                    💻 ModelCode Matrix
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#summary" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Executive Summary</a>
                    <a href="#best-for" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">What They're Best For</a>
                    <a href="#performance" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Performance Data</a>
                    <a href="#use-cases" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Interactive Selector</a>
                    <a href="#manage-models" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Manage Models</a>
                </div>
            </div>
        </div>
    </nav>
    <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Evaluating Frontier Models for Code Generation
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive technical breakdown of frontier models. Discover which architecture aligns perfectly with your software engineering workflows.
        </p>
    </header>
  </>
);

export default Header;
