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

/* Global variables for  populating the menu */
const navList = document.querySelector('.nav-links');
const sectionNames = document.querySelectorAll('section');

/* Global variables for finding if something is onscreen */
const mySection = document.querySelector('section');
const myRectangle = mySection.getBoundingClientRect();

/* Function to return the screen to the top on refresh. Source: Stack Overflow */
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

/* Helper function to determine if an element is in  the viewport */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
  );
}

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

/* Adding the active-class to the focused section */

document.addEventListener('scroll', function () {
  const active = isInViewport(mySection) ?
  mySection.classList.add('active-class') : mySection.classList.remove('active-class');
}, {
  passive: true
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active