import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const MyOrder = () => {
    const { user } = useAuth()
    const email = user.email;
    console.log(email)

    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);
  
    useEffect(() => {
      fetch(`https://grisly-scarecrow-94073.herokuapp.com/myOrders/${email}`)
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [control, email]);

    const handleDelete = (id) => {
        fetch(`https://grisly-scarecrow-94073.herokuapp.com/delteOrderItem/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setControl(!control);
              alert("success")
            }
            
          });
          
        console.log(id);
      };
    
    return (
        <div className="container">
            <div>
      <h1 className="text-center">My Total Orders: {services.length}  </h1>

      <div className="services">
        <div className="row container">
          {services?.map((pd) => (
            <div className="col-md-4" key={pd._id}>
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={pd?.img} alt="" />
                </div>

                <h5 className="mt-2 text-center">{pd?.name}</h5>
                <h4>{pd?.model}</h4>
                <p>{pd?.description}</p>
                <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                <div className="text-center">
                    <h6>Name: {pd?.order}</h6>
                    <p>Email: {pd?.email}</p>
                </div>
                <div className=" mt-3 text-center">
                <button
                  onClick={() => handleDelete(pd?._id)}
                  className="btn btn-danger text-center"
                >
                  Delete
                </button>
                <button
                  className=" ms-2 btn btn-success text-center"
                >
                  Update
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyOrder;