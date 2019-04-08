import React, { Component } from 'react';

import './StartPage.css';
import ListBox from '../listBox/ListBox';

class StartPage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-5 mb-5">
                        <h2>UlmeZ Weather App</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                        <p className="cursive-text text-center">
                            How's the weather in...
                        </p>
                        <p className="input-group input-group-md">
                            <span className="input-group-addon btn-white position-location-text">
                                <label className="label-sized-text"><b>Location:</b></label>
                            </span>
                            <input type="text" className="form-control btn-white position-textfield" placeholder="Enter city..." />
                            <span className="input-group-addon btn-white">
                                <span className="fa fa-plus lime-green-text position-plus-icon"></span>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <ListBox />
                    <ListBox />
                    <ListBox />
                    <ListBox />
                    <ListBox />
                    <ListBox />
                </div>
            </div>
        );
    }
}

export default StartPage;