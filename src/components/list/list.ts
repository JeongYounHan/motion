import { Composable, SectionContainer } from "./card.js";
import { Image } from "./image.js";
import { Note } from "./note.js";
import { BaseComponent, Component } from "../component.js";

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class ListImpl extends BaseComponent<HTMLUListElement> implements Composable {
  constructor(private cardConstructor: SectionContainerConstructor) {
    super(`<ul class="list"></ul>`);
    const tempCardNote = new Note("note title", "note body");
    const tempCardImage = new Image("image title", "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg");

    this.addChild(tempCardNote);
    this.addChild(tempCardImage);
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
