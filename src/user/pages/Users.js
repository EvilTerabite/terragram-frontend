import React from 'react';

//Components
import UserList from '../components/UserList/UserList';

function Users() {
    const USERS = [
    {
        id: "u1",
        name: "Jeremy",
        image: "null",
        places: 3
    }
    ];

    return(
    <UserList items={USERS}/>
    )
}

export default Users;