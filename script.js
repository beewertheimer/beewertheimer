let navHTML =
  '<div class="sidenav">' +
      '<a href="https://beewertheimer.com">' +
       '<title-text>' +
          '<u>bee</u>'+ '<br>' +
          'wertheimer'+
        '</title-text>'+
      '</a>'+
      '<br>' + '<br>'+
      '<a href="https://beewertheimer.com">' + '<menu-text>articles</menu-text>' + '</a>' + '<br>' +
      '<a href="https://beewertheimer.com/blog">' + '<menu-text>blog</menu-text>' + '</a>' +
      '<br>' +
      '<a href="https://beewertheimer.com/games">' +
        '<menu-text>games</menu-text>' + '</a>' + '<br>' +
      '<a href="https://beewertheimer.com/about">' +
        '<menu-text>about</menu-text>' +
     '</a>' +
    '</div>';

  //let footerHTML =
  //;

  let fontselectionHTML = 
'<link rel="preconnect" href="https://fonts.googleapis.com">' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
'<link href="https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">';

  if (document.getElementById("nav")) {
  document.getElementById("nav").innerHTML = navHTML;
}

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

if (document.getElementById("fontselection")) {
  document.getElementById("fontselection").innerHTML = fontselectionHTML;
}