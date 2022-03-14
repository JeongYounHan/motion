import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

export class Card extends BaseComponent<HTMLLIElement> implements Composable {
  constructor() {
    super(`<li class="list"><section class="page-item__body"></section><div class="page-item__controls"><button class="close">&times;</button></div></li>`);
  }

  addChild(child: Component) {
    const container = this.element.querySelector(".page-item__body")! as HTMLElement;
    child.attachTo(container);
  }
}
