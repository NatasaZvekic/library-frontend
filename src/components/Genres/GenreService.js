import axios from 'axios'
const LoginService = {

    getAllGenres: () => {
        return axios.get("https://localhost:44324/genres", { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteGenre: (genreID) => {
        console.log("in service " + genreID)
        return axios.delete(`https://localhost:44324/genres/${genreID}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateGenre: (genreName, genreID) => {
        const genre = {
            genreName: genreName,
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`https://localhost:44324/genres/${genreID}`, genre , {
            headers: header
        })

    },
    insertGenre: (genreName) => {
        const genre = {
            genreName: genreName,
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("https://localhost:44324/genres", genre , {
            headers: header
        })

    },

}

export default LoginService