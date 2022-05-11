import {ObserverView} from "./observerView";

export const controller = model => {
  let obs = new ObserverView();
  model.subscribe(obs);
  model.run();
};
