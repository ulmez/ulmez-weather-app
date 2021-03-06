import React from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedIn, setLoggedOut } from '../../../../store/actions/headerAction';

import './RegisterPage.css';

class RegisterPage extends React.Component {
    _isMounted = false;

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

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    async handleSubmit(event) {
        event.preventDefault();

        let registerUserCheck = true;

        if(this.state.firstName === "") {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    firstNameErrorMessage: 'No first name entered yet...'
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    firstNameErrorMessage: ''
                });
            }
        }

        if(this.state.surName === "") {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    surNameErrorMessage: 'No sur name entered yet...'
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    surNameErrorMessage: ''
                });
            }
        }

        if(this.state.email === "") {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    emailErrorMessage: 'No email entered yet...'
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    emailErrorMessage: ''
                });
            }
        }

        if(this.state.password === "") {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    passwordErrorMessage: 'No password entered yet...'
                });
            }
        } else if(this.state.password.length < 6) {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    passwordErrorMessage: 'Password must be at least 6 characters...'
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    passwordErrorMessage: ''
                });
            }
        }

        if(this.state.passwordAgain === "") {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    passwordAgainErrorMessage: 'No password again entered yet...'
                });
            }
        } else if(this.state.password !== this.state.passwordAgain) {
            registerUserCheck = false;

            if (this._isMounted) {
                this.setState({
                    passwordAgainErrorMessage: 'Password again not the same as password...'
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    passwordAgainErrorMessage: ''
                });
            }
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

            if (this._isMounted) {
                this.setState({
                    firstName: '',
                    surName: '',
                    email: '',
                    password: '',
                    passwordAgain: '',
                    successMessage: 'Successfully registered new user!'
                });
            }

            const loginItem = {
                email: userItem.email,
                password: userItem.password
            };

            const userLoginObj = await axios.post('/users/user/login', loginItem);

            // Set token to localStorage token
            localStorage.setItem('token', userLoginObj.data.token);

            // Set global redux variable isLoggedIn to true
            this.props.setLoggedIn();

            setTimeout(() => {
                if (this._isMounted) {
                    this.setState({
                        successMessage: ''
                    });
                }
            }, 4000);
        }
    }

    handleChange(event) {
        if (this._isMounted) {
            this.setState({[event.target.name]: event.target.value});
        }
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

const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.hr.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: () => dispatch(setLoggedIn()),
        setLoggedOut: () => dispatch(setLoggedOut())
    };
};

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(RegisterPage));