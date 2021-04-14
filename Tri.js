const fs = require("fs");

const fileName = process.argv[2];

const createArray = (tab) => {
  return tab
    .split(" ")
    .filter((num) => num.length > 0 && !isNaN(num))
    .map((num) => Number.parseInt(num));
};

// Méthode bubbleSort
let countBubble = 0;
let bubbleSort = (inputArr) => {
  let len = inputArr.length; //mesure la longueur de l'array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      countBubble++;
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j]; //stock temporairement data
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

// methode tri par insertion
let countInsert = 0;
let insertionSort = (inputArr) => {
  for (let i = 1; i < inputArr.length; i++) {
    let j = i - 1;
    let tmp = inputArr[i];
    while (j >= 0 && inputArr[j] > tmp) {
      countInsert++;
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = tmp;
  }
  return inputArr;
};

//methode tri par selection
let countSelection = 0;
let selectionSort = (inputArr) => {
  for (let i = 0; i < inputArr.length; i++) {
    //stocker l'index de l'élément minimum
    let min = i;
    for (let j = i + 1; j < inputArr.length; j++) {
      countSelection++;
      if (inputArr[j] < inputArr[min]) {
        // mettre à jour l'index de l'élément minimum
        min = j;
      }
    }
    let tmp = inputArr[i];
    inputArr[i] = inputArr[min];
    inputArr[min] = tmp;
  }
  return inputArr;
};

//methode tri rapide
let countFast = 0;
const quickSort = (inputArr) => {
  if (inputArr.length <= 1) {
    return inputArr;
  }

  let lessThanPivot = [];
  let greaterThanPivot = [];
  const pivot = inputArr.shift();

  for (let i = 0; i < inputArr.length; i++) {
    const value = inputArr[i];
    countFast++;
    value <= pivot ? lessThanPivot.push(value) : greaterThanPivot.push(value);
  }

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
};

// methode Fusion
let countFusion = 0;
const merge = (left, right) => {
  let tab = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      tab.push(left[l++]);
    } else {
      tab.push(right[r++]);
    }
  }
  return tab.concat(left.slice(l)).concat(right.slice(r));
};
let fusionSort = (inputArr) => {
  if (inputArr.length < 2) {
    countFusion++;
    return inputArr;
  }
  var mid = Math.floor(inputArr.length / 2),
    right = inputArr.slice(mid),
    left = inputArr.slice(0, mid),
    p = merge(fusionSort(left), fusionSort(right));

  p.unshift(0, inputArr.length);
  inputArr.splice.apply(inputArr, p);
  return inputArr;
};

// Méthode asynchrone
fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  let tab1 = createArray(data);
  let tab2 = createArray(data);
  let tab3 = createArray(data);
  let tab4 = createArray(data);
  let tab5 = createArray(data);

  let triBubble = bubbleSort(tab1);
  console.log(`[${triBubble}] = tri à bulle`);
  console.log(countBubble);

  let triInsertion = insertionSort(tab2);
  console.log(`[${triInsertion}] = tri par insertion`);
  console.log(countInsert);

  let triSelection = selectionSort(tab3);
  console.log(`[${triSelection}] = tri par selection`);
  console.log(countSelection);

  let triFast = quickSort(tab4);
  console.log(`[${triFast}] = tri rapide`);
  console.log(countFast);

  let triFusion = fusionSort(tab5);
  console.log(`[${triFusion}] = tri fusion`);
  console.log(countFusion);
});
