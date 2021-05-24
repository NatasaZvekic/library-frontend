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
        console.log(bookName, available, publishYear, url)
        const book = {
            bookName: bookName,
            authorID : "a11369d9-2a00-4c7c-9340-48688dd8addd",
            genreID: "6374f10a-a74c-48db-b60e-16c623228327",
            supplierID:  "0c7ac0b5-ff66-4e0e-9f9a-09a4e82eb760",
            url: url,
            publishYear : publishYear,
            available : available
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
    updateBook: (bookID, bookName, available ,publishYear,url ) => {
        console.log("update " +  bookName, available ,publishYear,url)
        const newBook = {
            bookName: bookName,
            authorID : "a11369d9-2a00-4c7c-9340-48688dd8addd",
            genreID: "6374f10a-a74c-48db-b60e-16c623228327",
            supllierID: "0c7ac0b5-ff66-4e0e-9f9a-09a4e82eb760",
            url: url,
            publishYear : publishYear,
            available : available
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`https://localhost:44324/books/${bookID}`, newBook , {
            headers: header
        })
    },

    InsertRental: (bookID) => { console.log("Di " + bookID + " " + localStorage.getItem("userID"))
        const rental = {
            bookID: bookID,
            userID : localStorage.getItem("userID"),
            employeeID: "747500c8-47cf-4d99-afba-5befacd64485",
            deliveryID: "e69f696d-a5eb-4502-85cb-52b1ac548de1"
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