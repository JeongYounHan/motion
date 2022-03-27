import { Image } from "./../components/list/image.js";
import { MediaSectionInput } from "./../components/dialog/input/media-input.js";
import { InputDialog } from "../components/dialog/dialog.js";
import { Card } from "../components/list/card.js";
import { BaseComponent } from "./../components/component.js";
import { ListImpl } from "../components/list/list.js";
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<article class="page"></article>`);
        const list = new ListImpl(Card);
        list.attachTo(this.element, "beforeend");
        const imageBtn = document.querySelector("#new-image");
        imageBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            const mediaInputSection = new MediaSectionInput();
            dialog.addChild(mediaInputSection);
            dialog.attachTo(document.body);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                const tempCardImage = new Image(mediaInputSection.title, mediaInputSection.url);
                list.addChild(tempCardImage);
                dialog.removeFrom(document.body);
            });
        });
    }
}
