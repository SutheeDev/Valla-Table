// Menu Button
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

// Email SignUp Modal
const signupBtn = document.getElementById('signupBtn');
const closeSignUpBtn = document.getElementById('closeSignUpBtn');
const modalContainer = document.querySelector('.modal-container');

signupBtn.addEventListener('click', () => {
    modalContainer.classList.add('open-modal');
});
closeSignUpBtn.addEventListener('click', () => {
    modalContainer.classList.remove('open-modal');
});

// inView
// inView('.header')
//     .on('enter', doSomething)
//     .on('exit', el => {
//         el.style.opacity = 0.5;
//     });
// inView.threshold(0.5);