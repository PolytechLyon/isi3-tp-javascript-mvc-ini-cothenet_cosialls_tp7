import {drawGame} from "./view.mjs";
import {ObserverGeneric} from "./observation.mjs";

export class ObserverModel extends ObserverGeneric{

    constructor(){
        super();
    }
// actualise la vue quand le modèle change
    update(model){
        drawGame(model);
    }
}