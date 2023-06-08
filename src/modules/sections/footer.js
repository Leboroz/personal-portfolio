import img from '../../assets/images/ic_link_teal.svg'

export const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `<div class="footer-content margin-x">
  <a class="link-resume" href="#About">Get my Resume <img class="link-image" src="${img}"
      alt="linkArrow"></a>
  <ul class="links-to-social">
    <li><a class="link-to-social" href="https://stackoverflow.com/users/16168440/leboroz"><i class="fab fa-stack-overflow"></i></a></li>
    <li><a class="link-to-social" href="https://twitter.com/Leboroz"><i class="fab fa-twitter"></i></a></li>
    <li><a class="link-to-social" href="https://github.com/Leboroz"><i class="fab fa-github"></i></a></li>
    <li><a class="link-to-social" href="https://www.linkedin.com/in/leboroz/"><i class="fab fa-linkedin"></i></a></li>
    <li><a class="link-to-social" href="https://medium.com/@leboroz"><i class="fab fa-medium"></i></a></li>
    <li><a class="link-to-social" href="https://angel.co/u/leonardo-albornoz"><i class="fab fa-angellist"></i></a></li>
  </ul>
</div>`
