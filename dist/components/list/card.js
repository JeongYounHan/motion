import { BaseComponent } from "../component.js";
export class Card extends BaseComponent {
    constructor() {
        super(`<li class="page-item"><section class="page-item__body"></section><div class="page-item__controls"><button class="close">&times;</button></div></li>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        this.element.addEventListener("dragstart", (event) => {
            this.onDragStart(event);
        });
        this.element.addEventListener("dragend", (event) => {
            this.onDragEnd(event);
        });
        this.element.addEventListener("dragenter", (event) => {
            this.onDragEnter(event);
        });
        this.element.addEventListener("dragleave", (event) => {
            this.onDragLeave(event);
        });
    }
    onDragStart(_) {
        this.notifyDragObservers("start");
    }
    onDragEnd(_) {
        this.notifyDragObservers("stop");
    }
    onDragEnter(_) {
        this.notifyDragObservers("enter");
    }
    onDragLeave(_) {
        this.notifyDragObservers("leave");
    }
    notifyDragObservers(state) {
        this.dragStateListener && this.dragStateListener(this, state);
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnDragStateListener(listener) {
        this.dragStateListener = listener;
    }
}
