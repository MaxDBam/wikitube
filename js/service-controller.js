'use strict';

const STORAGE_KEY = 'terms'
var gTerms;

function saveTerms(term) {
    gTerms.push(term)
    saveToStorage(STORAGE_KEY, gTerms)
}

function getTerms() {
    let searchedTerms = LoadFromStorage(STORAGE_KEY)
    if (!searchedTerms || !searchedTerms.length) {
        searchedTerms = []
    } 

    gTerms = searchedTerms
    return gTerms.join(', ')
}

function clearTerms() {
    gTerms = []
    localStorage.clear()
}
