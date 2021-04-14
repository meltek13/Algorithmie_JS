const fs = require("fs");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};
comparaisonsExo3 = 0;
const exo3 = (inputArr, k) => {
  for (let i = 0; i < inputArr.length; i++) {
    let searchingValue = k - inputArr[i];

    comparaisonsExo3++;
    console.log(inputArr.filter((num) => inputArr[num] !== i));
    if (
      inputArr
        .filter((num) => inputArr.indexOf(num) !== i)
        .includes(searchingValue)
    )
      return true;
  }
  return false;
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  let tab3 = createArray(data);
  let k = 20;
  console.log(
    `[${tab3}] Y'a t-il deux chiffres dans cette liste qui en s'additionnant auront ${k} comme résultat ?`
  );
  console.log(`${exo3(tab3, k)} (${comparaisonsExo3} comparaisons)`);
});
