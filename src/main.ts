import { removeCmp, observeForCMP, getCmpElements } from './dom.js';

const ignoreList = ['local.auspreiser.de'];

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