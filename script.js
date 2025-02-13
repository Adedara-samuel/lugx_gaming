/*==================== scroll section active link ====================*/
let menuBar = document.querySelector('#menu-bar');
let nav = document.querySelector('nav');

menubar.onClick = () => {
  menuBar.classList.toggle(' fa-x');
  nav.classList.toggle('active');
};


/*==================== scroll section active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};
<i class="fa-solid fa-x"></i>