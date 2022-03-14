import { BaseComponent } from "./../component.js";
import { CardImpl } from "./card.js";
export class ListImpl extends BaseComponent {
    constructor() {
        super(`<ul class="list"></ul>`);
        const tempCard = new CardImpl({ title: "hey", content: "it's note", type: "note" });
        const tempCard2 = new CardImpl({ title: "image", content: "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg", type: "image" });
        this.push(tempCard.cardElement);
        this.push(tempCard2.cardElement);
    }
    push(cardElement) {
        this.element.appendChild(cardElement);
    }
    delete() {
    }
}
