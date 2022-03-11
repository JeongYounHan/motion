import { ListImpl } from "./components/list.js";
import { CardImpl } from "./components/card.js";

console.log("main!!!!!");

const list = new ListImpl([]);
const cardExample = new CardImpl({ title: "hey", content: "it's note", type: "note" });
list.push(cardExample.cardElement);
