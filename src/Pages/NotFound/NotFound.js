import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/error-img.png'
 
const NotFound = () => {
    return (
        <div className="container">
        <div className="row my-5 d-flex justify-content-center">
            <div className="col-8">
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
        <div className="text-center mb-5">
           <Link to="/home"><button className="btn all-button">Back Home</button></Link>
        </div>
        </div>
    );
};

export default NotFound;