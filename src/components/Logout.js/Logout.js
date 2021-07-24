import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router';
import background from '../assets/photo/unnamed.jpg'
import Header from '../Header/HeaderTwo';

export default class Logout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false,
        }
    }

    logOut() {
        this.setState({ loggedOut: true })
        localStorage.removeItem("jwtToken")
        localStorage.removeItem("role")
        localStorage.removeItem("userID")
        localStorage.removeItem("userName")
        localStorage.setItem("logged", false);

    }
    cancel() {
        this.setState({ loggedOut: true })
    }
    render() {
        // localStorage.removeItem("jwtToken");
        // localStorage.removeItem("role")
    
        if (this.state.loggedOut === true) {
            window.location.reload();
            return <Redirect to="/home" />
        }
        return (
            <div>
                <Header/>
            <body id="LoginForm" style={{ height: '1000px', paddingTop: "70px" }}>
                <div class="container">
                    <div class="login-form">
                        <div class="main-div">
                            <div class="panel">
                            {/* <h1 class="loginTitle">LOGIN</h1> */}
                                <p>Are you sure you want to logout?</p>
                            </div>
                            <form id="Login">
                                <button type="submit" onClick={this.logOut.bind(this)} class="btn btn-primary">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>


            {/* <Modal show={opened}  onHide={handleShow}>
                <Modal.Header style={{ background: 'firebrick', color:'white'}}>Your email or password is invalid. Please try again.</Modal.Header>
            </Modal>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1 class="loginTitle">LOGIN</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className="textBox"
                    name="email"
                    value={values.email}
                    onChange={handleChange} />
                {<p>{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    className="textBox"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                <button type="submit" className="loginBtn">Log in</button> <br/>
                <Link to="register" className="registerBtn">Dont have an account? Register</Link>
            </form> */}
        </div >)

            // <div className="login" style={{ backgroundColor: '#f2e6ff' }}>
            //     <Header/>
            //     <Modal.Dialog>
            //         <Modal.Header closeButton>
            //             <Modal.Title>Log out</Modal.Title>
            //         </Modal.Header>

            //         <Modal.Body>
            //             <p>Are you sure you want to logout?</p>
            //         </Modal.Body>

            //         <Modal.Footer>
            //             <Button onClick={this.cancel.bind(this)} variant="secondary">Close</Button>
            //             <Button onClick={this.logOut.bind(this)} variant="primary">Logout</Button>
            //         </Modal.Footer>
            //     </Modal.Dialog>
            // </div>
      //  )
    }//
}
