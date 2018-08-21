# ![CF](https://i.imgur.com/7v5ASc8.png) Let's Review!

## Label each party in the relationship below, as it happens ...
```
  function createArray(n) {
    let arr = new Array(n).fill(0);
    return arr.map( (n,i) => i+1 );
  }
    
  let numbers = createArray(100);
    
  numbers.forEach( n => { console.log(n, n*n); } );
```

## Identify each party required to fulfill this web request
http://www.cats.com/gallery.html
 - A gallery of 15 pictures from different sources shows up on screen
 - A button is given that when clicked will bring in 15 more.
 
 
## What's the difference between these event listeners? 
## How would you implement each of them?
## Make the case for "why" you might choose one over the other
```
  <nav>
    <ul>
       <li><a href="/home">Home</a></li>
       <li><a href="/shop">Shop for Stuff</a></li>
       <li><a href="/about">About</a></li>
    </ul>
  </nav>
  
  $('ul').on('click', function(e) { ... })
  $('ul').on('click', 'a', function(e) { ... })
  $('ul').on('click', 'li', function(e) { ... })
```

## What is this snippet of code doing?
```
  let author = $('input[name=author]').val();
  let website = $('input[name=website]').val();
  
  let post = {
    author: author,
    website: website,
  }
```

## For the snippet above, can you suggest a more DRY approach?

## Wha?
```
  let a = n => n<0 ? 0+-n : n;
  
  console.log(a(-12));
  console.log(a(15));
  console.log(a(0));
```
