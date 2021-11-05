import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [ order, setOrder] = useState();
    const [control, setControl] = useState(false);
    console.log(order)
    
    useEffect(() => {
        fetch('http://localhost:5000/manageOrder/')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrderItem/${id}`, {
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
         {/* <h1 className="text-center">My Total Orders: {order.length}  </h1> */}

  <div className="services">
    <div className="row container">
      {order?.map((pd) => (
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

export default ManageOrder;