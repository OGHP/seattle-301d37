// IIFE 
// Immediately-invoked function expression

var app = {};

(function dogNames(module){
  let firstDog = 'Gary';
  let secondDog = 'Charlotte';

  module.firstDog = firstDog;

})(app);

// dogNames();

console.log(app.firstDog);
