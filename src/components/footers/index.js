import React, { Component } from 'react';

export class Footers extends Component {
    render() {
        return (
            <>
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                <h3>PT Citra Sanxing Indonesia</h3>
                                <p>
                                    Kedoya Elok Plaza Blok DB No. 38 <br />
                                    Kedoya Selatan, Jakarta Barat, DKI Jakarta 11520<br /><br />
                                    <strong>Phone:</strong> (021)29402132<br />
                                    <strong>Email:</strong> sales@citrasanxing.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>About</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Business Profile</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Our Culture</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Videos</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Honor</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">History of Sanxing</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>Product</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Smart Metering</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Prepaid Meter</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Postpaid Meter</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Modem Com</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Vending System</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>Services</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Marketing Network</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Aftersales</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>HR</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Career Opportunities</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            ©  <strong><span>Citra Sanxing Indonesia</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footers;
