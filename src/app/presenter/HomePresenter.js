import { getMessage, getNewMessage } from '../model/dataModel';

export class HomePresenter {
    constructor(view) {
        this.view = view;
    }

    loadData() {
        const message = getMessage();
        this.view.setMessage(message);
    }

    updateMessage() {
        const newMessage = getNewMessage();
        this.view.setMessage(newMessage);
    }
}
