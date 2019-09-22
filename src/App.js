import React from 'react';

import ReposList from './ReposList';
import ReposSearchInput from './ReposSearchInput';
import FilterReposSelect from './FilterReposSelect';

export default function App(props) {
    return <div>
        <ReposSearchInput />
        <span style={{marginLeft: '1em'}}><FilterReposSelect /></span>
        <ReposList />
    </div>
}