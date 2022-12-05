import { removeCmp, observeForCMP, getCmpElements } from './dom.js';

export function main() {
    const cmpElements = getCmpElements();
    if (cmpElements.length > 0) {
        removeCmp(cmpElements);
    } else {
        observeForCMP(removeCmp);
    }
}