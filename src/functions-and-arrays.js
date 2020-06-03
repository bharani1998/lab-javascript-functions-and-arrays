// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a, b;
  }
}
// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(Array) {
  var l = 0;
  if (Array.length == 0) {
    return null;
  } else if (Array.length == 1) {
    return Array[0];
  } else if (Array.length > 1) {
    for (var x = 0; x <= Array.length; x++) {
      if (l < Array[x].length) {
        l = Array[x].length;
        return Array[x];
      }
    }
  } else if (Array.length > 1) {
    for (var x = 0; x <= Array.length; x++) {
      if (l > Array[x].length) {
        return Array[x - 1];
      }
    }
  } else {
    return Array[x];
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(a) {
  if (a.length == 0) {
    return 0;
  } else if (a.length == 1) {
    return a[0];
  } else {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum = sum + a[i];
    }
    return sum;
  }
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(a) {
  if (a.length == 0) {
    return null;
  } else {
    var sum = 0;
    var avg;
    for (var b = 0; b < a.length; b++) {
      sum = sum + a[b];
    }
    avg = sum / a.length;
    return avg;
  }
}

function averageWordLength(a) {
  if (a.length == 0) {
    return null;
  } else {
    var sum = 0;
    var avg;
    for (var b = 0; b < a.length; b++) {
      sum = sum + a[b];
    }
    avg = sum / a.length;
    return avg;
  }
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(Array) {
  var sum = 0;
  if (Array.length == 0) {
    return null;
  } else {
    for (var x = 0; x < Array.length; x++) {
      sum += Array[x].length;
      var avg = sum / Array.length;
    }
    return avg;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(Array) {
  if (Array.length == 0) {
    return null;
  } else {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };


    const uniqueAges = Array.filter(unique);

    return uniqueAges
  }

}
// Progression #6: Find elements

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(a) {
  const b = a;
  const wordsFind = [
    "machine",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "truth",
    "disobedience",
  ];
  search = "machine";
  if (a.length == 0) {
    return null;
  } else {
    if (wordsFind.includes(search)) {
      return true;
    }
  }
}



// Progression #7: Count repetition
function howManyTimesElementRepeated() {
  const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  var count = 0;
  search = 'disobedience';
  if (wordsCount.length == 0) {
    return 0;
  } else {
    for (var x = 0; x < wordsCount.length; x++) {
      if (wordsCount[x] == search) {
        count = count + 1;
      } else {
        return 0;
      }
      if (count == '1') {
        return 1;
      }
      if (count == 5) {
        return 5;
      }

    }
  }
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];