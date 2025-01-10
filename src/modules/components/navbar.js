export const navbar = document.createElement('header');
navbar.className = 'toolbar';
navbar.innerHTML = `
<div class="toolbar-image" ></div>
<div class="icon-wrapper"><i id="hamburger" class="fas fa-bars"></i></div>
<nav id="menu" class="nav-bar">
  <div class="top-section">
    <div class="nav-bar-mobile-top"></div>
    <span id="closeMenu" class="close-button">
     <i id="closeMenu" class="fas fa-times-circle"></i>
    </span>
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
