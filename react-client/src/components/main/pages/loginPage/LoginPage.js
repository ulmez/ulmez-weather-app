import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedIn, setLoggedOut } from '../../../../store/actions/headerAction';

import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailErrorMessage: '',
            passwordErrorMessage: '',
            axiosErrorMessage: '',
            successMessage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        let loginUserCheck = true;

        if(this.state.email === "") {
            loginUserCheck = false;

            this.setState({
                emailErrorMessage: 'No email entered yet...'
            });
        } else {
            this.setState({
                emailErrorMessage: ''
            });
        }

        if(this.state.password === "") {
            loginUserCheck = false;

            this.setState({
                passwordErrorMessage: 'No password entered yet...'
            });
        } else {
            this.setState({
                passwordErrorMessage: ''
            });
        }

        if(loginUserCheck) {
            console.log("Login success!");

            const loginItem = {
                email: this.state.email,
                password: this.state.password
            };

            try {
                const userLoginObj = await axios.post('/users/user/login', loginItem);

                console.log(userLoginObj.data.token);

                localStorage.setItem('token', userLoginObj.data.token);

                this.props.setLoggedIn();

                this.setState({
                    email: '',
                    password: '',
                    successMessage: 'Successfully logged in user!'
                });

                setTimeout(() => {
                    this.setState({
                        successMessage: ''
                    });
                }, 4000);
            } catch(e) {
                console.log('Not right login criteria...');

                this.setState({
                    axiosErrorMessage: 'Not valid login criteria...',
                    successMessage: ''
                });

                setTimeout(() => {
                    this.setState({
                        axiosErrorMessage: ''
                    });
                }, 3000);
            }
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
                            <h2>Login user</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="login-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                            <label className="login-page label-sized-text mb-0 mt-3"><b>Email</b></label><br />
                            {this.state.emailErrorMessage !== "" && <label className="text-danger m-0">{this.state.emailErrorMessage}</label>}
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter Email..." />
                            <label className="login-page label-sized-text mb-0 mt-3"><b>Password</b></label><br />
                            {this.state.passwordErrorMessage !== "" && <label className="text-danger m-0">{this.state.passwordErrorMessage}</label>}
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-2" placeholder="Enter Password..." />
                            <button className="login-page gradient-button btn btn-secondary btn-block" type="submit">Login</button>
                            {this.state.axiosErrorMessage !== "" && <label className="text-danger m-0">{this.state.axiosErrorMessage}</label>}
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

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(LoginPage));