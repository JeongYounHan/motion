import { InputDialog } from "./../components/page/dialog.js";
import { Card } from "./../components/page/card.js";
import { BaseComponent } from "./../components/component.js";
import { ListImpl } from "../components/page/list.js";
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<article class="page"></article>`);
        const list = new ListImpl(Card);
        list.attachTo(this.element, "beforeend");
        const imageBtn = document.querySelector("#new-image");
        imageBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
