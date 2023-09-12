/*
  https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
*/

function sym(...args) {
  let arr = [],
    arr1,
    arr2;
  for (let i = 0; i < args.length - 1; i++) {
    
    // Compare each consecutive pair of arrays
    
    // Use Set() to remove duplicates from each array by 
    // 1. Create a Set
    // 2. Spread out the Set to convert to Array 
    i === 0 ? arr1 = [...new Set(args[i])] : arr1 = arr;
    arr2 = [...new Set(args[i + 1])];
    
    console.log('arr1: ', arr1, 'arr2: ', arr2);

    // Use filter to extract items with the same valies from each array
    // and push it into a temp array (arr)
    arr = arr1.filter((item) => {
      return !arr2.includes(item);
    });
    arr.push(
      ...arr2.filter((item) => {
        return !arr1.includes(item);
      })
    );
    arr1 = arr.sort();
    
    console.log('arr: ', arr);
  }
  return arr;
}
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3, 3], [5, 2, 1, 4])
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
