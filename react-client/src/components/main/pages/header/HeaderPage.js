import React from 'react';
import axios from 'axios';

import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedIn, setLoggedOut } from '../../../../store/actions/headerAction';
import { authenticationCheck } from '../../../helpers/users';

import './HeaderPage.css';

class HeaderPage extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        authenticationCheck(this);
    }

    // Logout of user
    logout() {
        const token = localStorage.getItem('token');

        const tokenHeader = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };
    
        // Blacklisting users token, removing localStorage token
        // and setting redux global variable isLoggedIn to false
        axios.post('/users/user/logout', null, tokenHeader)
        .then((res) => {
            console.log(res.data);
            localStorage.removeItem('token');
            this.props.setLoggedOut();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <header>
                <nav className="header-page navbar navbar-expand-md bg-dark navbar-dark fixed-top nav-bk4">
                    <Link className="navbar-brand" to="/start">UlmeZ Weather App</Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/start">Start</Link>
                            </li>
                            <li className="nav-item">
                                {this.props.isLoggedIn && <Link className="nav-link" to="/lists">Lists</Link>}
                            </li>
                            <li className="nav-item">
                                {this.props.isLoggedIn ? <Link className="nav-link" to="/start" onClick={this.logout}>Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
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

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(HeaderPage));