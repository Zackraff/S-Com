'use client';

import { useState } from 'react';
export default function FilterSidebar({
    keywords,
    onAdd,
    onToggle,
    onApply,
    onSelectAll,
    onRemove,
}) {
    const [newKeyword, setNewKeyword] = useState('');
    const handleAdd = () => {
        const trimmed = newKeyword.trim();
        if (trimmed && !keywords.includes(trimmed)) {
            onAdd?.(trimmed);
            setNewKeyword('');
        }
    };
    return (
        <aside className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-gray-700 pt-6 lg:pt-0 pl-0 lg:pl-6">
            <div className="mb-6">
                <div className="text-lg font-semibold mb-2">Filters</div>
                <div className="mb-4">
                    <label className="text-sm font-medium mb-1 block">
                        Add Keywords
                    </label>
                    <div className="flex items-center gap-2 mb-2">
                        <input
                            type="text"
                            placeholder="add..."
                            value={newKeyword}
                            onChange={(e) => setNewKeyword(e.target.value)}
                            className="w-full px-2 py-1 rounded text-black"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleAdd();
                            }}
                        />
                        <button
                            className="text-white border px-2 rounded"
                            onClick={handleAdd}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map((key) => (
                            <div
                                key={key}
                                className="bg-neutral-700 px-2 py-1 rounded text-xs flex items-center gap-1"
                            >
                                {key}{' '}
                                <button
                                    className="text-red-400"
                                    onClick={() => onToggle?.(key)}
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-neutral-800 px-2 py-1 rounded"
                        onClick={() => onToggle?.('spam')}
                    >
                        <span>Spam Filter</span>
                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    </div>
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-neutral-800 px-2 py-1 rounded"
                        onClick={() => onToggle?.('judol')}
                    >
                        <span>Judol Filter</span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-3">
                <button
                    className="w-full border px-3 py-1 rounded"
                    onClick={() => onSelectAll?.(true)}
                >
                    Pilih Semua
                </button>
                <button
                    className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200"
                    onClick={onApply}
                >
                    Terapkan Filter
                </button>
                <button
                    className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    onClick={() => onRemove?.()}
                >
                    Hapus Komentar Terpilih
                </button>
                <p className="text-xs text-gray-500 mt-2">* 100 Quota left</p>
            </div>
        </aside>
    );
}
