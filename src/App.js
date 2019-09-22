import React from 'react';

import ReposList from './ReposList';
import ReposSearchInput from './ReposSearchInput';
import FilterReposSelect from './FilterReposSelect';
import Pagination from './Pagination';

export default function App(props) {
    return <div>
        <Pagination />
        <ReposSearchInput />
        <span style={{marginLeft: '1em'}}><FilterReposSelect /></span>
        <ReposList />
    </div>
}