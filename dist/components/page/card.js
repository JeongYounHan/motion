import { BaseComponent } from "./../component.js";
export class Card extends BaseComponent {
    constructor() {
        super(`<li class="list"><section class="page-item__body"></section><div class="page-item__controls"><button class="close">&times;</button></div></li>`);
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
}
