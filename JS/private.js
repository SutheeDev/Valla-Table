const eventModalContainer = document.querySelector('.event-modal-container');
const inquireBtn = document.getElementById('inquireBtn');
const closeEventBtn = document.getElementById('closeEventBtn');

inquireBtn.addEventListener('click', () => {
    eventModalContainer.classList.add('open-eventform');
});

closeEventBtn.addEventListener('click', () => {
    eventModalContainer.classList.remove('open-eventform');
});