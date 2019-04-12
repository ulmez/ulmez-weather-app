import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedIn, setLoggedOut } from '../../../../store/actions/headerAction';

import './HeaderPage.css';

class HeaderPage extends React.Component {
    render() {
        console.log(this.props.isLoggedIn);
        return (
            <header>
                <nav className="header-page navbar navbar-expand-md bg-dark navbar-dark fixed-top nav-bk4">
                    <a className="navbar-brand" href="/">UlmeZ Weather App</a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/lists">Lists</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
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