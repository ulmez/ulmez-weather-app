import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import _ from 'lodash';
import Konva from 'konva';

import { weathers, cities } from '../../../../inits/init';

import ListBox from '../listBox/ListBox';

import './StartPage.css';

// import europeImage from './europe-2.jpg';
// import vaderImage from './vader-2.jpg';

class StartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            listName: '',
            weathers: [],
            showDropdownBox: true,
            imagePaths: ['https://i.imgur.com/qbfi1Wl.jpg', 'https://i.imgur.com/DZT5Um3.jpg']
        };

        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeListName = this.handleChangeListName.bind(this);
        this.searchCityName = this.searchCityName.bind(this);
        this.addWeatherList = this.addWeatherList.bind(this);
        this.dropdownSelect = this.dropdownSelect.bind(this);
        this.abortDrowdownBox = this.abortDrowdownBox.bind(this);
    }

    componentWillUnmount() {
        console.log('Unmount');
    }

    componentWillReceiveProps() {
        console.log('route reload');
        this.setState({
            listName: '',
            weathers: []
        });
    }

    componentDidMount() {
        this.test();

        if(this.props.location.state !== undefined) {
            console.log('********');
            console.log(this.props.location.state.listId);
            console.log(this.props.location.state.listName);
            console.log(this.props.location.state.weathers);
            console.log('********');

            this.props.location.state.weathers.map(async (city) => {
                const weather = await axios.get(`/apixus/apixu/city/${city}`);

                this.state.weathers.push({
                    location: weather.data.stats.location,
                    current: weather.data.stats.current,
                    condition: weather.data.stats.current.condition
                });

                this.setState({
                    listName: this.props.location.state.listName,
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
                weathers: this.state.weathers,
                city: ''
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleChangeCity(event) {
        this.setState({
            city: event.target.value,
            showDropdownBox: true
        });
    }

    handleChangeListName(event) {
        this.setState({
            listName: event.target.value
        });
    }

    deleteBox(index) {
        console.log(index);
        const listCard = $('#listCard' + index);

        listCard.fadeOut(500);

        setTimeout(() => {
            this.state.weathers.splice(index, 1);

            this.setState({
                weathers: this.state.weathers
            });

            listCard.fadeIn(0);
        }, 400);
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

            const nameList = [];

            this.state.weathers.forEach((weather) => {
                nameList.push(weather.location.name);
            });

            console.log('********');
            console.log(nameList);
            console.log('********');

            if(this.props.location.state !== undefined) {
                const editItem = {
                    id: userAuth.data.userId,
                    listId: this.props.location.state.listId,
                    listName: this.state.listName,
                    weathers: nameList
                };

                await axios.post('/users/user/editlist', editItem);
            } else {
                const addItem = {
                    id: userAuth.data.userId,
                    listName: this.state.listName,
                    weathers: nameList
                };

                await axios.post('/users/user/addlist', addItem);
            }

            this.props.history.push("/lists");
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
        let tempR = r1 + Math.floor(stepR * checkAllowedTemperature);
        let tempG = g1 + Math.floor(stepG * checkAllowedTemperature);
        let tempB = b1 + Math.floor(stepB * checkAllowedTemperature);
    
        return [tempR, tempG, tempB];
    }

    getRGBTemperature(temperature) {
        if (temperature >= 0) {
            return this.colorOfTemperature([0, 158, 229], [191, 64, 0], 30, temperature);
		} else {
            return this.colorOfTemperature([0, 158, 229], [40, 0, 102], 30, temperature);
		}
    }

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

    dropdownSelect(event) {
        console.log(event.target.parentNode.firstChild.textContent);
        this.setState({
            city: event.target.parentNode.firstChild.textContent,
            showDropdownBox: false
        });
    }

    abortDrowdownBox() {
        this.setState({
            showDropdownBox: false
        });
    }

    // *******************
    // Load images and run the whenLoaded callback when all have loaded;
    // The callback is passed an array of loaded Image objects.
    loadImages(paths, whenLoaded) {
        const imgs=[];
        let counter = 0;
        paths.forEach((path) => {
            const img = new Image();
            img.onload = () => {
                counter++;
                imgs[path] = img;
                if(counter===paths.length) {
                    whenLoaded(imgs);
                }
            }
            img.src = path;
        });
    }


    test() {
        // console.log(europeImage);
        // console.log(vaderImage);
        // console.log([europeImage, vaderImage]);
        this.loadImages(this.state.imagePaths, (loadedImages) => {
            console.log(loadedImages);
    
            var width = 285;
            var height = 200;
    
            function drawImage() {
              var stage = new Konva.Stage({
                container: 'canvas-container',
                width: width,
                height: height
              });
    
              // console.log(stage.getContainer().firstChild);
            //   stage.getContainer().firstChild.style.border = '1px solid black';
    
              var layer = new Konva.Layer();
    
              // Europe map
              var europeMapImage = new Konva.Image({
                image: loadedImages['https://i.imgur.com/qbfi1Wl.jpg']
              });
    
              // Vader 1
              var vaderImage = new Konva.Image({
                image: loadedImages['https://i.imgur.com/DZT5Um3.jpg'],
                x: 150,
                y: 230
              });
    
              // Vader 2
              var vaderImage2 = new Konva.Image({
                image: loadedImages['https://i.imgur.com/DZT5Um3.jpg'],
                x: 400,
                y: 430
              });
    
              // Vader 3
              var vaderImage3 = new Konva.Image({
                image: loadedImages['https://i.imgur.com/DZT5Um3.jpg'],
                x: 650,
                y: 530
              });
    
              var group = new Konva.Group({
                x: stage.width() / 2 - loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].width / 2,
                y: stage.height() / 2 - loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].height / 2,
                width: loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].width,
                height: loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].height,
                draggable: true,
                dragBoundFunc: function(pos) {
                  // console.log('x: ' + pos.x);
                  // console.log('y: ' + pos.y);
                  // console.log(imageObj.width);
                  // console.log(imageObj.height);
                  var newX, newY;
    
                  if(pos.x < 0 && pos.x > -(loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].width - width)) {
                    newX = pos.x;
                  } else {
                    if(pos.x < 0) {
                      newX = -(loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].width - width);
                    }
                    else if(pos.x > -(loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].width - width)) {
                      newX = 0;
                    }
                  }
    
                  if(pos.y < 0 && pos.y > -(loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].height - height)) {
                    newY = pos.y;
                  } else {
                    if(pos.y < 0) {
                      newY = -(loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].height - height);
                    }
                    else if(pos.y > -(loadedImages['https://i.imgur.com/qbfi1Wl.jpg'].height - height)) {
                      newY = 0;
                    }
                  }
    
                  return {
                    x: newX,
                    y: newY
                  };
                }
              });
    
              // add cursor styling
              europeMapImage.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
              });
    
              europeMapImage.on('mouseout', function() {
                document.body.style.cursor = 'default';
              });
    
              vaderImage.on('mousemove', function() {
                var popup = document.getElementById('popup');
                popup.style.top = (window.event.pageY - 5) + 'px';
                popup.style.left = (window.event.pageX + 15) + 'px';
                popup.style.display = 'block';
              });
    
              vaderImage.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
              });
    
              vaderImage.on('mouseout', function() {
                var popup = document.getElementById('popup');
                popup.style.display = 'none';
    
                document.body.style.cursor = 'default';
              });
    
              vaderImage2.on('mousemove', function() {
                var popup = document.getElementById('popup');
                popup.style.top = (window.event.pageY - 5) + 'px';
                popup.style.left = (window.event.pageX + 15) + 'px';
                popup.style.display = 'block';
              });
    
              vaderImage2.on('mouseout', function() {
                var popup = document.getElementById('popup');
                popup.style.display = 'none';
    
                document.body.style.cursor = 'default';
              });
    
              vaderImage3.on('mousemove', function() {
                var popup = document.getElementById('popup');
                popup.style.top = (window.event.pageY - 5) + 'px';
                popup.style.left = (window.event.pageX + 15) + 'px';
                popup.style.display = 'block';
              });
    
              vaderImage3.on('mouseout', function() {
                var popup = document.getElementById('popup');
                popup.style.display = 'none';
    
                document.body.style.cursor = 'default';
              });
    
              group.add(europeMapImage, vaderImage, vaderImage2, vaderImage3);
              // group.add(vaderImage);
              layer.add(group);
              stage.add(layer);
            }
            
            drawImage();
          });
    }
    // *******************

    render() {
        console.log(this.citySearch(this.state.city));
        // console.log(this.getWeatherIcon(1, 1000));
        // console.log(this.getRGBTemperature(10));
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
                        <div style={{border: '0px solid black'}}>
                            <div id="canvas-container" style={{border: '0px solid black', width: '285px', margin: '0 auto'}}></div>
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
                <div id="popup" style={{border: '1px solid white', backgroundColor: 'black', color: 'white', position: 'absolute', display: 'none'}}>Hejsan!</div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        isLoggedIn: store.hr.isLoggedIn
    };
};

export default withRouter(connect(mapStoreToProps, null)(StartPage));