import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class MyRentalsTable extends Component {
    render() {
        return (
            <Table responsive style={{ width: '50%', marginLeft: '25%', marginTop: '50px', background: 'white' }}>
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>#</th>
                        <th style={{ width: '30%' }} >Book name </th>
                        <th style={{ width: '20%' }}> Order date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.listOfRentals.map((rental, index) => {
                        return (
                            <tr>
                                <td> {index + 1}</td>
                                <td>{rental.bookName}</td>
                      
                                <td>{rental.rentalDate.substring(0,10)}</td>
                                <td> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}
