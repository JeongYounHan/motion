import { ListImpl } from "../components/list.js";
export class PageComponent {
    constructor() {
        this.element = document.createElement("ul");
        this.element.classList.add("page");
        this.list = new ListImpl(this.element);
        this.list.render();
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
