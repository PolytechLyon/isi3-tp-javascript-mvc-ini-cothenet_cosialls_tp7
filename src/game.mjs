if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="./style.css">');
import { initView, drawGame } from "./gameOfLife/view.mjs";
import { Model } from "./gameOfLife/model.mjs";
import { controller } from "./gameOfLife/controller.mjs";

initView();

const model = new Model();

model.init();
drawGame(model);
controller(model);
