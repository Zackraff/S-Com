'use client';

import { useMonitoringPresenter } from './presenters/useMonitoringPresenter';
import FilterSidebar from './components/FilterSidebar';
import CommentTable from './components/CommentTable';

export default function MonitoringPage() {
    const { comments, keywords, presenter } = useMonitoringPresenter();

    return (
        <>
            <FilterSidebar
                keywords={keywords}
                onAdd={(k) => presenter.toggleKeyword(k)}
                onToggle={(k) => presenter.toggleKeyword(k)}
                onApply={() => presenter.applyFilter()}
                onSelectAll={(v) => presenter.toggleSelectAll(v)}
                onRemove={() => presenter.deleteSelectedComments()}
            />
            <CommentTable comments={comments} />
        </>
    );
}
