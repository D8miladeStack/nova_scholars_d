
const navBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.site-nav .f_ul');
const navBar = document.querySelector('.site-nav');
const navItems = document.querySelectorAll('.f_ul a');
const navIcon = document.querySelector('.nav-toggle i');

const setMenuState = (isOpen) => {
    if (!navLinks || !navBtn || !navBar) return;

    navLinks.classList.toggle('active', isOpen);
    navBtn.classList.toggle('active', isOpen);
    navBar.classList.toggle('nav-open', isOpen);
    navBtn.setAttribute('aria-expanded', String(isOpen));

    if (navIcon) {
        navIcon.classList.toggle('fa-bars', !isOpen);
        navIcon.classList.toggle('fa-xmark', isOpen);
    }
};

if (navBtn && navLinks && navBar) {
    navBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        setMenuState(!navBar.classList.contains('nav-open'));
    });

    const closeMenu = () => setMenuState(false);

    navItems.forEach((item) => {
        item.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (navBar.classList.contains('nav-open') && !navBar.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

