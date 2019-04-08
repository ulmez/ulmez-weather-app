import React from 'react';

import './ListBox.css';

class ListBox extends React.Component {
    render() {
        return (
            <div className="list-box background-outer col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="row p-2">
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                    <div className="list-box background-inner box-height col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3" style={{backgroundColor: 'green'}}>
                        <label>icon</label>
                    </div>
                    <div className="list-box background-inner box-height col-7 col-sm-5 col-md-7 col-lg-6 col-xl-7" style={{backgroundColor: 'red'}}>
                        <label>12 c</label>
                    </div>
                    <div className="list-box background-inner box-height col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2" style={{backgroundColor: 'blue'}}>
                        x
                    </div>
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                </div>
            </div>
        );
    }
}

export default ListBox;