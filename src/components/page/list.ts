import { Card, Composable } from "./card.js";
import { Image } from "./image.js";
import { Note } from "./note.js";
import { BaseComponent, Component } from "../component.js";

export class ListImpl extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super(`<ul class="list"></ul>`);
    const tempCardNote = new Note("note title", "note body");
    const tempCardImage = new Image("image title", "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg");

    tempCardNote.attachTo(this.element, "beforeend");
    tempCardImage.attachTo(this.element, "beforeend");
  }

  addChild(section: Component) {
    const item = new Card();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
  }
}
