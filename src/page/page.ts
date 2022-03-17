import { Card } from "./../components/page/card.js";
import { BaseComponent } from "./../components/component.js";
import { ListImpl } from "../components/page/list.js";

export class PageComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<article class="page"></article>`);
    // this.element = document.createElement("article");
    // this.element.classList.add("page");
    const list = new ListImpl(Card);
    list.attachTo(this.element, "beforeend");
  }
}
