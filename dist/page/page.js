import { Image } from "./../components/list/image.js";
import { MediaSectionInput } from "./../components/dialog/input/media-input.js";
import { InputDialog } from "../components/dialog/dialog.js";
import { Card } from "../components/list/card.js";
import { BaseComponent } from "./../components/component.js";
import { ListImpl } from "../components/list/list.js";
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<article class="page"></article>`);
        this.list = new ListImpl(Card);
        this.list.attachTo(this.element, "beforeend");
        this.bindElementToDialog("#new-image", MediaSectionInput, (input) => new Image(input.title, input.url));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener("click", () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(document.body);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                const child = makeSection(input);
                this.list.addChild(child);
                dialog.removeFrom(document.body);
            });
        });
    }
}
