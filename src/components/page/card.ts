import { BaseComponent, Component } from "./../component.js";

// 안에 다른 컴포넌트 넣을 수 있었으면 할때 사용
export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

export interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

export class Card extends BaseComponent<HTMLLIElement> implements SectionContainer {
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
