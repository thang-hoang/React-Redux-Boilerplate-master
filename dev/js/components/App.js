import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import UserCounting from '../containers/user-counting';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
        <hr />
        <UserCounting/>
    </div>
);

export default App;
