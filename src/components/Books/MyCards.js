import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router"

const MyCards = () => {
	let history = useHistory()

	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		//	window.location.reload();
		history.push("/home")
	}
	return (
		<div className="login">
			<body id="LoginForm" style={{ height: '1000px', paddingTop: "70px" }}>
				<div class="container">
					<div class="login-form">
						<div class="main-div">
							<form id="Login">
								<div class="form-group">
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											name="userName"
										/>
									</div>
									<div class="form-group"  style={{marginBottom: '50px'}}>
										<input
											type="text"
											class="form-control"
											name="userName"
										/>
									</div>
									
									<Cards
										cvc={data.cvc}
										expiry={data.expiry}
										focus={data.focus}
										name={data.name}
										number={data.number}
									/>
								</div>
								<div class="form-group">
									<input
										type="number"
										name="cvc"
										class="form-control"
										placeholder="CVC"
										onChange={handleInputChange}
									/>
								</div>
								<div class="form-group">
									<input
										type="date"
										name="expiry"
										class="form-control"
										placeholder="Expire Date"
										onChange={handleInputChange}
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										name="name"
										class="form-control"
										placeholder="Your Name"
										onChange={handleInputChange}
									/>
								</div>
								<div class="form-group">
									<input
										type="number"
										name="number"
										class="form-control"
										placeholder="Card Number"
										onChange={handleInputChange}
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										name="userName"
										class="form-control"
									/>
								</div>

								<button onClick={handleSubmit} class="btn btn-primary">Login</button>
							</form>
						</div>
					</div>
				</div>
			</body>
		</div>
	);
};

export default MyCards;