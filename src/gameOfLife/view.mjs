import { GAME_SIZE, CELL_SIZE } from "./constants.mjs";
import {ObservableGeneric} from "./observation.mjs";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const drawCell = (x, y, value) => {
  context.fillStyle = value;
  context.fillRect(x + CELL_SIZE * x, y + CELL_SIZE * y, CELL_SIZE, CELL_SIZE);
};

export const initView = () => {
  document.getElementById("game").appendChild(canvas);
  canvas.setAttribute("height", GAME_SIZE * CELL_SIZE + GAME_SIZE - 1);
  canvas.setAttribute("width", GAME_SIZE * CELL_SIZE + GAME_SIZE - 1);
 };

export const drawGame = model => {
  console.log("draw game");
  model.state.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      drawCell(rowIndex, columnIndex, value);
    });
  });
};

export class ButtonManager extends ObservableGeneric{
  constructor() {
    super();
    this.buttonStart = document.getElementById("start");
    this.buttonStart.onclick = this.start;
    this.buttonStop = document.getElementById("stop");
    this.buttonStop.onclick = this.stop;
    this.buttonReset = document.getElementById("reset");
    this.buttonReset.onclick = this.reset;

  }

  start(){
    console.log('start');
    this.update()
  }

  stop(){
    console.log('stop');
    this.notify("stop");
  }

  reset(){
    console.log('reset');
    this.notify("reset");
  }

  update(){
    this.notify(this);
  }
}
