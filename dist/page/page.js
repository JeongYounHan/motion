import { Card } from "./../components/page/card.js";
import { BaseComponent } from "./../components/component.js";
import { ListImpl } from "../components/page/list.js";
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<article class="page"></article>`);
        const list = new ListImpl(Card);
        list.attachTo(this.element, "beforeend");
    }
}
