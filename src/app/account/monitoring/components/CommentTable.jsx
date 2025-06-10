// monitoring/components/CommentTable.jsx
'use client';

export default function CommentTable({ comments }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead className="bg-neutral-800 text-white text-sm font-semibold">
                    <tr>
                        <th className="px-4 py-2 text-left">No</th>
                        <th className="px-4 py-2 text-left">Comments</th>
                        <th className="px-4 py-2 text-left">Accounts</th>
                        <th className="px-4 py-2 text-left">Exclude</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((c, i) => (
                        <tr
                            key={c.id}
                            className="bg-neutral-900 border-t border-neutral-800"
                        >
                            <td className="px-4 py-2 text-sm">{i + 1}</td>
                            <td className="px-4 py-2 text-sm whitespace-pre-wrap">
                                {c.content}
                            </td>
                            <td className="px-4 py-2 text-sm">{c.username}</td>
                            <td className="px-4 py-2 text-center">
                                <input
                                    type="checkbox"
                                    checked={c.selected}
                                    readOnly
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
