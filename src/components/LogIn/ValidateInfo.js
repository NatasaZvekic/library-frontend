import validator from 'validator'
export default function ValidateInfo(values) {
    let errors = {}

    if (values.password.length == 0) {
        errors.password = "Password required!"
    }
    if (values.email.length == 0) {
        errors.email = "Email required!"
    }

    return errors
}