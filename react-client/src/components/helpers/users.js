import axios from 'axios';

// Authentication is token are valid
export function authenticationCheck(thisParam) {
    if(localStorage.getItem('token')) {
        const token = localStorage.getItem('token');

        const tokenHeader = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        axios.post('/users/user/auth', null, tokenHeader)
        .then((res) => {
            console.log(res.data);
            thisParam.props.setLoggedIn();
        })
        .catch((err) => {
            console.log(err);
            thisParam.props.setLoggedOut();
        });
    }
};