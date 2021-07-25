import { useEffect, useState } from "react";
import NewHead from "../Header/HeaderTwo";
import DelivererList from "./DelivererList";
import DelivererService from "./DelivererService";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function DelivererContainer() {
    const [deliverers, setDeliverers] = useState([]);

    useEffect(() => {
        DelivererService.getAllDeliverers().then((data) => {
            setDeliverers(data.data);
        })
    })

    const deleteDeliverer = async (id) => {
        await DelivererService.deleteDeliverer(id)
            .then((data) => {

            })
            .catch(function (error) {
                toast.error("Recond can not be deleted!", { position: toast.POSITION.TOP_CENTER })
            })
    }

    const updateDeliverer = (id, companyName, address, contact) => {
        DelivererService.updateDeliverer(id, companyName, address, contact)
    }

    const insertDeliverer = (companyName, address, contact) => {
        DelivererService.insertDeliverer(companyName, address, contact)
    }
    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
            <DelivererList
                deliverersList={deliverers}
                updateDeliverer={updateDeliverer}
                insertDeliverer={insertDeliverer}
                deleteDeliverer={deleteDeliverer} />
        </div>
    )
}
export default DelivererContainer