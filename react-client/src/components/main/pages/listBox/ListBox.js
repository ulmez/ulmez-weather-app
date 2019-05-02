import React from 'react';
import moment from 'moment';

// import weathers from '../../../../inits/init';

import celcius_icon from '../../../../images/c.svg';
import '../../../../fonts/meteocons-webfont/stylesheet.css';
import './ListBox.css';
import $ from 'jquery';

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

    // componentDidMount() {
    //     console.log(this.props.location);
    //     console.log(this.props.current);
    //     console.log(this.props.condition);
    //     console.log(weathers.types);

    //     if(this.props.current.is_day === 1) {
    //         for(let i = 0; i < weathers.types.length; i++) {
    //             if(weathers.types[i].code === this.props.condition.code) {
    //                 this.setState({
    //                     setWeatherIcon: weathers.types[i].night_or_day_icon[1]
    //                 });
    //                 break;
    //             }
    //         }
    //     } else {
    //         for(let i = 0; i < weathers.types.length; i++) {
    //             if(weathers.types[i].code === this.props.condition.code) {
    //                 this.setState({
    //                     setWeatherIcon: weathers.types[i].night_or_day_icon[0]
    //                 });
    //                 break;
    //             }
    //         }
    //     }

    //     this.getRGBTemperature();
    // }

    // colorOfTemperature(arrRGBColor1, arrRGBColor2, numberOfGrades, temperature) {
    //     let checkAllowedTemperature;
    
    //     // Block to make span of colors restricted to numberOfGrades parameter.
    //     // If a city has temperature 33 and numberOfGrades are declared to 30,
    //     // temperature will be changed to 30 so the color range will be intact.
    //     if (temperature > numberOfGrades) {
    //         checkAllowedTemperature = numberOfGrades;
    //     } else if (temperature < -numberOfGrades) {
    //         checkAllowedTemperature = -numberOfGrades;
    //     } else {
    //         checkAllowedTemperature = temperature;
    //     }
    
    //     let r1, g1, b1, r2, g2, b2;
    
    //     // RGB color for start of range
    //     r1 = arrRGBColor1[0];
    //     g1 = arrRGBColor1[1];
    //     b1 = arrRGBColor1[2];
    
    //     // RGB color for end of range
    //     r2 = arrRGBColor2[0];
    //     g2 = arrRGBColor2[1];
    //     b2 = arrRGBColor2[2];
    
    //     let stepR, stepG, stepB;
    
    //     // Block to get the difference between starting
    //     // RGB color and ending RGB color even if the
    //     // starting color has a lower or higher value.
    //     if (r1 < r2) {
    //         stepR = (r2 - r1) / numberOfGrades;
    //     } else if (r1 > r2) {
    //         stepR = -(r1 - r2) / numberOfGrades;
    //     } else {
    //         stepR = 0;
    //     }
    
    //     if (g1 < g2) {
    //         stepG = (g2 - g1) / numberOfGrades;
    //     } else if (g1 > g2) {
    //         stepG = -(g1 - g2) / numberOfGrades;
    //     } else {
    //         stepG = 0;
    //     }
    
    //     if (b1 < b2) {
    //         stepB = (b2 - b1) / numberOfGrades;
    //     } else if (b1 > b2) {
    //         stepB = -(b1 - b2) / numberOfGrades;
    //     } else {
    //         stepB = 0;
    //     }
    
    //     // Change a negative value to a positive value
    //     if (checkAllowedTemperature < 0) {
    //         checkAllowedTemperature = -checkAllowedTemperature;
    //     }
    
    //     // Sets the RGB color to be used for the specific temperature
    //     let tempR = r1 + Math.floor(stepR * checkAllowedTemperature);
    //     let tempG = g1 + Math.floor(stepG * checkAllowedTemperature);
    //     let tempB = b1 + Math.floor(stepB * checkAllowedTemperature);
    
    //     return [tempR, tempG, tempB];
    // }

    // getRGBTemperature() {
    //     if (this.props.current.temp_c >= 0) {
    //         this.setState({
    //             RGBColor: this.colorOfTemperature([0, 158, 229], [191, 64, 0], 30, this.props.current.temp_c)
    //         });
	// 	} else {
    //         this.setState({
    //             RGBColor: this.colorOfTemperature([0, 158, 229], [40, 0, 102], 30, this.props.current.temp_c)
    //         });
	// 	}
    // }

    popupWindow(id) {
        if(window.innerWidth >= 576) {
            console.log(1);
            const pos = $('#listCard' + id).position();
            const relX = window.event.pageX - pos.left;
            const hiddenPopup = $("#hiddenPopup" + id);

            hiddenPopup[0].style.display = "block";
            hiddenPopup[0].style.left = (relX + 15) + "px";
        }
    }

    hidePopupWindow(id) {
        if(window.innerWidth >= 576) {
            console.log(0);
            const hiddenPopup = document.getElementById("hiddenPopup" + id);

            hiddenPopup.style.display = "none";
        }
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    test(id) {
        console.log('Funka det?... ' + id);
        const listCard = $('#listCard' + id);

        listCard.removeClass('fade-in-list-box');
        listCard.addClass('fade-out-list-box');

        setTimeout(() => {
            listCard.removeClass('fade-out-list-box');
            listCard.stop( true, true ).addClass('fade-in-list-box');
            this.props.deleteBox();
            // listCard.show();
        }, 500);
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
            <div data-toggle={this.state.width < 576 && "modal"} data-target={"#myModal" + this.props.getIndex} id={"listCard" + this.props.getIndex} onMouseMove={() => this.popupWindow(this.props.getIndex)} onMouseOut={() => this.hidePopupWindow(this.props.getIndex)} className="list-box background-outer col-sm-12 col-md-6 col-lg-4 col-xl-4 fade-in-list-box">
                <div className="row p-2 align-self-center">
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                    <div className="d-flex align-items-center list-box box-height col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3" style={{background: 'rgb(' + this.props.RGBTemperature[0] + ', ' + this.props.RGBTemperature[1] + ', ' + this.props.RGBTemperature[2] + ')'}}>
                        <span className="icon" data-icon={this.props.weatherIcon}></span>
                    </div>
                    <div className="d-flex align-items-center list-box box-height col-7 col-sm-5 col-md-7 col-lg-6 col-xl-7" style={{background: 'rgb(' + this.props.RGBTemperature[0] + ', ' + this.props.RGBTemperature[1] + ', ' + this.props.RGBTemperature[2] + ')'}}>
                        <div className="row">
                        <div className="list-box celsius-design col-12 text-center">{this.props.current.temp_c} <img src={celcius_icon} className="align-top" /></div>
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
                                <th scope="col" colSpan="2">Weather statistics</th>
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
                                <td>{moment(this.props.location.localtime).format('YYYY-MM-DD')}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{moment(this.props.location.localtime).format('HH:mm')}</td>
                            </tr>
                            <tr>
                                <td>Weather</td>
                                <td>{this.props.current.condition.text}</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>{this.props.current.temp_c}<img src={celcius_icon} /></td>
                            </tr>
                            <tr>
                                <td>Feels like</td>
                                <td>{this.props.current.feelslike_c}<img src={celcius_icon} /></td>
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

                {/* Button to Open the Modal */}
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#myModal" + this.props.getIndex}>
                Open modal
                </button> */}

                {/* The Modal */}
                <div className="modal fade" id={"myModal" + this.props.getIndex}>
                    <div className="modal-dialog modal-dialog-centered">
                    <table className="table table-sm table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan="2">Weather statistics</th>
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
                                        <td>{moment(this.props.location.localtime).format('YYYY-MM-DD')}</td>
                                    </tr>
                                    <tr>
                                        <td>Time</td>
                                        <td>{moment(this.props.location.localtime).format('HH:mm')}</td>
                                    </tr>
                                    <tr>
                                        <td>Weather</td>
                                        <td>{this.props.current.condition.text}</td>
                                    </tr>
                                    <tr>
                                        <td>Temperature</td>
                                        <td>{this.props.current.temp_c}<img src={celcius_icon} /></td>
                                    </tr>
                                    <tr>
                                        <td>Feels like</td>
                                        <td>{this.props.current.feelslike_c}<img src={celcius_icon} /></td>
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
                        {/* <div className="modal-content"> */}
                        

                        {/* Modal Header */}
                        {/* <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div> */}

                        {/* Modal body */}
                        {/* <div className="modal-body">
                            
                        </div> */}

                        {/* Modal footer */}
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> */}

                        {/* </div> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default ListBox;