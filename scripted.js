document.addEventListener('DOMContentLoaded', function () {
    const startAutoClickBtn = document.getElementById('startAutoClick');

    let autoClickEnabled = false;

    startAutoClickBtn.addEventListener('click', function () {
        autoClickEnabled = !autoClickEnabled;

        if (autoClickEnabled) {
            startAutoClickBtn.textContent = 'Stop Auto-Click';
            observeAds();
        } else {
            startAutoClickBtn.textContent = 'Start Auto-Click';
        }
    });

    function observeAds() {
        const adContainer = document.querySelector('.ad-container');

        if (!adContainer) return;

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    const newAds = Array.from(mutation.addedNodes).filter(node => node.className === 'ad-element');
                    newAds.forEach(ad => {
                        ad.click();
                    });
                }
            });
        });

        const config = { childList: true, subtree: true };
        observer.observe(adContainer, config);
    }
});
