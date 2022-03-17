import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

export class Card extends BaseComponent<HTMLLIElement> implements Composable {
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="card"><section class="page-item__body"></section><div class="page-item__controls"><button class="close">&times;</button></div></li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(".page-item__body")! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
