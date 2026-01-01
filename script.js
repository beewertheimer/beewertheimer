filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let navHTML =  '<div class="nav-container">' +
      '<div class="nav-container-item">' +
        '<h1>|| bee wertheimer</h1>' +
        '</div>' +
          '<div class="nav-btn">' +
          '<a href="https://beewertheimer.com">PUBLICATIONS</a>' +
          '</div>' +
          '<div class="nav-btn">' +
          '<a href="https://beewertheimer.com/blog">BLOG</a>' +
          '</div>' +
          '<div class="nav-btn">' +
          '<a href="https://beewertheimer.com/games">GAMES</a>' +
          '</div>' +
          '<div class="nav-btn">' +
          '<a href="https://beewertheimer.com/art">ART</a>' +
          '</div>' +
          '<div class="nav-btn">' +
          '<a href="https://beewertheimer.com/about">ABOUT</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '</div>';

  if (document.getElementById("nav")) {
  document.getElementById("nav").innerHTML = navHTML;
}

let footerHTML =   '<div class="footer-container">' +
      '<a href="mailto:beewertheimer@gmail.com" target="_blank">' + 
      '<img src="images/email.png"/>' + '</a>' +
      '<a href="https://beewertheimer.com/resume.pdf">' + 
      '<img src="images/cv.svg">' + '</a>' +
      '<a href="https://www.linkedin.com/in/beewertheimer/" target="_blank">' + 
      '<img src="images/linkedin.png">' + 
      '</a>' +
      '<a href="https://bombylls.itch.io/" target="_blank">' + 
      '<img src="images/itchio.svg">' + '</a>' +
      '<a href="https://bsky.app/profile/beewertheimer.com" target="_blank">' + 
      '<img src="images/bluesky.png">' + '</a>' +
      '<p>this site was handmade using html, css, and javascript.' + '<br>' + 'thank you for visiting!</p>' +
    '</div>';
  

  if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

