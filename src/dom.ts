const selector = [
    '.truste_overlay',
    '.truste_box_overlay',
    '[class*="cookie-consent-CookieConsent-bottomSheet"]', 
    '[data-qa="bottom-sheet-dimmer"]', 
    '[aria-labelledby="overlay content"]',
    '[data-qa="pop-up-window-dimmer"]',
    '[id*="sp_message_container_"]',
    '[id*="consentBanner"]',
    '[id*="gdpr-banner"]',
    '[id*="usercentrics-root"]'
].join(', ');

export function removeCmp(cmpElements: NodeListOf<Element>) {
    if (cmpElements.length > 0) {
        cmpElements.forEach(e => e.remove());

        return true;
    }

    return false;
}

export function getCmpElements() {
    return document.querySelectorAll(selector);
}

export function observeForCMP(fn: (elements: NodeListOf<Element>) => void) {
    const body = document.querySelector('body');
    if (!body) {
        return;
    }
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
            const cmpElements = getCmpElements();
            if (cmpElements.length > 0) {
                fn(cmpElements);
                observer.disconnect();
            }
        });
    });
    observer.observe(body, {
        childList: true,
        subtree: true
    });
}