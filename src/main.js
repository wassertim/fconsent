import { removeCmp, observeForCMP, getCmpElements } from './dom.js';

function fixGoogle() {
    const containerLayer = document.querySelectorAll('#container_layer, #tads');
    if (!containerLayer) {
        return;
    }
    containerLayer.forEach(e => e.remove());
    removeSearchElementTopMargin();
}

function removeSearchElementTopMargin() {
    const searchElement = document.querySelector('#search');
    if (!searchElement) {
        return;
    }
    searchElement.style.marginTop = '0px';
}

export function main() {
    fixGoogle();
    const cmpElements = getCmpElements();
    if (cmpElements.length > 0) {
        removeCmp(cmpElements);
    } else {
        observeForCMP(removeCmp);
    }
}