import { BaseComponent } from "../component.js";
export class Card extends BaseComponent {
    constructor() {
        super(`<li class="card"><section class="page-item__body"></section><div class="page-item__controls"><button class="close">&times;</button></div></li>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
