export default function ValidateInfo(values){
    let errors = {}

    if(!values.genreName){
        errors.genreName = "Genre name required!"
    }



return errors
}