import { BaseComponent } from "../component.js";
export class Image extends BaseComponent {
    constructor(title, content) {
        super(`<div><h2 class="note__title">${title}</h2><img src=${content} class="note__body" /></div>`);
    }
}
