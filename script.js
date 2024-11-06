
const toggleIcon = document.querySelector('.toggle-icon');
const body = document.body;

toggleIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleIcon.classList.toggle('bx-sun');
});
