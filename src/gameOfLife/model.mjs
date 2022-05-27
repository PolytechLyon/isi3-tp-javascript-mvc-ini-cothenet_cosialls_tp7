import {
  GAME_SIZE,
  CELL_STATES,
  DEFAULT_ALIVE_PAIRS,
  RENDER_INTERVAL
} from "./constants.mjs";
// import { Observable } from 'rxjs';
import {ObserverView} from "./observerView.mjs";

// export class Model extends Observable{
export class Model {
  constructor() {
    // super();
    this.width  = GAME_SIZE;
    this.height = GAME_SIZE;
    this.raf = null;
  }

  init() {
    this.state = Array.from(new Array(this.height), () =>
      Array.from(new Array(this.width), () => CELL_STATES.NONE)
    );
    DEFAULT_ALIVE_PAIRS.forEach(([x, y]) => {
      this.state[y][x] = CELL_STATES.ALIVE;
    });
    this.updated();
  }

  run(date = new Date().getTime()) {
    this.raf = requestAnimationFrame(() => {
      const currentTime = new Date().getTime();
      if (currentTime - date > RENDER_INTERVAL) {

        for (let i = 0; i < this.width; i++) {
          for (let j = 0; j < this.width; j++) {
            const nbAlive = this.aliveNeighbours(i, j);
            // TODO implement Game of life logic
            //si céllule vivante :
            if(this.isCellAlive(i, j)){
              //si 2 ou 3 cellules vivantes => reste vivante
              if(nbAlive === 2 || nbAlive === 2)
                this.state[i][j] = CELL_STATES.ALIVE;
              else
                this.state[i][j] = CELL_STATES.DEAD;
            }
            //Si cellule morte :
            else{
              //si 3 cellules voisines au moins sont vivante => devient vivante
              if(nbAlive === 3)
                this.state[i][j] = CELL_STATES.ALIVE;
              else
                this.state[i][j] = CELL_STATES.DEAD;
            }
          }
        }

        this.updated();
        this.run(currentTime);
      } else {
        this.run(date);
      }
    });
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = null;
  }

  reset() {
    // TODO
    //remet à l'état initiale:
    this.init();
  }

  isCellAlive(x, y) {
    return x >= 0 &&
      y >= 0 &&
      y < this.height &&
      x < this.height &&
      this.state[y][x] === CELL_STATES.ALIVE
      ? 1
      : 0;
  }
  aliveNeighbours(x, y) {
    let number = 0;
    // TODO
    for(let i = x-1; i < x+2; i++){
      for(let j = y-1; j < y+2; j++){
        if(this.isCellAlive(i,j))
          number++;
      }
    }
    return number;
  }

  updated(observerView) {
    // TODO update the view
    this.notify(this);
  }
}
