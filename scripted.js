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
