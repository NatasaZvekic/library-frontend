import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const InsertDialog = (props) => {
    const [currentFruit, setCurrentFruit] = useState('')
    const [bananas, setBanans] = useState('')

    const changeFruit = (newFruit) => {
        setCurrentFruit(newFruit)
    }
    const changeBananas = (newFruit) => {
        setBanans(newFruit)
    }
    return (

        <Modal
            show="false"
            backdrop="static"
            keyboard={false} >
            <Modal.Header >
                <Modal.Title>Add new gefnre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <select
                        onChange={(event) => changeFruit(event.target.value)}
                        value={currentFruit}
                    >
                         {props.usersList.map((rental, index) => {
                        return (
                            <option value={rental.userName}>{rental.userName}</option>
                     
                        )})}
                       
                    </select>
                    <br />
                    <select
                        onChange={(event) => changeBananas(event.target.value)}
                        
                    >
                        <option value="apples">Red Apples11</option>
                        <option value="oranges">Outrageous Oranges1</option>
                        <option value="tomatoes">Technically a Fruit Tomatoes1</option>
                        <option value="bananas">Bodacious Bananas1</option>
                    </select>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" > Close  </Button>
                <Button variant="primary">Insert</Button>
            </Modal.Footer>
        </Modal>

    )
}
export default InsertDialog