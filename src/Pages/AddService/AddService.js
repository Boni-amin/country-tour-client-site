import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        
        // console.log(data);
        fetch("https://grisly-scarecrow-94073.herokuapp.com/addservices", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(data => {
            if (data.name) {
                alert('Successfully added the service.');
            }
        })
        reset()
        alert('Successfully added the service.');
      };
    return (
        <div>
            <div className="container">
            <div className="text-center mt-5">
      <h1>Add Tour</h1>
      <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 m-2"
          {...register("name")}
          required
          placeholder="Title"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="p-2 m-2"
          type="text"
          {...register("description", { required: true })}
          required
          placeholder="add description"
        />
        <input
          className="p-2 m-2"
          type="text"
          {...register("price", { required: true })}
          required
          placeholder="add price"
        />
        <input
          className="p-2 m-2"
          type="text"
          {...register("img", { required: true })}
          required
          placeholder="add images link"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="py-2 px-3 mt-3 btn btn-danger my-5" type="submit" value="Add" />
      </form>
    </div>
            </div>
        </div>
    );
};

export default AddService;