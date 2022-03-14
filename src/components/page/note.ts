import { BaseComponent } from "./../component.js";

export class Note extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`<div><h2 class="note__title">${title}</h2><p class="note__body">${content}</p></div>`);
  }
}
