import React from 'react';
import { connect } from 'react-redux';

import { searchRepos } from './store/actions';

/**
 * Search input for searching by repos name
 * searching in real time
 */
class ReposSearchInput extends React.Component {
    onKeyUp(value) {
        this.props.searchRepos(value);
    }

    render() {
        return <input type="text" onKeyUp={ (e) => this.onKeyUp(e.target.value) }/>
    }
}

export default connect(
    null,
    { searchRepos }
)(ReposSearchInput)