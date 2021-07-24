import axios from 'axios'
const SupplierService = {

    getAllSuppliers: () => {
        return axios.get("http://localhost:44324/suppliers",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },
    insertSupplier: (name, contact, address) => {
        const newSupplier = {
            companyName: name,
            supplierContant: Number(contact),
            supplierAddress: address
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("http://localhost:44324/suppliers", newSupplier, {
            headers: header
        })

    },
    updateSupplier: (id, name, contact, address) => {
        console.log(id + " " + name + " " + contact + " " + address)
        const newSupplier = {
            companyName: name,
            supplierContant: contact,
            supplierAddress: address
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/suppliers/${id}`, newSupplier, {
            headers: header
        })

    },

    deleteSupplier: (id) => {
        return axios.delete(`http://localhost:44324/suppliers/${id}`,
        { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    }
}

export default SupplierService