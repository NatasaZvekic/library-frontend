import { useEffect, useState } from 'react'
import NewHead from '../Header/HeaderTwo'
import SupplierService from './SupplierService';
import SupplierList from './SupplierList'
import background from '../assets/photo/unnamed.jpg'

function SupplierContainer() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        SupplierService.getAllSuppliers().then((data) => {
            setSuppliers(data.data);
        })
    })

    const insertSupplier = (name, contact, address) => {
        SupplierService.insertSupplier(name, contact, address)
    }

    const updateSupplier = (id, name, contact, address) => {
        SupplierService.updateSupplier(id, name, contact, address)
    }

    const deleteSupplier = (id) => {
        SupplierService.deleteSupplier(id)
    }

    return (
        <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            <NewHead />
            <SupplierList supplierList={suppliers}
                insertSupplier={insertSupplier} 
                updateSupplier={updateSupplier}
                deleteSupplier={deleteSupplier}
                />
        </div>
    )
}

export default SupplierContainer