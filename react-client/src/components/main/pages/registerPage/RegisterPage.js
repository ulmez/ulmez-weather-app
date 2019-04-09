import React from 'react';

import './RegisterPage.css';

class RegisterPage extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-5 mb-5">
                        <h2>Register new user</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="register-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                        <label className="register-page label-sized-text mb-0"><b>Firstname</b></label>
                        <input type="text" className="form-control" placeholder="Enter Firstname..." />
                        <label className="register-page label-sized-text mb-0 mt-3"><b>Surname</b></label>
                        <input type="text" className="form-control" placeholder="Enter Surname..." />
                        <label className="register-page label-sized-text mb-0 mt-3"><b>Username</b></label>
                        <input type="text" className="form-control" placeholder="Enter Username..." />
                        <label className="register-page label-sized-text mb-0 mt-3"><b>Password</b></label>
                        <input type="text" className="form-control" placeholder="Enter Password..." />
                        <label className="register-page label-sized-text mb-0 mt-3"><b>Enter password again</b></label>
                        <input type="text" className="form-control mb-2" placeholder="Enter Password again..." />
                        <button className="register-page gradient-button btn btn-secondary btn-block" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;