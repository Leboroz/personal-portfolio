window.onload = function () {
  const hamburgerMenu = document.querySelector('#hamburger');
  const menu = document.querySelector('#menu');
  const closeMenu = document.querySelector('#closeMenu');
  const closeNavLink = document.querySelectorAll('li.nav-link a');
  const openAndClose = function () {
    menu.classList.toggle('visible-menu');
  };
  hamburgerMenu.addEventListener('click', openAndClose);
  closeMenu.addEventListener('click', openAndClose);
  closeNavLink.forEach((element) => {
    element.addEventListener('click', openAndClose);
  });
};