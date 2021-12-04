'use strict';

function onInit() {
    getYoutubeVideoAndList('Tennis')
        .then(renderVideoAndList)
        .catch(error => console.log(error))

    getWikiQuery('Tennis')
        .then(renderWikiInfo)
        .catch(error => console.log(error))
}

function onGetYoutubeAndWikiQueries() {
    let elInput = document.querySelector('input[type="search"')
    getYoutubeVideoAndList(elInput.value)
        .then(renderVideoAndList)
        .catch(error => console.log(error))

    getWikiQuery(elInput.value)
        .then(renderWikiInfo)
        .catch(error => console.log(error))

    elInput.value = ''
}