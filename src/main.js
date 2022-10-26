import { removeCmp, observeForCMP, getCmpElements } from './dom.js';

const ignoreList = ['local.auspreiser.de'];

function removeSearchElementTopMargin() {
    const searchElement = document.querySelector('#search');
    if (!searchElement) {
        return;
    }
    searchElement.style.marginTop = '0px';
}

export function main() {
    if (ignoreList.includes(window.location.hostname)) {
        return;
    }    
    const cmpElements = getCmpElements();
    if (cmpElements.length > 0) {
        removeCmp(cmpElements);
    } else {
        observeForCMP(removeCmp);
    }
}