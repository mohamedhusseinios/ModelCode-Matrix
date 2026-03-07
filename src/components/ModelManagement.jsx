import React, { useState } from 'react';

const ModelManagement = ({ models, onAddModel, onUpdateModel, onDeleteModel, onRunBenchmark }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [editModelId, setEditModelId] = useState(null);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEdit = (model) => {
        setIsAdding(false);
        setEditModelId(model.id);
        setFormData({
            ...model,
            bestFor: model.bestFor.join('\n'),
            bullets: model.bullets.join('\n'),
            radarData: model.radarData.join(','),
            barData: model.barData.join(',')
        });
    };

    const handleSave = () => {
        const processedData = {
            ...formData,
            bestFor: formData.bestFor ? formData.bestFor.split('\n') : [],
            bullets: formData.bullets ? formData.bullets.split('\n') : [],
            radarData: formData.radarData ? formData.radarData.split(',').map(Number) : [70,70,70,70,70],
            barData: formData.barData ? formData.barData.split(',').map(Number) : [70,70,70,70]
        };

        if (isAdding) {
            onAddModel({ ...processedData, id: formData.id || Date.now().toString() });
            setIsAdding(false);
        } else if (editModelId) {
            onUpdateModel(editModelId, processedData);
            setEditModelId(null);
        }
        setFormData({});
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditModelId(null);
        setFormData({});
    };

    return (
        <section id="manage-models" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Model Management</h2>
                        <p className="text-slate-600">Modify, add, or benchmark models</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={onRunBenchmark}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Run Automated Benchmark
                        </button>
                        <button
                            onClick={() => { setIsAdding(true); setEditModelId(null); setFormData({ icon: '🤖', colorTheme: 'gray', hexColor: '#6b7280' }); }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Add New Model
                        </button>
                    </div>
                </div>

                {(isAdding || editModelId) && (
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                        <h3 className="text-lg font-bold mb-4">{isAdding ? 'Add New Model' : 'Edit Model'}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className="block text-sm font-medium mb-1">Name</label><input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="w-full p-2 border rounded" /></div>
                            <div><label className="block text-sm font-medium mb-1">ID (for matching tasks)</label><input type="text" name="id" value={formData.id || ''} onChange={handleChange} disabled={!isAdding} className={`w-full p-2 border rounded ${!isAdding ? 'bg-slate-100' : ''}`} /></div>
                            <div><label className="block text-sm font-medium mb-1">Title / Tagline</label><input type="text" name="title" value={formData.title || ''} onChange={handleChange} className="w-full p-2 border rounded" /></div>
                            <div><label className="block text-sm font-medium mb-1">Icon (Emoji)</label><input type="text" name="icon" value={formData.icon || ''} onChange={handleChange} className="w-full p-2 border rounded" /></div>
                            <div><label className="block text-sm font-medium mb-1">Theme Color Name (e.g. blue, red)</label><input type="text" name="colorTheme" value={formData.colorTheme || ''} onChange={handleChange} className="w-full p-2 border rounded" /></div>
                            <div><label className="block text-sm font-medium mb-1">Hex Color (e.g. #3b82f6)</label><input type="text" name="hexColor" value={formData.hexColor || ''} onChange={handleChange} className="w-full p-2 border rounded" /></div>
                            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Description</label><textarea name="description" value={formData.description || ''} onChange={handleChange} className="w-full p-2 border rounded" rows="2"></textarea></div>
                            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Use Case Description</label><textarea name="useCaseDesc" value={formData.useCaseDesc || ''} onChange={handleChange} className="w-full p-2 border rounded" rows="2"></textarea></div>
                            <div><label className="block text-sm font-medium mb-1">Best For (one per line)</label><textarea name="bestFor" value={formData.bestFor || ''} onChange={handleChange} className="w-full p-2 border rounded" rows="3"></textarea></div>
                            <div><label className="block text-sm font-medium mb-1">Key Advantages (one per line)</label><textarea name="bullets" value={formData.bullets || ''} onChange={handleChange} className="w-full p-2 border rounded" rows="3"></textarea></div>
                            <div><label className="block text-sm font-medium mb-1">Radar Data (comma separated, 5 values)</label><input type="text" name="radarData" value={formData.radarData || ''} onChange={handleChange} className="w-full p-2 border rounded" placeholder="90,80,70,85,95" /></div>
                            <div><label className="block text-sm font-medium mb-1">Bar Data (comma separated, 4 values)</label><input type="text" name="barData" value={formData.barData || ''} onChange={handleChange} className="w-full p-2 border rounded" placeholder="80,90,85,95" /></div>
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <button onClick={handleCancel} className="px-4 py-2 border rounded hover:bg-slate-100">Cancel</button>
                            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                        </div>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <caption className="sr-only">Model management - list of configured AI models with edit and delete actions</caption>
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th scope="col" className="py-3 px-4 font-semibold text-slate-800">Model</th>
                                <th scope="col" className="py-3 px-4 font-semibold text-slate-800">Title</th>
                                <th scope="col" className="py-3 px-4 font-semibold text-slate-800">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {models.map((model) => (
                                <tr key={model.id} className="border-b border-slate-100 hover:bg-slate-50">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <span>{model.icon}</span>
                                            <span className="font-medium">{model.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-slate-600">{model.title}</td>
                                    <td className="py-3 px-4">
                                        <button onClick={() => handleEdit(model)} className="text-blue-600 hover:underline mr-4">Edit</button>
                                        <button onClick={() => onDeleteModel(model.id)} className="text-red-600 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ModelManagement;
