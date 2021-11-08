import React, {Fragment} from 'react';
import {} from './footer.css';
// import CarbonIcon from '../image/carbon-icon.png';
const Footer = () => {
       return (
              <>
              <div className="footer text-secondary">
                    <div className="footer-content bg-light-gray">
                        <div className="location col-12 d-flex justify-content-start py-2 ps-4">
                            <p className="text">Nigeria</p>
                        </div>
                        <hr className="bg-secondary col-12"/>
                        <div className="container">
                            <div className="row">
                                <div className="carbon mx-auto py-2 col-12 d-flex align-items-center justify-content-center">
                                    {/* <img src={CarbonIcon}/> */}
                                    <a href="#" className=" text-center ps-3 text-secondary ">Carbon neutral since 2007</a>
                                </div>
                                <div className=" row pb-3 px-3">
                                    <div className="footer-Links col-md-12 col-lg-6 mb-1 mx-auto d-flex justify-content-around">
                                        <a href="">About</a>
                                        <a href="">Advertising</a>
                                        <a href="">Business</a>
                                        <a href="">How search works</a>
                                    </div>
                                    <div className="footer-right-links col-md-12 col-lg-6 mb-1 mx-auto d-flex justify-content-around">
                                        <a href="">Privacy</a>
                                        <a href="">Terms</a>
                                        <a href="">Settings</a>
                                    </div>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>    
              </>
       )
}

export default Footer