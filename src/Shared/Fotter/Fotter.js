import React from 'react';
import './Fotter.css'

const Fotter = () => {
    return (
        <div className="fotter">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="fotter-p">Copyrights © 2017 All Rights Reserved, Powered by <span>Tour Country.</span></p>
                    </div>
                    <div className="col-12 col-md-6">
                        <ul>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-google"></i></li>
                            <li><i class="fab fa-youtube"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fotter;