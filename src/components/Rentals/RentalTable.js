import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class RentalTable extends Component {
    render() {
        return (
            <Table responsive style={{ marginTop: '5px', width: '80%', marginLeft: '10%', background: 'white', display: this.props.showCompleted }}>
                <thead>
                    <tr>
                        <th style={{ width: '5%' }}>#</th>
                        <th style={{ width: '20%' }} >Book name </th>
                        <th style={{ width: '15%' }} >User  </th>
                        <th style={{ width: '18%' }} >Employee</th>
                        <th style={{ width: '15%' }} >Deliverer</th>
                        <th style={{ width: '20%' }} >Order date </th>
                        <th style={{ width: '1%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.completedRentals.map((rental, index) => {
                        return (
                            <tr>
                                <td> {index + 1}</td>
                                <td>{rental.bookName}</td>
                                <td>{rental.userName}</td>
                                <td>{rental.employeeName}</td>
                                <td>{rental.deliveryCompanyName}</td>
                                <td>{rental.rentalDate.substring(0, 10)}</td>
                                <td >
                                    <svg style={{ cursor: 'pointer' }} onClick={() => this.props.openDialogForDelete(rental.rentalID)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}
