import { useEffect, useState } from "react";
import NewHead from "../Header/Header";
import DelivererList from "./DelivererList";
import DelivererService from "./DelivererService";

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
        <div>
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