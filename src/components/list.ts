import { CardImpl } from "./card.js";

interface List {
  readonly cardList: Array<HTMLLIElement>;
  push(inputCard: Element): void;
  delete(inputCard: Element): void;
}

export class ListImpl implements List {
  private _cardList: Array<HTMLLIElement>;
  constructor(private parent: HTMLUListElement) {
    this._cardList = [];
    const tempCard = new CardImpl({ title: "hey", content: "it's note", type: "note" });
    const tempCard2 = new CardImpl({ title: "image", content: "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg", type: "image" });
    this.push(tempCard.cardElement);
    this.push(tempCard2.cardElement);
  }

  get cardList() {
    return this._cardList;
  }

  push(cardElement: HTMLLIElement) {
    this._cardList.push(cardElement);
    this.render();
  }

  delete() {
    this.render();
  }

  render() {
    this._cardList.map((item) => {
      this.parent?.appendChild(item);
    });
  }
}
