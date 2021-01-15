import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../../assets';

export default class Headers extends Component {
    render() {
        return (
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <p className="logo">
                        <img src={Logo} alt="Logo" className="img-fluid" />
                    </p>
                    <h1 className="logo">
                        <Link to="/">Citra Sanxing Indonesia</Link>
                    </h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="drop-down">
                                <Link>About</Link>
                                <ul>
                                    <li>
                                        <Link to="/profile">Business Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/factory">Factory</Link>
                                    </li>
                                    <li>
                                        <Link to="/honor">Honor</Link>
                                    </li>
                                    <li>
                                        <Link to="/videos">Videos</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                            <li className="drop-down">
                                <Link>Services</Link>
                                <ul>
                                    <li>
                                        <Link to="#">Marketing Network</Link>
                                    </li>
                                    <li>
                                        <Link to="#">HR</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li className="drop-down">
                                        <Link to="#">Social Network</Link>
                                        <ul>
                                            <li>
                                                <a href={"http://www.sanxingelectric.com"} target={"_blank"} rel={"noopener noreferrer"}>Ningbo Sanxing Electric Co., Ltd</a>
                                            </li>
                                            <li>
                                                <a href={"http://www.citracable.com"} target={"_blank"} rel={"noopener noreferrer"}>Citra Mahasurya Industries</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/brosur" className="get-started-btn ml-auto">Download Brochures</Link>
                </div>
            </header>
        )
    }
}
