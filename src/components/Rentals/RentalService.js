import axios from 'axios'
const RentalService = {

    getAllCompletedRentals: () => {
        return axios.get("http://localhost:44324/rentals?completed=true",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    getAllUncompletedRentals: () => {
        return axios.get("http://localhost:44324/rentals",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    getRentalByUserID : () => {
        return axios.get(`http://localhost:44324/rentals/${localStorage.getItem("userID")}`,
        { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteRental: (id) => {
        return axios.delete(`http://localhost:44324/rentals/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateRental : (rentalID, deliveryID, employeeID, bookID, userID) => { console.log("im in update " + 
    rentalID + " bookID " + bookID + " user ID " + userID)
        const rental = {
            bookID:  bookID,
            userID : userID,
             employeeID: "867D7C45-9E41-4CDB-8853-F6403E1844C8",
             deliveryID: "E69F696D-A5EB-4502-85CB-52B1AC548DE5"
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/rentals/${rentalID}`, rental , {
            headers: header
        })

    },
  

}

export default RentalService