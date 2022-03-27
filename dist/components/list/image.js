import { BaseComponent } from "../component.js";
export class Image extends BaseComponent {
    constructor(title, content) {
        super(`<section class="image"><div class="image__holder"><img src=${content} class="image__thumbnail" /></div><h2 class="page-item__title image__title">${title}</h2></section>`);
    }
}
