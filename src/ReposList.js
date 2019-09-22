import React from 'react';
import { connect } from 'react-redux'

import List from './components/List';
import { fetchRepos } from './store/actions'; 

/**
 * List of repositories
 */
class ReposList extends React.Component {
    componentDidMount() {
        this.props.fetchRepos();
    }
    render() {
        return <List items={ this.props.repos }/>
    }
}

export default connect(
    state => {
        let { repos, query, filter } = state;
        // filter only by search query
        if(filter == 'all')
            return { repos: repos.filter(repo => repo.name.indexOf(query) === 0 ) };
        else // filter by search query and by selected license
            return { repos: repos.filter(repo => (repo.name.indexOf(query) === 0) && (repo.summary.license == filter) ) }
    },
    dispatch => ({ fetchRepos: () => dispatch(fetchRepos()) })
)(ReposList);