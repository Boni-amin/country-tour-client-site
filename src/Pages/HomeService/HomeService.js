import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service/Service';
import "./HomeService.css"

const HomeService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="home-service-area py-5">
            <div className="container">
                <h5 className="home-service-area-h5">What We Do</h5>
                <h1>OUR SERVICES</h1>
            </div>
            <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service = {service}
                        ></Service>)
                    }
                    </div>
                </div>
        </div>
    );
};

export default HomeService;