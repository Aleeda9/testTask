import React from 'react';

import ReposList from './ReposList';
import ReposSearchInput from './ReposSearchInput';

export default function App(props) {
    return <div>
        <ReposSearchInput />
        <ReposList />
    </div>
}