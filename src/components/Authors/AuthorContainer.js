import { useEffect, useState } from "react";
import NewHead from "../Header/NewHead";
import AuthorList from "./AuthorList";
import AuthorService from "./AuthorService";

function AuthorContainer() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorService.getAllAuthors().then((data) => {
            setAuthors(data.data);
        })
    })

    const deleteAuthor = (id) => {
        AuthorService.deleteAuthor(id)
    }

    const updateAuthor = (id, name, lastname, year) => {
        console.log("id " + id)
        AuthorService.updateAuthor(id, name, lastname, year)
    }

    const insertAuthor = ( name, lastname, year) => {
        AuthorService.insertAuthor( name, lastname, year)
    }
    return (
        <div>
            <NewHead />
            <AuthorList authorsList={authors}
                deleteAuthor={deleteAuthor}
                updateAuthor={updateAuthor} 
                insertAuthor={insertAuthor}/>
        </div>
    )
}
export default AuthorContainer