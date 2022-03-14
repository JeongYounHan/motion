import { BaseComponent } from "./../components/component.js";
import { ListImpl } from "../components/page/list.js";

export class PageComponent extends BaseComponent {
  constructor() {
    super();
    this.element = document.createElement("article");
    this.element.classList.add("page");
    const list = new ListImpl();
    list.attachTo(this.element, "beforeend");
  }
}
