import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                                    <strong>Email:</strong> support@citrasanxing.co.id<br />
                                </p>
                                <div className="social-links mt-3">
                                    <Link className="twitter"><i className="bx bxl-twitter" /> </Link>
                                    <Link className="facebook"><i className="bx bxl-facebook" /> </Link>
                                    <Link className="instagram"><i className="bx bxl-instagram" /> </Link>
                                    <Link className="google-plus"><i className="bx bxl-skype" /> </Link>
                                    <Link className="linkedin"><i className="bx bxl-linkedin" /> </Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>About</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/profile">Business Profile</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/videos">Videos</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/honor">Honor</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link>History of Sanxing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>Product</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /><Link>Smart Metering</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><Link>Prepaid Meter</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><Link>Postpaid Meter</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><Link>Modem Com</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /><Link>Vending System</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>Services</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link>Marketing Network</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link>Aftersales</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 footer-links">
                                <h4>HR</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link>Career Opportunities</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link>Our Culture</Link>
                                    </li>
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
