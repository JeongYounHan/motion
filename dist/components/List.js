export class ListImpl {
    constructor(_cardList) {
        this._cardList = _cardList;
        this.mainArea = document.querySelector(".document");
        this.ulArea = document.querySelector(".list");
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
            (_a = this.ulArea) === null || _a === void 0 ? void 0 : _a.appendChild(item);
        });
    }
}
