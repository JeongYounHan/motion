import { PageComponent } from "./page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
new App(document.querySelector(".document"));
