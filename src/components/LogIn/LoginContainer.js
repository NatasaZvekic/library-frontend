// import React, { Component } from 'react'
// import LoginService from './LoginService'
// import FormSignUp from './FormSignUp';
// import Example from './Example';


// export default class LoginContainer extends Component {

//      Login(username, password) { console.log(" i do log" + username + " " + password)
//         LoginService.AddNewBook(username, password)
//             .then((data) => { 
//                 localStorage.setItem("jwtToken", data.data.token)
//                 console.log(data.data.token + " data");
//                 localStorage.setItem("role", data.data.role)
//                 console.log(data.data.role + " role") 
//                 return data.data
//             }).catch(function (error) {
//             })       
//     }
//     render() {
//         return (
//             <div>
//                 <FormSignUp login={this.Login}/>
           
//             </div>
//         )
//     }
// }


import React from 'react'
import { connect } from 'react-redux'
import LoginService from './LoginService'
import FormSignUp from './FormSignUp';
import Header from '../Header/Header'
import car from '../assets/photo/library1.jpg'
import Try from '../../Try';
import NewHead from '../Header/NewHead';
const LoginContainer = () => {

    const  Login = async (username, password) => { console.log(" i do log" + username + " " + password)
       await LoginService.AddNewBook(username, password)
            .then((data) => {  console.log(" i do log" + username + " " + password)
                localStorage.setItem("jwtToken", data.data.token)
                console.log(data.status + " data");
                localStorage.setItem("role", data.data.role)
              //  console.log(data.data.role + " role") 
                return data.status
            }).catch(function (error) {
            })       
    }

    return (
        <div className="login" style={{'backgroundImage' : car}}>
            <NewHead/>
            {/* <Try login={Login}/> */}
              <FormSignUp login={Login}/>
            
        </div>
    )
}

export default LoginContainer


