import { useEffect, useState } from "react";
import NewHead from "../Header/HeaderTwo";
import AuthorList from "./AuthorList";
import AuthorService from "./AuthorService";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function AuthorContainer() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorService.getAllAuthors().then((data) => {
            setAuthors(data.data);
        })
    })
    
    const deleteAuthor = async (id) => {
        await AuthorService.deleteAuthor(id)
            .then((data) => {

            })
            .catch(function (error) {
                toast.error("Recond can not be deleted!", { position: toast.POSITION.TOP_CENTER })
            })
    }

    const updateAuthor = (id, name, lastname, year) => {
        console.log("id " + id)
        AuthorService.updateAuthor(id, name, lastname, year)
    }

    const insertAuthor = (name, lastname, year) => {
        AuthorService.insertAuthor(name, lastname, year)
    }
    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff', height: '100%' }}>
            <NewHead />
            <AuthorList
                authorsList={authors}
                deleteAuthor={deleteAuthor}
                updateAuthor={updateAuthor}
                insertAuthor={insertAuthor} />
        </div>
    )
}
export default AuthorContainer