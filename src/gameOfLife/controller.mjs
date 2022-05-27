export const controller = (model) => {

  //model.run();

  let buttonStart = document.getElementById("start");
  buttonStart.onclick = () => {
    model.run();
  };

  let buttonStop = document.getElementById("stop");
  buttonStop.onclick = () => {
    model.stop();
  };

  let buttonReset = document.getElementById("reset");
  buttonReset.onclick = () => {
    model.reset()
  };

};
