'use strict';

let obj = {

  myVar: 'foo',

  myFunc: function() {
    console.log(this.myVar);

    setTimeout(function() {
      console.log(this.myVar);
    }, 1000);

    setTimeout( () => {
      console.log(this.myVar);
    }, 1000);

  },

  myArrowFunc: () => {
    console.log(this.myVar);
  },

};

obj.myFunc();
obj.myArrowFunc();

