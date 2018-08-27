# Lets Review

#### Fill in the blanks to have this jQuery console.log the text of each <li>
```
  <ul>
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
  </ul>
  
  $('ul')._____(function() {
    console.log(_____); 
  }); 
  
```


#### What will be logged for `app` in before and after this IIFE runs?
```
let app = {};

console.log("Before", app);

(function(module) {
    module.one = 1;
    module.ten = () => 10;
})(app);

console.log("After", app);
```

#### How do you get out of `vim`?


#### What is the value of `s` here?
```
let array = [2,4,6,8];
let s = array.reduce( (a,v,i) => {
    return a + v
},0);
```


#### How do you start the psql shell and get right into your database? How do you get out of `psql`?


#### How do you run an SQL File (`something.sql`) directly against your database?


#### Based on the query below, what can you infer about the links and the categories table?

SELECT 