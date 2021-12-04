'use strict';

function getWikiQuery(queryItem) {
    return axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/' + queryItem )
        .then(res => res.data)
        .catch(error => console.log(error))
}