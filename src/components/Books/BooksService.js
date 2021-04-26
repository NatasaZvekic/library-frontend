import axios from 'axios'
const BooksService = {

    GetAllBooks: (pageN) => { 
        return axios.get(`https://localhost:44324/books?pageNumber=${pageN === null ? 1 : pageN}`)
    },

    AddNewBook: ()=>{
        const gen ={
            GenreID : 'E28A011F-5B6A-4776-9177-55DF4B05BF68',
            GenreName : 'insert'
        }
        return axios.post("https://localhost:44324/genres", gen);
    }
}

export default BooksService