import { TextData, MediaData } from "./../components/dialog/dialog";
import { TextSectionInput } from "./../components/dialog/input/text-input.js";
import { Image } from "./../components/list/image.js";
import { MediaSectionInput } from "./../components/dialog/input/media-input.js";
import { InputDialog } from "../components/dialog/dialog.js";
import { Card } from "../components/list/card.js";
import { BaseComponent, Component } from "./../components/component.js";
import { ListImpl } from "../components/list/list.js";

type InputComponentCont<T = (MediaData | TextData) & Component> = {
  new (): T;
};

export class PageComponent extends BaseComponent<HTMLElement> {
  list = new ListImpl(Card);
  constructor() {
    super(`<article class="page"></article>`);

    this.list.attachTo(this.element, "beforeend");

    this.bindElementToDialog<MediaSectionInput>("#new-image", MediaSectionInput, (input: MediaSectionInput) => new Image(input.title, input.url));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(selector: string, InputComponent: InputComponentCont<T>, makeSection: (inputSection: T) => Component) {
    const element = document.querySelector(selector)! as HTMLButtonElement;

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
