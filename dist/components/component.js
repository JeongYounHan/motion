export class BaseComponent {
    constructor() {
        this.element = document.createElement("template");
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
