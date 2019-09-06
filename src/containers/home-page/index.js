import React from "react";
import './index.scss'

// load components
import MarkerForm from '../../components/addresses/marker-form.js';
import ProductList from '../../components/addresses/list.js'
import Map from '../../components/map/index.js'

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <Map />
                </div>
                <div className="list-cnt col-sm-12 col-md-6 col-lg-6 offset-md-1 offset-lg-1">
                    <MarkerForm />

                    <h4>List</h4>
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default HomePage
