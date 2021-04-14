const fs = require("fs");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};
let comparaisonsExo6 = 0;
const exo6 = (buildings) => {
  let lastMaxBuilding = 0;
  let BuildingsWithSunsetView = [];
  buildings.reverse().filter((building) => {
    comparaisonsExo6++;
    if (building > lastMaxBuilding) {
      BuildingsWithSunsetView.push(building);
      lastMaxBuilding = building;
    }
  });
  return BuildingsWithSunsetView.reverse();
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  let tab6 = createArray(data);
  console.log(`[${tab6}] quels batiments ont une vue sur le soleil couchant ?`);
  console.log(`[${exo6(tab6)}] (${comparaisonsExo6} comparaisons)`);
});
