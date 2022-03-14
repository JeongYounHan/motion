import { PageComponent } from "./components/page.js";
// import { ListImpl } from "./components/list.js";
// import { CardImpl } from "./components/card.js";

// console.log("main!!!!!");

// const list = new ListImpl([]);
// const cardExample = new CardImpl({ title: "hey", content: "it's note", type: "note" });
// list.push(cardExample.cardElement);

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
