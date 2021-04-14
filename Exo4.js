const fs = require("fs");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};

let comparaisonsExo4 = 0;
const exo4 = (buildings) => {
  const lastBuilding = [...buildings].pop();
  const BuildingsWithSunsetView = [lastBuilding];

  buildings.reverse().forEach((building) => {
    comparaisonsExo4++;

    if (building > Math.max(...BuildingsWithSunsetView)) {
      BuildingsWithSunsetView.push(building);
    }
  });

  return BuildingsWithSunsetView.reverse();
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  let tab4 = createArray(data);
  console.log(`[${tab4}] quels batiments ont une vue sur le soleil couchant ?`);
  console.log(`[${exo4(tab4)}] (${comparaisonsExo4} comparaisons)`);
});
