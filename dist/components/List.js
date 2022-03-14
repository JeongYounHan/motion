import { CardImpl } from "./card.js";
export class ListImpl {
    constructor(parent) {
        this.parent = parent;
        this._cardList = [];
        const tempCard = new CardImpl({ title: "hey", content: "it's note", type: "note" });
        const tempCard2 = new CardImpl({ title: "image", content: "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg", type: "image" });
        this.push(tempCard.cardElement);
        this.push(tempCard2.cardElement);
    }
    get cardList() {
        return this._cardList;
    }
    push(cardElement) {
        this._cardList.push(cardElement);
        this.render();
    }
    delete() {
        this.render();
    }
    render() {
        this._cardList.map((item) => {
            var _a;
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.appendChild(item);
        });
    }
}
