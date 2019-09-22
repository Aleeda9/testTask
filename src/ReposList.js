import React from 'react';
import { connect } from 'react-redux'

import List from './components/List';
import { fetchRepos } from './store/actions'; 

class ReposList extends React.Component {
    componentDidMount() {
        this.props.fetchRepos();
    }
    render() {
        return <List items={ this.props.repos }/>
    }
}

export default connect(
    state => ({ repos: state.repos }),
    dispatch => ({ fetchRepos: () => dispatch(fetchRepos()) })
)(ReposList);