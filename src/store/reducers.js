import { actionTypes } from './actions';

const initialState = {repos: [], query: '', filter: 'all'};

export function reposApp(state = initialState, action) {
    let { repos, query, filter} = state;

    switch(action.type) {
        // form repos array
        case actionTypes.GET_REPOS:
            return {
                repos:  action.data.map(repo => ({
                        id: repo.id,
                        name: repo.name,
                        summary: {
                            author: repo.owner.login,
                            license: repo.license ? repo.license.name : null,
                            stars: repo.stargazers_count
                        } 
                    }
                )),
                query,
                filter
            };

        // change search query
        case actionTypes.SEARCH_REPOS:
            return {
                query: action.query,
                repos,
                filter
            }

        // change license filter
        case actionTypes.FILTER_REPOS:
            return {
                filter: action.filter,
                repos,
                query
            }

        default:
            return state;
    }

}