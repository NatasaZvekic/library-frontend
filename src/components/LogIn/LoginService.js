import axios from 'axios'
const LoginService = {

    AddNewBook: (username, password) => {
        const user = {
            email: username,
            password:password
        }
        return axios.post("https://localhost:44324/authenticate", user)
        
        
    }
}

export default LoginService