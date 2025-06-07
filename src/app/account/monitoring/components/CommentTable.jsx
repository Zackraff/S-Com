export default function CommentTable({ comments }) {
    return (
        <div>
            <div className="mb-4 text-sm">
                <span className="font-semibold">68 Filtered</span> / 1020 Total
            </div>
            <div className="overflow-x-auto rounded border border-gray-600">
                <table className="min-w-full text-sm">
                    <thead className="bg-neutral-800 text-left hidden sm:table-header-group">
                        <tr>
                            <th className="p-3">No</th>
                            <th className="p-3">Comments</th>
                            <th className="p-3">Accounts</th>
                            <th className="p-3 text-center">Exclude</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-700">
                        {comments.map((item) => (
                            <tr
                                key={item.id}
                                className="block sm:table-row border-b sm:border-0"
                            >
                                <td className="p-3 sm:table-cell block font-bold sm:font-normal text-white">
                                    {item.id}
                                    <div className="block sm:hidden text-sm font-normal mt-1">
                                        <div>
                                            <span className="text-gray-400">
                                                Account :
                                            </span>{' '}
                                            {item.account}
                                        </div>
                                        <div>
                                            <span className="text-gray-400">
                                                Comment :
                                            </span>{' '}
                                            {item.comment}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 sm:table-cell hidden text-sm text-gray-200">
                                    {item.comment}
                                </td>
                                <td className="p-3 sm:table-cell hidden text-sm text-gray-300">
                                    {item.account}
                                </td>
                                <td className="p-3 sm:table-cell block sm:text-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox text-green-500 w-5 h-5"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-sm gap-2">
                <span>1 - 10 Shown</span>
                <div className="space-x-2">
                    <button className="px-3 py-1 border rounded">
                        Previous
                    </button>
                    <button className="px-3 py-1 border rounded bg-white text-black">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
