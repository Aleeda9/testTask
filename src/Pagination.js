import React from 'react';
import { connect } from 'react-redux';

import { fetchRepos } from './store/actions';

/**
 * custom pagination
 * (maybe ugly but it still works)
 * 
 * max 1000 items
 */
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 1 };
    }

    onClick(page) {
        // more clear to calculate it here: if page out of range then do nothing
        let total = this.props.total > 1000 ? 20 : parseInt(this.props.total / 50);
        if(page < 1 || page > total)
            return;

        this.setState({ page });

        this.props.fetchRepos(page);
    }

    render() {
        return <div style={{ margin: '1em 0' }}>
            <button style={{ margin: '0 1em' }} onClick={ () => this.onClick(1) }> { '<<' } </button>
            <button style={{ margin: '0 1em' }} onClick={ () => this.onClick(this.state.page - 1) }> { '<' } </button>
            <span> page { this.state.page } of { parseInt(this.props.total / 50) } </span>
            <button style={{ margin: '0 1em' }} onClick={ () => this.onClick(this.state.page + 1) }> { '>' } </button>
            <button style={{ margin: '0 1em' }} onClick={ () => this.onClick(parseInt(this.props.total / 50)) }> { '>>' } </button>
            repos { (this.state.page - 1) * 50 + 1 } - { this.state.page * 50 } from { this.props.total }
        </div>
    }
}

export default connect(
    state => ({ total: state.total }),
    { fetchRepos }
)(Pagination)