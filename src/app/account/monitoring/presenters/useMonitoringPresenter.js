'use client';

import { useEffect, useMemo, useState } from 'react';
import { MonitoringPresenter } from './MonitoringPresenter';

export function useMonitoringPresenter() {
    const [comments, setComments] = useState([]);
    const [keywords, setKeywords] = useState([]);

    const presenter = useMemo(() => {
        return new MonitoringPresenter({
            setComments,
            setKeywords,
        });
    }, []);

    useEffect(() => {
        presenter.loadComments();
    }, [presenter]);

    return {
        comments,
        keywords,
        presenter,
    };
}
