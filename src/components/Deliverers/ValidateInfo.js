export default function ValidateInfo(values){
    let errors = {}

    if(!values.name){
        errors.name = "Company name required!"
    }
    if(!values.contact){
        errors.contact = "Contact required!"

    }if(!values.address){
        errors.address = "Address required!"
    }

return errors
}