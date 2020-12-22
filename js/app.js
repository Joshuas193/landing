/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

// Global variables
const navList = document.querySelector('.nav-links');
const sectionNames = document.querySelectorAll('section');

// Function to return the screen to the top on refresh
window.onbeforeunload = () => {
  window.scrollTo(0,0);
};

/* This function will hide the navbar on scroll down and show it on scroll up.
   It also shows the back to top button if scrolled down far enough */
let prevPosition = window.pageYOffset;
window.onscroll = () => {
  let newPosition = window.pageYOffset;
    (prevPosition > newPosition) ? document.querySelector('.nav-header').style.top = '0' :
                                   document.querySelector('.nav-header').style.top = '-200px';
      prevPosition = newPosition;
    (newPosition > 1500) ? document.getElementById('up-top').style.display = 'block' :
                           document.getElementById('up-top').style.display = 'none';
};

// Helper function to determine if an element is in the viewport
isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= -200 &&
      rect.top < 250 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight + 100) &&
      rect.right <= window.innerWidth
  );
}

// Helper function Creating a disapearing NavBar effect
timeOut = () => {
  document.querySelector('.nav-header').style.top = '-200px';
}

// Helper function creating Smooth scrolling and offset top features
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offset = document.querySelector(href).offsetTop;
  scroll({
    top: (offset - 50),
    behavior: 'smooth'
  });
  setTimeout(timeOut, 1200);
}

// Function I created to iterate through all sections and display their data-nav value as the link in the nav-bar
buildNav = () => {
  for (const sectionName of sectionNames) {
    const list = document.createElement('li');
    const addedHtml = `<a href="#${sectionName.id}">${sectionName.dataset.nav}</a>`;
    navList.appendChild(list);
    list.insertAdjacentHTML('afterbegin', addedHtml);
  }
};
buildNav();

// function for the links event listener after the navbar is populated
linkListener = () => {
  const links = document.querySelectorAll('.nav-links li a');
  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }};
linkListener();

//  Adding the active-class to the in-view section
viewedSection = () => {
  for (const sectionName of sectionNames) {
    document.addEventListener('scroll', () => {
      isInViewport(sectionName) ? sectionName.classList.add('active-class') :
        sectionName.classList.remove('active-class');
      }, {
    passive: true
  });
}};
viewedSection();

/* This function makes the nav-bar visible again when back to top clicked
   and it sets the position and smooth scrolling going bak to the top */
backToTop = () => {
  const upTop = document.getElementById('up-top');
  upTop.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('up-top').style.display = 'none';
    document.querySelector('.nav-header').style.top = '0';
    scroll({
      top: 0,
      behavior: 'smooth'
    });
  });
};
backToTop();