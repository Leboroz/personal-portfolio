const navbar = document.createElement('header');
navbar.className = 'toolbar';
navbar.innerHTML = `<img class="toolbar-image" src="./src/assets/images/IntroSection/toolbar_mobile_img.png" alt="toolbar image">
<div class="icon-wrapper"><i id="hamburger" class="fas fa-bars"></i></div>
<nav id="menu" class="nav-bar">
  <div class="top-section">
    <div class="nav-bar-mobile-top"></div>
    <span id="closeMenu" class="close-button">X</span>
  </div>
  <ul class="nav-links">
    <li class="nav-link"><a href="#Hello">Hello</a></li>
    <li class="nav-link"><a href="#Portfolio">Portfolio</a></li>
    <li class="nav-link"><a href="#About">About</a></li>
    <li class="nav-link"><a href="#Contact">Contact</a></li>
    <li>
      <label id="night" class="dark">
        <input type="checkbox">
        <span class="slider">
          <i class="far fa-sun"></i>
          <i class="far fa-moon"></i>
        </span>
      </label>
    </li>
  </ul>
  <div class="nav-bar-mobile-bottom"></div>
</nav>
`

export default navbar;
