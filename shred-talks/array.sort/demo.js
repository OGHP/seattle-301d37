let numbers = [5,1,3,9,11,100,87,44,23,67];
numbers.sort( (a,b) => {
  // console.log(a, !(a%2))
  // return !(a%2);
  return a > b;
});
numbers;

let people = [
  {name:'Fred', role:'Developer'},
  {name:'Suzy', role:'Developer'},
  {name:'Gina', role:'Manager'},
  {name:'Jim', role:'Support'},
];

people.sort( (a,b) => a.role.toUpperCase() > b.role.toUpperCase() );

people;