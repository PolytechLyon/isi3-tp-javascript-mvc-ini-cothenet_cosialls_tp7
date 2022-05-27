import {drawGame} from "./view.mjs";
import {ObserverGeneric} from "./observation.mjs";

export class ObserverModel extends ObserverGeneric{

    constructor(){
        super();
    }

    update(model){
        drawGame(model);
    }
}