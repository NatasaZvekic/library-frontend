import React, { Component } from 'react'
import MyRentalsTable from './MyRentalsTable'

export default class MyRentalsList extends Component {
    render() {
        return (
            <div>
                <MyRentalsTable
                listOfRentals={this.props.listOfRentals}
                />
            </div>
        )
    }
}
