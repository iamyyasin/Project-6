//! Dark Mode and Light Mode
const darkBtn = document.getElementById('return-btn');
const items = document.querySelectorAll('header,body,#return-btn,.normal-links,#welcome,#what-sec,figure,#last-projects');

darkBtn.addEventListener('click', darkMode);

function darkMode() {
    items.forEach((item) => item.classList.toggle('active'));
};

//! Big Picture and Small Picture
const bgSmPicture = document.getElementById("last-projects");
const bigSmIcon = document.querySelectorAll(".big-picture");

bigSmIcon.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const figure = e.target.closest("figure");
    figure.classList.toggle("clicks");
  })
);
