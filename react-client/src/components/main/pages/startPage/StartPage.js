import React, { Component } from 'react';

class StartPage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col text-center mt-5 mb-5">
                        <h2>UlmeZ Weather App</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center cursive-text">
                        How's the weather in...
                    </div>
                </div>
            </div>
        );
    }
}

export default StartPage;