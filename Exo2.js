const fs = require("fs");
const { builtinModules } = require("module");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};

let comparaisonsExo2 = 0;
let valid = 0;
let turn = 0;
let exo2 = (buildings) => {
  let len = buildings.length; //mesure la longueur de l'array
  let buildingsWithSunsetView = [];
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      turn++;
      comparaisonsExo2++;
      if (buildings[i] > buildings[j + 1]) {
        valid++;
      }
    }

    if (valid === turn - 1) buildingsWithSunsetView.push(buildings[i]);

    valid = 0;
    turn = 0;
  }
  return buildingsWithSunsetView;
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  let tab2 = createArray(data);
  console.log(`[${tab2}] quels batiments ont une vue sur le soleil couchant ?`);
  console.log(`[${exo2(tab2)}] (${comparaisonsExo2} comparaisons)`);
});
