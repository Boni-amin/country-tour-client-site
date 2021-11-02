import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { _id, img, name, description, price} = service;
    const url =`/service-details/${_id}`;
    return (
        <div class="col mb-5">
            <div class="card">
                 <div className="img-parent">
                 <img className="services-img" src={img} class="card-img-top" alt="" />
                 </div>
                <div class="card-body service-card">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                    <p>$ {price}</p>
                    {/* <p className="card-text">{description}</p> */}
                    <Link to={url}><button className="btn all-button">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;