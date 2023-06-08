export const contact = document.createElement('section');
contact.id = 'Contact';
contact.className = 'contact-form margin-top';
contact.innerHTML = `<div class="contact-mobile-image"></div>
<div class="content margin-x">
  <h2 class="display-1">Get started</h2>
  <p class="par">Let's work together or just say hello!</p>
  <form id="form" class="form" action="https://formspree.io/f/xqkwnwrj" method="post">
    <ul>
      <li class="field-wrapper">
        <label for="name">
          Your name
        </label>
        <input id="name" class="name form-field" type="text" name="name" placeholder="name" maxlength="30" required>
      </li>
      <li class="field-wrapper">
        <label for="email">
          Your email
        </label>
        <input id="email" class="email form-field" type="email" name="email" placeholder="email" required>
      </li>
      <li>
        <textarea id="message" class="textarea form-field" name="textarea" cols="30" rows="10" maxlength="500"
          placeholder="Enter your message here..." required></textarea>
      </li>
    </ul>
    <input class="btn" type="submit" value="Start collaboration">
  </form>
</div>
<div class="contact-image contact-image-1"></div>
<div class="contact-image contact-image-2"></div>`
