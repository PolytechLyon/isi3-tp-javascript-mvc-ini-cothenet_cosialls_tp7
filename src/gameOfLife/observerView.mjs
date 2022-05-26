import {drawGame} from "./view.mjs";

export class ObserverView {
    constructor() {
    }
    update(model){
        drawGame(model);
    }
}