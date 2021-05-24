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

    deleteRental: (id) => {
        return axios.delete(`https://localhost:44324/rentals/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateRental : (rentalID, deliveryID, employeeID) => {
        const rental = {
            deliveryID: deliveryID,
            employeeID : employeeID
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