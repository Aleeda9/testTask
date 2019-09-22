import React from 'react';

import ListItem from './ListItem';

/**
 * List Component
 * renders list of items
 */
export default class List extends React.Component {
    render() {
        return <div>
            {
                this.props.items.map(item => <ListItem key={ item.id } item={ item } />)
            }
        </div>
    }
}