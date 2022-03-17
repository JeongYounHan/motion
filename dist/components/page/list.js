import { Image } from "./image.js";
import { Note } from "./note.js";
import { BaseComponent } from "../component.js";
export class ListImpl extends BaseComponent {
    constructor(cardConstructor) {
        super(`<ul class="list"></ul>`);
        this.cardConstructor = cardConstructor;
        const tempCardNote = new Note("note title", "note body");
        const tempCardImage = new Image("image title", "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg");
        this.addChild(tempCardNote);
        this.addChild(tempCardImage);
    }
    addChild(child) {
        const item = new this.cardConstructor();
        item.addChild(child);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
