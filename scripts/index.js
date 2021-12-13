window.onload = function (){
  let hamburgerMenu = document.querySelector('#hamburger');
  let menu = document.querySelector('#menu');
  //console.log(hamburgerMenu);
  hamburgerMenu.addEventListener('click',function(e){
    menu.classList.add('visible-menu');
  });
}