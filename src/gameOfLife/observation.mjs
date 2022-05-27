
export class ObserverGeneric{
    update(){

    }
}

export class ObservableGeneric{
    constructor() {
        this.observersGeneric = [];
    }

    //ajoute un observer:
    subscribe(observerGeneric){
        this.observersGeneric.push(observerGeneric);
    }

    //notifie tout les observers avec une donnée:
    notify(data){
        this.observersGeneric.forEach(obs => obs.update(data))
    }
}