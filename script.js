/**
 * PERSONAL PORTFOLIO - INTERACTIVE FUNCTIONALITY
 * 
 * Author: Anas Khalid
 * Description: JavaScript functionality for portfolio website
 * Features: 
 *   - Responsive sidebar toggle
 *   - Testimonials modal system
 *   - Portfolio filtering
 *   - Page navigation
 *   - Contact form validation
 * 
 * Dependencies: Ion Icons (for icon display)
 * Browser Support: Modern browsers with ES6+ support
 */

'use strict';

/*-----------------------------------*\
  #UTILITY FUNCTIONS
\*-----------------------------------*/

/**
 * Toggle the 'active' class on any element
 * @param {HTMLElement} elem - The element to toggle
 * @description Reusable function for showing/hiding elements
 */
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

/*-----------------------------------*\
  #SIDEBAR FUNCTIONALITY
  Mobile-responsive sidebar toggle system
\*-----------------------------------*/

// Get sidebar elements from DOM
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

/**
 * Sidebar toggle functionality for mobile devices
 * Expands/collapses the contact information panel
 */
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

/*-----------------------------------*\
  #TESTIMONIALS MODAL SYSTEM
  Interactive modal for displaying client testimonials
\*-----------------------------------*/

// Get all testimonial-related elements
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal content elements for dynamic updates
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

/**
 * Toggle the testimonials modal visibility
 * @description Shows/hides the modal and overlay
 */
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

/**
 * Add click event listeners to all testimonial items
 * @description Each testimonial card opens a modal with detailed content
 */
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    // Extract data from clicked testimonial card
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    // Display the modal
    testimonialsModalFunc();

  });

}

/**
 * Modal close functionality
 * @description Close modal when clicking close button or overlay
 */
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

/*-----------------------------------*\
  #PORTFOLIO FILTERING SYSTEM
  Dynamic content filtering for project showcase
\*-----------------------------------*/

// Get filter-related elements
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

/**
 * Toggle dropdown select menu (mobile)
 * @description Opens/closes the filter dropdown on mobile devices
 */
select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

/**
 * Handle dropdown item selection (mobile)
 * @description Updates filter when selecting from dropdown menu
 */
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// Get all filterable portfolio items
const filterItems = document.querySelectorAll("[data-filter-item]");

/**
 * Filter portfolio items based on category
 * @param {string} selectedValue - The category to filter by ('all', 'web design', etc.)
 * @description Shows/hides portfolio items based on their data-category attribute
 */
const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      // Show all items when 'all' is selected
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      // Show items matching the selected category
      filterItems[i].classList.add("active");
    } else {
      // Hide items that don't match
      filterItems[i].classList.remove("active");
    }

  }

}

/**
 * Filter button functionality for desktop
 * @description Handles filter button clicks on larger screens
 */
let lastClickedBtn = filterBtn[0]; // Track the currently active button

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    // Update active button styling
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


/*-----------------------------------*\
  #CONTACT FORM VALIDATION
  Real-time form validation and submit control
\*-----------------------------------*/

// Get form elements
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

/**
 * Form validation system
 * @description Enables/disables submit button based on form validity
 * Runs on every input change to provide real-time feedback
 */
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // Check if all required fields are filled and valid
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");  // Enable submit button
    } else {
      formBtn.setAttribute("disabled", ""); // Disable submit button
    }

  });
}

/*-----------------------------------*\
  #PAGE NAVIGATION SYSTEM
  Single-page application navigation
\*-----------------------------------*/

// Get navigation elements
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/**
 * Page navigation functionality
 * @description Switches between different sections (About, Resume, Portfolio, etc.)
 * Creates smooth single-page application experience
 */
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Loop through all pages and navigation links
    for (let i = 0; i < pages.length; i++) {
      
      // Check if clicked nav item matches the page
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        // Show the matching page and highlight the nav item
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0); // Scroll to top when switching pages
      } else {
        // Hide other pages and remove highlight from other nav items
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

/*-----------------------------------*\
  #PERFORMANCE OPTIMIZATIONS
  
  Additional enhancements for better user experience:
  
  1. Smooth scrolling is handled by CSS scroll-behavior
  2. Image lazy loading is implemented in HTML with loading="lazy"
  3. Transitions and animations are GPU-accelerated via CSS
  4. Event delegation could be implemented for better performance
     with large numbers of similar elements
  
  Future enhancements:
  - Implement intersection observer for scroll animations
  - Add keyboard navigation support
  - Include focus management for better accessibility
  - Add preloader for smoother initial page load
\*-----------------------------------*/