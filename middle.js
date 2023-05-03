const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

// test code

assertEqual(middle([1, 2]), [1, 2]); // should return [1, 2]
assertEqual(middle([1, 2, 3]), [2]); // should return [2]
assertEqual(middle([1, 2, 3, 4, 5]), [3]); // should return [3]
assertEqual(middle([1, 2, 3, 4]), [2, 3]); // should return [2, 3]
assertEqual(middle([1]), [1]); // should return [1]
assertEqual(middle([]), []); // should return []
