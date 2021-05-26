import axios from 'axios'
const RentalService = {

    getAllCompletedRentals: () => {
        return axios.get("https://localhost:44324/rentals?completed=true",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    getAllUncompletedRentals: () => {
        return axios.get("https://localhost:44324/rentals",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    getRentalByUserID : () => {
        return axios.get(`https://localhost:44324/rentals/${localStorage.getItem("userID")}`,
        { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteRental: (id) => {
        return axios.delete(`https://localhost:44324/rentals/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateRental : (rentalID, deliveryID, employeeID, bookID, userID) => {
        const rental = {
            deliveryID: "1e557702-79b4-459a-a5e7-23ce94977e02",
            employeeID : "dde4b9b8-8a37-456d-be13-682dc8fa77b5",
            bookID : bookID,
            userID : userID
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`https://localhost:44324/rentals/${rentalID}`, rental , {
            headers: header
        })

    },
  

}

export default RentalService