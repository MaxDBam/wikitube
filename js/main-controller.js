'use strict';

function onInit() {
    getYoutubeVideoAndList('Tennis')
        .then(renderVideoAndList)
        .catch(error => console.log(error))

    getWikiQuery('Tennis')
        .then(renderWikiInfo)
        .catch(error => console.log(error))
    getTerms()
    renderSearchedTerms()
}

function onGetYoutubeAndWikiQueries() {
    let elInput = document.querySelector('input[type="search"')
    saveTerms(elInput.value)
    getYoutubeVideoAndList(elInput.value)
        .then(renderVideoAndList)
        .catch(error => console.log(error))

    getWikiQuery(elInput.value)
        .then(renderWikiInfo)
        .catch(error => console.log(error))
    renderSearchedTerms()
    elInput.value = ''
}

function renderSearchedTerms() {
    let elSearchedTermsP = document.querySelector('.searched-terms')
    elSearchedTermsP.innerText = getTerms()
}

function onRemoveHistory() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will lose the searched terms history.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                clearTerms()
                renderSearchedTerms()
                swal("Poof! Your searched terms were deleted!", {
                    icon: "success",
                })
            } else {
                swal("Your searched terms are safe")
            }
        })
}

function onChangeTheme() {
    const colorPicker = document.createElement('input')
    colorPicker.type = 'color'
    swal({
        title: "Are you sure?",
        text: "The background color will be changed.",
        icon: "warning",
        content: colorPicker,
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                document.querySelector('body').style.backgroundColor = colorPicker.value
                swal("Poof! the background color of the page has changed", {
                    icon: "success",
                })
            } else {
                swal("The background color was not changed.")
            }
        })
}
