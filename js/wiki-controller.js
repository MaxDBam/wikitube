'use strict';

function renderWikiInfo(wikiTermDesc) {
    const elWikiP = document.querySelector('.wiki-desc p')
    
    elWikiP.innerText = wikiTermDesc.extract
}