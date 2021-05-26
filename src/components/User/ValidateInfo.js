export default function ValidateInfo(values){
    let errors = {}

    if(!values.name){
        errors.name = "Employee name required!"
    }
    if(!values.lastname){
        errors.lastname = "Employee lastname required!"
    }
    if(!values.address){
        errors.address = "Employee address required!"
    }
    if(!values.contact){
        errors.contact = "Contact required!"

    }if(!values.role){
        errors.role = "Role required!"
    }
    if(!values.password){
        errors.password = "Password required!"

    }if(!values.email){
        errors.email = "Email required!"
    }



return errors
}