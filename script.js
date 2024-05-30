let valueDisplays = document.querySelectorAll(".statistics_num");
let interval = 500;
let totop = document.querySelector(".to-top");
let header = document.querySelector(".header");
let loadingContainer = document.querySelector('.loading');

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.innerHTML = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    totop.style.display = "flex";
    header.classList.add = "active";
  } else {
    totop.style.display = "none";
    header.classList.remove
      = "active";
  }
}

totop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loadingContainer.style.display = "none"
  }, 2000)
})

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open_btn');
  const closeBtn = document.querySelector('.close_btn');
  const headerMenu = document.querySelector('.header-menu');

  openBtn.addEventListener('click', () => {
    headerMenu.classList.add('active');
  });
  closeBtn.addEventListener('click', () => {
    headerMenu.classList.remove('active');
  });
});

$(document).ready(function() {
  $('.hl-btn').click(function() {
    var url = $(this).data('url');
    window.location.href = url;
  });
});



