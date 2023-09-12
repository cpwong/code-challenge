/*
  https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
*/

function updateInventory(arr1, arr2) {
  // Merge both arrays

  const temp = [...arr1, ...arr2];

  // Sort alphabetically

  const mergeInv = temp.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[0]) {
      return 1;
    }
    return 0;
  });
  console.log('mergeInv = ', mergeInv);

  // Scan through adjacent elements and combine

  const result = [];
  let r = 0;
  result.push(mergeInv[0]);
  for (let i = 1; i < mergeInv.length; i++) {
    if (result[r][1] === mergeInv[i][1]) {
      console.log(result[r][0], mergeInv[i][0]);
      result[r][0] += mergeInv[i][0];
    } else {
      result.push(mergeInv[i]);
      r++;
    }
  }
  console.log(result);
  return result;
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);
