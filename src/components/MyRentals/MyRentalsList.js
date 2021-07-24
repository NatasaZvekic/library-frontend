import React, { Component } from 'react'
import MyRentalsTable from './MyRentalsTable'

export default class MyRentalsList extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f2e6ff' }}>
                <MyRentalsTable
                listOfRentals={this.props.listOfRentals}
                />
            </div>
        )
    }
}
