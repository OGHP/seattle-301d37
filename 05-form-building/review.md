# Let's Review ...

#### How else can I write this?
```
    $(this).attr('data-category')
```

#### What's wrong with $(this)
```
    $('a').on('click', (event) => {
        $(this).hide();
    });
```

#### What's wrong with this?
```
    $('section a').on('click', (event) => {
        $('section').find('span').hide();
    });
```

#### What is V8?


#### How could I refactor this to use a parameterized/DRY function?
```
    let arr = [1,2,3,4,5];
    arr.forEach( (val,i) => {
        console.log(val*val);
    })
```

#### Describe the CSS pattern you'd use to make this burger menu work.
```
    <nav>
       <input id="foo" type="checkbox">
       <label for="foo">
            <hr /><hr /><hr />
       </label>
       <ul>
         <li>one</li>
         <li>two</li>
         <li>three</li>
       </ul>
```