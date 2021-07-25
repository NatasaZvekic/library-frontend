import axios from 'axios'
const LoginService = {

    getAllGenres: () => {
        return axios.get("http://localhost:44324/genres", {
            headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` }
        })
    },

    deleteGenre: (genreID) => {
        return axios.delete(`http://localhost:44324/genres/${genreID}`, {
            headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` }
        })
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
        return axios.put(`http://localhost:44324/genres/${genreID}`,
            genre, {
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
        return axios.post("http://localhost:44324/genres",
            genre, {
            headers: header
        })

    },

}

export default LoginService