import React from 'react';

import './ListBox.css';

class ListBox extends React.Component {
    render() {
        return (
            <div className="list-box background-outer col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="row p-2 align-self-center">
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                    <div className="d-flex align-items-center list-box background-inner box-height col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3">
                        <span className="text-center list-box icon-design fa fa-mixcloud"></span>
                    </div>
                    <div className="d-flex align-items-center list-box background-inner box-height col-7 col-sm-5 col-md-7 col-lg-6 col-xl-7">
                        <div className="row">
                        <div className="list-box celsius-design col-12 text-center">12 c</div>
                        <div className="col-12 text-center">Paris, France</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end list-box background-inner box-height col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2 p-0">
                        <span className="list-box celsius-design fa fa-times-circle mt-1 mr-2"></span>
                    </div>
                    <div className="col-sm-2 d-md-none d-lg-none d-xl-none"></div>
                </div>
            </div>
        );
    }
}

export default ListBox;