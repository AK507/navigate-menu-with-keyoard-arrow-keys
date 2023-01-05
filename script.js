var containerDiv = document.getElementById("site-header");
var anchorTags = containerDiv.querySelectorAll("a");

containerDiv.addEventListener("keydown", function(event) {
  //var currentIndex = anchorTags.indexOf(document.activeElement);
  var currentIndex = Array.prototype.indexOf.call(anchorTags, document.activeElement);
  console.log(event.keyCode);
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
  //event.preventDefault();
});
