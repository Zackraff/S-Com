export class CommentPresenter {
    constructor(view) {
        this.view = view;
        this.allComments = [];
    }

    setAllComments(comments) {
        this.allComments = comments;
    }

    loadComments(filters, showHidden = false) {
        const filtered = this._filter(this.allComments, filters, showHidden);
        this.view.updateComments(filtered);
    }

    updateCommentList(newComments, filters, showHidden = false) {
        this.allComments = newComments;
        this.view.updateAllComments?.(newComments);
        this.loadComments(filters, showHidden);
    }

    _filter(comments, filters, showHidden) {
        return comments.filter((c) => {
            if (showHidden && !c.is_hidden) return false;
            if (!showHidden && c.is_hidden) return false;

            const keywordMatched =
                filters.keywords.length === 0
                    ? false
                    : filters.keywords.some((keyword) => {
                          const kw = keyword.toLowerCase();
                          return (
                              c.comment.toLowerCase().includes(kw) ||
                              c.account.toLowerCase().includes(kw)
                          );
                      });

            const spamMatched = filters.spamOnly && c.is_spam;
            const judolMatched = filters.judolOnly && c.is_judol;

            const anyFilterActive =
                filters.keywords.length > 0 ||
                filters.spamOnly ||
                filters.judolOnly;

            const isIncluded = keywordMatched || spamMatched || judolMatched;

            return anyFilterActive ? isIncluded : true;
        });
    }
}
