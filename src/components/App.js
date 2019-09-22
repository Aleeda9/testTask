import React from 'react';
import { connect } from 'react-redux'

import List from './components/List';
import { fetchRepos } from './store/actions'; 

export default function App(props) {
    return <ReposList />
}

class ReposList extends React.Component {
    componentDidMount(props) {
        this.props.fetchRepos();
    }
    render() {
        return <List items={ this.props.repos }/>
    }
}

connect(
    state => state,
    dispath => ({ fetchUserfetchReposs: () => dispatch(fetchRepos()) })
)(UsersList);