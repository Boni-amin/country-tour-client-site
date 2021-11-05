import React from 'react';

const OrderItem = ({order}) => {
    const { img, name, description, price} = order;
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
                
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    );
};

export default OrderItem;