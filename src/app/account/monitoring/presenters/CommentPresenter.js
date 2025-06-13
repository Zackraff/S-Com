export class CommentPresenter {
    constructor(view) {
        this.view = view; // view.updateComments, view.updateAllComments
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
        this.view.updateAllComments?.(newComments); // ✅ sinkron ke state utama
        this.loadComments(filters, showHidden);
    }

    _filter(comments, filters, showHidden) {
        return comments.filter((c) => {
            // 🔒 Hidden/unhidden filtering
            if (showHidden && !c.is_hidden) return false;
            if (!showHidden && c.is_hidden) return false;

            // 🧠 Match keyword on comment or account (OR)
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

            // 🧠 Match spam / judol
            const spamMatched = filters.spamOnly && c.is_spam;
            const judolMatched = filters.judolOnly && c.is_judol;

            // 📌 Final rule: if ANY filter is active, include if it matches ANY
            const anyFilterActive =
                filters.keywords.length > 0 ||
                filters.spamOnly ||
                filters.judolOnly;

            const isIncluded = keywordMatched || spamMatched || judolMatched;

            return anyFilterActive ? isIncluded : true; // default: include all if no filter
        });
    }
}
