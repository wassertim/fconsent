const cmpContainerIds = [
    'sp_message_container_',
    'consentBanner',
    'gdpr-banner'
];
const cmpContainerClasses = [
    'truste_overlay',
    'truste_box_overlay'
];

const cmpContainerSelectors = cmpContainerIds.map(e => `[id*="${e}"]`).join(', ');
const cmpContainerSelectors2 = cmpContainerClasses.map(e => `.${e}`).join(', ');
const selector = cmpContainerSelectors + ', ' + cmpContainerSelectors2;

export function removeCmp(cmpElements) {    
    if (cmpElements.length > 0) {
        cmpElements.forEach(e => e.remove());

        return true;
    }

    return false;
}

export function getCmpElements() {
    return document.querySelectorAll(selector);
}

export function observeForCMP(fn) {
    const body = document.querySelector('body');
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