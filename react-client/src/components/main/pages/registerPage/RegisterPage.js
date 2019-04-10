import React from 'react';

import './RegisterPage.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            surName: '',
            email: '',
            password: '',
            passwordAgain: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
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
                            <label className="register-page label-sized-text mb-0"><b>Firstname</b></label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" placeholder="Enter Firstname..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Surname</b></label>
                            <input type="text" name="surName" value={this.state.surName} onChange={this.handleChange} className="form-control" placeholder="Enter Surname..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Email</b></label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter Email..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Password</b></label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter Password..." />
                            <label className="register-page label-sized-text mb-0 mt-3"><b>Enter password again</b></label>
                            <input type="password" name="passwordAgain" value={this.state.passwordAgain} onChange={this.handleChange} className="form-control mb-2" placeholder="Enter Password again..." />
                            <button className="register-page gradient-button btn btn-secondary btn-block" type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;