window.onload = function () {
  let hamburgerMenu = document.querySelector('#hamburger');
  let menu = document.querySelector('#menu');
  let closeMenu = document.querySelector('#closeMenu');
  //console.log(hamburgerMenu);
  let openAndClose = function () {
    menu.classList.toggle('visible-menu');
  }
  hamburgerMenu.addEventListener('click', openAndClose);
  closeMenu.addEventListener('click', openAndClose)
}