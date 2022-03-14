import { ListImpl } from "./list.js";

export class PageComponent {
  private element: HTMLUListElement;
  private list: ListImpl;
  constructor() {
    this.element = document.createElement("ul");
    this.element.classList.add("page");
    this.list = new ListImpl(this.element);
    this.list.render();
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
