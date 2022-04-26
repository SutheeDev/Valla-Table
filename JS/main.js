const menuBtn = document.querySelector('.menu-btn');
const navHeader = document.querySelector('.nav-header');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('openMenu');
        navHeader.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('openMenu');
        navHeader.classList.remove('open');
        menuOpen = false;
    }
});
// menuBtn.classList.toggle('openMenu');