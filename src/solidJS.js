
// Create a function that takes in array of numbers and returns the array,
// and returns the square of that number

//Write a function that takes just one array, 10 numbers(ex. )
const arrSquared = (arr) => { 
//create a new array outside of the for loop
const newArr = [];
//Run through all the elements of the array
for(let i = 0; i < arr.length; i += 1) {
  // Square (multiply the number by itself)
  //reassign the new array to that squared value
  newArr[i] = arr[i] * arr[i];
}
  //Return the new array
  return newArr;
}

//Test
console.log(arrSquared([1,2,3,4]))// Expect: [1, 4, 9, 16]


