import axios from 'axios'

const VerifyToken = {

    verifyToken(){
        return axios.get("http://localhost:44324/verifyToken",
        { headers: { "token": localStorage.getItem("jwtToken") } })
    
    }
}
export default VerifyToken