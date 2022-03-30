import { BaseComponent, Component } from "../component.js";

// 안에 다른 컴포넌트 넣을 수 있었으면 할때 사용
export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;
export type DragState = "start" | "stop" | "enter" | "leave";
type OnDragStateListener<T extends Component> = (target: T, state: DragState) => void;

export interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
  setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
}

export class Card extends BaseComponent<HTMLLIElement> implements SectionContainer {
  private closeListener?: OnCloseListener;
  private dragStateListener?: OnDragStateListener<Card>;

  constructor() {
    super(`<li class="page-item"><section class="page-item__body"></section><div class="page-item__controls"><button class="close">&times;</button></div></li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    this.element.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });

    this.element.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });

    this.element.addEventListener("dragenter", (event: DragEvent) => {
      this.onDragEnter(event);
    });

    this.element.addEventListener("dragleave", (event: DragEvent) => {
      this.onDragLeave(event);
    });
  }

  onDragStart(_: DragEvent) {
    // event.preventDefault();
    this.notifyDragObservers("start");
  }
  onDragEnd(_: DragEvent) {
    // event.preventDefault();
    this.notifyDragObservers("stop");
  }
  onDragEnter(_: DragEvent) {
    // event.preventDefault();
    this.notifyDragObservers("enter");
  }
  onDragLeave(_: DragEvent) {
    // event.preventDefault();
    this.notifyDragObservers("leave");
  }

  notifyDragObservers(state: DragState) {
    this.dragStateListener && this.dragStateListener(this, state);
  }

  addChild(child: Component) {
    const container = this.element.querySelector(".page-item__body")! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnDragStateListener(listener: OnDragStateListener<Card>) {
    this.dragStateListener = listener;
  }
}
