import { BaseComponent } from "../component.js";
export class ListImpl extends BaseComponent {
    constructor(cardConstructor) {
        super(`<ul class="list"></ul>`);
        this.cardConstructor = cardConstructor;
    }
    addChild(child) {
        const item = new this.cardConstructor();
        item.addChild(child);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
