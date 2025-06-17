'use client';

import { useState, useMemo } from 'react';

export default function CommentTable({
    comments,
    totalCount,
    selectedIds,
    setSelectedIds,
}) {
    const [page, setPage] = useState(1);
    const perPage = 10;

    const totalPages = Math.ceil(comments.length / perPage);

    const paginated = useMemo(() => {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        return comments.slice(start, end);
    }, [page, comments]);

    const handleSelect = (id, checked) => {
        setSelectedIds((prev) =>
            checked ? [...prev, id] : prev.filter((x) => x !== id),
        );
    };

    const handlePrev = () => setPage((p) => Math.max(1, p - 1));
    const handleNext = () => setPage((p) => (p < totalPages ? p + 1 : p));

    const emptyRows = perPage - paginated.length;

    return (
        <div>
            <div className="mb-4 text-sm flex justify-between">
                <span>
                    <span className="font-semibold">{comments.length}</span>{' '}
                    Filtered
                </span>
                <span>
                    <span className="font-semibold">{totalCount}</span> Total
                </span>
            </div>

            {comments.length === 0 ? (
                <div className="text-gray-400 text-sm text-center py-10">
                    Tidak ada komentar yang ditampilkan
                </div>
            ) : (
                <>
                    <table className="min-w-full table-fixed text-sm">
                        <thead className="bg-neutral-800 text-left hidden sm:table-header-group">
                            <tr>
                                <th className="p-3 w-12">No</th>
                                <th className="p-3 w-[50%]">Comments</th>
                                <th className="p-3 w-[35%]">Accounts</th>
                                <th className="p-3 w-[10%] text-center">
                                    Select
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((c, i) => (
                                <tr key={c.id}>
                                    <td className="p-3 truncate">
                                        {(page - 1) * perPage + i + 1}
                                    </td>
                                    <td className="p-3 truncate">
                                        {c.comment}
                                    </td>
                                    <td className="p-3 truncate">
                                        {c.account}
                                    </td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(c.id)}
                                            onChange={(e) =>
                                                handleSelect(
                                                    c.id,
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                            {Array.from({
                                length: perPage - paginated.length,
                            }).map((_, i) => (
                                <tr key={`empty-${i}`} className="opacity-0">
                                    <td className="p-3">&nbsp;</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between mt-4 text-sm">
                        <span>
                            {(page - 1) * perPage + 1} -{' '}
                            {Math.min(page * perPage, comments.length)} Shown
                        </span>
                        <div className="space-x-2">
                            <button
                                onClick={handlePrev}
                                disabled={page === 1}
                                className="px-2 py-1 border rounded disabled:opacity-30"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={page >= totalPages}
                                className="px-2 py-1 border rounded disabled:opacity-30"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
