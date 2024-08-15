// Example: Toggle dropdown menu
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.querySelector('.dropdown-content').classList.toggle('show');
    });
});
