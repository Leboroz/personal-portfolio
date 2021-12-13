window.onload = function () {
  let hamburgerMenu = document.querySelector('#hamburger');
  let menu = document.querySelector('#menu');
  let closeMenu = document.querySelector('#closeMenu');
  let closeNavLink = document.querySelectorAll('li.nav-link a');
  let openAndClose = function () {
    menu.classList.toggle('visible-menu');
  }
  console.log(closeNavLink);
  hamburgerMenu.addEventListener('click', openAndClose);
  closeMenu.addEventListener('click', openAndClose);
  closeNavLink.forEach(element => {
    element.addEventListener('click', openAndClose);
  });
}