import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ListPage.css';

class ListPage extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            weatherLists: []
        };
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async componentDidMount() {
        this._isMounted = true;

        // Check if token are set in localStorage
        if(localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
    
            const tokenHeader = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
    
            // Authenticate if token are valid
            const userAuth = await axios.post('/users/user/auth', null, tokenHeader);
            console.log(userAuth.data.userId);

            // Get stats from specific user
            axios.post('/users/user', {id: userAuth.data.userId}, tokenHeader)
            .then((user) => {
                console.log(user.data);

                if (this._isMounted) {
                    // Set users weather lists
                    this.setState({
                        weatherLists: user.data.message[0].weatherLists
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    // Delete specific weather list from user
    async deleteList(listId) {
        // Check if token are set in localStorage
        if(localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
    
            const tokenHeader = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };

            // Authenticate if token are valid
            const userAuth = await axios.post('/users/user/auth', null, tokenHeader);
            console.log(userAuth.data.userId);

            // Delete specific weather list from user
            axios.post('/users/user/deletelist', {
                id: userAuth.data.userId,
                listId: listId
            }, tokenHeader)
            .then(async (list) => {
                console.log(list.data);

                // Get specific user again
                const user = await axios.post('/users/user', {id: userAuth.data.userId}, tokenHeader);

                console.log(user.data.message[0].weatherLists);

                if (this._isMounted) {
                    // Set users weather lists again
                    this.setState({
                        weatherLists: user.data.message[0].weatherLists
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto text-center mt-5 mb-5">
                        <h2>Weather lists</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="list-page col-sm-9 col-md-7 col-lg-6 mx-auto jumbotron jumbotron-design">
                        <div className="row">
                            <div className="col-12 text-center">
                                <label className="list-page label-sized-text"><b>Lists</b></label>
                            </div>
                            {this.state.weatherLists.map((list) => (
                                <div className="col-4" key={list.listId}>
                                    <span onClick={() => this.deleteList(list.listId)} className="text-danger fa fa-times-circle mt-1 mr-2"></span>
                                    <Link to={{pathname: '/start', state: {weathers: list.weathers, listId: list.listId, listName: list.listName}}}>{list.listName}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPage;