export default function FilterSidebar({ keywords }) {
    return (
        <aside className="w-full lg:w-72 border-b lg:border-b-0 lg:border-l border-gray-700 pb-6 lg:pt-0 pl-0 lg:pl-6">
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
                            className="w-full px-2 py-1 rounded text-black"
                        />
                        <button className="text-white border px-2 rounded">
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
                                <button className="text-red-400">x</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span>Spam Filter</span>
                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Judol Filter</span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-3">
                <button className="w-full border px-3 py-1 rounded">
                    Pilih Semua
                </button>
                <button className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200">
                    Remove
                </button>
                <p className="text-xs text-gray-500 mt-2">* 100 Quota left</p>
            </div>
        </aside>
    );
}
