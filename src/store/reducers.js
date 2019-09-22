import { actionTypes } from './actions';

const initialState = {repos: [], query: '', filter: 'all', total: 0};

export function reposApp(state = initialState, action) {
    let { repos, query, filter, ...rest} = state;

    switch(action.type) {
        // form repos array
        case actionTypes.GET_REPOS:
            return {
                repos:  action.data.repos.map(repo => ({
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
                filter,
                // because only 1000 can be got from github api
                total: action.data.total > 1000 ? 1000 : action.data.total
            };

        // change search query
        case actionTypes.SEARCH_REPOS:
            return {
                query: action.query,
                repos,
                filter,
                ...rest
            }

        // change license filter
        case actionTypes.FILTER_REPOS:
            return {
                filter: action.filter,
                repos,
                query,
                ...rest
            }

        default:
            return state;
    }

}