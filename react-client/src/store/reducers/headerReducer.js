const initialState = {
    isLoggedIn: '',
    citiesOnMap: [],
    refreshCheck: true
};

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true
            };

        case 'SET_LOGGED_OUT':
            return {
                ...state,
                isLoggedIn: false
            };

        case 'SET_CITIES_ON_MAP':
            return {
                ...state,
                citiesOnMap: action.cities
            };

        case 'SET_REFRESH_CHECK':
            return {
                ...state,
                refreshCheck: false
            };

        default:
            return state;
    }
};

export default headerReducer;