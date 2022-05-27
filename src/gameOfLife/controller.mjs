import {ObserverModel} from "./observerModel.mjs";

export const controller = (model, buttonManager) => {
  // model.subscribe(obs);
  // console.log('run model')
  // model.run();
  model.subscribe(new ObserverModel());
  model.run();
};
