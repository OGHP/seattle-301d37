![CF](https://i.imgur.com/7v5ASc8.png)  Object Iteration
=======
## Overview
Just like with arrays, you'll often want to iterate 


It is implemented as a method on your array instance ...
```
let shoutIt = word => console.log(word.toUpperCase());
let sayIt = word => console.log(word);

// This function takes in a function as a parameter and calls it.
let sayTheWord = function (word, speaker) {
  speaker(word);
};

// And here, we invoke it with different "callbacks"
sayTheWord('Hello', sayIt);
sayTheWord('Hello', shoutIt);

```

### Caveats and Notes
- Applies the callback to each element
- You cannot "Return" a value
- You cannot "break" or "continue" as you can with a for loop
- By default, forEach does not mutate the array
- If you mutate it in process, you will have interesting issues

## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [What the heck is a callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

