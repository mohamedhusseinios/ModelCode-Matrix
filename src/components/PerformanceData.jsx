import React from 'react';
import { Radar, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { font: { family: "'Inter', sans-serif" }, usePointStyle: true }
        },
        tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleFont: { family: "'Inter', sans-serif", size: 14 },
            bodyFont: { family: "'Inter', sans-serif", size: 13 },
            padding: 12,
            cornerRadius: 8
        }
    }
};

const hexToRgbA = (hex, alpha = 1) => {
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
    }
    return `rgba(100, 100, 100, ${alpha})`;
};

const defaultColors = ['#3b82f6', '#10b981', '#a855f7', '#f97316', '#ef4444', '#14b8a6', '#6366f1'];

const PerformanceData = ({ models }) => {

    const radarData = {
        labels: ['Long-Context', 'Speed/Latency', 'Algorithmic Logic', 'Syntax Accuracy', 'Multi-Language'],
        datasets: models.map((model, index) => {
            const color = model.hexColor || defaultColors[index % defaultColors.length];
            return {
                label: model.name,
                data: model.radarData || [70, 70, 70, 70, 70],
                backgroundColor: hexToRgbA(color, 0.2),
                borderColor: color,
                pointBackgroundColor: color,
                borderWidth: 2
            }
        })
    };

    const radarOptions = {
        ...chartOptions,
        scales: {
            r: {
                angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                grid: { color: 'rgba(0, 0, 0, 0.1)' },
                pointLabels: { font: { family: "'Inter', sans-serif", size: 12 }, color: '#475569' },
                ticks: { display: false, min: 50, max: 100 }
            }
        }
    };

    const barData = {
        labels: ['Code Generation', 'Debugging', 'Refactoring', 'Algorithm Math'],
        datasets: models.map((model, index) => {
            const color = model.hexColor || defaultColors[index % defaultColors.length];
            return {
                label: model.name,
                data: model.barData || [70, 70, 70, 70],
                backgroundColor: hexToRgbA(color, 0.8)
            }
        })
    };

    const barOptions = {
        ...chartOptions,
        scales: {
            y: { beginAtZero: false, min: 60, max: 100, grid: { color: 'rgba(0, 0, 0, 0.05)' } },
            x: { grid: { display: false } }
        }
    };

    return (
        <section id="performance" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Quantitative Performance Metrics</h2>
                <p className="text-slate-600 mt-2">Visualizing the comparative strengths of each model across different coding dimensions and synthetic benchmarks.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-center mb-2">Capability Radar</h3>
                    <p className="text-sm text-slate-500 text-center mb-4">Relative strengths across 5 key coding dimensions.</p>
                    <div className="relative w-full max-w-[800px] mx-auto h-[300px] md:h-[400px]">
                        <Radar data={radarData} options={radarOptions} />
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-center mb-2">Benchmark Performance (Proxy)</h3>
                    <p className="text-sm text-slate-500 text-center mb-4">Scores on synthetic logic and generation tasks (0-100).</p>
                    <div className="relative w-full max-w-[800px] mx-auto h-[300px] md:h-[400px]">
                        <Bar data={barData} options={barOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceData;
