import axios from 'axios'
const MyProfileService = {
    getUserByID: () => {
        return axios.get(`http://localhost:44324/users/${localStorage.getItem("userID")}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateUser: (name, lastname, contact, address, user) => { console.log("usffer " + address)
        const newUser = {
            name: name,
            userLastName: lastname,
            userContact: contact,
            userAddress: address,
            userName: user.userName,
            role: user.role
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/users/${localStorage.getItem("userID")}`, newUser, {
            headers: header
        })

    },
}

export default MyProfileService