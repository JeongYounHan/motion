import { Composable, SectionContainer } from "./card.js";
// import { Image } from "./image.js";
// import { Note } from "./note.js";
import { BaseComponent, Component } from "../component.js";

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class ListImpl extends BaseComponent<HTMLUListElement> implements Composable {
  constructor(private cardConstructor: SectionContainerConstructor) {
    super(`<ul class="list"></ul>`);
  }

  addChild(child: Component) {
    const item = new this.cardConstructor();
    item.addChild(child);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
