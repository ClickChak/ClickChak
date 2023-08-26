document.addEventListener('DOMContentLoaded', function () {
    const autoClickBtn = document.querySelector('.auto-click-btn');
    const adElements = document.querySelectorAll('.ad-element');

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
            if (currentAdIndex < adElements.length) {
                const adElement = adElements[currentAdIndex];
                adElement.click();
                currentAdIndex++;
                setTimeout(autoClick, 3000); // Click every 3 seconds (adjust as needed)
            } else {
                autoClickEnabled = false;
                autoClickBtn.textContent = 'Enable Auto-Click';
            }
        }
    }
});
