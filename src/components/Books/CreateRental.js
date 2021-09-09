import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState } from 'react'

// export default class CreateRental extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showDeleteDialog: false,
//             showUpdateDialog: false,
//             showAddDialog: false,
//             id: 0,
//             bookName: '',
//             cvc: "",
//             expiry: "",
//             name: "",
//             number: ""
//         };
//     }
//     render() {
//         return (
//             <Modal
//                 show={this.props.openDialogForInsertRental}
//                 backdrop="static"
//                 keyboard={false} >
//                 <Modal.Header >
//                     <Modal.Title>Create new rental</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div class="form-group">

//                     </div>
//                     <div class="form-group">
//                         <input
//                             type="text"
//                             name="userName"
//                             class="form-control"
//                             value={this.props.bookName}
//                         />
//                     </div>
//                     <div class="form-group">
//                         <input
//                             type="text"
//                             class="form-control"
//                             name="userName"
//                             value={localStorage.getItem("userName")}
//                         />
//                     </div>
//                     <div class="form-group" style={{marginBottom: '30px'}}>
//                         <input
//                             type="text"
//                             class="form-control"
//                             name="userName"
//                             value={this.props.price}
//                         />
//                     </div>

//                     <Cards
//                         cvc={this.state.cvc}
//                         expiry={this.state.expiry}
//                         focus={this.state.focus}
//                         name={this.state.name}
//                         number={this.state.number}
//                     />
//                     <div class="form-group"  style={{marginTop: '30px'}}>
//                         <input
//                             type="number"
//                             name="cvc"
//                             class="form-control"
//                             placeholder="CVC"
//                         />
//                     </div>
//                     <div class="form-group">
//                         <input
//                             type="date"
//                             name="expiry"
//                             class="form-control"
//                             placeholder="Expire Date"
//                         />
//                     </div>
//                     <div class="form-group">
//                         <input
//                             type="text"
//                             name="name"
//                             class="form-control"
//                             placeholder="Your Name"
//                         />
//                     </div>
//                     <div class="form-group">
//                         <input
//                             type="number"
//                             name="number"
//                             class="form-control"
//                             placeholder="Card Number"
//                         />
//                     </div>

//                 </Modal.Body>
//                 <Modal.Footer>

//                     <Button variant="secondary" onClick={this.props.closeInsertRentalDialog}> Close  </Button>
//                     <Button variant="secondary"
//                         style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}
//                         onClick={() => this.props.InsertRental(this.state.id)}>Create</Button>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }
// }

import validate from './ValidateInfo'



const CreateRental = (props) => {
    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        cvc: "",
        number: "",
        name: ""
    })
    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: ""
    });
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (values.cvc === 0 ||values.number === 0 || values.name === "") {
            setErrors(validate(values))
        }
        else {
            props.InsertRental(0)
            setErrors({})
            setValues({ values: '' })
        }
        //	window.location.reload();
        //history.push("/home")
    }
    return (
        <div>
            <Modal
                show={props.openDialogForInsertRental}
                backdrop="static"
                keyboard={false} >
                <Modal.Header >
                    <Modal.Title>Create new rental</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group">

                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="userName"
                            class="form-control"
                            value={props.bookName}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="userName"
                            value={localStorage.getItem("userName")}
                        />
                    </div>
                    <div class="form-group" style={{ marginBottom: '30px' }}>
                        <input
                            type="text"
                            class="form-control"
                            name="userName"
                            value={props.price}
                        />
                    </div>
                    <Cards
                        cvc={data.cvc}
                        expiry={data.expiry}
                        focus={data.focus}
                        name={data.name}
                        number={data.number}
                    />
                    <div class="form-group" style={{ marginTop: '30px' }}>
                        <input
                            type="number"
                            defaultValue={values.cvc}
                            name="cvc"
                            class="form-control"
                            placeholder="CVC"
                            onChange={handleInputChange}
                        />
                        {<p>{errors.cvc}</p>}

                    </div>
                    <div class="form-group">
                        <input
                            type="date"
                            name="expiry"

                            class="form-control"
                            placeholder="Expire Date"
                            onChange={handleInputChange}
                        />

                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            defaultValue={values.name}
                            placeholder="Your Name"
                            onChange={handleInputChange}
                        />
                        {<p>{errors.name}</p>}
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            name="number"
                            defaultValue={values.number}
                            class="form-control"
                            placeholder="Card Number"
                            onChange={handleInputChange}
                        />
                        {<p>{errors.number}</p>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeInsertRentalDialog}> Close  </Button>
                    <Button variant="secondary"
                        style={{ backgroundColor: '#f0ad4e', borderColor: '#f0ad4e' }}
                        onClick={handleSubmit}>Create</Button>
                </Modal.Footer>
            </Modal>
        </div >)
}

export default CreateRental
