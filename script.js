let navHTML =
  '<div class="header-container">' +
    '<h1>' + 'bee wertheimer' + '</h1>' +
    '<a href="https://beewertheimer.com">' + 'published work' + '</a>' +
    '<a href="https://beewertheimer.com/blog">' + 'blog' + '</a>' +
    '<a href="https://beewertheimer.com/games">' + 'games' + '</a>' +
    '<a href="https://beewertheimer.com/art">' + 'art' + '</a>' +
    '<a href="https://beewertheimer.com/about">' + 'about' + '</a>' +
  '</div>';

  if (document.getElementById("nav")) {
  document.getElementById("nav").innerHTML = navHTML;
}

let footerHTML =
   '<div class="footer-container">' +
    '<a href="mailto:beewertheimer@gmail.com" target="_blank">email</a>' +
'<a href="https://bsky.app/profile/beewertheimer.com" target="_blank">bluesky</a>' +
'<a href="https://www.linkedin.com/in/beewertheimer/" target="_blank">linkedin</a>';

  if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}