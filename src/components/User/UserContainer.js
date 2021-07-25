import React, { useEffect, useState } from 'react'
import UserService from './UserService'
import NewHead from '../Header/HeaderTwo'
import UserList from './UserList';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function UserContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAllUsers().then((data) => {
            setUsers(data.data);
        })
    })

    const insertUser = async (name, lastname, contact, address, email, role, password) => {
        await UserService.insertUser(name, lastname, contact, address, email, role, password)
        .then((data ) => {

        })
        .catch(function (error) {
            toast.error("Username alredy exist!", { position: toast.POSITION.TOP_CENTER })
        })
    }

    const updateUser = (id, name, lastname, contact, address, email, role) => {
        UserService.updateUser(id, name, lastname, contact, address, email, role)
    }

    
    const deleteUser = async (id) => {
        await  UserService.deleteUser(id)
        .then((data) => {

        })
        .catch(function (error) {
            toast.error("Recond can not be deleted!", { position: toast.POSITION.TOP_CENTER })
        })
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

