import React from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCitiesOnMap, setRefreshCheck } from '../../../../store/actions/headerAction';

import { europeMapCities } from '../../../../inits/init';

class LoadingPage extends React.Component {
    _isMounted = false;

    componentWillUnmount(){
        this._isMounted = false;
      }

    componentDidMount() {
        this._isMounted = true;
        let myInterval = setInterval(() => {
            // Load all cities to user on the europe map
            axios.post(`/apixus/apixu/cities`, {cities: europeMapCities})
            .then((cities) => {
                if (this._isMounted) {
                    console.log(cities.data.stats);
                    this.props.setCitiesOnMap(cities.data.stats);
                    this.props.setRefreshCheck();
                    clearInterval(myInterval);
                    this.props.history.push("/start");
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }, 4000);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col text-center pt-2 text-secondary">
                        <h3>Loading...</h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRefreshCheck: () => dispatch(setRefreshCheck()),
        setCitiesOnMap: (val) => dispatch(setCitiesOnMap(val))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(LoadingPage));