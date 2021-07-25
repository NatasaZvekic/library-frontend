import axios from 'axios'
const AuthorService = {

    getAllAuthors: () => {
        return axios.get("http://localhost:44324/authors", {
            headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` }
        })
    },
    deleteAuthor: (id) => {
        return axios.delete(`http://localhost:44324/authors/${id}`, {
            headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` }
        })
    },
    updateAuthor: (id, name, lastname, year) => {
        const newAuthor = {
            authorName: name,
            authorLastName: lastname,
            yearOfBirth: year
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/authors/${id}`, newAuthor, {
            headers: header
        })
            .then(response => { })
            .catch(error => {

            });

    },
    insertAuthor: (name, lastname, year) => {
        const newAuthor = {
            authorName: name,
            authorLastName: lastname,
            yearOfBirth: Number(year)
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("http://localhost:44324/authors", newAuthor, {
            headers: header
        })
            .then(response => { })
            .catch(error => {
            });

    }
}
export default AuthorService