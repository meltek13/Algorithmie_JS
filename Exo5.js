const fs = require("fs");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
});
