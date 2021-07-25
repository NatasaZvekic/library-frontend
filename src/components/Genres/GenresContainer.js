import React, { useEffect, useState } from 'react'
import GenreService from './GenreService'
import GenreList from './GenreList'
import NewHead from '../Header/HeaderTwo'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function GenresContainer() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        GenreService.getAllGenres().then((data) => {
            setGenres(data.data);

        })
    })
    const deleteGenre = async (id) => {
        await GenreService.deleteGenre(id)
            .then((data) => {
            })
            .catch(function (error) {
                toast.error("Recond can not be deleted!", { position: toast.POSITION.TOP_CENTER })
            })
    }

    const updateGenre = (genreName, genreID) => {
        GenreService.updateGenre(genreName, genreID)
    }

    const insertGenre = (genreName) => {
        GenreService.insertGenre(genreName)
    }

    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
            <GenreList
                genreList={genres}
                deleteGenre={deleteGenre}
                updateGenre={updateGenre}
                insertGenre={insertGenre} />
        </div>
    )
}

export default GenresContainer;
