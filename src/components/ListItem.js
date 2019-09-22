import React from 'react';

export default class ListItem extends React.Component {
    render() {
        return <div>
            <div> { this.props.item.name } </div>
            { this.props.item.summary ? summary(this.props.item.summary) : null } 
        </div>
    }
}

function summary(props) {
    let summary = [];
    for(let i in props)
        if(props[i])
            summary.push(<p key={ summary.length }> { i }: { props[i] } </p>);
    return <div style={{ paddingLeft: '3em' }}> { summary } </div>
}