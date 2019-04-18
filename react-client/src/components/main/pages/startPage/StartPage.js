import React, { Component } from 'react';
import axios from 'axios';

import './StartPage.css';
import ListBox from '../listBox/ListBox';

class StartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            weathers: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.searchCityName = this.searchCityName.bind(this);
    }

    searchCityName() {
        axios.get(`/apixus/apixu/city/${this.state.city}`)
        .then((result) => {
            this.state.weathers.push({
                location: result.data.stats.location,
                current: result.data.stats.current,
                condition: result.data.stats.current.condition
            });

            this.setState({
                weathers: this.state.weathers
            });

            console.log(this.state.weathers);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }

    deleteBox(index) {
        console.log(index);
        this.state.weathers.splice(index, 1);

        this.setState({
            weathers: this.state.weathers
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-5 mb-5">
                        <h2>UlmeZ Weather App</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="start-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                        <p className="cursive-text text-center">
                            How's the weather in...
                        </p>
                        <p className="input-group input-group-md">
                            <span className="start-page input-group-addon btn-white position-location-text">
                                <label className="start-page label-sized-text"><b>Location:</b></label>
                            </span>
                            <input type="text" value={this.state.city} onChange={this.handleChange} className="start-page form-control btn-white position-textfield" placeholder="Enter city..." />
                            <span className="start-page input-group-addon btn-white">
                                <span onClick={this.searchCityName} className="start-page fa fa-plus lime-green-text position-plus-icon"></span>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    {this.state.weathers.map((weather, index) => (
                        <ListBox key={index}
                            location={weather.location}
                            current={weather.current}
                            condition={weather.condition}
                            deleteBox={() => this.deleteBox(index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default StartPage;