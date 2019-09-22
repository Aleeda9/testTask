import fetch from 'cross-fetch';

//action types

export const actionTypes = {
    GET_REPOS: 'GET_REPOS',
    SEARCH_REPOS: 'SEARCH_REPOS'
}

// action creators

function getRepos(data) {
    return {
        type: actionTypes.GET_REPOS,
        data
    }
}

export function fetchRepos() {
    let now = new Date();

    // today date
    let day = ('0' + now.getDate()).slice(-2);
    // if last month was february and today date > 28 then day = 28 (just don't think about leap year)
    if(now.getMonth() == 1 && day > 28)
        day = 28;
    // if last month % 2 == 0 and today is 31th then day = 30
    if(!(now.getMonth() % 2) && day > 30)
        day = 30;

    let date = [now.getFullYear(), ('0' + now.getMonth()).slice(-2), day].join('-');

    return dispatch => fetch(`https://api.github.com/search/repositories?q=language:javascript+created:>${date}&sort=stars&order=desc`, { method: 'GET' })
        .then(response => response.json(),
              error => console.log(`Error occured: ` + error))
        .then(data => dispatch(getRepos(data.items ? data.items : [])))
}

export function searchRepos(query) {
    return {
        type: actionTypes.SEARCH_REPOS,
        query
    }
}