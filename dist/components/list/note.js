import { BaseComponent } from "../component.js";
export class Note extends BaseComponent {
    constructor(title, content) {
        super(`<div><h2 class="note__title">${title}</h2><p class="note__body">${content}</p></div>`);
    }
}
