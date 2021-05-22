import axios from 'axios'
const RentalService = {

    getAllRentals: () => {
        return axios.get("https://localhost:44324/rentals",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteRental: (id) => {
        return axios.delete(`https://localhost:44324/rentals/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    // updateGenre: (genreName, genreID) => {
    //     const genre = {
    //         genreName: genreName,
    //     }
    //     const header = {
    //         "Content-Type": 'application/json',
    //         "Access-Control-Allow-Origin": "*",
    //         "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
    //     }
    //     return axios.put(`https://localhost:44324/genres/${genreID}`, genre , {
    //         headers: header
    //     })

    // },
  

}

export default RentalService