/*#####################
HAMBURGER MENU
#####################*/

/*
hamburger menu script to:
  - animate the hamburger menu to a cross or back to a hamburger menu
  - hide or show the navigation on small screen sizes
*/

HamburgerMenu = {
  // targeting the hamburger menu
  getHamburger: document.getElementById("hamburger-menu"),
  // targeting the header
  getHeader: document.getElementById("header"),

  // method to animate the hamburger menu and show the nav
  toggleNav: function() {
    this.getHeader.classList.toggle("active");
  }
};

// event listener for when the user clicks the hamburger menu
HamburgerMenu.getHamburger.addEventListener("click", function(){HamburgerMenu.toggleNav()});
