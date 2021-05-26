import axios from 'axios'
const AuthorService = {

    getAllAuthors: () => {
        return axios.get("https://localhost:44324/authors", { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },
    deleteAuthor: (id) => {
        return axios.delete(`https://localhost:44324/authors/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },
    updateAuthor: (id, name, lastname, year) => { console.log("values " + name + " " + lastname + " " + year)
        const newAuthor = {
            authorName : name,
            authorLastName: lastname,
            yearOfBirth: year
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`https://localhost:44324/authors/${id}`, newAuthor , {
                headers: header
            }).then(response => console.log("resp " + response.data))
            .catch(error => {
                
                console.error('There was an error!', error);
            });
            
    }, 
    insertAuthor: ( name, lastname, year) => { console.log("values " + name + " " + lastname + " " + year)
        const newAuthor = {
            authorName : name,
            authorLastName: lastname,
            yearOfBirth: Number(year)
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("https://localhost:44324/authors", newAuthor , {
                headers: header
            }).then(response => console.log("resp " + response.data))
            .catch(error => {
                
                console.error('There was an error!', error);
            });
            
    }
}
export default AuthorService