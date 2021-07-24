import React, { useEffect, useState } from 'react'
import Header from '../Header/HeaderTwo'
import background from '../assets/photo/unnamed.jpg'
import RentalService from '../Rentals/RentalService'
import MyRentalsList from './MyRentalsList';

function MyRentalsContainer() {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        RentalService.getRentalByUserID().then((data) => {
            setRentals(data.data);
        })
    })

    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <Header />
            <MyRentalsList listOfRentals={rentals}/>
        </div>
    )
}

export default MyRentalsContainer;
