import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { user } = useAuth()
    const {serviceId} = useParams();
    const [serviceDetailsData, setServiceDetailsData ] = useState();
    const [ details, setDetails ] = useState();
    

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceDetailsData(data));
    }, []);
    useEffect(() => {
        const detailsData = serviceDetailsData?.find(description => description?._id === serviceId);
        setDetails(detailsData);
    }, [serviceDetailsData]);

    const handleAddToCart = (details) => {
        const data = details;
        console.log(details);
        data.email = user?.email;
        data.order = user?.displayName;
        fetch(`http://localhost:5000/addOrders`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.insertedId) {
              alert("Thans, Order success");
            } else {
              alert("some problem");
            }
          });
      };

    return (
        <div className="details-service my-5 py-md-5">
            <div className="container">
                <div className="row">
                    <h1 className="text-center heading-all-h1 mt-2">Please Order</h1>
                    <div className="border p-3 d-md-flex justify-content-between details-description text-center">
                    <div className="col-md-4">
                        <img className="img-fluid" src={details?.img} alt="" />
                    </div>
                    <div className="col-md-7 text-center mt-md-5 pt-md-0">
                        <h5 className="about-h5">{details?.name}</h5>
                        <p className="mt-2">{details?.description}.Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interior of the great design explorer of the truth master</p>
                        <h5 className="mt-2">Price: {details?.price}</h5>
                    </div>
                    </div>
                    <div className="text-center mt-3"> <Button  onClick={() => handleAddToCart(details)} className="btn btn-success">Order</Button> </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;