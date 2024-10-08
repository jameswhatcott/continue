// Example: Toggle dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

