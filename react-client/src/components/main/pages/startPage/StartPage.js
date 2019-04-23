import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
        this.addWeatherList = this.addWeatherList.bind(this);
    }

    componentWillReceiveProps() {
        console.log('route reload');
        this.setState({
            weathers: []
        });
    }

    componentDidMount() {
        if(this.props.location.state !== undefined) {
            this.props.location.state.weathers.map(async (city) => {
                const weather = await axios.get(`/apixus/apixu/city/${city}`);

                this.state.weathers.push({
                    location: weather.data.stats.location,
                    current: weather.data.stats.current,
                    condition: weather.data.stats.current.condition
                });

                this.setState({
                    weathers: this.state.weathers
                });
            });
        }
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

            // console.log(this.state.weathers);
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

    async addWeatherList() {
        if(localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
    
            const tokenHeader = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
    
            const userAuth = await axios.post('/users/user/auth', null, tokenHeader);
            console.log(userAuth.data.userId);

            // console.log('**************');
            // console.log(this.state.weathers);
            // console.log('**************');
            const nameList = [];

            this.state.weathers.map((weather) => {
                // console.log(weather.location.name);
                nameList.push(weather.location.name);
            });
            console.log(nameList);

            const addItem = {
                id: userAuth.data.userId,
                weathers: nameList
            };

            await axios.post('/users/user/addlist', addItem);
        }
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.location.state);
        // console.log(this.state.weathers);
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
                    {this.state.weathers.length > 0 && this.props.isLoggedIn && <div className="col-12" style={{border: '0px solid black'}}>
                        <button onClick={this.addWeatherList} className="btn btn-info">Add list selection</button>
                    </div>}
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

// export default StartPage;

const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.hr.isLoggedIn
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setLoggedIn: () => dispatch(setLoggedIn()),
//         setLoggedOut: () => dispatch(setLoggedOut())
//     };
// };

export default withRouter(connect(mapStoreToProps, null)(StartPage));