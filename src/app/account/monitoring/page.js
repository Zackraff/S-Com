import CommentTable from './components/CommentTable';
import FilterSidebar from './components/FilterSidebar';

import { dummyComments } from './dummys/comments';
import { dummyFilters } from './dummys/filters';

export default function MonitoringPage() {
    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-10 flex flex-col-reverse lg:flex-row gap-6">
            <section className="flex-1">
                <CommentTable comments={dummyComments} />
            </section>
            <FilterSidebar keywords={dummyFilters.keywords} />
        </main>
    );
}
