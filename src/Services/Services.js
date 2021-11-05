import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Services/Service/Service'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://grisly-scarecrow-94073.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // console.log(services)
    return (
        <div>
            <div className="continer-fluid services-bg-img">
                <h1 className="">Services</h1>
            </div>
            <div>
                <div className="container">
                    <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;