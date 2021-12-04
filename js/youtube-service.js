'use strict';

function getYoutubeVideoAndList(query) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyCbsa02YJnejtLQHG753XXKv5Nym0JuoJE&q=${query}`)
        .then(res => res.data)
        .catch(error => console.log(error))
}