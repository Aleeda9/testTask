import { actionTypes } from './actions';

const initialState = {repos: []}

export function reposApp(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_REPOS:
            initialState.repos = action.data.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    summary: {
                        author: repo.owner.login,
                        license: repo.license ? repo.license.name : null,
                        stars: repo.stargazers_count
                    } 
                }))
            return Object.assign({}, { repos: initialState.repos });

            case actionTypes.SEARCH_REPOS:
                return {
                    repos: !action.query ? initialState.repos : initialState.repos.filter(repo => repo.name.indexOf(action.query) === 0)
                };

            default:
                return state;
    }

}