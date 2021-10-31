import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetailsData, setServiceDetailsData ] = useState();
    const [ details, setDetails ] = useState();
    console.log(details)

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setServiceDetailsData(data));
    }, []);
    useEffect(() => {
        const detailsData = serviceDetailsData?.find(description => description?.id === parseInt(serviceId));
        setDetails(detailsData);
    }, [serviceDetailsData]);

    return (
        <div className="details-service my-5 py-md-5">
            <div className="container">
                <div className="row">
                    <h1 className="text-center heading-all-h1 mt-2">Details service</h1>
                    <div className="border p-3 d-md-flex justify-content-between details-description text-center">
                    <div className="col-md-4">
                        <img src={details?.img} alt="" />
                    </div>
                    <div className="col-md-7 text-center mt-md-5 pt-md-0">
                        <h5 className="about-h5">{details?.name}</h5>
                        <p className="mt-2">{details?.description}.Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interior of the great design explorer of the truth master</p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;