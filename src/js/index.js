import mobileNav from './modules/mobile-nav.js';
mobileNav();

function scrollToSection(id) {
   const element = document.getElementById(id);
   element.scrollIntoView({ behavior: "smooth" });
}
scrollToSection()
