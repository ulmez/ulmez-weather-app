import React from 'react';

import weathers from '../../../../inits/init';

import celcius_icon from '../../../../images/c.svg';
import '../../../../fonts/meteocons-webfont/stylesheet.css';
import './ListBox.css';

class ListBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setWeatherIcon: ''
        };
    }

    componentDidMount() {
        console.log(this.props.location);
        console.log(this.props.current);
        console.log(this.props.condition);
        console.log(weathers.types);

        if(this.props.current.is_day === 1) {
            for(let i = 0; i < weathers.types.length; i++) {
                if(weathers.types[i].code === this.props.condition.code) {
                    this.setState({
                        setWeatherIcon: weathers.types[i].night_or_day_icon[1]
                    });
                    break;
                }
            }
        } else {
            for(let i = 0; i < weathers.types.length; i++) {
                if(weathers.types[i].code === this.props.condition.code) {
                    this.setState({
                        setWeatherIcon: weathers.types[i].night_or_day_icon[0]
                    });
                    break;
                }
            }
        }
    }

    render() {
        return (
            <div className="list-box background-outer col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="row p-2 align-self-center">
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                    <div className="d-flex align-items-center list-box background-inner box-height col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3">
                        <span className="icon" data-icon={this.state.setWeatherIcon}></span>
                    </div>
                    <div className="d-flex align-items-center list-box background-inner box-height col-7 col-sm-5 col-md-7 col-lg-6 col-xl-7">
                        <div className="row">
                        <div className="list-box celsius-design col-12 text-center">{this.props.current.temp_c} <img src={celcius_icon} className="align-top" /></div>
                        <div className="col-12 text-center">{this.props.location.name}, {this.props.location.country}</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end list-box background-inner box-height col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2 p-0">
                        <span onClick={this.props.deleteBox} className="list-box celsius-design cursor-pointer fa fa-times-circle mt-1 mr-2"></span>
                    </div>
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                </div>
            </div>
        );
    }
}

export default ListBox;