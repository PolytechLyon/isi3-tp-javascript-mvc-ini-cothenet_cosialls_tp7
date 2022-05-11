import {drawGame} from "./view";

export class ObserverView {
    constructor() {
    }

    update(model){
        console.log("màj vue!");
        drawGame(model);
    }
}