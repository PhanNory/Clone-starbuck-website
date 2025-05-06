// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuNav = document.querySelector('.navbar-nav-right');
const menuBrand = document.querySelector('.navbar-brand');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('open');
        menu.classList.add('active');
        
        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('active');
        
        // Set menu state
        showMenu = false;
    }
}



// Scroll event for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});





// MixxitUp 3 link js
const containerEl = document.querySelector('.mix-active');
var mixer = mixitup(containerEl, {
    animation: {
        enable : false,
    }
});

// Add scroll next btn

const scrollCard = document.querySelector('.card-conatiner');
const nextScroll = document.querySelector('#nextScroll');

scrollCard.addEventListener('wheel', (evt) =>{
   evt.preventDefault();
   scrollCard.scrollLeft += evt.deltaY;
});
nextScroll.addEventListener('click', () => {
    scrollCard.scrollLeft += 900;
});



