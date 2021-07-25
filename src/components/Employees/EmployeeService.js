import axios from 'axios'

const EmployeeService = {

    getAllEmployees: () => {
        return axios.get("http://localhost:44324/employees",
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    deleteEmployee: (id) => {
        return axios.delete(`http://localhost:44324/employees/${id}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("jwtToken")}` } })
    },

    updateEmployee: (id, name, lastname, role, email, ssn, contact) => {
        const newEmployee = {
            employeeName: name,
            employeeLastName: lastname,
            employeeContact: contact,
            ssn: ssn,
            email: email,
            role: role
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.put(`http://localhost:44324/employees/${id}`, newEmployee, {
            headers: header
        }).then(response => { })
            .catch(error => {
            });

    },
    insertEmployee: (name, lastname, role, email, password, contact, ssn) => {
        console.log("password " + password + " name: " + name + " last " + lastname + " role:" + role + " email" + email + " ssn: " + ssn + " contect:" + contact)
        const newEmployee = {
            employeeName: name,
            employeeLastName: lastname,
            employeeContact: Number(contact),
            ssn: Number(ssn),
            email: email,
            password: password,
            role: role
        }
        const header = {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        }
        return axios.post("http://localhost:44324/employees", newEmployee, {
            headers: header
        }).then(response => { })
            .catch(error => {
            });

    },
}
export default EmployeeService
