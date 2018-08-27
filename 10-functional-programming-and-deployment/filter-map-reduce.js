// MAP
// iterates through each item in an array
// runs a function (callback) on each element
// return a new array 
// does not mutate the original array 

// FILTER
// creates a new array with the elements that pass the test given in the callback
// does not mutate the original array 

// REDUCE
// takes in a callback as an argument and an initial value
// callback has up to three parameters: (acc, curr, idx)
// initial value can be: number, array, object, string
// does not mutate the original array 

let numbers = [1, 2, 3, 4, 5];

let reducedNumbers = numbers.reduce( (acc, curr) => {
  // console.log('accumulator:', acc);
  // console.log('current:', curr);
  return acc + curr;
}, 0);

// console.log(numbers);
// console.log(reducedNumbers);

let johnString = 'john is bald';

let splitJohn = johnString.split('');
console.log(splitJohn);

let reversedJohn = splitJohn.reduce( (acc, curr) => {
  console.log(acc);
  return curr + acc;
}, '')

console.log(reversedJohn);
console.log(johnString)
