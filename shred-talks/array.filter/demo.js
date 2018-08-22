// array.map demo

let people = [
  { name: 'John', role: 'Dad' },
  { name: 'Cathy', role: 'Mom' },
  { name: 'Zach', role: 'Kid' },
  { name: 'Allie', role: 'Kid' },
];

let nums = [1,2,3,4,5,6,7];

for(var i = 0; i < nums.length; i++ ) {
  nums[i] = nums[i] * nums[i];
}

nums;

let squares = nums.map( (value) => {
  return { num: value, squared: value * value };
});

let addOne = nums.map(x=>x + 1);
addOne;

squares;
nums;


