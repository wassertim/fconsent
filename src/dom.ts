const cmpContainerIds = [
    'sp_message_container_',
    'consentBanner',
    'gdpr-banner',
    'usercentrics-root'
];
const cmpContainerClasses = [
    'truste_overlay',
    'truste_box_overlay'
];

const cmpContainerSelectors = cmpContainerIds.map(e => `[id*="${e}"]`).join(', ');
const cmpContainerSelectors2 = cmpContainerClasses.map(e => `.${e}`).join(', ');
const selector = cmpContainerSelectors + ', ' + cmpContainerSelectors2;

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