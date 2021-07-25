import axios from 'axios'

const DelivererService = {
    getAllDeliverers: () => {
        return axios.get("http://localhost:44324/deliverers",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteDeliverer: (id) => {
        return axios.delete(`http://localhost:44324/deliverers/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateDeliverer: (id, companyName, address, contact) => {
        const newDeliverer = {
            deliveryCompanyName: companyName,
            deliveryAddress: address,
            deliveryContant: contact
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/deliverers/${id}`,
            newDeliverer, {
            headers: header
        }).then(response => { })
            .catch(error => {

            });

    },
    insertDeliverer: (companyName, address, contact) => {
        const newDeliverer = {
            deliveryCompanyName: companyName,
            deliveryContant: Number(contact),
            deliveryAddress: address
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("http://localhost:44324/deliverers", newDeliverer, {
            headers: header
        })
            .then(response => {

            })
            .catch(error => {

            });

    },
}
export default DelivererService