import { useEffect, useState } from "react";
import NewHead from "../Header/HeaderTwo";
import DelivererList from "./DelivererList";
import DelivererService from "./DelivererService";
import background from '../assets/photo/unnamed.jpg'

function DelivererContainer() {
    const [deliverers, setDeliverers] = useState([]);

    useEffect(() => {
        DelivererService.getAllDeliverers().then((data) => {
            setDeliverers(data.data);
        })
    })

    const deleteDeliverer = (id) => {
        DelivererService.deleteDeliverer(id)
    }

    const updateDeliverer = (id, companyName, address, contact) => {
        DelivererService.updateDeliverer(id, companyName, address, contact)
    }

    const insertDeliverer = (companyName, address, contact) => { 
        DelivererService.insertDeliverer(companyName, address, contact)
    }
    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead/>
            <DelivererList
             deliverersList={deliverers}
             updateDeliverer = {updateDeliverer}
             insertDeliverer = {insertDeliverer}
             deleteDeliverer = {deleteDeliverer}/>
        </div>
    )
}
export default DelivererContainer