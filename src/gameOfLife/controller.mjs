import {ObserverView} from "./observerView.mjs";

export const controller = model => {
  let obs = new ObserverView();
  // model.subscribe(obs);
  model.run();
};
