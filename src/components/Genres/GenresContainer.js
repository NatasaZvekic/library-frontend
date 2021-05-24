import React, { useEffect, useState } from 'react'
import GenreService from './GenreService'
import GenreList from './GenreList'
import NewHead from '../Header/Header'

function GenresContainer() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        GenreService.getAllGenres().then((data) => {
            setGenres(data.data);
            console.log("g " + data.data.genreName)
        })
    })

    const deleteGenre = (id) => {
        GenreService.deleteGenre(id)
    }
    const updateGenre = (genreName, genreID) =>{
       GenreService.updateGenre(genreName, genreID)
    }
    const insertGenre = (genreName) => {
        GenreService.insertGenre(genreName)
    }

    return (
        <div className="login">
            <NewHead />
            <GenreList genreList={genres} deleteGenre={deleteGenre} updateGenre={updateGenre} insertGenre={insertGenre}/>
        </div>
    )
}

export default GenresContainer;
