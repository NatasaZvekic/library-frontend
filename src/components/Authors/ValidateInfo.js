export default function ValidateInfo(values){
    let errors = {}

    if(!values.name){
        errors.name = "Author name required!"
    }
    if(!values.lastname){
        errors.lastname = "Author lastname required!"

    }if(!values.yearOfBirth){
        errors.yearOfBirth = "Year of birth required!"
    }

return errors
}