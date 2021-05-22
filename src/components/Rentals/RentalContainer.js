import React, { useEffect, useState } from 'react'
import NewHead from '../Header/NewHead'
import RentalList from './RentalList';
import RentalService from './RentalService';
import UserSevice from '../User/UserService'

function RentalContainer() {
    const [rentals, setRentals] = useState([]);
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);


    useEffect(() => {
        RentalService.getAllRentals().then((data) => {
            setRentals(data.data);
        })
        UserSevice.getAllUsers().then((data)=>{
            setUsers(data.data)
        })
        
    })

    const deleteRental = (id) => {
        RentalService.deleteRental(id)
    }

 
    // const updateGenre = (genreName, genreID) =>{
    //    GenreService.updateGenre(genreName, genreID)
    // }
    // const insertGenre = (genreName) => {
    //     GenreService.insertGenre(genreName)
    // }

    return (
        <div className="login">
            <NewHead />
            <RentalList rentalList={rentals}
            deleteRental = {deleteRental}
            usersList ={ users}
            />
        </div>
    )
}

export default RentalContainer;
