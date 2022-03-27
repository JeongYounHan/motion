import { BaseComponent } from "../component.js";

export class Image extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`<div><h2 class="note__title">${title}</h2><img src=${content} class="note__body" /></div>`);
  }
}
