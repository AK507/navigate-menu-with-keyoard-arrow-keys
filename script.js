/*First, you need to get a reference to the div element that contains the anchor tags. 
You can do this using the document.getElementById() function:*/
var containerDiv = document.getElementById("site-header");

/*Next, you can use the querySelectorAll() function to get a list of all the anchor tags 
within the div:*/
var anchorTags = containerDiv.querySelectorAll("a");

//Then, you can use the addEventListener() function to listen for keydown events on the container div. In the event handler function, you can use the keyCode property of the event object to determine which arrow key was pressed:
containerDiv.addEventListener("keydown", function(event) {
  
  //var currentIndex = anchorTags.indexOf(document.activeElement);
  /*To move focus to the previous or next anchor tag, you can use the focus() function 
  and the length property of the anchorTags array:*/
  var currentIndex = Array.prototype.indexOf.call(anchorTags, document.activeElement);
  if (event.keyCode === 37 || event.keyCode === 38) { // left or up arrow key
    if (currentIndex > 0) {
      console.log(currentIndex - 1);
      if(currentIndex == 72) {
        currentIndex = currentIndex - ($("#nav-Shop a").length - 1);
      }
      anchorTags[currentIndex - 1].focus();
    }
  } else if (event.keyCode === 39 || event.keyCode === 40) { // right or down arrow key
    if (currentIndex < anchorTags.length - 1) {
      anchorTags[currentIndex + 1].focus();
      console.log(currentIndex + 1);
    }
  }
  
  /*Finally, you can use the preventDefault() function to prevent the default behavior of 
  the arrow keys (scrolling the page) when they are used to navigate focus within the 
  container div:*/
  //event.preventDefault();
});
