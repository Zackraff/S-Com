// monitoring/presenters/MonitoringPresenter.js

import { dummyComments } from './../models/comments';

export class MonitoringPresenter {
    constructor({ setComments, setKeywords }) {
        this.setComments = setComments;
        this.setKeywords = setKeywords;

        this.allComments = dummyComments;
        this.selectedKeywords = [];
    }

    loadComments() {
        this.setComments(this.allComments);
    }

    toggleKeyword(keyword) {
        const index = this.selectedKeywords.indexOf(keyword);
        if (index > -1) {
            this.selectedKeywords.splice(index, 1);
        } else {
            this.selectedKeywords.push(keyword);
        }
        this.setKeywords([...this.selectedKeywords]);
    }

    applyFilter() {
        if (this.selectedKeywords.length === 0) {
            this.setComments(this.allComments);
            return;
        }

        const filtered = this.allComments.filter((comment) => {
            return this.selectedKeywords.some((kw) => {
                if (kw === 'spam' || kw === 'judol') {
                    return comment.tags?.includes(kw);
                }
                return comment.content.toLowerCase().includes(kw.toLowerCase());
            });
        });

        this.setComments(filtered);
    }

    toggleSelectAll(select = true) {
        const selected = select ? this.allComments.map((c) => c.id) : [];
        this.setComments(
            this.allComments.map((c) => ({
                ...c,
                selected: selected.includes(c.id),
            })),
        );
    }

    deleteSelectedComments() {
        const remaining = this.allComments.filter((c) => !c.selected);
        this.allComments = remaining;
        this.setComments(this.allComments);
    }
}
