import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import _ from 'lodash';
import Konva from 'konva';

import { setCitiesOnMap, setBackRefreshCheck } from '../../../../store/actions/headerAction';

import { weathers, cities } from '../../../../inits/init';

import ListBox from '../listBox/ListBox';

import celcius_icon from '../../../../images/c.svg';
import './StartPage.css';

class StartPage extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            city: '',
            listName: '',
            weathers: [],
            showDropdownBox: true,
            imagePaths: ['https://i.imgur.com/K7k4Iaa.jpg'],
            popup: {
                city: '',
                country: '',
                date: '2018-08-08',
                weather: '',
                temperature: '',
                feelsLike: '',
                humidity: '',
                windDirection: '',
                windDegree: '',
                windForce: ''
            },
            width: 0,
            height: 0
        };

        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeListName = this.handleChangeListName.bind(this);
        this.searchCityName = this.searchCityName.bind(this);
        this.addWeatherList = this.addWeatherList.bind(this);
        this.dropdownSelect = this.dropdownSelect.bind(this);
        this.abortDrowdownBox = this.abortDrowdownBox.bind(this);
        this.resizeCanvas = this.resizeCanvas.bind(this);
    }

    componentWillReceiveProps() {
        console.log('route reload');
        this.props.history.push("/");
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;

        if(this.props.refreshCheck) {
            this.props.history.push("/");
        } else {
            this.canvasGenerator(this);
            this.resizeCanvas();
            window.addEventListener('resize', this.resizeCanvas);

            // Check if user have choosen a weather list
            if(this.props.location.state !== undefined) {
                // Loop through all cities names
                this.props.location.state.weathers.map((city) => {
                    // Get weather stats from each city in APIXU
                    return axios.get(`/apixus/apixu/city/${city}`)
                    .then((item) => {
                        this.state.weathers.push({
                            location: item.data.stats.location,
                            current: item.data.stats.current,
                            condition: item.data.stats.current.condition
                        });
    
                        if (this._isMounted) {
                            // Load in all weather stats in state listName and weathers
                            this.setState({
                                listName: this.props.location.state.listName,
                                weathers: this.state.weathers
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                });
            }
        }
    }

    // Search for weather stats of specific city
    searchCityName() {
        // Get weather stats from entered text in search textfield
        axios.get(`/apixus/apixu/city/${this.state.city}`)
        .then((result) => {
            // Push in searched city weather stats to state weathers
            this.state.weathers.push({
                location: result.data.stats.location,
                current: result.data.stats.current,
                condition: result.data.stats.current.condition
            });

            if (this._isMounted) {
                // Do this to update city weather stats
                this.setState({
                    weathers: this.state.weathers,
                    city: ''
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleChangeCity(event) {
        if (this._isMounted) {
            this.setState({
                city: event.target.value,
                showDropdownBox: true
            });
        }
    }

    handleChangeListName(event) {
        if (this._isMounted) {
            this.setState({
                listName: event.target.value
            });
        }
    }

    // Removes weather box
    deleteBox(index) {
        const listCard = $('#listCard' + index);

        listCard.fadeOut(500);

        setTimeout(() => {
            // Removes selected box from the state weathers array
            this.state.weathers.splice(index, 1);

            if (this._isMounted) {
                // Do this to update city weather stats
                this.setState({
                    weathers: this.state.weathers
                });
            }

            listCard.fadeIn(0);
        }, 400);
    }

    // Add or edit  weather list for user
    async addWeatherList() {
        try {
            // Check if localStorage token are set
            if(localStorage.getItem('token')) {
                const token = localStorage.getItem('token');
        
                const tokenHeader = {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                };

                const userAuth = await axios.post('/users/user/auth', null, tokenHeader);
                const nameList = [];

                this.state.weathers.forEach((weather) => {
                    nameList.push(weather.location.name);
                });

                // Check that user have selected a list to edit
                if(this.props.location.state !== undefined) {
                    const editItem = {
                        id: userAuth.data.userId,
                        listId: this.props.location.state.listId,
                        listName: this.state.listName,
                        weathers: nameList
                    };

                    // Updates selected list to user
                    await axios.post('/users/user/editlist', editItem, tokenHeader);
                } else {
                    const addItem = {
                        id: userAuth.data.userId,
                        listName: this.state.listName,
                        weathers: nameList
                    };

                    // Adds new list to user
                    await axios.post('/users/user/addlist', addItem, tokenHeader);
                }

                // Redirected to list page
                this.props.history.push("/lists");
            }
        } catch(err) {
            console.log(err);
        }
    }

    colorOfTemperature(arrRGBColor1, arrRGBColor2, numberOfGrades, temperature) {
        let checkAllowedTemperature;
    
        // Block to make span of colors restricted to numberOfGrades parameter.
        // If a city has temperature 33 and numberOfGrades are declared to 30,
        // temperature will be changed to 30 so the color range will be intact.
        if (temperature > numberOfGrades) {
            checkAllowedTemperature = numberOfGrades;
        } else if (temperature < -numberOfGrades) {
            checkAllowedTemperature = -numberOfGrades;
        } else {
            checkAllowedTemperature = temperature;
        }
    
        let r1, g1, b1, r2, g2, b2;
    
        // RGB color for start of range
        r1 = arrRGBColor1[0];
        g1 = arrRGBColor1[1];
        b1 = arrRGBColor1[2];
    
        // RGB color for end of range
        r2 = arrRGBColor2[0];
        g2 = arrRGBColor2[1];
        b2 = arrRGBColor2[2];
    
        let stepR, stepG, stepB;
    
        // Block to get the difference between starting
        // RGB color and ending RGB color even if the
        // starting color has a lower or higher value.
        if (r1 < r2) {
            stepR = (r2 - r1) / numberOfGrades;
        } else if (r1 > r2) {
            stepR = -(r1 - r2) / numberOfGrades;
        } else {
            stepR = 0;
        }
    
        if (g1 < g2) {
            stepG = (g2 - g1) / numberOfGrades;
        } else if (g1 > g2) {
            stepG = -(g1 - g2) / numberOfGrades;
        } else {
            stepG = 0;
        }
    
        if (b1 < b2) {
            stepB = (b2 - b1) / numberOfGrades;
        } else if (b1 > b2) {
            stepB = -(b1 - b2) / numberOfGrades;
        } else {
            stepB = 0;
        }
    
        // Change a negative value to a positive value
        if (checkAllowedTemperature < 0) {
            checkAllowedTemperature = -checkAllowedTemperature;
        }
    
        // Sets the RGB color to be used for the specific temperature
        const tempR = r1 + Math.floor(stepR * checkAllowedTemperature);
        const tempG = g1 + Math.floor(stepG * checkAllowedTemperature);
        const tempB = b1 + Math.floor(stepB * checkAllowedTemperature);
    
        return [tempR, tempG, tempB];
    }

    // Choose temperature scale depending on if
    // temperature is over or below zero celcius
    getRGBTemperature(temperature) {
        if (temperature >= 0) {
            return this.colorOfTemperature([0, 158, 229], [191, 64, 0], 30, temperature);
		} else {
            return this.colorOfTemperature([0, 158, 229], [40, 0, 102], 30, temperature);
		}
    }

    // Get right icon depending on if its night or day
    getWeatherIcon(is_day, code) {
        if(is_day === 1) {
            for(let i = 0; i < weathers.types.length; i++) {
                if(weathers.types[i].code === code) {
                    return weathers.types[i].night_or_day_icon[1];
                }
            }
        } else {
            for(let i = 0; i < weathers.types.length; i++) {
                if(weathers.types[i].code === code) {
                    return weathers.types[i].night_or_day_icon[0];
                }
            }
        }
    }

    // Returns list of cities to choose depending on text in the search text field
    citySearch(searchCriteria) {
        const sortedCities = _.orderBy(cities, ['city'],['asc']);

        if(searchCriteria.trim() !== '') {
            return sortedCities.filter((o) => {
                return o.city.toLowerCase().includes(searchCriteria.toLowerCase().trim());
            });
        } else {
            return [];
        }
    }

    // Get and set text for selected city in search dropdown box
    dropdownSelect(event) {
        if (this._isMounted) {
            this.setState({
                city: event.target.parentNode.firstChild.textContent,
                showDropdownBox: false
            });
        }
    }

    // Set to hide the search dropdown box
    abortDrowdownBox() {
        if (this._isMounted) {
            this.setState({
                showDropdownBox: false
            });
        }
    }

    // Load images and run the whenLoaded callback when all have loaded
    // The callback is passed an array of loaded Image objects
    loadImages(paths, whenLoaded) {
        const imgs=[];
        let counter = 0;
        paths.forEach((path) => {
            const img = new Image();
            img.onload = () => {
                counter++;
                imgs[path] = img;
                if(counter === paths.length) {
                    whenLoaded(imgs);
                }
            }
            img.src = path;
        });
    }

    // Generates content in canvas
    canvasGenerator(thisParam) {
        // Do this to make sure europe image map have loaded before using it
        this.loadImages(this.state.imagePaths, (loadedImages) => {
            // Converts R, G, B to hex
            const componentToHex = (c) => {
                var hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }
            
            // Converts RBG color to hex color
            const rgbToHex = (r, g, b) => {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }
    
            // Dimension on canvas
            const width = 541;
            const height = 250;
    
            // Sets and places all objects to canvas
            const drawImage = () => {
                // Stage
                const stage = new Konva.Stage({
                    container: 'canvas-container',
                    width: width,
                    height: height,
                    visible: false
                });
    
                // Layer
                const layer = new Konva.Layer();

                // Europe map
                const europeMapImage = new Konva.Image({
                    image: loadedImages['https://i.imgur.com/K7k4Iaa.jpg']
                });

                // Generate Label
                const label = (text, x, y, rgbColor, temperature) => {
                    // Label
                    const simpleLabel = new Konva.Label({
                        x: x,
                        y: y
                    });

                    // Add circle to label
                    simpleLabel.add(
                        new Konva.Circle({
                            x: -11,
                            y: 8,
                            radius: 8,
                            fill: rgbColor,
                            stroke: 'black',
                            strokeWidth: 1
                        })
                    );

                    // Add tag to label
                    simpleLabel.add(
                        new Konva.Tag({
                            fill: 'black',
                            opacity: 0.6
                        })
                    );

                    // Add text to label
                    simpleLabel.add(
                        new Konva.Text({
                            text: text + ' ' + temperature + ' °C',
                            fontFamily: 'Verdana',
                            fontSize: 8,
                            padding: 4,
                            fill: 'white'
                        })
                    );

                    return simpleLabel;
                }

                // Europe image map url address
                const europeImageUrl = 'https://i.imgur.com/K7k4Iaa.jpg';

                // Group
                const group = new Konva.Group({
                    x: stage.width() / 2 - loadedImages[europeImageUrl].width / 2,
                    y: stage.height() / 2 - loadedImages[europeImageUrl].height / 2,
                    width: loadedImages[europeImageUrl].width,
                    height: loadedImages[europeImageUrl].height,
                    draggable: true,
                    dragBoundFunc: (pos) => {
                        let newX, newY;
    
                        if(pos.x < 0 && pos.x > -(loadedImages[europeImageUrl].width - width)) {
                            newX = pos.x;
                        } else {
                            if(pos.x < 0) {
                                newX = -(loadedImages[europeImageUrl].width - width);
                            }
                            else if(pos.x > -(loadedImages[europeImageUrl].width - width)) {
                                newX = 0;
                            }
                        }

                        if(pos.y < 0 && pos.y > -(loadedImages[europeImageUrl].height - height)) {
                            newY = pos.y;
                        } else {
                            if(pos.y < 0) {
                                newY = -(loadedImages[europeImageUrl].height - height);
                            }
                            else if(pos.y > -(loadedImages[europeImageUrl].height - height)) {
                                newY = 0;
                            }
                        }

                        return {
                            x: newX,
                            y: newY
                        };
                    }
                });

                // add cursor styling to europe image map
                europeMapImage.on('mouseover', () => {
                    document.body.style.cursor = 'pointer';
                });

                // add cursor styling to europe image map
                europeMapImage.on('mouseout', () => {
                    document.body.style.cursor = 'default';
                });

                // Add europe image map to group
                group.add(europeMapImage);

                // Loop through all cities to place on europe image map
                thisParam.props.citiesOnMap.forEach(async (item) => {
                    // Get RGB color to use for temperature
                    const colorTemp = await thisParam.getRGBTemperature(item.current.temp_c);

                    // Set key colorTemperature to item object
                    item.colorTemperature = colorTemp;

                    const name = item.location.name.toUpperCase();
                    const x = item.x;
                    const y = item.y;
                    const rgb = item.colorTemperature;
                    const temperature = item.current.temp_c;

                    // Set label
                    const simpleLabel = label(name, x, y, rgbToHex(rgb[0], rgb[1], rgb[2]), temperature);

                    // Add mousemove event to label
                    simpleLabel.on('mousemove', () => {
                        if(thisParam.state.width >= 576) {
                            const popup = document.getElementById('popup');
                            popup.style.top = (window.event.pageY - 200) + 'px';
                            popup.style.left = (window.event.pageX + 15) + 'px';
                            popup.style.display = 'block';
                        }
                    });

                    // Add mouseenter event to label
                    simpleLabel.on('mouseenter', () => {
                        if (thisParam._isMounted) {
                            thisParam.setState({
                                popup: {
                                    city: item.location.name,
                                    country: item.location.country,
                                    date: item.location.localtime,
                                    weather: item.current.condition.text,
                                    temperature: item.current.temp_c,
                                    feelsLike: item.current.feelslike_c,
                                    humidity: item.current.humidity,
                                    windDirection: item.current.wind_dir,
                                    windDegree: item.current.wind_degree,
                                    windForce: item.current.wind_kph
                                }
                            });
                        }
                    });
    
                    // Add mouseout event to label
                    simpleLabel.on('mouseout', () => {
                        const popup = document.getElementById('popup');
                        popup.style.display = 'none';
            
                        document.body.style.cursor = 'default';
                    });

                    // Add click event to label
                    simpleLabel.on('click', () => {
                        if(thisParam.state.width < 576) {
                            if (thisParam._isMounted) {
                                thisParam.setState({
                                    popup: {
                                        city: item.location.name,
                                        country: item.location.country,
                                        date: item.location.localtime,
                                        weather: item.current.condition.text,
                                        temperature: item.current.temp_c,
                                        feelsLike: item.current.feelslike_c,
                                        humidity: item.current.humidity,
                                        windDirection: item.current.wind_dir,
                                        windDegree: item.current.wind_degree,
                                        windForce: item.current.wind_kph
                                    }
                                });
                            }
                            $('#popupModal').modal('show');
                        }

                        if (thisParam._isMounted) {
                            thisParam.setState({
                                city: item.location.name,
                                showDropdownBox: false
                            });
                        }
                    });

                    // Add tap event to label
                    simpleLabel.on('tap', () => {
                        if (thisParam._isMounted) {
                            thisParam.setState({
                                city: item.location.name,
                                showDropdownBox: false,
                                popup: {
                                    city: item.location.name,
                                    country: item.location.country,
                                    date: item.location.localtime,
                                    weather: item.current.condition.text,
                                    temperature: item.current.temp_c,
                                    feelsLike: item.current.feelslike_c,
                                    humidity: item.current.humidity,
                                    windDirection: item.current.wind_dir,
                                    windDegree: item.current.wind_degree,
                                    windForce: item.current.wind_kph
                                }
                            });
                        }
                        $('#popupModal').modal('show');
                    });

                    // Add label to group
                    group.add(simpleLabel);

                    // Draw content in layer
                    layer.draw();
                });
                $("#startPageContainer").css({visibility: "visible"});

                // Add group to layer
                layer.add(group);

                // Add layer to stage
                stage.add(layer);

                // Show stage
                stage.show();
            }

            // Display everything
            drawImage();
        });
    }

    resizeCanvas() {
        if (this._isMounted) {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    }

    render() {
        return (
            <div id="startPageContainer" style={{visibility: 'hidden'}}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-1 mb-2">
                        <h2>UlmeZ Weather App</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="start-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design pt-3 pb-4">
                        <p className="cursive-text text-center">
                            How's the weather in...
                        </p>
                        <div className="input-group input-group-md">
                            <span className="start-page input-group-addon btn-white position-location-text">
                                <label className="start-page label-sized-text"><b>Location:</b></label>
                            </span>
                            <input type="text" value={this.state.city} onBlur={this.abortDrowdownBox} onFocus={this.handleChangeCity} onChange={this.handleChangeCity} className="start-page form-control btn-white position-textfield" placeholder="Enter city..." />
                            <span className="start-page input-group-addon btn-white">
                                <span onClick={this.searchCityName} className="start-page fa fa-plus lime-green-text position-plus-icon"></span>
                            </span>
                            {this.state.showDropdownBox && this.citySearch(this.state.city).length > 0 && <div className="start-page dropdown-search-list-design">
                                <table className="start-page cursor-pointer table table-sm table-hover table-dark">
                                    <tbody>
                                        {this.citySearch(this.state.city).map((city, index) => (
                                            <tr key={index} onMouseDown={this.dropdownSelect}>
                                                <td>{city.city}</td>
                                                <td>{city.country}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>}
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <div id="canvas-container"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.weathers.length > 0 && this.props.isLoggedIn && <div className="col-12">
                        <div className="row">
                            <div className="col col-sm-9 col-md-7 col-lg-6 col-xl-6 mx-auto">
                                <div className="row">
                                    <div className="col-12">
                                        <label className="start-page label-sized-text mb-0"><b>List name</b></label>
                                    </div>
                                    <div className="col-7">
                                        <input type="text" value={this.state.listName} onChange={this.handleChangeListName} className="form-control" placeholder="Enter list name..." />
                                    </div>
                                    <div className="col-5 pl-0">
                                        {this.props.location.state !== undefined ? <button onClick={this.addWeatherList} className="btn btn-info btn-block">Edit list</button> : <button onClick={this.addWeatherList} className="btn btn-info btn-block">Add list</button>}
                                    </div>
                                </div>
                                {this.props.location.state && <div className="col-12 text-center mt-4">
                                    <h4>{this.props.location.state.listName}</h4>
                                </div>}
                            </div>
                        </div>
                    </div>}
                    {this.state.weathers.map((weather, index) => (
                        <ListBox key={index}
                            getIndex={index}
                            location={weather.location}
                            current={weather.current}
                            condition={weather.condition}
                            RGBTemperature={this.getRGBTemperature(weather.current.temp_c)}
                            weatherIcon={this.getWeatherIcon(weather.current.is_day, weather.condition.code)}
                            deleteBox={() => this.deleteBox(index)}
                        />
                    ))}
                </div>
                <div id="popup" className="start-page hidden-popup">
                    <table className="table table-sm table-striped table-dark">
                        <thead>
                            <tr>
                                <th colSpan="2" className="pb-0"><h5>{this.state.popup.city}</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>City</td>
                                <td>{this.state.popup.city}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{this.state.popup.country}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{moment(new Date(this.state.popup.date).toISOString()).format('YYYY-MM-DD')}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{moment(new Date(this.state.popup.date).toISOString()).format('HH:mm')}</td>
                            </tr>
                            <tr>
                                <td>Weather</td>
                                <td>{this.state.popup.weather}</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>{this.state.popup.temperature}<img src={celcius_icon} alt="°C" /></td>
                            </tr>
                            <tr>
                                <td>Feels like</td>
                                <td>{this.state.popup.feelsLike}<img src={celcius_icon} alt="°C" /></td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{this.state.popup.humidity} %</td>
                            </tr>
                            <tr>
                                <td>Wind direction</td>
                                <td>{this.state.popup.windDirection}</td>
                            </tr>
                            <tr>
                                <td>Wind degree</td>
                                <td>{this.state.popup.windDegree} °</td>
                            </tr>
                            <tr>
                                <td>Wind force</td>
                                <td>{this.state.popup.windForce} kph</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* The Modal */}
                <div className="modal fade" id="popupModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <table className="table table-sm table-striped table-dark">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="pb-0"><h5>{this.state.popup.city}</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>City</td>
                                    <td>{this.state.popup.city}</td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>{this.state.popup.country}</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>{moment(new Date(this.state.popup.date).toISOString()).format('YYYY-MM-DD')}</td>
                                </tr>
                                <tr>
                                    <td>Time</td>
                                    <td>{moment(new Date(this.state.popup.date).toISOString()).format('HH:mm')}</td>
                                </tr>
                                <tr>
                                    <td>Weather</td>
                                    <td>{this.state.popup.weather}</td>
                                </tr>
                                <tr>
                                    <td>Temperature</td>
                                    <td>{this.state.popup.temperature}<img src={celcius_icon} alt="°C" /></td>
                                </tr>
                                <tr>
                                    <td>Feels like</td>
                                    <td>{this.state.popup.feelsLike}<img src={celcius_icon} alt="°C" /></td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{this.state.popup.humidity} %</td>
                                </tr>
                                <tr>
                                    <td>Wind direction</td>
                                    <td>{this.state.popup.windDirection}</td>
                                </tr>
                                <tr>
                                    <td>Wind degree</td>
                                    <td>{this.state.popup.windDegree} °</td>
                                </tr>
                                <tr>
                                    <td>Wind force</td>
                                    <td>{this.state.popup.windForce} kph</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.hr.isLoggedIn,
        citiesOnMap: store.hr.citiesOnMap,
        refreshCheck: store.hr.refreshCheck
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBackRefreshCheck: () => dispatch(setBackRefreshCheck()),
        setCitiesOnMap: (val) => dispatch(setCitiesOnMap(val))
    };
};

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(StartPage));