import React from 'react';
import { connect } from 'react-redux';

import { filterRepos } from './store/actions';

/**
 * Select with licenses
 */
class FilterReposSelect extends React.Component {
    onChange(value) {
        this.props.filterRepos(value);
    }

    render() {
        return <select onChange={ (e) => this.onChange(e.target.value) }>
            {
                this.props.filters.map((filter, index) => <option key={ index }> { filter } </option>)
            }
        </select>
    }
}

export default connect(
    state => {
        let filters = {'all': true};

        // only licenses that are given in loaded repos
        state.repos.map(repo => {
            if(repo.summary.license)
                if(!filters[repo.summary.license])
                    filters[repo.summary.license] = true;
        });

        return { filters: Object.keys(filters) }
    },
    { filterRepos }
)(FilterReposSelect);