'use client';
import { useEffect, useState } from 'react';
import CommentTable from './components/CommentTable';
import FilterSidebar from './components/FilterSidebar';
import { CommentPresenter } from './presenters/CommentPresenter';
import { dummyComments } from './dummys/comments';

export default function MonitoringPage() {
    const [filters, setFilters] = useState({
        keywords: [],
        spamOnly: false,
        judolOnly: false,
    });

    const [allComments, setAllComments] = useState(dummyComments);
    const [filteredComments, setFilteredComments] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [showHidden, setShowHidden] = useState(false);

    // ✅ Pindahkan ini ke atas sebelum inisialisasi presenter
    const handleUpdateComments = (newComments) => {
        setAllComments(newComments);
    };

    const presenter = new CommentPresenter({
        updateComments: setFilteredComments,
        updateAllComments: handleUpdateComments, // ✅ ini sekarang aman
    });

    useEffect(() => {
        presenter.setAllComments(allComments);
        presenter.loadComments(filters, showHidden);
    }, [allComments, filters, showHidden]);

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-10 flex flex-col-reverse lg:flex-row gap-6">
            <section className="flex-1">
                <CommentTable
                    comments={filteredComments}
                    totalCount={allComments.length}
                    selectedIds={selectedIds}
                    setSelectedIds={setSelectedIds}
                />
            </section>
            <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                comments={allComments}
                filteredComments={filteredComments}
                presenter={presenter}
                showHidden={showHidden}
                setShowHidden={setShowHidden}
            />
        </main>
    );
}
