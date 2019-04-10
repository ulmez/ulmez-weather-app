import React from 'react';
import axios from 'axios';

import './RegisterPage.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            surName: '',
            email: '',
            password: '',
            passwordAgain: '',
            firstNameErrorMessage: '',
            surNameErrorMessage: '',
            emailErrorMessage: '',
            passwordErrorMessage: '',
            passwordAgainErrorMessage: '',
            successMessage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        let registerUserCheck = true;

        if(this.state.firstName === "") {
            registerUserCheck = false;

            this.setState({
                firstNameErrorMessage: 'No first name entered yet...'
            });
        } else {
            this.setState({
                firstNameErrorMessage: ''
            });
        }

        if(this.state.surName === "") {
            registerUserCheck = false;

            this.setState({
                surNameErrorMessage: 'No sur name entered yet...'
            });
        } else {
            this.setState({
                surNameErrorMessage: ''
            });
        }

        if(this.state.email === "") {
            registerUserCheck = false;

            this.setState({
                emailErrorMessage: 'No email entered yet...'
            });
        } else {
            this.setState({
                emailErrorMessage: ''
            });
        }

        if(this.state.password === "") {
            registerUserCheck = false;

            this.setState({
                passwordErrorMessage: 'No password entered yet...'
            });
        } else if(this.state.password.length < 6) {
            registerUserCheck = false;

            this.setState({
                passwordErrorMessage: 'Password must be at least 6 characters...'
            });
        } else {
            this.setState({
                passwordErrorMessage: ''
            });
        }

        if(this.state.passwordAgain === "") {
            registerUserCheck = false;

            this.setState({
                passwordAgainErrorMessage: 'No password again entered yet...'
            });
        } else if(this.state.password !== this.state.passwordAgain) {
            registerUserCheck = false;

            this.setState({
                passwordAgainErrorMessage: 'Password again not the same as password...'
            });
        } else {
            this.setState({
                passwordAgainErrorMessage: ''
            });
        }

        if(registerUserCheck) {
            console.log("Registration success!");

            const userItem = {
                firstname: this.state.firstName,
                surname: this.state.surName,
                email: this.state.email,
                password: this.state.password
            };

            await axios.post('/users/user/register', userItem);

            this.setState({
                successMessage: 'Successfully registered new user!'
            });

            this.setState({
                firstName: '',
                surName: '',
                email: '',
                password: '',
                passwordAgain: ''
            });

            const loginItem = {
                email: userItem.email,
                password: userItem.password
            };

            const userLoginObj = await axios.post('/users/user/login', loginItem);

            console.log(userLoginObj.data.token);

            localStorage.setItem('token', userLoginObj.data.token);

            setTimeout(() => {
                this.setState({
                    successMessage: ''
                });
            }, 4000);
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-5 mb-5">
                            <h2>Register new user</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="register-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                            <label className="register-page label-sized-text mb-0"><b>Firstname</b></label><br />
                            {this.state.firstNameErrorMessage !== "" && <label className="text-danger m-0">{this.state.firstNameErrorMessage}</label>}
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" placeholder="Enter Firstname..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Surname</b></label><br />
                            {this.state.surNameErrorMessage !== "" && <label className="text-danger m-0">{this.state.surNameErrorMessage}</label>}
                            <input type="text" name="surName" value={this.state.surName} onChange={this.handleChange} className="form-control" placeholder="Enter Surname..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Email</b></label><br />
                            {this.state.emailErrorMessage !== "" && <label className="text-danger m-0">{this.state.emailErrorMessage}</label>}
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter Email..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Password</b></label><br />
                            {this.state.passwordErrorMessage !== "" && <label className="text-danger m-0">{this.state.passwordErrorMessage}</label>}
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter Password..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Enter password again</b></label><br />
                            {this.state.passwordAgainErrorMessage !== "" && <label className="text-danger m-0">{this.state.passwordAgainErrorMessage}</label>}
                            <input type="password" name="passwordAgain" value={this.state.passwordAgain} onChange={this.handleChange} className="form-control mb-2" placeholder="Enter Password again..." />
                            <button className="register-page gradient-button btn btn-secondary btn-block" type="submit">Register</button>
                            {this.state.successMessage !== "" && <label className="text-success">{this.state.successMessage}</label>}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;