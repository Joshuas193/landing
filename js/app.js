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

/* Global variables */
const navList = document.querySelector('.nav-links');
const sectionNames = document.querySelectorAll('section');

/* Function to return the screen to the top on refresh. Source: Stack Overflow */
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};
/* Function I created to iterate through all sections and display their data-nav value as the link in the nav-bar */
function buildNav() {
  for (const sectionName of sectionNames) {
    const list = document.createElement('li');
    const addedHtml = `<a href="#${sectionName.id}">${sectionName.dataset.nav}</a>`;
    navList.appendChild(list);
    list.insertAdjacentHTML('afterbegin', addedHtml);
  }
}
/* Calling the function I built */
buildNav();

// Helper function to determine if an element is in  the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= -100 &&
      rect.top < 100 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight - 50) &&
      rect.right <= window.innerWidth
  );
}

//  Adding the active-class to the focused section
for (const sectionName of sectionNames) {
  document.addEventListener('scroll', function () {
    const active = isInViewport(sectionName) ? sectionName.classList.add('active-class') :
      sectionName.classList.remove('active-class');
  }, {
    passive: true
  });
}

// declaring variable for the links listener after the  navbar is populated
const links = document.querySelectorAll('.nav-links li a');

// Scroll to anchor ID using scrollTO event
for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offset = document.querySelector(href).offsetTop;
  console.log(offset);
  scroll({
    top: (offset - 50),
    behavior: "smooth"
  });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active