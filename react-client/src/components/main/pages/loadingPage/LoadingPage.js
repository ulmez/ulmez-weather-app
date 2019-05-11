import React from 'react';
import axios from 'axios';
// import $ from 'jquery';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCitiesOnMap, setRefreshCheck } from '../../../../store/actions/headerAction';

import { europeMapCities } from '../../../../inits/init';

class LoadingPage extends React.Component {
    componentDidMount() {
        // $("#hihi").fadeOut(2000, 1, (item) => {
        //     $(item).css({visibility: 'visible'});
        // });
        axios.post(`/apixus/apixu/cities`, {cities: europeMapCities})
        .then((cities) => {
            // this.props.setCitiesOnMap(cities.data.stats);
            console.log(cities.data.stats);
            this.props.setCitiesOnMap(cities.data.stats);
            this.props.setRefreshCheck();
            this.props.history.push("/start");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentWillReceiveProps() {
        axios.post(`/apixus/apixu/cities`, {cities: europeMapCities})
        .then((cities) => {
            // this.props.setCitiesOnMap(cities.data.stats);
            console.log(cities.data.stats);
            this.props.setCitiesOnMap(cities.data.stats);
            this.props.setRefreshCheck();
            this.props.history.push("/start");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col text-center pt-2 text-secondary"><h3>Loading...</h3></div>
                </div>
            </div>
        );
    }
}

// export default LoadingPage;

// const mapStoreToProps = (store) => {
//     return {
//         isLoggedIn: store.hr.isLoggedIn,
//         citiesOnMap: store.hr.citiesOnMap
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        // setLoggedIn: () => dispatch(setLoggedIn()),
        // setLoggedOut: () => dispatch(setLoggedOut())
        setRefreshCheck: () => dispatch(setRefreshCheck()),
        setCitiesOnMap: (val) => dispatch(setCitiesOnMap(val))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(LoadingPage));