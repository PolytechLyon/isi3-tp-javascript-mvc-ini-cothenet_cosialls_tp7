if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="./style.css">');
import { initView, drawGame, ButtonManager } from "./gameOfLife/view.mjs";
import { Model } from "./gameOfLife/model.mjs";
import { controller } from "./gameOfLife/controller.mjs";
import { ObserverModel} from "./gameOfLife/observerModel.mjs";

initView();

const model = new Model();

model.init();
drawGame(model);
const btnManager = new ButtonManager();
controller(model, btnManager);
