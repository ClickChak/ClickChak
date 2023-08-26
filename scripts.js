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
// Autoscroll function
function autoScroll() {
  const scrollStep = 5; // Number of pixels to scroll in each step
  const scrollInterval = 10; // Milliseconds between each scroll step

  const scrollIntervalId = setInterval(function() {
    window.scrollBy(0, scrollStep);

    // Check if we've reached the bottom of the page
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      clearInterval(scrollIntervalId);
    }
  }, scrollInterval);
}

// Start autoscrolling when the page loads
window.addEventListener('load', autoScroll);

document.addEventListener('DOMContentLoaded', function () {
    const autoClickBtn = document.querySelector('.auto-click-btn');
    const blankArea = document.querySelector('.blank-area');

    let autoClickEnabled = false;

    autoClickBtn.addEventListener('click', function () {
        autoClickEnabled = !autoClickEnabled;

        if (autoClickEnabled) {
            autoClickBtn.textContent = 'Disable Auto-Click';
            autoClick();
        } else {
            autoClickBtn.textContent = 'Enable Auto-Click';
        }
    });

    function autoClick() {
        if (autoClickEnabled) {
            const newTab = window.open('https://www.advertiser.com/popunder-ad', '_blank');
            newTab.blur();
            window.focus();
            
            setTimeout(autoClick, 3000); // Click every 3 seconds (adjust as needed)
        }
    }
});

