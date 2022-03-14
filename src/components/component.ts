interface Base {
  element: HTMLElement;
  attachTo(parent: HTMLElement, position: InsertPosition): void;
}

export class BaseComponent implements Base {
  element: HTMLElement = document.createElement("template");

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin"): void {
    parent.insertAdjacentElement(position, this.element);
  }
}
