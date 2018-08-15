// Ensure that the full document has been downloaded, rendered, and the "DOM" has been created before you try and mess with it.
// "document ready" is a jQuery wrapper pattern that we use to ensure that this is the case

// Note that all of this DOM manipulation in the code below happens only in the browser.
// Although it'll appear as though we're changing words and stuff, it's only visual.  On the server,
// the actual code will remain as-is.

// jQuery's core strength is to have fun in the browser and make things dynamic, but not permanent.

$(document).ready(function() {

  // All jQuery is, is a function (called $).
  // It takes a parameter (a selector)
  // It then calls one or more methods, each of which gets the element(s) that matched the selector as input
  // Within them, you reference the active element as $(this)

  $('li:first').text() // returns the text of the targeted element ... this is a "Getter"
  $('li:first').html() // returns the markup of the targeted element ... this is a "Getter"

  $('li:first').text('Fred'); // change the text of the first bullet to "Fred" ... this is a "Setter"
  $('li:first').html('<strong>Barney</strong>'); // Inject markup instead of raw text ... this is a "Setter"

  $('ul').on('click', function() { $(this).toggleClass('active'); });

  // Make a copy of an element ... and append it to another one
  $('ul').clone(true).attr('id', '').appendTo( $('main') );

  // Iterate over elements ...
  $('li').each(function() {
    // $(this) is the current li as we loop over them all
    $(this).text('Poof');
  });

  $('li').each(function() {
    // This time, we'll change the wording to the value of the data-role attribute
    $(this).text( $(this).data('role') );
  });

});