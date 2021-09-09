import React, { useEffect, useState } from 'react'
import MyProfileService from './MyProfileService'
import Header from '../Header/HeaderTwo'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MyProfilePage from './MyProfilePage';

toast.configure()

function MyProfileContainer() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        MyProfileService.getUserByID().then((data) => {
            setUser(data.data);
            console.log("user " + user.name)
        })
    })

    const updateUser = async (name, lastname, contact, address) => {
        await MyProfileService.updateUser(name, lastname, contact, address, user)
            .then((data) => {
                localStorage.setItem("userName", name + " " + lastname)
                toast.success("Information are changed!", { position: toast.POSITION.TOP_CENTER })
            })
            .catch(function (error) {
                toast.error("An error occurred, please try again.", { position: toast.POSITION.TOP_CENTER })
            })
    }

    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <Header />
            <MyProfilePage
                user={user}
                updateUser={updateUser} />
        </div>
    )
}

export default MyProfileContainer;