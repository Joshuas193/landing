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
const sectionNames = document.querySelectorAll('section[id*="section"]');

/* Function to return the screen to the top on refresh. Source: Stack Overflow */
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

/* Function I created to iterate through all sections and display their data-nav value as the a link in the nav-bar */
function buildNav() {
  for (const sectionName of sectionNames) {
    let list = document.createElement('li');
    let addedHtml = `<a href="#${sectionName.dataset.nav}">${sectionName.dataset.nav}</a>`;
    navList.appendChild(list);
    list.insertAdjacentHTML("afterbegin", addedHtml);
  }
}
/* Calling the function I built */
buildNav();


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active