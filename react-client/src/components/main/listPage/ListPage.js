import React from 'react';

import './ListPage.css';

class ListPage extends React.Component {
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
                            <div className="col-4">
                                <a href="#">2019-03-18</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-19</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-20</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-21</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-22</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-23</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-24</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-25</a>
                            </div>
                            <div className="col-4">
                                <a href="#">2019-03-26</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPage;