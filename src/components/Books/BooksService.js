import axios from 'axios'
const BooksService = {

    GetAllBooks: (pageN, bookName) => {
        return axios.get(`https://localhost:44324/books?bookName=${bookName === null ? '' : bookName}&pageNumber=${pageN === null ? 1 : pageN}`)
    },

    AddNewBook: () => {
        const gen = {
            GenreID: 'E28A011F-5B6A-4776-9177-55DF4B05BF68',
            GenreName: 'insert'
        }
        return axios.post("https://localhost:44324/genres", gen);
    },

    DeleteBook: (id) => {
        return axios.delete(`https://localhost:44324/books/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },
    InsertBook : (bookName,supplierID,available,genreID,authorID,publishYear,url ) => {
        const book = {
            bookName: bookName,
            authorID : authorID,
            genreID: genreID,
            supplierID: supplierID,
            url: url,
            publishYear : publishYear
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("https://localhost:44324/books", book , {
            headers: header
        })
    },
    
    InsertRental: (bookID) => { console.log("Di " + bookID + " " + localStorage.getItem("userID"))
        const rental = {
            bookID: bookID,
            userID : localStorage.getItem("userID"),
            employeeID: "cfed17ac-ecc3-4a23-bde8-0122cf8a07c9",
            deliveryID: "1e557702-79b4-459a-a5e7-23ce94977e02"
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("https://localhost:44324/rentals", rental , {
            headers: header
        })

     },
}

export default BooksService