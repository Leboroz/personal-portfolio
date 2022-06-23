const intro = document.createElement('section');
intro.className = "intro-section margin-top"
intro.id = 'Hello'
intro.innerHTML = `<article class="content margin-x">
  <div class="main-card">
    <h1 class="display-1">Leonardo Albornoz</h1>
    <p class="par">Hello! I am a software developer! I can help you build a product, feature or website. Taka a look
      of my works. If you like what you see and have a project you need coded, don’t hesitate and contact me.</p>
    <a class="btn" href="#Contact"><span>Start collaboration</span></a>
  </div>
  <div class="dots-image"></div>
</article>
<div class="desktop-image"></div>`

export const introMobileImage = document.createElement('div');
introMobileImage.className = 'intro-mobile-image';

export default intro;
