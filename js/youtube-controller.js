'use strict';

function renderVideoAndList(videoArray) {
    const elAside = document.querySelector('aside')
    const elVideoIframe = document.querySelector('.youtube-vid iframe')
    let strHTMLs = videoArray.items.map(video => {
        return `
            <div class="${video.id.videoId} vid" onclick="onChangeYoutubeVidSrc('${video.id.videoId}')">
            <img src="${video.snippet.thumbnails.default.url}">
            <p>${video.snippet.title}</p>
            </div>
        `
    })
    elAside.innerHTML = strHTMLs.join('')
    elVideoIframe.src = `https://www.youtube.com/embed/${videoArray.items[0].id.videoId}`

}

function onChangeYoutubeVidSrc(srcLink) {
    let elVideoIframe = document.querySelector('.youtube-vid iframe')
    elVideoIframe.src = `https://www.youtube.com/embed/${srcLink}`
}