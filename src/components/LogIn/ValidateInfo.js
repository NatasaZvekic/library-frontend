export default function ValidateInfo(values){
    let errors = {}

    if(!values.email){
        errors.email = "Email required!"
    }

    if(!values.password){
        errors.password = "Username required!"
    }


return errors
}