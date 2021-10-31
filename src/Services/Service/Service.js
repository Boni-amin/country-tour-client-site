import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, img, name ,} = service;
    const url =`/service-details/${id}`;
    return (
        <div class="col mb-5">
            <div class="card">
                 <img src={img} class="card-img-top" alt="" />
                <div class="card-body service-card">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">{description}</p> */}
                    <Link to={url}><button className="btn all-button">red more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;