'use client';

import { useState } from 'react';

export default function FilterSidebar({
    filters,
    setFilters,
    selectedIds,
    setSelectedIds,
    comments,
    filteredComments,
    presenter,
    showHidden,
    setShowHidden,
}) {
    const [pendingKeyword, setPendingKeyword] = useState('');
    const [showKeywordModal, setShowKeywordModal] = useState(false);

    const addKeyword = (word) => {
        if (!filters.keywords.includes(word)) {
            setFilters((prev) => ({
                ...prev,
                keywords: [...prev.keywords, word],
            }));
        }
    };

    const displayedIds = filteredComments.map((c) => c.id);
    const isAllSelected = displayedIds.every((id) => selectedIds.includes(id));

    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedIds((prev) =>
                prev.filter((id) => !displayedIds.includes(id)),
            );
        } else {
            setSelectedIds((prev) =>
                Array.from(new Set([...prev, ...displayedIds])),
            );
        }
    };

    const handleHideToggle = () => {
        const updated = comments.map((c) =>
            selectedIds.includes(c.id) ? { ...c, is_hidden: !showHidden } : c,
        );
        presenter.updateCommentList(updated, filters, showHidden);
        setSelectedIds([]);
    };

    return (
        <aside className="w-full lg:w-72 border-b lg:border-b-0 lg:border-l border-gray-700 pb-6 lg:pt-0 pl-0 lg:pl-6">
            <div className="mb-4">
                <div className="text-lg font-semibold mb-2">Filters</div>

                <div className="mb-3">
                    <label className="text-xs text-white mb-1 block">
                        Add Keywords
                    </label>
                    <div className="flex items-center border border-gray-500 rounded overflow-hidden">
                        <input
                            type="text"
                            className="w-full px-2 py-1 bg-transparent text-white placeholder-gray-400 outline-none"
                            value={pendingKeyword}
                            onChange={(e) => setPendingKeyword(e.target.value)}
                            placeholder="Type a word..."
                        />
                        <button
                            className="px-3 py-1 text-white hover:bg-gray-700 transition"
                            onClick={(e) => {
                                e.preventDefault();
                                if (pendingKeyword.trim()) {
                                    setShowKeywordModal(true);
                                }
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>

                {showKeywordModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white text-black p-6 rounded w-[300px]">
                            <h2 className="text-lg font-semibold mb-4">
                                Tambah Keyword?
                            </h2>
                            <p className="text-sm mb-6">
                                Keyword:{' '}
                                <span className="font-mono">
                                    {pendingKeyword}
                                </span>
                            </p>
                            <div className="flex justify-end gap-2">
                                <button
                                    className="px-3 py-1 border rounded"
                                    onClick={() => setShowKeywordModal(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    className="px-3 py-1 bg-black text-white rounded"
                                    onClick={() => {
                                        addKeyword(pendingKeyword.trim());
                                        setPendingKeyword('');
                                        setShowKeywordModal(false);
                                    }}
                                >
                                    Tambahkan
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-1">
                    {filters.keywords.map((k) => (
                        <div
                            key={k}
                            className="flex justify-between items-center text-sm border-b border-gray-600 pb-1"
                        >
                            <span>{k}</span>
                            <button
                                onClick={() =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        keywords: prev.keywords.filter(
                                            (kw) => kw !== k,
                                        ),
                                    }))
                                }
                                className="text-gray-400 hover:text-red-400"
                            >
                                x
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="flex justify-between">
                    <span>Spam Filter</span>
                    <input
                        type="checkbox"
                        checked={filters.spamOnly}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                spamOnly: e.target.checked,
                            }))
                        }
                    />
                </label>
                <label className="flex justify-between">
                    <span>Judol Filter</span>
                    <input
                        type="checkbox"
                        checked={filters.judolOnly}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                judolOnly: e.target.checked,
                            }))
                        }
                    />
                </label>
            </div>

            <div className="mt-6 space-y-3">
                {filteredComments.length > 0 && (
                    <>
                        <button
                            className="w-full border px-3 py-1 rounded"
                            onClick={toggleSelectAll}
                        >
                            {isAllSelected ? 'Batalkan Semua' : 'Pilih Semua'}
                        </button>

                        <button
                            className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200"
                            onClick={handleHideToggle}
                            disabled={selectedIds.length === 0}
                        >
                            {showHidden ? 'Unhide Selected' : 'Hide Selected'}
                        </button>
                    </>
                )}

                <button
                    className="w-full border text-white py-2 rounded"
                    onClick={() => setShowHidden((prev) => !prev)}
                >
                    {showHidden ? 'Show Unhidden' : 'Show Hidden'}
                </button>
            </div>
        </aside>
    );
}
