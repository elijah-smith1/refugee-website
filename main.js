// main.js

// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

// Hide Navbar on Scroll Down
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Prevent navbar from hiding if mobile menu is open
    if (navLinks.classList.contains('open')) {
        return;
    }

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down and scrolled more than 100px
        navbar.style.top = '-80px'; // Adjust the value to match the navbar height
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
