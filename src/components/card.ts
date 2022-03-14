type InputType = "image" | "video" | "note" | "todo";

type CardType = {
  title: string;
  content: string;
  type: InputType;
};

interface Card {
  readonly cardElement: HTMLLIElement;
}

export class CardImpl implements Card {
  public _cardElement: HTMLLIElement;
  constructor(public inputCard: CardType) {
    this._cardElement = document.createElement("li");
    this.setElement(inputCard);
  }

  get cardElement() {
    return this._cardElement;
  }

  setElement(inputCard: CardType) {
    const listElement = document.createElement("li");
    listElement.setAttribute("class", "card");

    const h2Tag = document.createElement("h2");
    h2Tag.innerText = inputCard.title;
    listElement.appendChild(h2Tag);

    if (inputCard.type === "image" || inputCard.type === "video") {
      const imageTag = document.createElement("img");
      imageTag.src = inputCard.content;
      listElement.appendChild(imageTag);
    } else {
      const pTag = document.createElement("p");
      pTag.innerText = inputCard.content;
      listElement.appendChild(pTag);
    }

    this._cardElement = listElement;
  }
}
