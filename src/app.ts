import { Component } from "./components/component";
import { PageComponent } from "./page/page.js";

class App {
  private readonly page: Component;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
