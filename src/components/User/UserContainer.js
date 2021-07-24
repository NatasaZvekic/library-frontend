import React, { useEffect, useState } from 'react'
import UserService from './UserService'
import NewHead from '../Header/HeaderTwo'
import UserList from './UserList';
import background from '../assets/photo/unnamed.jpg'

function UserContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAllUsers().then((data) => {
            setUsers(data.data);
        })
    })

    const insertUser = (name, lastname, contact, address, email, role, password) => {
        console.log("a " + address)
        UserService.insertUser(name, lastname, contact, address, email, role, password)
    }

    const updateUser = (id, name, lastname, contact, address, email, role) => {
        UserService.updateUser(id, name, lastname, contact, address, email, role)
    }

    const deleteUser = (id) => {
        UserService.deleteUser(id)
    }

    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
            <UserList
                userList={users}
                insertUser={insertUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
            />
        </div>
    )
}

export default UserContainer;
