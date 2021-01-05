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
                                <li className="active"><a href="index.html">Home</a></li>
                                <li className="drop-down"><a href="#">About</a>
                                    <ul>
                                    <li><a href="pages/about/about.html">Business Profile</a></li>
                                    <li><a href="pages/about/factory.html">Factory</a></li>
                                    <li><a href="pages/about/testimonials.html">Honor</a></li>
                                    <li><a href="pages/about/video.html">Videos</a></li>
                                    </ul>
                                </li>
                                <li className="drop-down"><a href="#">Services</a>
                                    <ul>
                                    <a href="#">Marketing Network</a>
                                    <a href="#">HR</a>
                                    <a href="pages/service/contact.html">Contact Us</a>
                                    <li className="drop-down"><a href="#">Social Network</a>
                                        <ul>
                                        <li><a href="http://www.sanxingelectric.com" target="_blank">Ningbo Sanxing Electric Co., Ltd</a></li>
                                        <li><a href="http://www.citracable.com" target="_blank">Citra Mahasurya</a></li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>
                                <li><a href="pages/product/product.html">Product</a></li>
                                <li><a href="pages/news/blog.html">News</a></li>
                            </ul>
                        </nav>
                        <a href="#" className="get-started-btn ml-auto">Download Brochures</a>
                    </div>
                </header>
            </>
        )
    }
}
