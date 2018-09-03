import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import TextInput from '../modules/TextInput';
import {ButtonPrimary} from '../modules/Button';

// Thunks
import registerThunk from '../../thunks/registerThunk';

class RegisterContainer extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	registerUser() {
		const username = document.getElementById('register-username').value;
		const fname = document.getElementById('register-fname').value;
		const lname = document.getElementById('register-lname').value;
		const email = document.getElementById('register-email').value;
		const password = document.getElementById('register-password').value;
		const confirm = document.getElementById('register-password-confirm').value;
		console.log(username, password, fname, lname, email);
		this.props.register(username, fname, lname, email, password);
	}

	render() {
		return (

			<div className="page-wrapper frame">
				<div className="content-section box col-center">
					<div className="w-fill">
						<h2>Register</h2>
					</div>
					<TextInput placeholder="Username" id="register-username" />
					<TextInput placeholder="First Name" id="register-fname"/>
					<TextInput placeholder="Last Name" id="register-lname"/>
					<TextInput placeholder="Email" id="register-email"/>
					<TextInput placeholder="Password" password id="register-password"/>
					<TextInput placeholder="Confirm password" password id="register-password-confirm"/>
					<ButtonPrimary style={{marginLeft: 'auto'}}
                                   onPointerDown={() => this.registerUser()}>
                        Sign up
                    </ButtonPrimary>
				</div>
			</div>
		);
	}
};

RegisterContainer.propTypes = {
	register: PropTypes.func

};

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = (dispatch) => ({
  	register: (username, fname, lname, email, password) => dispatch(registerThunk(username, fname, lname, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);