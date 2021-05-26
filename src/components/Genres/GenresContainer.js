import React, { useEffect, useState } from 'react'
import GenreService from './GenreService'
import GenreList from './GenreList'
import NewHead from '../Header/Header'
import background from '../assets/photo/unnamed.jpg'

function GenresContainer() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        GenreService.getAllGenres().then((data) => {
            setGenres(data.data);
            
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
        <div className="login" style={{backgroundImage : `url(${background})`}}>
            <NewHead />
            <GenreList genreList={genres} deleteGenre={deleteGenre} updateGenre={updateGenre} insertGenre={insertGenre}/>
        </div>
    )
}

export default GenresContainer;
