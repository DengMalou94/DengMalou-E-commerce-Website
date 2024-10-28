const menuBar = document.querySelector('.menu-bar');
const navLinks = document.querySelector('nav ul');
    
    menuBar.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });