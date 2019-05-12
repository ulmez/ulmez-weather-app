export function setLoggedIn() {
    return { type: "SET_LOGGED_IN" };
};

export function setLoggedOut() {
    return { type: "SET_LOGGED_OUT" };
};

export function setRefreshCheck() {
    return { type: "SET_REFRESH_CHECK" };
};

export function setBackRefreshCheck() {
    return { type: "SET:BACK_REFRESH_CHECK" };
};

export function setCitiesOnMap(val) {
    return { type: "SET_CITIES_ON_MAP", cities: val };
};