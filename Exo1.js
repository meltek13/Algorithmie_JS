const fs = require("fs");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};
comparaisonsExo1 = 0;
const exo1 = (inputArr, K) => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      comparaisonsExo1++;
      if (inputArr[j] + inputArr[i] === K) {
        return true;
      }
    }
  }
  return false;
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  let tab1 = createArray(data);
  let k = 17;
  console.log(
    `[${tab1}] Y'a t-il deux chiffres dans cette liste qui en s'additionnant auront ${k} comme résultat ?`
  );
  console.log(`${exo1(tab1, k)} (${comparaisonsExo1} comparaisons)`);
});
