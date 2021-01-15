import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

export default class Videos extends Component {
    render() {
        return (
            <>
                <main id="main">

                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Videos</h2>
                                <ol>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                <li>Videos</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    <section id="team" className="team ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <h2>Citra Sanxing Indonesia</h2>
                                    </div>
                                    <div className="member d-flex">
                                        <div className="member-info">
                                            <Iframe url="https://www.youtube.com/embed/HtyPJ4Mup_g"
                                                width="500"
                                                height="400"
                                                title="Citra Sanxing Indonesia"
                                                frameBorder={0}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                display="initial"
                                                position="relative" />
                                        </div>
                                    </div>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <div className="section-title">
                                        <h2>Ningbo Sanxing Electric Co., Ltd</h2>
                                    </div>
                                    <div className="member d-flex">
                                        <div className="member-info">
                                            <Iframe url="https://www.youtube.com/embed/i0mDa_U-6I8"
                                                width="500"
                                                height="400"
                                                title="Citra Sanxing Indonesia"
                                                frameBorder={0}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                display="initial"
                                                position="relative" />
                                        </div>
                                    </div>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
