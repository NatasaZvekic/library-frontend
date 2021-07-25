import axios from 'axios'
const UserService = {

    getAllUsers: () => {
        return axios.get("http://localhost:44324/users",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteUser: (id) => {
        return axios.delete(`http://localhost:44324/users/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateUser: (id, name, lastname, contact, address, email, role) => {
        const newUser = {
            name: name,
            userLastName: lastname,
            userContact: contact,
            userAddress: address,
            userName: email,
            role: role
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/users/${id}`, newUser, {
            headers: header
        })

    },
    insertUser: (name, lastname, contact, address, email, role, password) => {
        const newUser = {
            name: name,
            userLastName: lastname,
            userContact: Number(contact),
            userAddress: address,
            password: password,
            userName: email,
            role: role
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("http://localhost:44324/users", newUser, {
            headers: header
        })

    },

}

export default UserService