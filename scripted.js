document.addEventListener('DOMContentLoaded', function () {
    const autoClickBtn = document.querySelector('.auto-click-btn');
    const adsContainer = document.querySelector('.ads-container');
    const adLinks = adsContainer.querySelectorAll('.ad-link');

    let autoClickEnabled = false;
    let currentAdIndex = 0;

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
            if (currentAdIndex < adLinks.length) {
                const adLink = adLinks[currentAdIndex];
                adLink.click();
                currentAdIndex++;
                setTimeout(autoClick, 3000); // Click every 3 seconds (adjust as needed)
            } else {
                autoClickEnabled = false;
                autoClickBtn.textContent = 'Enable Auto-Click';
            }
        }
    }
});
