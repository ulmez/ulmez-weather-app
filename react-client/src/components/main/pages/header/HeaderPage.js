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

    logout() {
        localStorage.removeItem('token');

        this.props.setLoggedOut();
    }

    render() {
        console.log(this.props.isLoggedIn);
        return (
            <header>
                <nav className="header-page navbar navbar-expand-md bg-dark navbar-dark fixed-top nav-bk4">
                    <Link className="navbar-brand" to="/">UlmeZ Weather App</Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/lists">Lists</Link>
                            </li>
                            <li className="nav-item">
                                {this.props.isLoggedIn ? <Link className="nav-link" to="/" onClick={this.logout}>Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
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

// export default HeaderPage;

const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.hr.isLoggedIn,
        // authorityGrade: store.hr.authorityGrade,
        // seachedProducts: store.hr.seachedProducts,
        // numberOfPages: store.hr.numberOfPages,
        // userId: store.hr.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: () => dispatch(setLoggedIn()),
        setLoggedOut: () => dispatch(setLoggedOut()),
        // setSearchedProducts: (val) => dispatch(setSearchedProducts(val)),
        // setNumberOfPages: (val) => dispatch(setNumberOfPages(val)),
        // setUrlEndpoint: (val) => dispatch(setUrlEndpoint(val)),
        // setAuthorityGrade: (val) => dispatch(setAuthorityGrade(val))
    };
};

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(HeaderPage));