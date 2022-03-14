import { BaseComponent } from "./../component.js";
export class Note extends BaseComponent {
    constructor(title, content) {
        super(`<li class="card"><section><h2 class="note__title">${title}</h2><p class="note__body">${content}</p></section></li>`);
    }
}
