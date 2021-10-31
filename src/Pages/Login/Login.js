import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleLogin, handlePasswordChange, handleEmailChange} = useAuth()
    return (
        <div className="login-area my-5">
            <div className="container">
                <div className="row text-center">
                    <div className="w-75 mx-auto">
                        <h1 className="heading-all-h1">Create an account</h1>
                        <form onSubmit={handleLogin}>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label float-start">Name</label>
                                <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label float-start">Email address</label>
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label float-start">Password</label>
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                <input type="checkbox" className="form-check-input me-1" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1"> Remember me</label>
                                </div>
                                <div>
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 w-50">Login</button>
                            </form>
                           <div className="mt-5 ">
                               <h5 className="all-h5-tag mb-3">or login with</h5>
                                <div className="w-50 mx-auto">
                                <div><button className="btn all-button" onClick={signInUsingGoogle}>Google</button></div>
                                <div></div>
                                </div>
                           </div>
                           <p className="mt-5">Don't have an account? <Link to="/createaccount"><span className="text-primary">Register here</span> </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;