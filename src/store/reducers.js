import { actionTypes } from './actions';

const initialState = {repos: []}

export function reposApp(state = initialState, action) {
    let { repos } = state;

    switch(action.type) {
        case actionTypes.GET_REPOS:
            return {
                repos: action.data.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    summary: {
                        author: repo.owner.login,
                        license: repo.license ? repo.license.name : null,
                        stars: repo.stargazers_count
                    } 
                }))
            };
    }

    return state;
}