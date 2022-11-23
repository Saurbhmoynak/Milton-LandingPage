const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

let bool = true;
toggleBtn.addEventListener('click', () => {
  if (bool === true) {
    img.src = "./black.png";

    toggleText.forEach(text => {
      text.innerText = "MILTON";
    });

    bool = false;
  } else {
    img.src = "./orange.png";

    toggleText.forEach(text => {
      text.innerText = "MILTON";
    });

    bool = true;
  }

  document.body.classList.toggle('light-theme');

  toggleBtn.firstElementChild.classList.toggle('fa-sun');
});