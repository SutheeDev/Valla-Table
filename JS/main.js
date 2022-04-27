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

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const holder = document.querySelector('.slide-holder');
const slideImg = document.querySelectorAll('.slide-holder div');

let count = 1;
moveSlide();

function moveSlide(){
    let vwUnit = -100 * count;
    holder.style.transform = 'translateX(' + vwUnit + 'vw)';
};

const autoMove = setInterval(() => {
    holder.style.transition = 'all 1s ease';
    count++;
    moveSlide();
}, 5000);

nextBtn.addEventListener('click', () => {
    if (count >= (slideImg.length -1)) return;
    clearInterval(autoMove);
    holder.style.transition = 'all 0.5s ease';
    count++;
    moveSlide();
});
prevBtn.addEventListener('click', () => {
    if (count <= 0) return;
    clearInterval(autoMove);
    holder.style.transition = 'all 0.5s ease';
    count--;
    moveSlide();
});

holder.addEventListener('transitionend', () => {
    if (slideImg[count].id === 'firstClone') {
        holder.style.transition = 'none';
        count = slideImg.length - count;
        moveSlide();
    } else if (slideImg[count].id === 'lastClone') {
        holder.style.transition = 'none';
        count = slideImg.length - 2;
        moveSlide();
    }
});

