import React from 'react';

import './HeaderPage.css';

class HeaderPage extends React.Component {
    render() {
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

export default HeaderPage;