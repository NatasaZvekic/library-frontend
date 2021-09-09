export default function ValidateInfo(values){
    let errors = {}

    if(!values.number || values.number.length < 17){
        errors.number = "Card number required!"
    }

    if(!values.cvc){
        errors.cvc = "CVC required!"
    }
    if(!values.name){
        errors.name = "Name required!"
    }
return errors
}