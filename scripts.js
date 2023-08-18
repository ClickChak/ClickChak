const toggleButton = document.querySelector('.vertical-nav-toggle');
const verticalNav = document.querySelector('.vertical-nav');

toggleButton.addEventListener('click', () => {
    verticalNav.classList.toggle('active');
});
// Close the vertical navigation when clicking outside of it
document.addEventListener('click', (event) => {
    if (!verticalNav.contains(event.target) && !toggleButton.contains(event.target)) {
        verticalNav.classList.remove('active');
    }
});