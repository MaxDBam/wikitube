'use strict';

function getYoutubeVideoAndList(query) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyCyNkWu_YTdG3oFfbSkLa4euUbPhIR7LL4&q=${query}`)
        .then(res => res.data)
        .catch(error => console.log(error))
}
