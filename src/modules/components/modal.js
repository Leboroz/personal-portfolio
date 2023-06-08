export const modal = document.createElement('div');

modal.innerHTML = `
  <article id="modal" class="modal-container">
    <div id="modal_body" class="modal">
      <figure class="image-wrap">
        <img class="modal-image" id="image" src="" alt="">
      </figure>
      <div class="modal-body">
        <div class="top">
          <h1 id="title" class="display-2"></h1>
          <i id="close_modal" class="fas fa-times-circle display-2 close-modal"></i>
        </div>
        <ul id="languages" class="modal-languages">

        </ul>
          <p id="description" class="par"></p>
          <div class="go-to-wrapper">
            <a id="seeLive" href="" class="btn btn-secondary">See live<i class="fas fa-external-link-alt"></i></a>
            <a id="seeSource" href="" class="btn btn-secondary">See source<i class="fab fa-github"></i></a>
          </div>
          <div class="slider-wrapper">
            <button id="previous_project" class="slide"><i class="fas fa-long-arrow-alt-left"></i>Previous project</button>
            <button id="next_project" class="slide">Next project<i class="fas fa-long-arrow-alt-right"></i></button>
          </div>
      </div>
    </div>
  </article>
  `

