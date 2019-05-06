import React from 'react';
import moment from 'moment';
import $ from 'jquery';

import celcius_icon from '../../../../images/c.svg';
import '../../../../fonts/meteocons-webfont/stylesheet.css';
import './ListBox.css';

class ListBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        };

        this.popupWindow = this.popupWindow.bind(this);
        this.hidePopupWindow = this.hidePopupWindow.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    popupWindow(id) {
        // console.log($("#hiddenPopup" + id).height());
        if(window.innerWidth >= 576) {
            console.log('popupWindow 1');
            const pos = $('#listCard' + id).position();
            const relX = window.event.pageX - pos.left;
            const hiddenPopup = $("#hiddenPopup" + id);
            const hiddenPopupList = $("[id*='hiddenPopup']");

            // hiddenPopup[0].style.display = "block";
            hiddenPopup[0].style.left = (relX + 15) + "px";
            hiddenPopup[0].style.top = 115 - $("#hiddenPopup" + id).height() + "px";

            // hiddenPopup.stop();
            // hiddenPopup.fadeIn(1000);
            hiddenPopup.show();

            for(let i = 0; i < hiddenPopupList.length; i++) {
                // console.log(hiddenPopupList[i]);
                if(hiddenPopupList[i].id !== "hiddenPopup" + id) {
                    // hiddenPopupList[i].style.display = "none";
                    $(hiddenPopupList[i]).hide();
                }
            }
        }
    }

    hidePopupWindow() {
        if(window.innerWidth >= 576) {
            console.log('hidePopupWindow 0');
            // console.log($("[id*='hiddenPopup']"));
            const hiddenPopupList = $("[id*='hiddenPopup']");
            // console.log(hiddenPopupList[0]);
            // $('[id*="cat"]')
            // const hiddenPopup = $("#hiddenPopup" + id);

            // hiddenPopup[0].style.display = "none";

            for(let i = 0; i < hiddenPopupList.length; i++) {
                hiddenPopupList[i].style.display = "none";
            }
        }
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {
        console.log('*********');
        console.log('*********');
        // console.log(this.state.width);
        // console.log(this.state.height);
        // console.log(this.state.showPopup);
        console.log(this.props);
        // console.log(this.state.RGBColor);
        console.log('*********');
        console.log('*********');
        // console.log(this.props.RGBTemperature);
        // console.log(this.props.weatherIcon);
        return (
            <div data-toggle={this.state.width < 576 && "modal"} data-target={"#myModal" + this.props.getIndex} id={"listCard" + this.props.getIndex} onMouseMove={() => this.popupWindow(this.props.getIndex)} onMouseLeave={this.hidePopupWindow} className="list-box background-outer col-sm-12 col-md-6 col-lg-4 col-xl-4 fade-in-list-box">
                <div className="row p-2 align-self-center">
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                    <div className="d-flex align-items-center list-box box-height col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3" style={{background: 'rgb(' + this.props.RGBTemperature[0] + ', ' + this.props.RGBTemperature[1] + ', ' + this.props.RGBTemperature[2] + ')'}}>
                        <span className="icon" data-icon={this.props.weatherIcon}></span>
                    </div>
                    <div className="d-flex align-items-center list-box box-height col-7 col-sm-5 col-md-7 col-lg-6 col-xl-7" style={{background: 'rgb(' + this.props.RGBTemperature[0] + ', ' + this.props.RGBTemperature[1] + ', ' + this.props.RGBTemperature[2] + ')'}}>
                        <div className="row">
                        <div className="list-box celsius-design col-12 text-center">{this.props.current.temp_c} <img src={celcius_icon} className="align-top" alt="°C" /></div>
                        <div className="col-12 text-center">{this.props.location.name}, {this.props.location.country}</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end list-box box-height col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2 p-0" style={{background: 'rgb(' + this.props.RGBTemperature[0] + ', ' + this.props.RGBTemperature[1] + ', ' + this.props.RGBTemperature[2] + ')'}}>
                        <span onClick={() => this.props.deleteBox(this.props.getIndex)} className="list-box celsius-design cursor-pointer fa fa-times-circle mt-1 mr-2"></span>
                    </div>
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                </div>
                <div id={"hiddenPopup" + this.props.getIndex} className="list-box hidden-popup">
                    <table className="table table-sm table-striped table-dark">
                        <thead>
                            <tr>
                                <th colSpan="2" className="pb-0"><h5>{this.props.location.name}</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>City</td>
                                <td>{this.props.location.name}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{this.props.location.country}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{moment(new Date(this.props.location.localtime).toISOString()).format('YYYY-MM-DD')}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{moment(new Date(this.props.location.localtime).toISOString()).format('HH:mm')}</td>
                            </tr>
                            <tr>
                                <td>Weather</td>
                                <td>{this.props.current.condition.text}</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>{this.props.current.temp_c}<img src={celcius_icon} alt="°C" /></td>
                            </tr>
                            <tr>
                                <td>Feels like</td>
                                <td>{this.props.current.feelslike_c}<img src={celcius_icon} alt="°C" /></td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{this.props.current.humidity} %</td>
                            </tr>
                            <tr>
                                <td>Wind direction</td>
                                <td>{this.props.current.wind_dir}</td>
                            </tr>
                            <tr>
                                <td>Wind degree</td>
                                <td>{this.props.current.wind_degree} °</td>
                            </tr>
                            <tr>
                                <td>Wind force</td>
                                <td>{this.props.current.wind_kph} kph</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* The Modal */}
                <div className="modal fade" id={"myModal" + this.props.getIndex}>
                    <div className="modal-dialog modal-dialog-centered">
                        <table className="table table-sm table-striped table-dark">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="pb-0"><h5>{this.props.location.name}</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>City</td>
                                    <td>{this.props.location.name}</td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>{this.props.location.country}</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>{moment(new Date(this.props.location.localtime).toISOString()).format('YYYY-MM-DD')}</td>
                                </tr>
                                <tr>
                                    <td>Time</td>
                                    <td>{moment(new Date(this.props.location.localtime).toISOString()).format('HH:mm')}</td>
                                </tr>
                                <tr>
                                    <td>Weather</td>
                                    <td>{this.props.current.condition.text}</td>
                                </tr>
                                <tr>
                                    <td>Temperature</td>
                                    <td>{this.props.current.temp_c}<img src={celcius_icon} alt="°C" /></td>
                                </tr>
                                <tr>
                                    <td>Feels like</td>
                                    <td>{this.props.current.feelslike_c}<img src={celcius_icon} alt="°C" /></td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{this.props.current.humidity} %</td>
                                </tr>
                                <tr>
                                    <td>Wind direction</td>
                                    <td>{this.props.current.wind_dir}</td>
                                </tr>
                                <tr>
                                    <td>Wind degree</td>
                                    <td>{this.props.current.wind_degree} °</td>
                                </tr>
                                <tr>
                                    <td>Wind force</td>
                                    <td>{this.props.current.wind_kph} kph</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default ListBox;