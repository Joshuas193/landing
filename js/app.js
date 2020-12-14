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

/* Function to return the screen to the top on refresh. Source: Stack Overflow */
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

/* Global variables for  populating the menu */
const navList = document.querySelector('.nav-links');
const sectionNames = document.querySelectorAll('section');

/* Function I created to iterate through all sections and display their data-nav value as the link in the nav-bar */
function buildNav() {
  for (const sectionName of sectionNames) {
    const list = document.createElement('li');
    const addedHtml = `<a href="#${sectionName.id}">${sectionName.dataset.nav}</a>`;
    navList.appendChild(list);
    list.insertAdjacentHTML("afterbegin", addedHtml);
  }
}
/* Calling the function I built */
buildNav();

/* Adding the active-class to the focused section
document.querySelector('a[href*=section]').onclick = function () {
  let anchorId = document.querySelector('a[href*=section]').value;
  let sectionId = document.querySelector('[id^=section]').id;
  console.log(anchorId);
  console.log(sectionId);
}  */

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active