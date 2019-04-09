import React from 'react';

import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-5 mb-5">
                        <h2>Login user</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="login-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                        <label className="login-page label-sized-text mb-0 mt-3"><b>Email</b></label>
                        <input type="text" className="form-control" placeholder="Enter Email..." />
                        <label className="login-page label-sized-text mb-0 mt-3"><b>Password</b></label>
                        <input type="text" className="form-control mb-2" placeholder="Enter Password..." />
                        <button className="login-page gradient-button btn btn-secondary btn-block" type="submit">Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;