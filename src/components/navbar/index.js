import React, { Component } from 'react';
import {Logo} from '../../assets';

export default class Headers extends Component {
    render() {
        return (
            <>
                <header id="header" className="fixed-top ">
                    <div className="container d-flex align-items-center">
                        <a href="#" className="logo">
                            <img src={Logo} alt className="img-fluid" />
                        </a>
                        <h1 className="logo">
                            <a href="index.html">Citra Sanxing Indonesia</a>
                        </h1>
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li className="active"><a href="#">Home</a></li>
                                <li className="drop-down"><a href="#">About</a>
                                    <ul>
                                    <li><a href="#">Business Profile</a></li>
                                    <li><a href="#">Factory</a></li>
                                    <li><a href="#">Honor</a></li>
                                    <li><a href="#">Videos</a></li>
                                    </ul>
                                </li>
                                <li className="drop-down"><a href="#">Services</a>
                                    <ul>
                                    <a href="#">Marketing Network</a>
                                    <a href="#">HR</a>
                                    <a href="#">Contact Us</a>
                                    <li className="drop-down"><a href="#">Social Network</a>
                                        <ul>
                                        <li><a href="http://www.sanxingelectric.com" target="_blank">Ningbo Sanxing Electric Co., Ltd</a></li>
                                        <li><a href="http://www.citracable.com" target="_blank">Citra Mahasurya</a></li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </nav>
                        <a href="#" className="get-started-btn ml-auto">Download Brochures</a>
                    </div>
                </header>
            </>
        )
    }
}
