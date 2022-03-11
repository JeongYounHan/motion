interface List {
  readonly cardList: Array<Element>;
  push(inputCard: Element): void;
  delete(inputCard: Element): void;
}

export class ListImpl implements List {
  mainArea: Element | null = document.querySelector(".document");
  ulArea: Element | null = document.querySelector(".list");

  constructor(private _cardList: Array<Element>) {}

  get cardList() {
    return this._cardList;
  }

  push(cardElement: Element) {
    this._cardList.push(cardElement);
    this.render();
  }

  delete() {
    this.render();
  }

  render() {
    this.cardList.map((item) => {
      this.ulArea?.appendChild(item);
    });
  }
}
